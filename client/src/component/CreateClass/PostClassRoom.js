import axios from "axios";
import {
  classRoom_Faild,
  classRoom_Request,
  classRoom_Success,
} from "../Features/CreateClass/CreateClassSlice";

export const PostClassRomm =
  ({ userId, courseName, code, about, section, room, credit }) =>
  async (dispatch) => {
    dispatch(classRoom_Request());

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "/api",
        {
          userId,
          courseName,
          code,
          about,
          section,
          room,
          credit,
        },
        config
      );

      console.log("i'm from lol data", data);
      dispatch(classRoom_Success(data));
    } catch (error) {
      dispatch(classRoom_Faild(error.response.data.message));
    }
  };
