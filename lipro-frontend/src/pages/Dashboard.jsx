/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from "../assets/logo-lipro.png";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav className="bg-bright-blue">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-16" alt="Lipro" />
                        <span className="self-center text-white text-3xl tracking-tighter font-semibold font-frank whitespace-nowrap dark:text-white">LiPro</span>
                    </a>
                    <div className="hidden w-full absolute left-52 md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#getStarted" className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Dashboard</a>
                            </li>
                            <li>
                                <a href="#product" className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Statistic</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

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
            <ul className="max-w-screen-xl flex flex-wrap bg-white shadow overflow-hidden sm:rounded-md mx-20 mt-16">
                <li>
                    <div className="px-4 py-5 sm:px-10">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Item 1</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Description for Item 1</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500">Status: <span className="text-green-600">Active</span></p>
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Edit</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Item 2</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Description for Item 2</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500">Status: <span className="text-red-600">Inactive</span></p>
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Edit</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Item 3</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Description for Item 3</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-500">Status: <span className="text-yellow-600">Pending</span></p>
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Edit</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;