import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import ClassRoomRouter from "./routers/classRoomRouter.js";
import cors from "cors";
import UserRouter from "./routers/userRouter.js";
import StudentRouter from "./routers/studentRouter.js";
// import cookeParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cookeParser());
connectDB();

app.use("/api/student", StudentRouter);
app.use("/api/", ClassRoomRouter);
app.use("/api/user", UserRouter);
app.get('*',(req,res,next)=>{
  res.status(404).json({
    message:'bad request'
  })
})
app.listen(8000, () => {
  console.log("server start running");
});
