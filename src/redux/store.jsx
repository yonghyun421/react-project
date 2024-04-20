import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducer/authenticateSlice";

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
  },
});

export default store;
