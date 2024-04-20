/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  password: "",
  bookmarkList: [],
  interestList: [],
  authenticate: false,
};

const authenticateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.bookmarkList = action.payload.bookmarkL;
      state.interestList = action.payload.interestL;
      state.authenticate = true;
      localStorage.setItem("authenticate", "true");
    },
    logout(state) {
      state.id = "";
      state.password = "";
      state.bookmarkList = [];
      state.interestList = [];
      state.authenticate = false;
      localStorage.setItem("authenticate", "false");
    },
  },
});

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
