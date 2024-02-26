import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function HeroPage() {
  return (
    <div className="px-10 pt-10 text-center md:mx-[100px] lg:mx-[250px]">
      <h2 className="text-[#2C384A] text-2xl md:text-4xl lg:text-5xl font-normal -ml-5 xl:-ml-28">
        Best Website builders in the US
      </h2>

      <div className="flex items-center justify-between">
        <div className="mt-10 text-[#4B5665] flex items-center gap-2 text-sm xl:text-base font-normal">
          <IoIosCheckmarkCircleOutline size={25} />
          <h3>Last Updated</h3>
          <h3>-</h3>
          <h3>February 22, 2020</h3>

          <IoInformationCircleOutline size={20} className="ml-5" />
          <h3>Advertising Disclosure</h3>
        </div>

        <div className="flex gap-2 items-center text-[#727D87] mt-10">
          <h3 className="text-sm xl:text-base font-normal">Top Relevant</h3>
          <IoIosArrowDown />
        </div>
      </div>

      <div className="flex gap-5 text-[#4B5665] text-xs xl:text-base font-normal ml-2 mt-5">
        <h3>Tools</h3>
        <h3>AWS Builder</h3>
        <h3>Start Build</h3>
        <h3>Build Supplies</h3>
        <h3>Tooling</h3>
        <h3>BlueHosting</h3>
      </div>

      <div className="text-[#5C6874] text-sm xl:text-base flex items-center mt-5 gap-1">
        <h3 className="text-[13px] text-[#727D87]">Home</h3>
        <MdKeyboardArrowRight size={20} />
        <h3>Hosting for all</h3>
        <MdKeyboardArrowRight size={20} />
        <h3>Hosting</h3>
        <MdKeyboardArrowRight size={20} />
        <h3>Hosting6</h3>
        <MdKeyboardArrowRight size={20} />
        <h3>Hosting5</h3>
      </div>
    </div>
  );
}
