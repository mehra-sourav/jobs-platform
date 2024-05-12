import { useSelector, useDispatch } from "react-redux";
import { getJobsList } from "@/store";
import { useEffect } from "react";
import { doesItemSatisfyFilters } from "../utils/filters";

const useJobs = () => {
  const dispatch = useDispatch();

  const { data, loading, error, success } = useSelector((state) => state.jobs);
  const { filters } = useSelector((state) => state.filters);

  const filteredData = data?.filter((item) => {
    let condition = doesItemSatisfyFilters(filters, item);

    return condition;
  });

  const getJobs = () => {
    dispatch(getJobsList());
  };

  useEffect(() => {
    getJobs();
  }, []);

  return {
    data: filteredData,
    loading,
    error,
    success,
  };
};

export default useJobs;
