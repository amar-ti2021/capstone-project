/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo-lipro.png";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddTask = () => {
        console.log("Task Name:", taskName);
        console.log("Start Time:", startTime);
        console.log("End Time:", endTime);

        setTaskName('');
        setStartTime('');
        setEndTime('');
        closeModal();
    };

    // time
    const cTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(cTime);

    const updateTime = () => {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    useEffect(() => {
        const timeInterval = setInterval(updateTime, 1000);
        return () => {
            clearInterval(timeInterval);
        }
    }, [time]);
    
    // date
    const cDate = new Date().toLocaleDateString()
    const [date, setDate] = useState(cDate)
    
    const updateDate = () =>{
        const newDate = new Date().toLocaleDateString()
        setDate(newDate)
    }
    
    useEffect(() =>{
        const dateInterval = setInterval(updateDate, 1000)
        return () =>{
            clearInterval(dateInterval)
        }
    
    }, [date])
    
    // day
    const cDay = new Date().getDay()
    const [day, setDay] = useState(cDay)
    const weekDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    
    const updateDay = () =>{
        const newDay = new Date().getDay()
        setDay(newDay)
    }
    
    useEffect(() =>{
        const dayInterval = setInterval(updateTime, 1000)
        return () =>{
            clearInterval(dayInterval)
        }
    
    }, [day])

    return (
        <div>
            <nav className="bg-bright-blue p-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-16" alt="Lipro" />
                        <span className="self-center text-white text-3xl tracking-tighter font-semibold font-frank whitespace-nowrap dark:text-white">LiPro</span>
                    </a>
                    <div className="hidden w-full absolute left-52 md:block md:w-auto">
                        <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="/dashboard" className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Dashboard</a>
                            </li>
                            <li>
                                <a href="/statistic" className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Statistic</a>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <button 
                            id="dropdownDividerButton" 
                            className="text-white text-lg font-inter focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                            type="button"
                            onClick={toggleDropdown}
                        >
                            Hello, Badar 
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <div 
                            id="dropdownDivider" 
                            className={`absolute right-0 z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mx-auto px-6 py-8 bg-gradient-to-b from-bright-blue to-soft-blue2">
                <div className='bg-white rounded-lg'>
                    <div className='flex flex-wrap items-center justify-between mx-auto'>
                        <h3 className='text-lg font-inter font-semibold px-8 pt-4 md:px-8 md:py-4 md:text-xl'>{weekDays[day]}, {date}</h3>
                        <h3 className='text-lg font-inter font-semibold px-8 py-2 md:px-8 md:py-4 md:text-xl'>{time}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-4 px-7 pb-5">
                        <div className="bg-pure-blue p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold font-inter text-white">In Progress</h2>
                            <p className="font-inter text-white">Task 1</p>
                        </div>
                        <div className="bg-pure-blue p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold font-inter text-white">Next Task</h2>
                            <p className="font-inter text-white">Not Yet</p>
                        </div>
                        <div className="bg-pure-blue p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold font-inter text-white">Done</h2>
                            <p className="font-inter text-white">Not Yet</p>
                        </div>
                        <div className="bg-pure-blue p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold font-inter text-white underline">Total Working Hour</h2>
                            <p className="font-inter text-white">01 Jam 3 Menit</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-inter font-semibold text-gray-700 mb-4">Task Lists</h3>
                        <ul>
                            <li className="bg-pure-blue p-2 rounded mb-2">
                                <p className="font-medium font-inter text-white">Task 1</p>
                                <p className="text-white font-inter">08:00 - 10:00</p>
                            </li>
                            <li className="bg-pure-blue p-2 rounded mb-2">
                                <p className="font-medium font-inter text-white">Task 2</p>
                                <p className="text-white font-inter">Not Allocated</p>
                            </li>
                            <li className="bg-pure-blue p-2 rounded mb-2">
                                <p className="font-medium font-inter text-white">Task 3</p>
                                <p className="text-white font-inter">Not Allocated</p>
                            </li>
                            <li className="bg-pure-blue p-2 rounded mb-2">
                                <p className="font-medium font-inter text-white">Task 4</p>
                                <p className="text-white font-inter">Not Allocated</p>
                            </li>
                            <li className="bg-pure-blue p-2 rounded mb-2">
                                <p className="font-medium font-inter text-white">Task 5</p>
                                <p className="text-white font-inter">Not Allocated</p>
                            </li>
                        </ul>
                        <button 
                            className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold font-inter rounded-lg opacity-90 hover:opacity-80"
                            onClick={openModal}
                        >
                            Add New Task
                        </button>
                    </div>
                    <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md md:ml-4 mt-4 md:mt-0">
                        <h3 className="text-xl font-semibold font-inter text-gray-700 mb-4">Time Sheet</h3>
                        <div className="h-96 overflow-y-auto">
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 1</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 2</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 3</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 4</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 5</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 6</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 7</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 8</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 9</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-4">
                                <p className="font-medium font-inter">Task 10</p>
                                <p className='font-inter'>08:00 - 10:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gradient-to-b from-soft-blue2 to-soft-blue3 pt-7 pb-10 md:p-28 xl:p-10">
                <p className="text-center text-xl text-moderate-blue font-frank font-semibold opacity-90">Life Productively © 2024</p>
            </footer>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 mx-4 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Add Task</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
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