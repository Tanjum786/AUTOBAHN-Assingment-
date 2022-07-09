import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Slice/Postslice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
