import React from "react";
import TeacherInfoHeader from "../../component/TeacherInfo/TeacherInfoHeader";
import { ClassRoomList } from "../ClassRooms/ClassRoomList";

export const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className=" md:px-14 mt-8 ">
        <TeacherInfoHeader></TeacherInfoHeader>
      </div>

      <div className="md:px-14 p-6 pt-8 h-screen bg-[#F1F5F9]">
        <div>
          <p className=" text-xl pb-2 text-gray-500">All Classes</p>
        </div>
        <ClassRoomList></ClassRoomList>
      </div>
    </div>
  );
};
