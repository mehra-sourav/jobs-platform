import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs } from "@/api";

const initialState = {
  data: [],
  loading: false,
  error: undefined,
  success: false,
};

const getJobsList = createAsyncThunk("jobs/getJobs", async () => {
  try {
    const data = await getJobs();
    return data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
  }
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getJobsList.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.success = false;
    });
    builder.addCase(getJobsList.fulfilled, (state, action) => {
      state.data = action.payload.jdList;

      state.loading = false;
      state.error = undefined;
      state.success = true;
    });
    builder.addCase(getJobsList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.success = false;
    });
  },
});

export { getJobsList };

export default jobsSlice.reducer;
