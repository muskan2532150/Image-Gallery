import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300"
        >
          Imgfolio
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
