import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "@/store";

const useFilters = (inputLabel) => {
  const dispatch = useDispatch();

  const { filters } = useSelector((state) => state.filters);

  const setFilter = (filterName, filterValue) => {
    dispatch(filterActions.setFilter({ filterName, filterValue }));
  };

  const removeFilter = (filterName, filterValue) => {
    dispatch(filterActions.removeFilter({ filterName, filterValue }));
  };

  const removeAllFilters = (filterName) => {
    dispatch(filterActions.removeAllFilters({ filterName }));
  };

  return {
    filters: filters[inputLabel] ?? [],
    setFilter,
    removeFilter,
    removeAllFilters,
  };
};

export default useFilters;
