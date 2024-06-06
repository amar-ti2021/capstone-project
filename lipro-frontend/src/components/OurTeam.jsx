/* eslint-disable no-unused-vars */
import React from 'react';

const OurTeam = () => {
    return (
        <div className="flex flex-col items-center bg-blue-200 min-h-screen py-12">
            <h1 className="text-4xl font-bold mb-12">Our Team</h1>
            <div className="flex justify-around w-full max-w-6xl">
                <div className="flex flex-col items-center w-1/3 px-4">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-black rounded-full"></div>
                    </div>
                    <p className="text-center">Nama<br />Front-End</p>
                </div>
                <div className="flex flex-col items-center w-1/3 px-4">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-black rounded-full"></div>
                    </div>
                    <p className="text-center">Nama<br />Back-End</p>
                </div>
                <div className="flex flex-col items-center w-1/3 px-4">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-black rounded-full"></div>
                    </div>
                    <p className="text-center">Nama<br />Front-End</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
