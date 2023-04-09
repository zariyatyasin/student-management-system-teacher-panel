import ClassRoom from "../model/ClassRoomModel.js";
import Student from "../model/StudenModel.js";
import Exam from "../model/ExamModel.js";
import Result from "../model/ResultModel.js";

export const deleteClassRoom = async (req, res) => {
  try {
    await ClassRoom.findByIdAndDelete(req.params.id);
    res.json("Deleted");
  } catch (error) {
    console.log(error);
  }
};
export const singleClassRoom = async (req, res) => {
  try {
    const singleClassRoom = await ClassRoom.findById(req.params.id);
    res.json(singleClassRoom);
  } catch (error) {
    console.log(error);
  }
};
export const getAllclassRoom = async (req, res) => {
  try {
    const GetAllClassRooms = await ClassRoom.find({});
    res.json(GetAllClassRooms);
  } catch (error) {
    console.log(error);
  }
};
export const createClassRoom = async (req, res) => {
  const newClassRoom = req.body;

  try {
    const saveClassRoom = await ClassRoom.create(newClassRoom);

    res.status(200).json(saveClassRoom);
  } catch (error) {
    console.log(error);
  }
};
export const addStudentToClassRoom = async (req, res) => {
  try {
    const classId = await ClassRoom.findById(req.params.id);
    const studentId = await Student.findById(req.body.userId);
    if (!classId.enrolledStudent.includes(req.body.userId)) {
      await classId.updateOne({
        $push: { enrolledStudent: req.body.userId },
      });
      await studentId.updateOne({ $push: { couresEnroll: req.params.id } });
      res.status(200).json("Successfull Joined");
    } else {
      await classId.updateOne({
        $pull: { enrolledStudent: req.body.userId },
      });
      await studentId.updateOne({ $pull: { couresEnroll: req.params.id } });
      res.status(200).json("Removed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addExam = async (req, res) => {
  try {
    const classId = await ClassRoom.findById(req.params.id);
    if (classId) {
      const createdExam = await Exam.create({
        classRoomId: req.params.id,
        name: req.body.name,
        mark: req.body.mark,
        about: req.body.about,
      });

      if (!classId.exam.includes(createdExam._id)) {
        await classId.updateOne({
          $push: { exam: createdExam._id },
        });

        classId.enrolledStudent.map(async (item) => {
          const studentId = await Student.findById(item);
          await studentId.updateOne({ $push: { enrollExam: createdExam._id } });
        });

        res.status(200).json(createdExam);
      } else {
        res.status(400).json("First create Classroom");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleExamDetails = async (req, res) => {
  try {
    const getSingleExam = await Exam.findById(req.params.examId);

    res.status(200).json(getSingleExam);
  } catch (error) {
    console.log(error);
  }
};

// export const addStudentResult = async (req, res) => {
//   try {
//     const createdResutl = await Result.create({
//       studentId: req.body.studentId,
//       examId: req.params.examId,
//       studentResutllMark: req.body.studentResutllMark,
//     });
//     const student = await Student.findById(req.body.studentId);
//     const updatedStudentResutl = await student.updateOne({
//       $push: { enrollExamResults: createdResutl },
//     });

//     res.json(updatedStudentResutl);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addStudentResult = async (req, res) => {
  try {
    // console.log(req.body);
    // return res.send({});
    const resutlsArry = [];
    // console.log(req.body);
    for (const item of req.body) {
      const createdResutl = await Result.create(item);
      // console.log(createdResutl);

      const student = await Student.findById(item.studentId);

      if (
        student.enrollExamResults.map((item) => item.examId === req.body.examId)
      ) {
        return console.log("Ready created");
      }
      const updatedStudentResutl = await student.updateOne({
        $push: { enrollExamResults: createdResutl },
      });
      resutlsArry.push(updatedStudentResutl);
    }

    res.json(resutlsArry);
  } catch (error) {
    console.log(error);
  }
};
