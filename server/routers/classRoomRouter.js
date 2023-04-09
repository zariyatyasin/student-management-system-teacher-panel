import express from "express";
import {
  addExam,
  addStudentResult,
  addStudentToClassRoom,
  createClassRoom,
  deleteClassRoom,
  getAllclassRoom,
  getSingleExamDetails,
  singleClassRoom,
} from "../controllers/ClassRoomControll.js";
const router = express.Router();

router.get("/", getAllclassRoom);
router.delete("/:id", deleteClassRoom);
router.get("/:id", singleClassRoom);
router.post("/", createClassRoom);
router.put("/:id/enroll", addStudentToClassRoom);
router.post("/:id/exam", addExam);
router.get("/exam/:examId", getSingleExamDetails);
router.post("/:id/exam/:examId", addStudentResult);

export default router;
