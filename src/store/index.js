import { configureStore } from "@reduxjs/toolkit";
import { default as jobsReducer } from "./slices/jobs";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export * from "./slices/jobs";

export default store;
