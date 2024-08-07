import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="fixed w-full z-50">
          <Header />
        </div>
        <div className="mt-16 z-50">
          <Sidebar />
        </div>
      <div className="relative w-full flex flex-row top-16 justify-center">
        <div className="md:w-16 lg:w-52 w-12 h-full bg-red-600  px-3 lg:px-5"></div>
        <div className="w-full relative lg:px-5">{<Outlet />}</div>
      </div>
      </div>
    </>
  );
};

export default Layout;
