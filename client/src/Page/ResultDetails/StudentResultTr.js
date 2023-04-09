import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentResultTr = ({ item, value, setValue }) => {
  const { id, examId } = useParams();
  const [mark, setMark] = useState();
  const [studentResult, setStudentResult] = useState();
  const { isLoading, error, data } = useQuery({
    queryKey: ["students", item],
    queryFn: () => axios.get(`/api/student/${item}`),
  });

  //   const [data, setData] = useState();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await axios.get(`/api/student/${item}`);

  //       setData(res.data);
  //     };
  //     fetchData();
  //   }, [item]);

  // const submitResult = async (e) => {
  //   const config = {
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   const res = await axios.post(
  //     `/api/${id}/exam/${examId}`,
  //     { studentId: item, examId, studentResutllMark: mark },
  //     config
  //   );
  // };

  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {data?.data?.userId}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {data?.data?.first_name + " " + data?.data?.last_name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        50
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <input
          type="number"
          className=" p-2 border "
          onChange={(e) => setValue(item, e.target.value)}
          name="value"
          value={value || ""}
        ></input>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button>Update</button>
      </td>
    </tr>
  );
};

export default StudentResultTr;
