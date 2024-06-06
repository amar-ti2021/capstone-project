/* eslint-disable no-unused-vars */
import React from 'react';

const Product = () => {
    return (
        <div className="flex flex-col items-center bg-blue-200 min-h-screen py-12">
            <h1 className="text-4xl font-frank font-bold mb-12">Product</h1>
            <div className="flex justify-around w-full max-w-6xl">
                <div className="flex flex-col items-center w-1/3 px-4">
                    <div className="w-full h-32 bg-gray-300 mb-4 font-inter"></div>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente delectus corrupti deserunt velit laboriosam reprehenderit tempore.</p>
                </div>
                <div className="flex flex-col items-center w-1/3 px-4">
                    <div className="w-full h-32 bg-gray-300 mb-4 font-inter"></div>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente delectus corrupti deserunt velit laboriosam reprehenderit tempore.</p>
                </div>
                <div className="flex flex-col items-center w-1/3 px-4">
                    <div className="w-full h-32 bg-gray-300 mb-4 font-inter"></div>
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente delectus corrupti deserunt velit laboriosam reprehenderit tempore.</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
