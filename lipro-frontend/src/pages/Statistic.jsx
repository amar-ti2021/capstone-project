/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Logo from "../assets/logo-lipro.png";
import ApexCharts from 'apexcharts';

const options = {
  colors: ["#FFD700", "#FF0000"],
  series: [
    {
      name: "Completed Task",
      data: [70],
    },
    {
      name: "Task Is Not Completed",
      data: [30],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "50%",
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff']
  },
  tooltip: {
    shared: true,
    intersect: false
  },
  xaxis: {
    categories: ["Tasks"],
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  resetSeries: null,
}

const Statistic = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [chart, setChart] = useState(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
            if (!chart) {
                const newChart = new ApexCharts(document.getElementById("bar-chart"), options);
                setChart(newChart);
                newChart.render();
            } else {
                chart.updateOptions(options);
            }
        }
        // Membersihkan chart saat komponen di-unmount
        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, [chart]);

    return (
        <div>
            <nav className="bg-bright-blue p-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-16" alt="Lipro" />
                        <span className="self-center text-white text-3xl tracking-tighter font-semibold font-frank whitespace-nowrap dark:text-white">LiPro</span>
                    </a>
                    <div className="hidden w-full absolute left-52 md:block md:w-auto">
                        <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="/dashboard" className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Dashboard</a>
                            </li>
                            <li>
                                <a href="/statistic" className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Statistic</a>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <button 
                            id="dropdownDividerButton" 
                            className="text-white text-lg font-inter focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                            type="button"
                            onClick={toggleDropdown}
                        >
                            Hello, Badar 
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <div 
                            id="dropdownDivider" 
                            className={`absolute right-0 z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mx-auto px-6 py-8 bg-gradient-to-b from-bright-blue to-soft-blue2">
                <div className="max-w-lg mx-auto">
                    <div id="bar-chart"></div>
                </div>
                <div className="mt-10">
                    <p className="text-center text-xl font-semibold text-white">
                        Every small step is a significant accomplishment. Appreciate every effort you make, stay positive, and convince yourself that with good and consistent planning, you can complete all tasks on time.
                    </p>
                </div>
            </div>
            <footer className="bg-gradient-to-b from-soft-blue2 to-soft-blue3 pt-7 pb-10 md:p-28 xl:p-10">
                <p className="text-center text-xl text-moderate-blue font-frank font-semibold opacity-90">Life Productively © 2024</p>
            </footer>
        </div>  
    );
};

export default Statistic;
