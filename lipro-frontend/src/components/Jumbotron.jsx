/* eslint-disable no-unused-vars */
import React from 'react';

const Jumbotron = () => {
    return (
        <div>
            <section className="bg-center bg-gradient-to-b from-bright-blue to-pale-blue">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-frank font-extrabold drop-shadow-lg tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Life Productively</h1>
                    <p className="mb-8 text-lg font-inter font-normal text-white lg:text-xl sm:px-16 lg:px-48">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint alias. Ratione libero vero, saepe a temporibus voluptate sequi dolores.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-inter font-medium text-center text-white rounded-lg bg-moderate-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Jumbotron;