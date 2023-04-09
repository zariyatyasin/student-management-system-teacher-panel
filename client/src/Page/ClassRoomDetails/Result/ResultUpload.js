import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateExam from "./CreateExam";
import ExamCard from "./ExamCard";

const ResultUpload = () => {
  // const [data, setData] = useState();
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["createdExam"],
    queryFn: () => axios.get(`/api/${id}`),
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`/api/${id}`);
  //     setData(res.data.exam);
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <div>
      <CreateExam></CreateExam>
      <div className="mt-8 flex flex-wrap gap-4">
        {data?.data.exam.map((item, id) => (
          <ExamCard key={id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default ResultUpload;
