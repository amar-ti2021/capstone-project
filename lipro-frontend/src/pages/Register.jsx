import React, { useState } from "react";
import Logo from "../assets/logo-lipro.png";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://api.lipro.my.id/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, re_password: rePassword }),
      });
      const data = await response.json();
      if (response.ok) {
        // Registrasi berhasil, arahkan ke halaman Login
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up Successful",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "animate__animated animate__bounceIn",
          },
        });
        console.log("Registrasi berhasil:", data);
        navigate("/login");
      } else {
        // Registrasi gagal, menampilkan pesan error
        Swal.fire({
          icon: "error",
          title: "Email or Password Does Not Match!",
          text: "Try Again!",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-5 flex flex-col items-center">
            <h1 className="text-2xl font-frank text-soft-blue xl:text-5xl font-bold mt-28">
              Sign Up
            </h1>
            <div className="w-full flex-1 mt-3">
              <div className="my-12 text-center">
                <form onSubmit={handleRegister} className="mx-auto max-w-xs">
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
                  <input
                    className="w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Confirm Password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-bright-blue text-gray-100 w-full py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                </form>
                <div className="inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Have an account?
                  <Link to="/login" className="px-2 text-blue-600">
                    Sign In
                  </Link>
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
};

export default Register;
