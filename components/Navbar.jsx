import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="bg-[#212731] py-3 px-3 flex gap-2 md:gap-5 justify-center items-center lg:gap-20">
      <div className="flex items-center relative">
        <CiSearch className="absolute left-2 font-semibold" size={20} />
        <input type="text" className="rounded-md h-8" />
      </div>

      <h2 className="text-[#D1D6DA] text-xs font-normal">Categories</h2>
      <h2 className="text-[#D1D6DA] text-xs font-normal">Website Builders</h2>
      <h2 className="text-[#D1D6DA] text-xs font-normal">Today's deals</h2>
    </div>
  );
}
