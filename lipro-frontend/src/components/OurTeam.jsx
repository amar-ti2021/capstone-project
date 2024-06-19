/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Badar from "../assets/badar.jpg";
import Merliana from "../assets/merliana.jpg";
import Amar from "../assets/amar.jpg";

const TeamMember = ({ name, role, image, linkedin, instagram, github }) => {
    return (
        <div className="grid grid-cols-2 items-center ml-10 xl:ml-16">
            <div className="relative mb-6 pt-4 md:pt-12">
                <img
                    src={image}
                    alt={`${name} image`}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
            </div>
            <div className='pt-5'>
                <h4 className="text-lg font-inter font-semibold text-gray-900 ml-5 capitalize transition-all duration-500 group-hover:text-indigo-600 md:ml-4 md:text-xl xl:ml-0">{name}</h4>
                <span className="text-md text-gray-500 font-inter ml-5 block transition-all duration-500 group-hover:text-gray-900 md:ml-4 md:text-xl xl:ml-0">{role}</span>
                <div className='flex ml-5 pt-10 md:ml-4 xl:ml-0'>
                    {linkedin && (
                        <a href={linkedin} className="text-gray-500 hover:text-blue-500 dark:hover:text-white" target="_blank">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zm-6.43 20.48h-3.64v-5.91c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.53-2.27 3.11v6.02H6.28V8.98h3.5v1.57h.05c.49-.92 1.68-1.89 3.45-1.89 3.69 0 4.37 2.43 4.37 5.6v6.22h-.01zM5.34 7.46c-1.17 0-2.12-.96-2.12-2.14 0-1.17.95-2.14 2.12-2.14 1.18 0 2.13.96 2.13 2.14 0 1.18-.96 2.14-2.13 2.14zM4.11 8.98h2.46v11.5H4.11V8.98z"/>
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                    )}
                    {instagram && (
                        <a href={instagram} className="text-gray-500 hover:text-blue-500 dark:hover:text-white ms-5" target="_blank">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.964.247 2.423.415.578.203.99.447 1.42.874.427.428.67.841.874 1.42.168.459.36 1.253.415 2.423.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.247 1.964-.415 2.423a3.494 3.494 0 0 1-.874 1.42c-.428.427-.841.67-1.42.874-.459.168-1.253.36-2.423.415-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.964-.247-2.423-.415a3.494 3.494 0 0 1-1.42-.874c-.427-.428-.67-.841-.874-1.42-.168-.459-.36-1.253-.415-2.423-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.247-1.964.415-2.423a3.494 3.494 0 0 1 .874-1.42c.428-.427.841-.67 1.42-.874.459-.168 1.253-.36 2.423-.415C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.734 0 8.332.014 7.052.072c-1.312.06-2.223.26-3.007.552a5.608 5.608 0 0 0-2.013 1.32A5.608 5.608 0 0 0 .712 3.957c-.292.784-.492 1.695-.552 3.007C.014 8.332 0 8.734 0 12c0 3.266.014 3.668.072 4.948.06 1.312.26 2.223.552 3.007a5.608 5.608 0 0 0 1.32 2.013 5.608 5.608 0 0 0 2.013 1.32c.784.292 1.695.492 3.007.552 1.28.058 1.682.072 4.948.072s3.668-.014 4.948-.072c1.312-.06 2.223-.26 3.007-.552a5.608 5.608 0 0 0 2.013-1.32 5.608 5.608 0 0 0 1.32-2.013c.292-.784.492-1.695.552-3.007.058-1.28.072-1.682.072-4.948s-.014-3.668-.072-4.948c-.06-1.312-.26-2.223-.552-3.007a5.608 5.608 0 0 0-1.32-2.013 5.608 5.608 0 0 0-2.013-1.32c-.784-.292-1.695-.492-3.007-.552C15.668.014 15.266 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                    )}
                    {github && (
                        <a href={github} className="text-gray-500 hover:text-blue-500 dark:hover:text-white ms-5" target="_blank">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const OurTeam = () => {
    const teamMembers = [
        {
            name: 'Ahmad Badar',
            role: 'Front-End',
            image: Badar,
            linkedin: 'https://www.linkedin.com/in/ahmad-badar-167aa7220',
            instagram: 'https://www.instagram.com/ahmadbadarr',
            github: 'https://github.com/ahmadbadar13'
        },
        {
            name: 'Merliana Tri Susilowati',
            role: 'Front-End',
            image: Merliana,
            linkedin: 'https://www.linkedin.com/in/merlianatris',
            instagram: 'https://www.instagram.com/merlianats',
            github: 'https://github.com/merlianats'
        },
        {
            name: 'Muhammad Amar Dafi',
            role: 'Back-End',
            image: Amar,
            linkedin: 'https://www.linkedin.com/in/muhammad-amar-dafi',
            instagram: 'https://www.instagram.com/muhammad.amar.dafi',
            github: 'https://github.com/amar-ti2021'
        }
    ];

    return (
        <sec id="our-team" className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-soft-blue3 to-pale-blue pb-20 xl:pt-4">
            <div className='p-10 md:pl-24 md:top-10'>
                <h1 className="text-4xl text-white drop-shadow-md font-frank font-bold md:text-5xl lg:text-6xl">Our Team</h1>
                <p className='text-white text-justify pt-3 md:font-inter md:font-base md:text-xl'>
                    Working here means you’ll interact with talented professionals, will be challenged to solve difficult problems and think in new and creative ways. 
                    Along the way, you may also make some new friends, have a lot of fun and enjoy opportunities.
                </p>
            </div>
            <section className='pr-12 md:pr-20 xl:pr-24'>
                <div className="grid grid-cols-1">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </section>
        </sec>
    );
};

export default OurTeam;
