import React from "react";
import { BsChevronDown } from "react-icons/bs";

function Appbar() {
  return (
    <div>
      <div className="h-[4rem] bg-white mt-2 justify-center items-center mb-8 flex w-full shadow-lg">
        <div className="flex space-x-8 ml-10">
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
            <li className="flex space-x-3 justify-center items-center cursor-pointer hover:border-b-2 pb-4 border-blue-700">
              <p>Method Flow</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
