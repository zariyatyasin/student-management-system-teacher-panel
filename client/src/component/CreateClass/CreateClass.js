import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AddIcon from "@mui/icons-material/Add";

import { DialogActions } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PostClassRomm } from "./PostClassRoom";

export default function CreateClass() {
  const [open, setOpen] = useState(false);
  const [courseName, setCourseName] = useState();
  const [code, setCode] = useState();
  const [about, setAbout] = useState();
  const [section, setSection] = useState();
  const [room, setroom] = useState();
  const [credit, setCredit] = useState();

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.LoginUser.user.others._id);
  console.log("Hello ");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    dispatch(
      PostClassRomm({ userId, courseName, code, about, section, room, credit })
    );
  };

  return (
    <div>
      <Button className="    uppercase" onClick={handleClickOpen}>
        <AddIcon></AddIcon>
        Create Class
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className="p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Course Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="CSE 101"
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Course Code
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="101"
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                About the course
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="About Course"
                onChange={(e) => setAbout(e.target.value)}
              />
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Section
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="B"
                onChange={(e) => setSection(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Room
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
                onChange={(e) => setroom(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Credit Hr
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="32"
                onChange={(e) => setCredit(e.target.value)}
              />
            </div>
          </div>
          <DialogActions>
            <Button hello={"hello"} variant="contained" onClick={handleClose}>
              <AddIcon></AddIcon>
              Create Class
            </Button>
            <Button onClick={handleClose}>Cancle</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
