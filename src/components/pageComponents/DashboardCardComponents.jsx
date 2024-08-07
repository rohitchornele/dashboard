import React from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbShoppingBagHeart } from "react-icons/tb";

const DashboardCardComponents = () => {
  return (
    <>
    <div className="flex justify-evenly items-start gap-4 flex-wrap">
        <div className="flex justify-center ">
        <BoxWrapper>
          <div className="img bg-[#18378d48] p-2 rounded-lg text-center">
            <TbShoppingBagHeart className="text-xl text-blue-600" />
          </div>
          <div className="">
           <p className="text-[12px] text-[#adaeb3] font-semibold">Total Orders</p>
          </div>
          <div className="flex justify-between items-center p-1 w-full ">
            <h1 className="count text-4xl p-0 font-bold text-[#fbfcfe]">75</h1>
            <h6 className="gain text-xs text-green-600 flex items-center font-semibold">
              <IoMdArrowDropup className="text-lg" />
              3%
              </h6>
          </div>
        </BoxWrapper>
        </div>
        <div className="flex justify-center">
        <BoxWrapper>
          <div className="img bg-[#16a34a45] p-2 rounded-lg text-center">
            <TbShoppingBagHeart className="text-xl text-green-600" />
          </div>
          <div className="">
           <p className="text-[12px] text-[#adaeb3] font-semibold">Total Delivered</p>
          </div>
          <div className="flex justify-between items-center p-1 w-full">
            <h1 className="count text-4xl p-0 font-bold text-[#fbfcfe]">70</h1>
            <h6 className="gain text-xs text-red-500 flex items-center font-semibold">
              <IoMdArrowDropdown className="text-lg" />
              3%
              </h6>
          </div>
        </BoxWrapper>
        </div>
        <div className="flex justify-center">
        <BoxWrapper>
          <div className="img bg-[#dc262638] p-2 rounded-lg text-center">
            <TbShoppingBagHeart className="text-xl text-red-500" />
          </div>
          <div className="">
           <p className="text-[12px] text-[#adaeb3] font-semibold">Total Cancelled</p>
          </div>
          <div className="flex justify-between items-center p-1 w-full">
            <h1 className="count text-4xl p-0 font-bold text-[#fbfcfe]">05</h1>
            <h6 className="gain text-xs text-green-600 flex items-center font-semibold">
              <IoMdArrowDropup className="text-lg" />
              3%
              </h6>
          </div>
        </BoxWrapper>
        </div>
        <div className="flex justify-center">
        <BoxWrapper>
          <div className="img bg-[#db277840] p-2 rounded-lg text-center">
            <TbShoppingBagHeart className="text-xl text-pink-600" />
          </div>
          <div className="">
           <p className="text-[12px] text-[#adaeb3] font-semibold">Total Revenue</p>
          </div>
          <div className="flex justify-between items-center p-1 w-full">
            <h1 className="count text-4xl p-0 font-bold text-[#fbfcfe]">$12K</h1>
            <h6 className="gain text-xs text-red-500 flex items-end font-semibold">
              <IoMdArrowDropdown className="text-lg" />
              3%
              </h6>
          </div>
        </BoxWrapper>
        </div>
      </div>
    </>
  )
}

export default DashboardCardComponents

function BoxWrapper({ children }) {
    return (
      <div className="flex flex-col bg-[#20212a] rounded-md p-4 border-gray-800 items-start justify-center gap-3 w-40 h-40 ">
        {children}
      </div>
    );
  }
  