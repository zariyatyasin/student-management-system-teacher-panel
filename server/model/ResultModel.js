import mongoose from "mongoose";
const { Schema } = mongoose;
const resultSchema = new mongoose.Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Student",
  },
  examId: {
    type: String,
    unique: true,
    required: true,
  },
  studentResultlMark: {
    type: String,

    default: 0,
  },
});

const Result = mongoose.model("Result", resultSchema);
export default Result;
