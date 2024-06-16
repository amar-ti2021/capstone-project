/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Logo from "../assets/logo-lipro.png";
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
                    <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white font-inter focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Halo, Badar <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>

                    <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        </ul>
                        <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-screen-xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700">In Progress</h2>
                        <p className="text-gray-500">Tugas 1</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700">Next Task</h2>
                        <p className="text-gray-500">Belum Ada</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-700">Done</h2>
                        <p className="text-gray-500">Belum Ada</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
                        <h2 className="text-lg font-semibold text-gray-700">Total Working Hour</h2>
                        <p className="text-gray-500">01 Jam 3 Menit</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Task Lists</h3>
                        <ul>
                            <li className="bg-gray-100 p-2 rounded mb-2">
                                <p className="font-medium text-gray-700">Tugas 1</p>
                                <p className="text-gray-500">08:00 - 10:00</p>
                            </li>
                            <li className="bg-gray-100 p-2 rounded mb-2">
                                <p className="font-medium text-gray-700">Tugas 2</p>
                                <p className="text-gray-500">Belum Dialokasikan</p>
                            </li>
                            <li className="bg-gray-100 p-2 rounded mb-2">
                                <p className="font-medium text-gray-700">Tugas 3</p>
                                <p className="text-gray-500">Belum Dialokasikan</p>
                            </li>
                            <li className="bg-gray-100 p-2 rounded mb-2">
                                <p className="font-medium text-gray-700">Tugas 4</p>
                                <p className="text-gray-500">Belum Dialokasikan</p>
                            </li>
                            <li className="bg-gray-100 p-2 rounded mb-2">
                                <p className="font-medium text-gray-700">Tugas 5</p>
                                <p className="text-gray-500">Belum Dialokasikan</p>
                            </li>
                        </ul>
                        <button 
                            className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
                            onClick={openModal}
                        >
                            Tambah
                        </button>
                    </div>
                    <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md md:ml-4 mt-4 md:mt-0">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Time Sheet</h3>
                        <div className="h-80 overflow-y-auto">
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded mb-2">
                                <p className="font-medium">Tugas 1</p>
                                <p>08:00 - 10:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white py-4 mt-16">
                <p className="text-center text-gray-500">Life Productively © 2024</p>
            </footer>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Tambah Tugas</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Masukan Tugas</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Atur Waktu</label>
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
                                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg"
                            >
                                Tambah
                            </button>
                            <button 
                                type="button"
                                className="w-full py-2 mt-2 bg-gray-500 text-white font-semibold rounded-lg"
                                onClick={closeModal}
                            >
                                Batal
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
