import axiosInstance from "@/api/axiosInstance";

export const getJobs = async () => {
  const { data } = await axiosInstance.post(`/adhoc/getSampleJdJSON`, {});
  return data;
};
