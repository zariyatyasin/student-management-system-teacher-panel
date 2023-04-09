import React, { useState } from "react";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { DialogActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
const CreateExam = () => {
  const [open, setOpen] = useState(false);
  const [name, setExamName] = useState();
  const [mark, setMark] = useState();
  const [about, setAbout] = useState();

  const { id } = useParams();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (createdExam) => {
      return axios.post(`api/${id}/exam`, createdExam);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["createdExam"] });
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    mutation.mutate({ name, mark, about });
    setOpen(false);
  };
  return (
    <div>
      <button
        className=" text-white focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
        onClick={handleClickOpen}
      >
        <NoteAltOutlinedIcon></NoteAltOutlinedIcon>
        <p className="ml-2"> Add Test</p>
      </button>

      <div>
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
                  Exam Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="CSE 101"
                  onChange={(e) => setExamName(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Exam Mark
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="101"
                  onChange={(e) => setMark(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  About the Exam
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

            <DialogActions>
              <Button hello={"hello"} variant="contained" onClick={handleClose}>
                <AddIcon></AddIcon>
                Create Exam
              </Button>
              <Button onClick={handleClose}>Cancle</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default CreateExam;
