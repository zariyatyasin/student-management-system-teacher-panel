import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "../model/StudenModel.js";
import { DummyStudent } from "../data/DummyStudent.js";
dotenv.config();
console.log(process.env.MONGODB_URL);
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zariyat:Afnan0987@cluster0.dlxaxpo.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connceted to mongodb");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connected");
});
connectDB();

const importData = async () => {
  try {
    await Student.deleteMany();
    await Student.insertMany(DummyStudent);
  } catch (error) {
    console.log(error);
  }
};
importData();
