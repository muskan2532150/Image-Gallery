import React, { useState } from "react";
import { imageSearchThunk } from "../redux/imageSlice";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(imageSearchThunk(query));
  };

  return (
    <div className="w-1/2 mx-auto mt-8 p-4 rounded-lg">
      <div className="flex items-center shadow-sm">
        <input
          type="text"
          placeholder="Search by Keyword"
          className="w-full py-2 px-3 rounded-l-lg text-black focus:outline-none"
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-lg transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
