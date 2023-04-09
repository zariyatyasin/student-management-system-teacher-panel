import express from "express";
import {
  CreateStudent,
  getAllStudent,
  getSingleStudent,
} from "../controllers/StudentControll.js";

const router = express.Router();
router.get("/", getAllStudent);
router.get("/:id", getSingleStudent);
router.post("/", CreateStudent);

export default router;
