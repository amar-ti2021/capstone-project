import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-lipro.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [tasks, setTasks] = useState([]);
  const [totalWorkingHours, setTotalWorkingHours] = useState({
    hours: 0,
    minutes: 0,
  });
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: true, hourCycle: "h12" })
  );
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [day, setDay] = useState(new Date().getDay());
  const navigate = useNavigate();

  const [inProgressTasksCount, setInProgressTasksCount] = useState(0);
  const [nextTaskCount, setNextTaskCount] = useState(0);
  const [doneTasksCount, setDoneTasksCount] = useState(0);

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const timeInterval = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString("en-US", {
            hour12: true,
            hourCycle: "h12",
          })
        ),
      1000
    );
    const dateInterval = setInterval(
      () => setDate(new Date().toLocaleDateString()),
      1000
    );
    const dayInterval = setInterval(() => setDay(new Date().getDay()), 1000);
    fetchTasks();
    return () => {
      clearInterval(timeInterval);
      clearInterval(dateInterval);
      clearInterval(dayInterval);
    };
  }, []);

  useEffect(() => {
    calculateTotalWorkingHours(tasks);
    getCurrentTaskStatus();
  }, [tasks]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTask = async () => {
    const today = new Date().toDateString();

    const task = {
      task: taskName,
      start_time: `${today} ${startTime}`,
      end_time: `${today} ${endTime}`,
      status: "in_progress",
    };
    const newTasks = [...tasks, task];
    const URL = "http://localhost:3000/api/v1/protected/tasks";
    const token = localStorage.getItem("token");
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(task),
    });
    const result = await response.json();

    console.log(result);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskName("");
    setStartTime("");
    setEndTime("");
    closeModal();
    calculateTotalWorkingHours(newTasks);
  };

  const fetchTasks = async () => {
    const URL = "http://127.0.0.1:3000/api/v1/protected/tasks/today";
    const token = localStorage.getItem("token");
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const result = await response.json();
    if (result.status == "success") {
      setTasks(result.data);
    }
  };

  const calculateTotalWorkingHours = (tasks) => {
    let totalMinutes = 0;
    tasks.forEach((task) => {
      const start = new Date(`${task.start_time}`);
      const end = new Date(`${task.end_time}`);
      const diff = (end - start) / (1000 * 60); // Selisih dalam menit
      totalMinutes += diff;
    });

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    setTotalWorkingHours({ hours, minutes });
  };

  const handleLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    });

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: 'Logged Out!',
                text: 'You have been logged out.',
                icon: 'success'
            }).then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('tasks');
                navigate('/');
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: 'Cancelled',
                text: 'Your session is safe :)',
                icon: 'error'
            });
        }
    });
  };

  const formatTime = (hours, minutes) => {
    return `${hours} Hours ${minutes} Minutes`;
  };

  const getCurrentTaskStatus = () => {
    const currentTime = new Date();
    setInProgressTasksCount(
      tasks.filter((task) => {
        return task.status === "in_progress";
      }).length
    );
    setNextTaskCount(
      tasks.filter((task) => {
        const start = new Date(`${task.start_time}`);
        return currentTime < start;
      }).length
    );
    setDoneTasksCount(
      tasks.filter((task) => {
        return task.status === "completed";
      }).length
    );
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    const aStart = new Date(`${a.start_time}`);
    const bStart = new Date(`${b.end_time}`);
    return aStart - bStart;
  });
  const setDoneTask = async (task) => {
    task.status = "completed";
    const newTasks = [...tasks, task];
    const URL = `http://localhost:3000/api/v1/protected/tasks/${task.id}`;
    const token = localStorage.getItem("token");
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(task),
    });
    const result = await response.json();
  };

  return (
    <div>
      <nav className="bg-bright-blue p-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-16" alt="Lipro" />
            <span className="self-center text-white text-3xl tracking-tighter font-semibold font-frank whitespace-nowrap">
              LiPro
            </span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4v-1z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:w-auto md:flex ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/statistic"
                  className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Statistic
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-auto px-6 py-8 bg-gradient-to-b from-bright-blue to-soft-blue2">
        <div className="bg-white rounded-lg">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <h3 className="text-lg font-inter font-semibold px-8 pt-4 md:px-8 md:py-4 md:text-xl">
              {weekDays[day]}, {date}
            </h3>
            <h3 className="text-lg font-inter font-semibold px-8 py-2 md:px-8 md:py-4 md:text-xl">
              {time}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-4 px-7 pb-5">
            <div className="bg-pure-blue p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold font-inter text-white">
                In Progress
              </h2>
              <p className="font-inter text-white">
                {inProgressTasksCount} tasks
              </p>
            </div>
            <div className="bg-pure-blue p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold font-inter text-white">
                Next Task
              </h2>
              <p className="font-inter text-white">{nextTaskCount} tasks</p>
            </div>
            <div className="bg-pure-blue p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold font-inter text-white">
                Done
              </h2>
              <p className="font-inter text-white">{doneTasksCount} tasks</p>
            </div>
            <div className="bg-pure-blue p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold font-inter text-white underline">
                Total Working Hour
              </h2>
              <p className="font-inter text-white">
                {formatTime(totalWorkingHours.hours, totalWorkingHours.minutes)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-inter font-semibold text-gray-700 mb-4">
              Task Lists
            </h3>
            <ul>
              {sortedTasks.map((task, index) => {
                return task.status == "in_progress" ? (
                  <li
                    key={index}
                    className="bg-pure-blue p-2 rounded mb-2 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium font-inter text-white">
                        {task.task}
                      </p>
                      <p className="text-white font-inter">
                        {new Date(task.start_time).toLocaleTimeString("en-US", {
                          hour12: true,
                          hourCycle: "h12",
                        })}{" "}
                        -{" "}
                        {new Date(task.end_time).toLocaleTimeString("en-US", {
                          hour12: true,
                          hourCycle: "h12",
                        })}
                      </p>
                    </div>
                    <button
                      className="ml-4 bg-white text-pure-blue p-2 rounded"
                      onClick={() => setDoneTask(task)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>
            <button
              className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold font-inter rounded-lg opacity-90 hover:opacity-80"
              onClick={openModal}
            >
              Add New Task
            </button>
          </div>
          <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md md:ml-4 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold font-inter text-gray-700 mb-4">
              Time Sheet
            </h3>
            <div className="h-96 overflow-y-auto">
              {sortedTasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-blue-500 text-white p-2 rounded mb-4"
                >
                  <p className="font-medium font-inter">{task.task}</p>
                  <p className="font-inter">
                    {new Date(task.start_time).toLocaleTimeString()} -{" "}
                    {new Date(task.end_time).toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-b from-soft-blue2 to-soft-blue3 pt-7 pb-10 md:p-28 xl:p-10">
        <p className="text-center text-xl text-moderate-blue font-frank font-semibold opacity-90">
          Life Productively © 2024
        </p>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 mx-4 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Task</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTask();
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Enter The Task</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Set A Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:opacity-85"
              >
                Add
              </button>
              <button
                type="button"
                className="w-full py-2 mt-2 bg-gray-500 text-white font-semibold rounded-lg hover:opacity-85"
                onClick={closeModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
