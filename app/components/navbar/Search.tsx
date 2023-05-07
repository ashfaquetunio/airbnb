"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-full rounded-full border-[1px] cursor-pointer md:w-auto py-2 transition shadow-sm hover:shadow-md">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semiBold px-6">Anywhere</div>
        <div className="text-sm hidden sm:block font-semiBold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="bg-rose-500 p-2 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
