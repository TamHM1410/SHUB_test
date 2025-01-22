import axiosClient from "@/utils/axiosClient";
import axios from "axios";

export const get_data_excel = async () => {
  const response = await axios.get(
    "https://go.microsoft.com/fwlink/?LinkID=521962",
    {
      responseType: "arraybuffer",
    }
  );
  return response
};
