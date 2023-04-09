import React from "react";
import { useParams } from "react-router-dom";
import { ClassRoomHeader } from "../ClassRoomDetails/ClassRoomHeader/ClassRoomHeader";
import ResutlTable from "./ResutlTable";

const ResultDetailsPage = () => {
  const { id, examId } = useParams();
  console.log(id, examId);
  return (
    <div>
      <ClassRoomHeader></ClassRoomHeader>
      <ResutlTable></ResutlTable>
    </div>
  );
};

export default ResultDetailsPage;
