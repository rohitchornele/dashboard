import React from 'react'
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { LuConciergeBell } from "react-icons/lu";

const DashboardShortcut = () => {
  return (
    <>
    <div className="main flex flex-col gap-2 bg-[#20202a] rounded-md p-3 px-4 w-[95%] h-full  ml-3 md:ml-0 justify-center">
      <FlexWrapper>
        <div className="flex justify-normal items-center gap-2 cursor-pointer">
          <BiTargetLock className='bg-[#ba24195e] p-6 w-20 h-20 rounded-full text-orange-500 font-extrabold' />
          <h4 className='text-xl p-1'>Goals</h4>
        </div>
        <div className=" rounded-full bg-[#484a4d] p-1 w-10 h-10 flex justify-center items-center cursor-pointer">
          <MdOutlineKeyboardArrowRight className='text-2xl'/>
        </div>
      </FlexWrapper>
      <FlexWrapper>
        <div className="flex justify-normal items-center gap-2 cursor-pointer">
          <FaBowlFood className='bg-[#13428457] p-7 w-20 h-20 rounded-full text-blue-600 font-extrabold' />
          <h4 className='text-xl p-1'>Popular Dishes</h4>
        </div>
        <div className=" rounded-full bg-[#484a4d] p-1 w-10 h-10 flex justify-center items-center cursor-pointer">
          <MdOutlineKeyboardArrowRight className='text-2xl'/>
        </div>
      </FlexWrapper>
      <FlexWrapper>
        <div className="flex justify-normal items-center gap-2 cursor-pointer">
          <LuConciergeBell className='bg-[#116b7b50] p-6 w-20 h-20 rounded-full text-teal-500 font-extrabold' />
          <h4 className='text-xl p-1'>Menus</h4>
        </div>
        <div className=" rounded-full bg-[#484a4d] p-1 w-10 h-10 flex justify-center items-center cursor-pointer">
          <MdOutlineKeyboardArrowRight className='text-2xl'/>
        </div>
      </FlexWrapper>
      
    </div>
    </>
  )
}

export default DashboardShortcut

function FlexWrapper({children}) {
  return(
    <div className="flex justify-between items-center p-1">
      {children}
    </div>
  )
}