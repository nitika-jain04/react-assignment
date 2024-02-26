import React from "react";
import { CiTrophy } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { SlDiamond } from "react-icons/sl";
import { CiCircleCheck } from "react-icons/ci";

export default function Tools() {
  return (
    <div className="px-10 md:mx-[100px] lg:mx-[250px]">
      <div className="bg-[#FF7724] w-fit text-white flex gap-1 items-center px-2 py-1 rounded-e-md mt-5">
        <CiTrophy size={20} className="font-semibold" />
        <h3 className="text-sm font-light">Best Choice</h3>
      </div>

      <div className="flex gap-2 bg-white py-2 px-4 mt-3 xl:gap-10">
        <h2 className="text-[#626E79] -ml-7">1</h2>
        <div className="flex flex-col gap-2 items-center mt-5">
          <img className="w-36" src="/image.png" alt="image" />
          <h3 className="text-[#626E79]">Builder 1</h3>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#2C384A] leading-5">
            <span className="">WixPro 72-Inch Responsive Website Builder-</span>
            Comprehensive<br></br> Digital Platform Creation Tool, Streamlined
            Design Interface for<br></br> Professional Websites and Online
            Stores (Black/Blue)<br></br>
          </p>
          <h3 className="text-sm mt-2">Main highlights</h3>
          <p className="ml-5 mt-2 text-[#2C384A] text-sm leading-5 hidden md:block">
            [What You Get]: Receive the WixPro website builder suite,<br></br>{" "}
            access to premium design templates, an extensive library of<br></br>{" "}
            widgets and apps, and detailed step-by-step guides.<br></br>
          </p>
          <div className="flex gap-1 items-center text-[#1B88F4] mt-2">
            <h3 className="text-sm">Show more</h3>
            <IoIosArrowDown />
          </div>
        </div>

        <div className="flex flex-col justify-between -mt-2">
          <div className="bg-[#F3F9FF] h-fit flex flex-col gap-2 items-center px-2 py-2 rounded-b-md ml-10 pb-2">
            <h3 className="text-xl text-[#074786]">9.8</h3>
            <h4 className="text-xs">Exceptional</h4>

            <div className="flex gap-1 text-[#e9915b]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <h3 className="ml-10 bg-[#1B88F4] text-white rounded-md text-center text-base w-36 py-3 -mt-20 font-light">
            View
          </h3>
        </div>
      </div>

      <div className="bg-[#FF7724] w-fit text-white flex gap-1 items-center px-2 py-1 rounded-e-md mt-5">
        <SlDiamond size={15} className="font-semibold" />
        <h3 className="text-sm font-light">Best Value</h3>
      </div>

      <div className="flex mt-3 gap-2 bg-white py-2 px-4 xl:gap-10">
        <h2 className="text-[#626E79] bg-white rounded-full border border-gray-300 w-fit h-fit px-2 -ml-10">
          2
        </h2>
        <div className="flex flex-col gap-2 items-center mt-5">
          <img className="w-36" src="/image.png" alt="image" />
          <h3 className="text-[#626E79]">Builder</h3>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#2C384A] leading-5">
            <span>SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced
            Site<br></br> Creation Toolkit, Intuitive Drag-and-Drop Editor for
            Dynamic<br></br>
            Websites and E-commerce Platforms (Green/White)
          </p>
          <h3 className="text-sm mt-2">Main highlights</h3>
          <p className="ml-5 mt-2 text-[#2C384A] text-sm leading-5 hidden md:block">
            [What You Get]: Gain access to the SiteCraft design studio,<br></br>
            featuring a robust selection of design elements, SEO<br></br>{" "}
            optimization tools, and e-commerce integrations.
          </p>
          <div className="flex gap-1 items-center text-[#1B88F4] mt-2">
            <h3 className="text-sm">Show more</h3>
            <IoIosArrowDown />
          </div>
        </div>

        <div className="flex flex-col justify-between -mt-2">
          <div className="bg-[#F3F9FF] h-fit flex flex-col gap-2 items-center px-5 py-2 rounded-b-md ml-10 pb-2">
            <h3 className="text-2xl text-[#074786]">9.5</h3>
            <h4 className="text-sm">Excellent</h4>

            <div className="flex gap-1 text-[#e9915b]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <h3 className="ml-10 bg-[#1B88F4] text-white rounded-md text-center text-base w-36 py-3 -mt-20 font-light">
            View
          </h3>
        </div>
      </div>

      <div className="flex mt-10 gap-2 bg-white py-2 px-4 xl:gap-10">
        <h2 className="text-[#626E79] bg-white rounded-full border border-gray-300 w-fit h-fit px-2 -ml-10">
          3
        </h2>
        <div className="flex flex-col gap-2 items-center mt-5">
          <img className="w-36" src="/image.png" alt="image" />
          <h3 className="text-[#626E79]">Builder 1</h3>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#2C384A] leading-5">
            <span className="">WixPro 72-Inch Responsive Website Builder-</span>
            Comprehensive<br></br> Digital Platform Creation Tool, Streamlined
            Design Interface for<br></br> Professional Websites and Online
            Stores (Black/Blue)<br></br>
          </p>
          <h3 className="text-sm mt-2">Main highlights</h3>
          <p className="ml-5 mt-2 text-[#2C384A] text-sm leading-5 hidden md:block">
            [What You Get]: Receive the WixPro website builder suite,<br></br>{" "}
            access to premium design templates, an extensive library of<br></br>{" "}
            widgets and apps, and detailed step-by-step guides.<br></br>
          </p>
          <div className="flex gap-1 items-center text-[#1B88F4] mt-2">
            <h3 className="text-sm">Show more</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between -mt-2">
          <div className="bg-[#F3F9FF] h-fit flex flex-col gap-2 items-center px-5 py-2 rounded-b-md ml-10 pb-2">
            <h3 className="text-2xl text-[#074786]">9.3</h3>
            <h4 className="text-sm">Exceptional</h4>

            <div className="flex gap-1 text-[#e9915b]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <h3 className="ml-10 bg-[#1B88F4] text-white rounded-md text-center text-base w-36 py-3 -mt-20 font-light">
            View
          </h3>
        </div>
      </div>

      <div className="flex mt-10 gap-2 bg-white py-2 px-4 xl:gap-10">
        <h2 className="text-[#626E79] bg-white rounded-full border border-gray-300 w-fit h-fit px-2 -ml-10">
          4
        </h2>
        <div className="flex flex-col gap-2 items-center mt-5">
          <img className="w-36" src="/image.png" alt="image" />
          <h3 className="text-[#626E79]">CDK</h3>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#2C384A] leading-5">
            CDK Resposive Builder: An extensive library of widgets and apps,
            <br></br> and detailed step-by-step guides
          </p>
          <h3 className="text-[#074786] bg-[#F3F9FF] text-xs w-fit mt-2 py-1 pb-2 px-1">
            26% Off
          </h3>
          <h3 className="text-sm mt-2">Main highlights</h3>
          <div className="ml-5 mt-2 bg-[#FFF4ED] text-sm px-5 py-1 flex flex-col gap-2 rounded-md">
            <div className="flex items-center gap-3">
              <h2 className="bg-white p-1 text-[#1B88F4]">9.9</h2>
              <h2 className="text-[#4B5665]">Building Responsive</h2>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="bg-white p-1 text-[#1B88F4]">8.9</h2>
              <h2 className="text-[#4B5665]">Cool</h2>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="bg-white p-1 text-[#1B88F4]">8.9</h2>
              <h2 className="text-[#4B5665]">Docs</h2>
            </div>
          </div>

          <h3 className="text-sm mt-2 text-[#2C384A]">Why we love it</h3>

          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <CiCircleCheck
                className="text-[#0855A1] bg-[#EBF5FF] rounded-full"
                size={22}
              />
              <h2 className="text-[#4B5665] text-sm">Documentation</h2>
            </div>
            <div className="flex gap-2 items-center">
              <CiCircleCheck
                className="text-[#0855A1] bg-[#EBF5FF] rounded-full"
                size={22}
              />
              <h2 className="text-[#4B5665] text-sm">Easy Use</h2>
            </div>
            <div className="flex gap-2 items-center">
              <CiCircleCheck
                className="text-[#0855A1] bg-[#EBF5FF] rounded-full"
                size={22}
              />
              <h2 className="text-[#4B5665] text-sm">Out of Box</h2>
            </div>
          </div>

          <div className="flex gap-1 items-center text-[#1B88F4] mt-2">
            <h3 className="text-sm">Show more</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between -mt-2 -ml-10 xl:-ml-2">
          <div className="bg-[#F3F9FF] h-fit flex flex-col gap-2 items-center px-2 py-2 rounded-b-md ml-10 pb-2">
            <h3 className="text-2xl text-[#074786]">9.1</h3>
            <h4 className="text-sm">Very Good</h4>

            <div className="flex gap-1 text-[#e9915b]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <h3 className="ml-10 bg-[#1B88F4] text-white rounded-md text-center text-base w-36 py-3 -mt-20 font-light">
            View
          </h3>
        </div>
      </div>
    </div>
  );
}
