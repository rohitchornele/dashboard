import { Avatar } from "@mui/material";
import React from "react";

const DropdownInfo = () => {
  return (
    <>
    <div className="">
      <div className="flex justify-start items-start w-80 overflow-x-hidden">
        <Avatar src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg">
        </Avatar>
        <div className="">
          <h5 className="font-semibold text-sm text-wrap">Notification title</h5>
          <p className=" text-xs text-wrap">
            This is notification text content Lorem ipsum dolor sit amet
            consectetur adipisicing elits.
          </p>
          <p className="text-xs text-blue-700 py-1 font-semibold">few secons ago</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default DropdownInfo;
