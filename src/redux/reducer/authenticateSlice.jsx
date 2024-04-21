/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  const persistedState = localStorage.getItem("authState");
  if (persistedState) {
    return JSON.parse(persistedState);
  }
  return {
    id: "",
    password: "",
    bookmarkList: [],
    interestList: [],
    authenticate: false,
  };
};

const initialState = loadInitialState();

const authenticateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { id, bookmarkList, interestList } = action.payload;
      state.id = id;
      state.bookmarkList = bookmarkList;
      state.interestList = interestList;
      state.authenticate = true;
      // Update localStorage; excluding password
      localStorage.setItem("authState", JSON.stringify({
        id,
        bookmarkList,
        interestList,
        authenticate: true
      }));
    },
    logout(state) {
      state.id = "";
      state.bookmarkList = [];
      state.interestList = [];
      state.authenticate = false;
      localStorage.removeItem("authState");
    },
    updateInterests(state, action) {
      state.interestList = action.payload;
      // Optionally update localStorage on changes
      localStorage.setItem("authState", JSON.stringify({ ...state, password: "" }));
    },
    updateBookmarks(state, action) {
      state.bookmarkList = action.payload;
      // Optionally update localStorage on changes
      localStorage.setItem("authState", JSON.stringify({ ...state, password: "" }));
    },
  },
});

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
