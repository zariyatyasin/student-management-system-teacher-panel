import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAllStudent = createAsyncThunk(
  "student/FetchAllStudent",
  async (data) => {
    console.log("i'm from sli", data);
    const res = await axios.get(`/api/student/?p=${data}`);
    return res?.data;
  }
);

const StudentSlice = createSlice({
  name: "student",
  initialState: {
    students: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(FetchAllStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(FetchAllStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.students = action.payload;
    });
    builder.addCase(FetchAllStudent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default StudentSlice.reducer;
