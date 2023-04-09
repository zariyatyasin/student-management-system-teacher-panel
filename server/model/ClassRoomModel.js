import mongoose from "mongoose";

const ClassRoomScheam = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    credit: {
      type: String,
      required: true,
    },
    enrolledStudent: {
      type: Array,
      default: [],
    },
    exam: {
      type: Array,
      default: [],
    },
  },

  { timestamps: true }
);
const ClassRoom = mongoose.model("ClassRoom", ClassRoomScheam);

export default ClassRoom;
