import { DummyStudent } from "../data/DummyStudent.js";
import Student from "../model/StudenModel.js";

export const CreateStudent = async (req, res) => {
  const newStudent = req.body;

  try {
    const saveStudent = await Student.create(newStudent);

    res.send(saveStudent);
  } catch (error) {
    console.log(error);
  }
};
export const getAllStudent = async (req, res) => {
  try {
    const { q } = req.query;

    const student = await Student.find({
      $or: [{ first_name: { $regex: q } }, { last_name: { $regex: q } }],
    });

    res.json(student.slice(0, 10));
  } catch (error) {
    console.log(error);
  }
};
export const getSingleStudent = async (req, res) => {
  try {
    const Singlestudent = await Student.findById(req.params.id);
    res.json(Singlestudent);
  } catch (error) {
    console.log(error);
  }
};
