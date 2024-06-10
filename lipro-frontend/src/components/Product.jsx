/* eslint-disable no-unused-vars */
import React from 'react';
import scheduling from '../assets/scheduling.jpg';
import toDoList from '../assets/to-do-list.jpg';
import analysis from '../assets/analisis-dan-laporan.png';

const Product = () => {
    const products = [
        {
            imgSrc: scheduling,
            title: "Scheduling",
            description: "This feature allows users to create a schedule of activities or tasks, with the option to set a start time, end time, and provide reminders.",
        },
        {
            imgSrc: toDoList,
            title: "To-Do List",
            description: "This feature allows users to create to-do lists with the ability to add priorities, deadlines, and mark tasks as completed.",
        },
        {
            imgSrc: analysis,
            title: "Analysis and Reporting",
            description: "This feature provides use to analyze time patterns and productivity. This can include graphs, statistics, or reports that help users understand how their time is used and make necessary changes.",
        },
    ];

    return (
        <div id="product" className="flex flex-col items-center bg-gradient-to-b from-soft-blue2 to-soft-blue3 min-h-screen py-12">
            <h1 className="text-4xl text-white drop-shadow-lg font-frank font-extrabold mb-20">Product</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full h-48 object-cover" src={product.imgSrc} alt={product.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">{product.title}</div>
                            <p className="text-gray-700 text-base">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
