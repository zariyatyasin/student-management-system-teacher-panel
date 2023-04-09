import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema(
  {
    classRoomId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,

      default: 0,
    },
    about: {
      type: String,
    },
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", ExamSchema);
export default Exam;
