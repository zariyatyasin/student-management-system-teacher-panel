import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const TableTr = ({ Student }) => {
  const [studentData, setStudentData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`/api/student/${Student}`);
      if (res.status === 200) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
      setStudentData(res?.data);
    };

    fetch();
  }, [Student]);

  return (
    <tbody>
      <tr className="bg-white border-b   hover:bg-gray-50  ">
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
            <div className="text-base font-semibold">
              {studentData?.first_name + " " + studentData?.last_name}
            </div>
          </div>
        </th>
        <td className="py-4 px-6">{studentData?.userId}</td>
        <td className="py-4 px-6">
          <div className="flex items-center">{studentData?.email}</div>
        </td>
        <td className="py-4 px-6">
          <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            View
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableTr;
