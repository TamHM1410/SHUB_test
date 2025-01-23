import axiosClient from "@/utils/axiosClient";

export const get_input = async () => {
  const response = await axiosClient.get("/input");
  return response.data;
};
