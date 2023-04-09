import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const FeatchLogin = createAsyncThunk(
  "Login",
  async (data, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const user = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("user", JSON.stringify(user.data));
      return user?.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    LogoutUser: (state, action) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },

  extraReducers: {
    [FeatchLogin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [FeatchLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    [FeatchLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { LogoutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
