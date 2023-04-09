import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../component/Loading/Loading";
import { StudentTableTr } from "./StudentTableTr";
const StudentTable = () => {
  console.log();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [enroll, setEnroll] = useState();

  useEffect(() => {
    const FetchAllStudent = async () => {
      const res = await axios.get(`/api/student/?q=${query}`);

      if (res.status === 200) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }

      setData(res?.data);
    };

    FetchAllStudent();
  }, [query]);

  return (
    <div className="overflow-x-auto relative    sm:rounded-lg">
      <div className="flex justify-between items-center pb-4 bg-white  ">
        <label className="sr-only">Search</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for users"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                User Id
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item) => (
                <StudentTableTr key={item.userId} item={item}></StudentTableTr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;
