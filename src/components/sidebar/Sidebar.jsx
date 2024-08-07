import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <div className="top-16 overflow-y-hidden">
      <div className="fixed main overflow-hidden w-12 md:w-16 lg:w-52 bg-[#20212a] flex flex-col justify-start items-center h-full gap-48">
        <div className="flex flex-col justify-around items-center gap-5 text-[#a2a4a7] py-3 w-[100%] ">
          <Link to={"/"} className="w-[100%] text-center">
            <button className="w-[100%]  py-2 hover:scale-[1.1]  transition-all ease-in-out  px-3 md:px-5 flex justify-start items-center gap-5 focus:border-l-4 border-blue-600 focus:text-blue-600">
              <HomeRoundedIcon className="scale-[1.2]  w-[100%]" />
              <h2 className="text-[18px]">Dashboard</h2>
            </button>
          </Link>
          <Link to={"/statistics"} className="w-[100%] text-center">
            <button className="w-[100%] text-center py-2 focus:border-l-4 border-blue-600 focus:text-blue-600 hover:scale-[1.1] transition-all ease-in-out flex justify-start items-center gap-5 px-3 md:px-5">
              <InsertChartOutlinedRoundedIcon className="scale-[1.2]  w-[100%] " />
              <h2 className="text-[18px]">Statistics</h2>
            </button>
          </Link>
          <Link to={"/orders"} className="w-[100%] text-center">
            <button className="w-[100%] text-center py-2 focus:border-l-4 border-blue-600 focus:text-blue-600 hover:scale-[1.1] transition-all ease-in-out flex justify-start items-center gap-5 px-3 md:px-5">
              <AssignmentTurnedInOutlinedIcon className="scale-[1.2]  w-[100%] " />
              <h2 className="text-[18px]">Orders</h2>
            </button>{" "}
          </Link>
          <Link to={"/wallet"} className="w-[100%] text-center">
            <button className="w-[100%] text-center py-2 focus:border-l-4 border-blue-600 focus:text-blue-600 hover:scale-[1.1] transition-all ease-in-out flex justify-start items-center gap-5 px-3 md:px-5">
              <AccountBalanceWalletOutlinedIcon className="scale-[1.2]  w-[100%] " />
              <h2 className="text-[18px]">Wallet</h2>
            </button>{" "}
          </Link>
          <Link to={"/inventory"} className="w-[100%] text-center">
            <button className="w-[100%] text-center py-2 focus:border-l-4 focus:border-blue-600 focus:text-blue-600 hover:scale-[1.1] transition-all ease-in-out flex justify-start items-center gap-5 px-3 md:px-5">
              <LocalMallOutlinedIcon className="scale-[1.2]  w-[100%] " />
              <h2 className="text-[18px]">Inventory</h2>
            </button>{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-around items-center gap-4 text-[#a2a4a7] py-3 w-[100%]">
          <Link to={"/logout"} className="w-[100%] text-center">
            <button className="w-[100%] text-center py-2 focus:border-l-4 focus:border-blue-600  hover:scale-[1.1] transition-all ease-in-out flex justify-start items-center gap-5 px-3 md:px-5 ">
              <LogoutOutlinedIcon className="scale-[1.2]" />
              <h2 className="text-[18px]">Logout</h2>
            </button>{" "}
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
