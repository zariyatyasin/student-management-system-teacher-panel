import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StudentTableTr = ({ item }) => {
  const classRoomid = useParams();

  const [addStudent, setAddStudent] = useState(false);
  const [studentId, setStudentId] = useState();

  useEffect(() => {
    setAddStudent(item.couresEnroll.includes(classRoomid.id));
  }, [classRoomid.id]);
  const addStudentHandler = async () => {
    try {
      await axios.put(`/api/${classRoomid.id}/enroll`, {
        userId: item._id,
      });
    } catch (error) {
      console.log(error);
    }
    setAddStudent(!addStudent);
  };

  return (
    <tr key={item.userId} className="bg-white border-b hover:bg-gray-50  ">
      <th
        scope="row"
        className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap "
      >
        <img
          className="w-10 h-10 rounded-full"
          src="./images/pic1.jpeg"
          alt="Jese"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{item.first_name}</div>
          <div className="font-normal text-gray-500">{item.email}</div>
        </div>
      </th>
      <td className="py-4 px-6">{item.userId}</td>
      <td className="py-4 px-6">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
          Online
        </div>
      </td>
      <td className="py-4 px-6">
        {addStudent ? (
          <button
            className="text-white bg-red-500  focus:ring-blue-300 font-medium rounded-md text-sm w-24 h-10   "
            onClick={addStudentHandler}
          >
            remove
          </button>
        ) : (
          <button
            className="text-white bg-blue-500  focus:ring-blue-300 font-medium rounded-md  text-sm w-24 h-10 "
            onClick={addStudentHandler}
          >
            Add
          </button>
        )}
      </td>
    </tr>
  );
};
