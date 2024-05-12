import { configureStore } from "@reduxjs/toolkit";
import { default as jobsReducer } from "./slices/jobs";
import { default as filtersReducer } from "./slices/filters";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    filters: filtersReducer,
  },
});

export * from "./slices/jobs";
export * from "./slices/filters";

export default store;
