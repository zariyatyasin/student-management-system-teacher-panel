import { createSlice } from "@reduxjs/toolkit";

const CreateClassRoomSlice = createSlice({
  name: "classRoom",
  initialState: {
    classRooms: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    classRoom_Request: (state) => {
      state.isLoading = true;
    },
    Prevous_Classes: (state, action) => {
      state.classRooms = action.payload;
    },
    classRoom_Success: (state, action) => {
      state.isLoading = false;
      state.classRooms = [action.payload, ...state.classRooms];
    },
    classRoom_Faild: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  classRoom_Request,
  classRoom_Success,
  classRoom_Faild,
  Prevous_Classes,
} = CreateClassRoomSlice.actions;
export default CreateClassRoomSlice.reducer;
