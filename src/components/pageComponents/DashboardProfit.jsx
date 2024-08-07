import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardProfit = () => {
  return (
    <>
      <div className="main flex flex-col md:flex-row justify-center items-start bg-[#20212a] p-2 md:gap-1 gap-5 rounded-md w-[95%]  ml-3 md:ml-0">
        <div className="flex flex-row md:flex-col w-[100%] md:w-[55%] gap-7 justify-between md:justify-between">
          <h2 className="text-xs md:text-md p-1">Net Profit</h2>
          <h1 className="text-2xl md:text-4xl text-[#f3f4f8] font-extrabold">$ 6759.25</h1>
          <h6 className="gain text-sm md:text-md text-green-600 flex items-center font-semibold">
            <IoMdArrowDropup className="text-lg md:text-xl" />
            3%
          </h6>
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] md:w-[45%]">
          <div className="relative border-white rounded-full w-32 h-32 p-2">
            {/* <h1 className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">70%</h1> */}
            <CircularProgressbar styles={buildStyles({pathTransitionDuration: 0.5, trailColor: '#2b3365', textColor: '#f3f4f8',})} strokeWidth="14" value={70} text="70%" />
          </div>
          <div className="">
            <p className="text-xs">*The values have been rounded off</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfit;
