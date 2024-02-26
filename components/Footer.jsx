import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-[#212731] flex gap-5 pt-20 pb-40 text-sm xl:text-sm px-5 w-full md:px-32 md:gap-24 xl:px-64 xl:gap-60">
      <div className="text-[#B6BDC4] flex flex-col gap-5">
        <h2 className="text-white text-sm xl:text-base">CATEGORIES</h2>
        <h4>Web Builder</h4>
        <h4>Hosting</h4>
        <h4>Data Center</h4>
        <h4>Robotic-Automation</h4>
      </div>

      <div className="text-[#B6BDC4] flex flex-col gap-5 xl:text-sm">
        <h2 className="text-white text-sm xl:text-base">CONTACT</h2>
        <h4>Contact</h4>
        <h4>Privacy Policy</h4>
        <h4>Terms of Service</h4>
        <h4>Categories</h4>
        <h4>About</h4>
      </div>

      <div className="text-[#B6BDC4] flex items-center gap-1 text-xs -mt-8">
        <h4>United States</h4>
        <IoIosArrowDown size={15} />
      </div>
    </div>
  );
}
