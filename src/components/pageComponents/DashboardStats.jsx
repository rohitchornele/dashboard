import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";


import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardStats = () => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-[#20202b] p-4 h-[100%] rounded-md w-[95%] md:w-[97%] ml-3">
        <div className="flex justify-between items-center px-4">
          <h3 className="text-2xl font-bold text-[#f8fafd]">Activity</h3>
          <Dropdown />
        </div>
        <div className="h-full w-full pt-1 m-0">
          <ChartComponent />
        </div>
      </div>
    </>
  );
};

export default DashboardStats;

function Dropdown() {
  return (
    <Menu as="div" className="relative text-center">
      <div>
        <MenuButton className="flex w-full justify-center items-center rounded-full bg-[#303134] px-2 py-1 text-xs text-[#f8fafd]">
          Weekly
          <IoMdArrowDropdown className="h-4 w-5 text-[#f8fafd]" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md text-[#f8fafd] bg-[#303134] shadow-lg ring-1  ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              Daily
            </button>
          </MenuItem>
          <MenuItem>
            <button className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              Weekly
            </button>
          </MenuItem>
          <MenuItem>
            <button className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              Monthly
            </button>
          </MenuItem>
          <MenuItem>
            <button className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              Yearly
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

function ChartComponent() {
  const labels = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dataValues =  [100, 120, 180, 110, 90, 290, 150, 340, 110, 500, 360, 110]
  const data = {
    labels,
    datasets: [
      {
        label: "Sales per month",
        data: dataValues,
        backgroundColor: "#7394ff"
        
      },
    ],
  };

  return (
    <div className="p-1 h-full w-full flex items-center justify-center">
      <Bar data={data}/>
    </div>
  )
}
