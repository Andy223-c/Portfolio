import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@boxicons/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-[95%] mx-auto rounded-b-2xl md:rounded-b-[40px] bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold ml-2 text-indigo-600">
          Andy Heng
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-900">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-black"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6">
          <div className=" rounded-2xl p-6 space-y-4 ">
            
            {/* Links */}
            <div className="flex flex-col space-y-2 text-gray-900 font-medium">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-indigo-50  transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-indigo-50 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-indigo-50 transition"
              >
                Contact
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;