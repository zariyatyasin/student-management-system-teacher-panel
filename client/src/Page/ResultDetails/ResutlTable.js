import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StudentResultTr from "./StudentResultTr";

const ResutlTable = () => {
  const { id, examId } = useParams();

  const [mark, setMark] = useState({});
  const saveInputValue = (item, inputValue) => {
    const markCopy = { ...mark };
    markCopy[item] = inputValue;

    setMark(markCopy);
  };
  const { data } = useQuery({
    queryKey: ["enrollStudents"],
    queryFn: () => axios.get(`/api/${id}`),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    // const config = {
    //   headers: { "Content-Type": "application/json" },
    // };
    const playLoad = [];
    data?.data.enrolledStudent.forEach((item) => {
      playLoad.push({
        studentId: item,
        examId,
        studentResultlMark: parseInt(mark[item]),
      });
    });

    // const res = await axios.post(
    //   `/api/${id}/exam/${examId}`,

    //   playLoad,

    //   config
    // );
  };

  // useEffect(() => {
  //   if (!data) {
  //     return;
  //   }

  //   const markCopy = { ...mark };
  //   data?.data.enrolledStudent.forEach((item) => {
  //     markCopy[item] = " ";
  //   });
  //   setMark(markCopy);
  // }, [data]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <form onSubmit={onSubmit}>
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        First
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Mark
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Result
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data.enrolledStudent.map((item, id) => {
                      return (
                        <StudentResultTr
                          key={id}
                          item={item}
                          value={mark[item]}
                          setValue={saveInputValue}
                        />
                      );

                      // return (
                      //   <tr
                      //     className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      //     key={id}
                      //   >
                      //     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      //       sdf
                      //     </td>
                      //     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      //       sdfds
                      //     </td>
                      //     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      //       sdf
                      //     </td>
                      //     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      //       <input
                      //         type="number"
                      //         className=" p-2 border "
                      //         onChange={(e) => setMark(e.target.value)}
                      //       ></input>
                      //     </td>
                      //   </tr>
                      // );
                    })}
                  </tbody>
                </table>
                <div className=" w-full mt-5 flex justify-end max-w-7xl">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResutlTable;
