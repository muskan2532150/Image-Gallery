import React from "react";
import { imageThunk } from "../redux/imageSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => dispatch(imageThunk())}
          className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300"
        >
          Imgfolio
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
