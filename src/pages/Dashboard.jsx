import React from "react";
import DashboardCardComponents from "../components/pageComponents/DashboardCardComponents";
import DashboardProfit from "../components/pageComponents/DashboardProfit";
import DashboardStats from "../components/pageComponents/DashboardStats";
import DashboardShortcut from "../components/pageComponents/DashboardShortcut";
import DashboardOrders from "../components/pageComponents/DashboardOrders";
import DashboardReview from "../components/pageComponents/DashboardReview";

const Dashboard = () => {
  return (
    <div className="p-5 bg-[#141416] text-white h-full">
      <h1 className="p-1 px-6  md:text-3xl text-4xl font-extrabold py-4 md:text-start text-center">Dashboard</h1>
      <div className="flex flex-col">
        <FlexWrapper>
          <LeftContentWrapper>
            <DashboardCardComponents />
          </LeftContentWrapper>
          <RightContentWrapper>
            <DashboardProfit />
          </RightContentWrapper>
        </FlexWrapper>
        <FlexWrapper>
          <LeftContentWrapper>
            <DashboardStats />
          </LeftContentWrapper>
          <RightContentWrapper>
            <DashboardShortcut />
          </RightContentWrapper>
        </FlexWrapper>
        <FlexWrapper>
          <LeftContentWrapper>
            <DashboardOrders />
          </LeftContentWrapper>
          <RightContentWrapper>
            <DashboardReview />
          </RightContentWrapper>
        </FlexWrapper>
      </div>
    </div>
  );
};

export default Dashboard;

function FlexWrapper({ children }) {
  return <div className="flex flex-col md:flex-row gap-5 py-3">{children}</div>;
}

function LeftContentWrapper({ children }) {
  return <div className="left-col w-[95%]  md:w-[58%] ml-3">{children}</div>;
}

function RightContentWrapper({ children }) {
  return <div className="right-col w-[95%]  md:w-[38%] ml-3">{children}</div>;
}
