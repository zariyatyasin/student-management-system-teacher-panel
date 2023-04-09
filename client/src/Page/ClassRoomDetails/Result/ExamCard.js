import React, { useEffect, useState } from "react";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const ExamCard = ({ items }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/exam/${items}`);

      setData(res.data);
    };
    fetchData();
  }, [items]);

  const { id } = useParams();

  return (
    <div>
      <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-[#5E17F4] text-white min-w-[200px]">
        <span className="uppercase text-xs text-[#f5f1fd] font-medium">
          {data?.name}
        </span>
        <div className="flex flex-row items-center space-x-3">
          <ImportContactsOutlinedIcon></ImportContactsOutlinedIcon>
          <span className="text-base font-medium">{data?.about}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>{data?.mark}</span>
          <Link
            to={`/classesinfo/${id}/result/${items}`}
            className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black"
          >
            <span>View</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
