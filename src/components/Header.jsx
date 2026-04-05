import React, { useState } from "react";
import { Menu, X } from "@boxicons/react"; // Added X for a better close button
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-[95%] mx-auto rounded-b-2xl md:rounded-b-[40px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md z-[100] transition-all duration-300 border border-slate-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Portfolio
        </div>

        {/* Desktop Menu - Changed Link to <a> for single page scrolling */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-gray-800 dark:text-gray-200">
          <a
            href="#home"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            HOME
          </a>
          <a
            href="#about"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#skill"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            SKILL
          </a>
          <a
            href="#project"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            PROJECT
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            CONTACT
          </a>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ..."
            >
              <Menu />
            </button>
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-800 dark:text-white cursor-pointer"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (

        
        <div className="md:hidden px-4 pb-6 transition-all duration-300">
          <div className="flex justify-end mb-2">
            <ThemeToggle />
          </div>
          <div className="flex flex-col space-y-3 font-bold">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm"
            >
              About
            </a>

            <a
              href="#skill"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm"
            >
              Skill
            </a>

            <a
              href="#project"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm"
            >
              Project
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
