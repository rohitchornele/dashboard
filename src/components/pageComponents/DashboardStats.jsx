import { Legend, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoMdArrowDropdown } from "react-icons/io";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

let data= [
  {month: "Jan", sales: 10000},
  {month: "Feb", sales: 12000},
  {month: "Mar", sales: 18000},
  {month: "Apr", sales: 11000},
  {month: "May", sales: 9000},
  {month: "Jun", sales: 9000},
  {month: "Jul", sales: 9000},
  {month: "Aug", sales: 9000},
  {month: "Sep", sales: 9000},
  {month: "Oct", sales: 9000},
  {month: "Nov", sales: 9000},
  {month: "Dec", sales: 9000},
]

const DashboardStats = () => {
  return (
  <>
  <div className="flex flex-col gap-2 bg-[#20202b] p-4 h-full rounded-md md:w-[97%] w-[95%] ml-3">
    <div className="flex justify-between items-center px-4">
      <h3 className='text-2xl font-bold text-[#f8fafd]'>Activity</h3>
      <Dropdown />
    </div>
    <div className="chart-div w-full h-full pt-1">
    <ResponsiveContainer >
        <BarChart width={"100%"} height={"90%"} data={data} className='text-[#f8fafd]'>
        <XAxis dataKey="month" color='#f8fafd'/>
          <YAxis color='#f8fafd'/>
          <Legend />
          <Bar dataKey="sales" fill="#7394ff" className='rounded-b-none rounded-md' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
  </>
  )
}

export default DashboardStats

function Dropdown() {
  return(
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
            <button
              className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Daily
            </button>
          </MenuItem>
          <MenuItem>
            <button
              
              className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Weekly
            </button>
          </MenuItem>
          <MenuItem>
            <button
              
              className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Monthly
            </button>
          </MenuItem>
          <MenuItem>
            <button
              
              className="block px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Yearly
            </button>
          </MenuItem>
         
        </div>
      </MenuItems>
    </Menu>

)
}

