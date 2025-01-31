import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mengubah status scrolling untuk efek navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Toggle burger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-white`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-10 p-4 ${
          scrolling ? "bg-[#FDCA09]" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10">
          <h1 className="text-2xl font-bold">dsgnr.</h1>

          {/* Tombol Burger Menu */}
          <button
            onClick={toggleMenu}
            className="block  text-white focus:outline-none bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu untuk desktop dan mobile */}
          <ul
            className={` absolute bg-white w-auto top-14 right-10 p-4 ${
              isMenuOpen ? "block" : "hidden"
            } transition-all duration-300`}
          >
            <li>
              <Link
                to="/"
                className="text-lg font-medium text-black hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-medium text-black hover:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium text-black hover:text-gray-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-lg font-medium text-black hover:text-gray-400"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/ourworks"
                className="text-lg font-medium text-black hover:text-gray-400"
              >
                Our Works
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

