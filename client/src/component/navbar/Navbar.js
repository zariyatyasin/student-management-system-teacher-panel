import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CreateClass from "../CreateClass/CreateClass";
import { LogoutUser } from "../Features/User/Login/LoginSlice";
const Navbar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const dispatch = useDispatch();
  const menuHandeler = () => {
    setMenuOpen(!menuOpen);
  };

  const Logout = () => {
    dispatch(LogoutUser());
  };

  return (
    <div className="">
      <nav className="bg-white border border-b h-16 px-8   justify-between  flex    items-center mx-auto   ">
        <div className="flex items-center ">
          {children}
          <Link to={"/"} className=" ml-3 text-red-900 text-xl font-medium">
            EDU
          </Link>
        </div>
        <div className="flex items-center">
          <CreateClass></CreateClass>
          <div className="ml-4 relative cursor-pointer " onClick={menuHandeler}>
            <Avatar alt="Remy Sharp" src="./images/pic1.jpeg" />
            <div
              className={
                menuOpen
                  ? "hidden"
                  : ` absolute right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow  `
              }
            >
              <div className="py-3 px-4 text-sm text-gray-900  ">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">eastdelta@edu.bd</div>
              </div>
              <ul className="py-1 text-sm text-gray-700  ">
                <li className="cursor-pointer ">
                  <div className=" block py-2 px-4 hover:bg-gray-100 ">
                    Dashboard
                  </div>
                </li>
                <li className="cursor-pointer ">
                  <div className="block py-2 px-4 hover:bg-gray-100 ">
                    Settings
                  </div>
                </li>
              </ul>
              <div className="py-1 cursor-pointer">
                <div
                  onClick={Logout}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  "
                >
                  Sign out
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
