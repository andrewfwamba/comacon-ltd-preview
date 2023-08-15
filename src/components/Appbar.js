import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function Appbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-1 mb-2 w-full shadow-md">
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
            <ul className="flex space-x-4 tracking-tight text-gray-900 font-[300]">
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>About</p> <BsChevronDown />
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Markets</p> <BsChevronDown />
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Services</p> <BsChevronDown />
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Products</p> <BsChevronDown />
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Lifecycle</p> <BsChevronDown />
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>Parts Store</p> <BsChevronDown />
              </li>
              <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                <p>ServTech</p>
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
              <ul className="flex flex-col mt-5 bg-white w-full text-gray-900 font-[300]">
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>About</p> <BsChevronDown />
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Markets</p> <BsChevronDown />
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Services</p> <BsChevronDown />
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Products</p> <BsChevronDown />
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Lifecycle</p> <BsChevronDown />
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>Parts Store</p> <BsChevronDown />
                </li>
                <li className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
                  <p>ServTech</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appbar;
