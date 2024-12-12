import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../actions/Actions";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
