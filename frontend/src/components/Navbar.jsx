import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const menuItems = [
    { path: "/home", label: "Home", color: "bg-blue-700" },
    { path: "/about", label: "About", color: "bg-green-700" },
    { path: "/contact", label: "Contact", color: "bg-red-700" },
    { path: "/login", label: "Login", color: "bg-purple-700" },
    { path: "/signup", label: "Signup", color: "bg-yellow-700" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-600 py-0.2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/signup"
          className="bg-emerald-500 text-white py-2 px-4 rounded-full"
        >
          MernStack
        </NavLink>

        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
          aria-controls="navbar-default"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="w-full md:flex md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700 mx-auto">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={`block py-2 px-3 text-white rounded-md hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:p-3 ${
                    selectedItem === item.path ? item.color : ""
                  }`}
                  activeClassName="bg-gray-100"
                  onClick={() => handleClick(item.path)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
