import React, { useState } from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
const Input = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="">
      <div className="p-2  text-white border shadow rounded w-46 bg-blue-500 ">
        <div
          className={`${open ? "hidden" : "flex justify-between items-center"}`}
          onClick={() => setOpen(!open)}
        >
          <div className=" flex ">
            <p>class Test </p>
            <div className="ml-2">50</div>
          </div>
          {/* <ModeEditOutlineOutlinedIcon
            className="ml-2 "
            style={{ fontSize: "15px" }}
            onClick={() => setOpen(!open)}
          ></ModeEditOutlineOutlinedIcon> */}
        </div>

        <div
          className={` ${
            open ? "flex justify-between items-center" : "hidden"
          }`}
        >
          <input
            type="text"
            className=" w-10 bg-gray-100 text-black rounded p-1 text-center border focus:outline-none focus:border-blue-500"
            value="50"
          />

          <div className="flex justify-center items-center space-x-2">
            <div
              type="button"
              className=" text-white ml-2"
              onClick={() => setOpen(!open)}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Input;
