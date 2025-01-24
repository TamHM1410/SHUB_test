import axiosClient from "@/utils/axiosClient";
import axios from "axios";
export const get_data_excel = async () => {
  try {
    const url = "https://go.microsoft.com/fwlink/?LinkID=521962";

    const response = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/octet-stream",
        "User-Agent": "Mozilla/5.0",
      },
    });

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
