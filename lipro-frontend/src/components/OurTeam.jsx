/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const TeamMember = ({ name, role, image }) => {
    return (
        <div className="flex flex-col items-center mx-12">
            <div className="relative mb-6">
                <img
                    src={image}
                    alt={`${name} image`}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">{name}</h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">{role}</span>
        </div>
    );
};

const OurTeam = () => {
    const teamMembers = [
        { name: 'Ahmad Badar', role: 'Front-End', image: 'https://pagedone.io/asset/uploads/1696238374.png' },
        { name: 'Merliana Tri Susilowati', role: 'Front-End', image: 'https://pagedone.io/asset/uploads/1696238396.png' },
        { name: 'Muhammad Amar Dafi', role: 'Back-End', image: 'https://pagedone.io/asset/uploads/1696238374.png' }
    ];

    return (
        <div id="our-team" className="flex flex-col items-center justify-center bg-gradient-to-b from-soft-blue3 to-pale-blue min-h-screen py-12">
            <h1 className="text-4xl text-white drop-shadow-md font-frank font-bold">Our Team</h1>
            <section className="py-24">
                <div className="flex flex-wrap justify-center">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurTeam;
