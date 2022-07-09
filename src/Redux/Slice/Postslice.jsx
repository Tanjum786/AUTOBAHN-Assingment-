import { createSlice } from "@reduxjs/toolkit";
import { Allpost } from "../thunks/PostThunk";

const initialState = {
  posts: [],
};
const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    deletePostReducer: (state, action) => {
      state.posts = action.payload;
    },
    createNewpostReducer: (state, action) => {
      state.posts = action.payload;
    },
    editPostReducer: (state, action) => {
      state.posts[action.payload.findindexofpost] = action.payload.data;
    },
  },
  extraReducers: {
    [Allpost.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
      state.status = "success";
    },
  },
});

export const { deletePostReducer, createNewpostReducer, editPostReducer } =
  PostSlice.actions;
export default PostSlice.reducer;
