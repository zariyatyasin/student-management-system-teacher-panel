import { createSlice } from "@reduxjs/toolkit";

const StoreValue = createSlice({
  name: "storeValue",
  initialState: {
    eaxmDetails: [],
  },
  reducers: {
    examDetails_Request: (state, action) => {
      state.eaxmDetails = action.payload;
    },
  },
});

export const { examDetails_Request } = StoreValue.actions;
export default StoreValue.reducer;
