import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllClassRooms } from "../../component/Features/GetClassRoom/FetchAllClassRooms";

import ClassRoomCard from "./ClassRoomCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ClassRoomList = () => {
  const classRoom = useSelector((state) => state.CreateClassRooms.classRooms);
  const userID = useSelector((state) => state.LoginUser.user.others._id);
  const dispatch = useDispatch();
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => {
  //     return axios.get("/api");
  //   },
  // });
  // console.log(data);

  useEffect(() => {
    FetchAllClassRooms(dispatch, userID);
  }, [dispatch, userID]);

  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center md:p-0 ">
        {classRoom &&
          classRoom.map((item) => {
            return (
              <ClassRoomCard
                key={item._id}
                time={item.createdAt}
                id={item._id}
                courseName={item.courseName}
                about={item.about}
                code={item.code}
                room={item.room}
                section={item.section}
              ></ClassRoomCard>
            );
          })}
      </div>
    </div>
  );
};
