/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from "../assets/logo-lipro.png";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-5 flex flex-col items-center">
                        <h1 className="text-2xl font-frank text-soft-blue xl:text-5xl font-bold mt-28">
                            Reset Password
                        </h1>
                        <div className="w-full flex-1 mt-3">
                            <div className="my-12 text-center">
                            <div className="mx-auto max-w-xs">
                                <input
                                    className="px-8 py-4 w-full rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" />
                                <input
                                    className="w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="New Password" />
                                <input
                                    className="w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Confirm Password" />
                                <button
                                    className="mt-5 tracking-wide font-semibold bg-bright-blue text-gray-100 w-full py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <span className="ml-3">
                                        Submit
                                    </span>
                                </button>
                            </div>
                            <div className="inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Have an account?
                                <Link to="/login" className="px-2 text-blue-600">Sign In</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-gradient-to-b from-bright-blue to-pale-blue text-center hidden sm:rounded-lg lg:flex">
                    <div className="m-12 xl:m-16 w-full">
                        <center>
                            <img src={Logo} className="mt-36 h-64" alt="Lipro" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;