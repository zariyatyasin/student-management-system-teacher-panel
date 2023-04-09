import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./component/Features/AllStudents/StudentSlice";
import CreateClassSlice from "./component/Features/CreateClass/CreateClassSlice";
import GetClassRoomSlice from "./component/Features/GetClassRoom/GetClassRoomSlice";
import StoreValue from "./component/Features/StoreValue/StoreValue";
import LoginSlice from "./component/Features/User/Login/LoginSlice";
const store = configureStore({
  reducer: {
    CreateClassRooms: CreateClassSlice,
    GetClassRooms: GetClassRoomSlice,
    GetAllStudent: StudentSlice,
    LoginUser: LoginSlice,
    getStoreValues: StoreValue,
  },
});
export default store;
