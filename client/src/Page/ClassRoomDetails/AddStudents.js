import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { DialogActions } from "@mui/material";

import StudentTable from "./StudentTable";

const AddStudents = (classRoom) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="rounded-md flex items-center bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
        onClick={handleClickOpen}
      >
        <PersonAddIcon></PersonAddIcon>
        <p className="ml-2"> Enroll Students</p>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="1000px"
      >
        <div className="p-10 h-96 w-[800px]  ">
          <StudentTable></StudentTable>
          {/* <DialogActions>
            <button
              hello={"hello"}
              className="rounded-md  flex items-center bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
              onClick={handleClose}
            >
              <PersonAddIcon></PersonAddIcon>
              <p className="ml-2"> Enroll Students</p>
            </button>
            <Button onClick={handleClose}>Cancle</Button>
          </DialogActions> */}
        </div>
      </Dialog>
    </div>
  );
};

export default AddStudents;
