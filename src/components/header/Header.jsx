import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import Search from "../search/Search";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import DropdownInfo from "../dropdownInfo/DropdownInfo";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNotification, setOpenNotification] = useState(null);
  const open = Boolean(anchorEl);
  const openNotifi = Boolean(openNotification);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotify = (event) => {
    setOpenNotification(event.currentTarget);
  };

  const handleCloseNotify = () => {
    setOpenNotification(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className=" w-[full]">
        <div className="main h-16 bg-[#20212a] flex lg:justify-between justify-center px-4 py-3 ">
          <div className=" items-center gap-5 flex">
            <button className="transition-all ease-in-out hover:opacity-75 text-white focus:text-blue-600 focus:scale-[1.2] active:opacity-[0.85]">
              <CgMenuGridR className="text-4xl" />
            </button>
            <div className="md:block hidden">
            <Search />
            </div>
          </div>
          <div className="profile flex items-center justify-end gap-6 w-full px-4">
            <div className="flex items-center justify-between gap-3">
              <div className="mode">
                <button
                  className="relative bg-[#2b2d30] rounded-full h-10 w-10 p-2 transition-all hover:scale-[1.1] focus:bg-gray-600  active:opacity-[0.85] ease-in-out"
                  type="button"
                >
                  <MdOutlineLightMode className="text-2xl text-[#a2a4a7] p-1 hidden" />
                  <MdDarkMode className="text-2xl text-[#a2a4a7] p-1 " />
                  <div className="w-2 h-2 rounded-full bg-blue-600 absolute top-2 left-[52%] hidden"></div>
                </button>
              </div>
              <div className="message">
                <button
                  className="relative bg-[#2b2d30] rounded-full h-10 w-10 p-2 transition-all ease-in-out hover:scale-[1.1] focus:bg-gray-600  active:opacity-[0.85]"
                  type="button"
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <MdMailOutline className="text-2xl text-[#a2a4a7] p-1" />
                  <div className="w-2 h-2 rounded-full bg-blue-600 absolute top-2 left-[52%] hidden"></div>
                </button>
                <div className="">
                  <Tooltip title="Account settings">
                    <div
                      size="small"
                      sx={{ ml: 2 }}
                      onClick={handleClick}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : "false"}
                    ></div>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="setting">
                <button
                  className="relative bg-[#2b2d30] rounded-full h-10 w-10 p-2 transition-all ease-in-out hover:scale-[1.1] focus:bg-gray-600  active:opacity-[0.85]"
                  type="button"
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <IoSettingsOutline className="text-2xl text-[#a2a4a7] p-1" />
                  <div className="w-2 h-2 rounded-full bg-blue-600 absolute top-2 left-[52%] hidden"></div>
                </button>
                <div className="">
                  <Tooltip title="Account settings">
                    <div
                      size="small"
                      sx={{ ml: 2 }}
                      onClick={handleClick}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : "false"}
                    ></div>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="notification">
                <button
                  className="relative bg-[#2b2d30] rounded-full h-10 w-10 p-2 transition-all ease-in-out hover:scale-[1.1] active:opacity-[0.85]"
                  type="button"
                  onClick={handleNotify}
                  aria-controls={openNotifi ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openNotifi ? "true" : undefined}
                >
                  <FaRegBell className="text-2xl text-[#a2a4a7] p-1" />
                  <div className="w-2 h-2 rounded-full bg-blue-600 absolute top-2 left-[52%]"></div>
                </button>
                <div className="overflow-y-scroll">
                  <Menu
                    anchorEl={openNotification}
                    id="notifiMenu"
                    open={openNotifi}
                    onClose={handleCloseNotify}
                    onClick={handleCloseNotify}
                    className="md:h-[100vh] h-[70vh]"
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflowY: "scroll",
                        overflowX: "hidden",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        background:"	#d6e9ef",
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: 0,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <div className="p-2">
                      <h2 className="font-bold text-xl">Notifications</h2>
                    </div>
                    <Divider />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                    <Divider className="" />
                    <MenuItem>
                      <DropdownInfo />
                    </MenuItem>
                  </Menu>
                  </div>
              </div>
            </div>
            <div className="">

            <div
              className="icon bg-[#2b2d30] rounded-full h-12 w-12 overflow-hidden cursor-pointer ring-2 ring-blue-800"
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              >
              <img
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
                className="h-[100%] object-cover"
                />
            </div>
            <div className="">
              <Tooltip title="Account settings">
                <div
                  size="small"
                  sx={{ ml: 2 }}
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : "false"}
                ></div>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
                </div>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
