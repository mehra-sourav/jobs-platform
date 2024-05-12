import { useSelector, useDispatch } from "react-redux";
import { getJobsList } from "@/store";
import { useEffect } from "react";

const useJobs = () => {
  const dispatch = useDispatch();

  const { data, loading, error, success } = useSelector((state) => state.jobs);

  const getJobs = () => {
    dispatch(getJobsList());
  };

  useEffect(() => {
    getJobs();
  }, []);

  return {
    data,
    loading,
    error,
    success,
  };
};

export default useJobs;
