import { createSlice } from "@reduxjs/toolkit";

const GetClassRoomSlice = createSlice({
  name: "getClassRoom",
  initialState: {
    classRooms: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    classRoom_Request: (state) => {
      state.isLoading = true;
    },

    classRoom_Success: (state, action) => {
      state.isLoading = false;
      state.classRooms = action.payload;
    },
    classRoom_Failed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { classRoom_Request, classRoom_Success, classRoom_Failed } =
  GetClassRoomSlice.actions;
export default GetClassRoomSlice.reducer;
