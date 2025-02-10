import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // Import icons for menu toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 w-full shadow-md">
      <div className="h-20 w-full flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-semibold">Logo.</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <ul className="flex gap-5">
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Home</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">About</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Contact</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Services</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Career</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex">
          <button className="border-2 px-5 py-1.5 m-2 text-lg font-semibold border-gray-700 border-dashed text-gray-700">Login</button>
          <button className="border-2 px-5 py-1.5 m-2 text-lg font-semibold border-gray-700 border-dashed text-gray-700">Signup</button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? "()" : "X"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 border-t border-gray-300">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Home</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">About</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Contact</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Services</li>
            <li className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-black">Career</li>
            <button className="border-2 px-5 py-1.5 text-lg font-semibold border-gray-700 border-dashed text-gray-700 w-full">
              Login
            </button>
            <button className="border-2 px-5 py-1.5 text-lg font-semibold border-gray-700 border-dashed text-gray-700 w-full">
              Signup
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
