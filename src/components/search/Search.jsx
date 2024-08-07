import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className="search bg-[#2a2b2f] w-64 h-8 flex items-center justify-between overflow-hidden pl-2 gap-1 rounded-md px-4 text-[#a2a4a7]">
        <IoSearch className="text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="relative h-8 w-[100%] top-0 p-2 border-none outline-none bg-transparent placeholder:text-[#a2a4a763]"
        />
      </div>
    </>
  );
};

export default Search;
