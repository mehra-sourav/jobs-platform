import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  filters: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterName, filterValue } = action.payload;
      state.filters[filterName] = filterValue;
    },
    removeFilter: (state, action) => {
      const { filterName, filterValue } = action.payload;
      let newFilters = state.filters[filterName].filter(
        ({ value }) => !_.isEqual(value, filterValue)
      );
      if (newFilters.length === 0) {
        delete state.filters[filterName];
      } else {
        state.filters[filterName] = newFilters;
      }
    },
    removeAllFilters: (state, action) => {
      const { filterName } = action.payload;
      delete state.filters[filterName];
    },
  },
});

export const { actions: filterActions } = filtersSlice;

export default filtersSlice.reducer;
