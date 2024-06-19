/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo-lipro.png";
import ApexCharts from "apexcharts";

const options = {
  colors: ["#FFD700", "#FF0000"],
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
      fontSize: "12px",
      colors: ["#fff"],
    },
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    categories: ["Tasks"],
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  resetSeries: null,
};

const Statistic = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [chart, setChart] = useState(null);
  const [series, setSeries] = useState([]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchStatistic = async () => {
    const URL = "https://api.lipro.my.id/v1/protected/statistics";
    const token = localStorage.getItem("token");
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const result = await response.json();
    if (result.status == "success") {
      setSeries([
        {
          name: "Completed Task",
          data: [result.data.completed],
        },
        {
          name: "Task Is Not Completed",
          data: [result.data.uncompleted],
        },
      ]);
    }
  };
  useEffect(() => {
    fetchStatistic();
  }, []);
  useEffect(() => {
    if (
      document.getElementById("bar-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      if (!chart) {
        options.series = series;
        const newChart = new ApexCharts(
          document.getElementById("bar-chart"),
          options
        );
        setChart(newChart);
        newChart.render();
      } else {
        chart.updateOptions({ series: series });
      }
    }
    // Membersihkan chart saat komponen di-unmount
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chart]);

  useEffect(() => {
    if (chart) {
      chart.updateOptions({ series: series });
    }
  }, [series]);

  return (
    <div>
      <nav className="bg-bright-blue p-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-16" alt="Lipro" />
            <span className="self-center text-white text-3xl tracking-tighter font-semibold font-frank whitespace-nowrap dark:text-white">
              LiPro
            </span>
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4v-1z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:w-auto md:flex ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="/dashboard"
                  className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/statistic"
                  className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Statistic
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 font-inter text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-auto px-6 py-8 bg-gradient-to-b from-bright-blue to-soft-blue2">
        <div className="max-w-lg mx-auto">
          <div id="bar-chart"></div>
        </div>
        <div className="mt-10">
          <p className="text-center text-xl font-semibold text-white">
            Every small step is a significant accomplishment. Appreciate every
            effort you make, stay positive, and convince yourself that with good
            and consistent planning, you can complete all tasks on time.
          </p>
        </div>
      </div>
      <footer className="bg-gradient-to-b from-soft-blue2 to-soft-blue3 pt-7 pb-10 md:p-28 xl:p-10">
        <p className="text-center text-xl text-moderate-blue font-frank font-semibold opacity-90">
          Life Productively © 2024
        </p>
      </footer>
    </div>
  );
};

export default Statistic;
