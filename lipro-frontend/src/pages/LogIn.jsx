/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Logo from "../assets/logo-lipro.png";
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'   

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'animate__animated animate__bounceIn',
                    },
                });
    
                // Setelah SweetAlert ditutup, arahkan ke halaman Dashboard
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                // Menampilkan SweetAlert 2 untuk login gagal
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect Email or Password!',
                    text: 'Try Again!',
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };    

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-5 flex flex-col items-center">
                        <h1 className="text-2xl font-frank text-soft-blue xl:text-5xl font-bold mt-28">
                            Sign In
                        </h1>
                        <div className="w-full flex-1 mt-3">
                            <div className="my-12 text-center">
                                <form onSubmit={handleLogin} className="mx-auto max-w-xs">
                                    <input
                                        className="px-8 py-4 w-full rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        className="w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="mt-5 tracking-wide font-semibold bg-bright-blue text-gray-100 w-full py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Log In
                                        </span>
                                    </button>
                                </form>
                                <div className="inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Don’t have an account?
                                    <Link to="/register" className="px-2 text-blue-600">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-gradient-to-b from-bright-blue to-pale-blue text-center hidden lg:flex">
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

export default Login;
