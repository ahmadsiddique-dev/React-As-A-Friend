import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-around px-6 py-3 bg-gray-900 text-white shadow-md">
      {/* Left side: Logo */}
      <h1 className="text-2xl font-semibold">MyWebsite</h1>

      {/* Right side: Links */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
