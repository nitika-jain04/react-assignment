import React from "react";

export default function Deals() {
  return (
    <div className="mt-20 px-5 md:mx-[100px] lg:mx-[250px]">
      <h3 className="text-xl">Related deals you might like for</h3>

      <div className="mt-10 flex gap-5">
        <div className="bg-white flex flex-col justify-between items-center py-5 px-5 xl:px-10">
          <img className="w-40" src="/image.png" alt="" />
          <div className="flex gap-1 mt-5 -ml-10">
            <h3 className="text-[#074786] bg-[#F3F9FF] text-xs w-fit mt-2 py-1 pb-2 px-1">
              26% Off
            </h3>
            <h3 className="text-[#074786] bg-[#F3F9FF] text-xs w-fit mt-2 py-1 pb-2 px-1">
              Limited time
            </h3>
          </div>
          <h3 className="text-[#626E79] font-bold text-sm xl:text-base">
            Webbuilder 1
          </h3>
          <p className="text-[#626E79] text-xs xl:text-sm mt-2">
            Computer Modern clasic with wix<br></br> support
          </p>
          <div className="flex mt-2 gap-3 text-xs">
            <h3 className="text-[#5C6874] text-sm xl:text-base -ml-2">
              $39.96
            </h3>
            <h3 className="text-[#9FA9B3] mt-2">$49.96</h3>
            <h3 className="text-[#EF4C5D] mt-2 hidden md:block">(20% off)</h3>
          </div>
          <button className="bg-[#1B88F4] text-[#1B88F4] p-2 mt-2 w-full rounded-md">
            hjbx
          </button>
        </div>

        <div className="bg-white flex flex-col justify-between items-center py-5 px-2">
          <img className="w-40" src="/image.png" alt="" />
          <div className="flex gap-1 mt-5 -ml-10">
            <h3 className="text-[#074786] bg-[#F3F9FF] text-xs w-fit mt-2 py-1 pb-2 px-1">
              26% Off
            </h3>
            <h3 className="text-[#074786] bg-[#F3F9FF] text-xs w-fit mt-2 py-1 pb-2 px-1">
              Limited time
            </h3>
          </div>
          <h3 className="text-[#626E79] font-bold text-sm">Webbuilder 1</h3>
          <p className="text-[#626E79] text-xs xl:text-base mt-2">
            Computer Modern clasic with wix<br></br> support
          </p>
          <div className="flex mt-2 gap-3 text-xs">
            <h3 className="text-[#5C6874] text-sm -ml-2">$39.96</h3>
            <h3 className="text-[#9FA9B3] mt-2">$49.96</h3>
            <h3 className="text-[#EF4C5D] mt-2 hidden md:block">(20% off)</h3>
          </div>
          <button className="bg-[#1B88F4] text-white p-2 mt-2 w-full rounded-md">
            View
          </button>
        </div>

        <div className="bg-white flex flex-col justify-between items-center py-5 px-2">
          <img className="w-40" src="/image.png" alt="" />
          <div className="flex gap-1 mt-5 -ml-10">
            <h3 className="text-[#074786] bg-[#F3F9FF] text-xs w-fit mt-2 py-1 pb-2 px-1">
              26% Off
            </h3>
            <h3 className="text-[#074786] bg-[#F3F9FF] text-xs w-fit mt-2 py-1 pb-2 px-1">
              Limited time
            </h3>
          </div>
          <h3 className="text-[#626E79] font-bold text-sm">Webbuilder 1</h3>
          <p className="text-[#626E79] text-xs xl:text-base mt-2">
            Computer Modern clasic with wix<br></br> support
          </p>
          <div className="flex mt-2 gap-3 text-xs">
            <h3 className="text-[#5C6874] text-sm -ml-2">$39.96</h3>
            <h3 className="text-[#9FA9B3] mt-2">$49.96</h3>
            <h3 className="text-[#EF4C5D] mt-2 hidden md:block">(20% off)</h3>
          </div>
          <button className="bg-[#1B88F4] text-white p-2 mt-2 w-full rounded-md">
            View
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-20 pb-10 items-center">
        <h3 className="text-[#5C6874] text-base lg:text-3xl">
          Sign up and get exclusive<br></br> special deals
        </h3>

        <button className="rounded-e-lg text-white bg-[#1B88F4] px-5 h-fit py-3 text-sm font-light">
          Sign Up
        </button>
      </div>
    </div>
  );
}
