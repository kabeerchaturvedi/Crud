import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts.push(action.payload);
    },
    removePosts: (state) => {
      state.posts.pop();
    },
  },
});

// Export the reducer, not the entire slice
export default postSlice.reducer;

// Export the actions
export const { addPosts, removePosts } = postSlice.actions;
