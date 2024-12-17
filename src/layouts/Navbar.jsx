import React from "react";
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <header className="bg-white border-b-[1px] border-b-zinc-300 sticky top-0 z-40">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <img className="w-20 object-cover" src={logo} alt="Logo" />

        {/* Nav Items */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 transition"
            >
              Company
            </a>
          </li>
        </ul>

        {/* Call to Action */}
        <button className="text-white bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition">
          Request a Demo
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
