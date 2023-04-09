import {
  classRoom_Failed,
  classRoom_Request,
  classRoom_Success,
} from "./GetClassRoomSlice";
import axios from "axios";

import { Prevous_Classes } from "../CreateClass/CreateClassSlice";
export const FetchAllClassRooms = async (dispatch, userID) => {
  try {
    dispatch(classRoom_Request);
    const getAllClassRoomData = await axios.get("/api");

    const userCreatedClasses = getAllClassRoomData.data.filter(
      (item) => item.userId === userID
    );

    dispatch(Prevous_Classes(userCreatedClasses));
    dispatch(classRoom_Success(userCreatedClasses));
  } catch (error) {
    dispatch(classRoom_Failed(error.response.data.message));
  }
};
