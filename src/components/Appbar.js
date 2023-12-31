import React, { useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Appbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-200/50 pt-2 px-4 md:px-1 mb-2 w-full shadow-md">
        {/* Desktop menu */}
        <div className="space-x-8 ml-10 hidden py-2 md:block">
          <div className="flex justify-between">
            <div className="text-gray-500">
              <a href="/">
                <img
                  src={require("../assets/images/logocomacon.jpg")}
                  alt=""
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <ul className="flex space-x-4 tracking-tight pr-[5rem]  text-gray-900 font-[500]">
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Home</p>
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>About Us</p>
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Our Services</p> <BsChevronDown />
              </li>

              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Our Projects</p>
              </li>

              <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Contact Us</p>
              </li>
              <li className="flex justify-center items-center bg-white cursor-pointer border rounded px-2 mx-2 border-blue-700/50">
                <BsSearch className="text-gray-500" />
                <input placeholder="Search" className="outline-none p-1" />
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="block md:hidden py-2">
          <div className="flex w-full justify-between ">
            <div>
              <a href="/">
                <img
                  src={require("../assets/images/logocomacon.jpg")}
                  alt=""
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
          {open && (
            <div>
              <ul className="flex flex-col mt-5 w-full text-gray-900 font-[300]">
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Home</p>
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>About Us</p>
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Our Services</p> <BsChevronDown />
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Our Projects</p>
                </li>

                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Contact Us</p>
                </li>
                <li className="flex justify-between items-center bg-white cursor-pointer border rounded px-2 hover:border-blue-700/50 border-blue-700/20">
                  <BsSearch className="text-gray-500 mr-2" />
                  <input
                    placeholder="Search"
                    className="outline-none p-1 w-full"
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Appbar;
