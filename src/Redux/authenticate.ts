import { createSlice } from "@reduxjs/toolkit";

const authenticateForm = createSlice({
  name: "authenticate form",
  initialState: {},
  reducers: {
    getAuth(_, action) {
      return action.payload;
    },
  },
});

export const { getAuth } = authenticateForm.actions;
export default authenticateForm.reducer;
