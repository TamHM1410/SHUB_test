import axiosClient from "@/utils/axiosClient";
import axios from "axios";
export const get_data_excel = async () => {
  try {
    const corsProxy = "https://cors-proxy.htmldriven.com/";
    const url = "https://go.microsoft.com/fwlink/?LinkID=521962";

    const response = await axios.get(`${corsProxy}${url}`, {
      responseType: "arraybuffer",
      headers: {
        'Accept': 'application/octet-stream'
      }
    });

    return response;
  } catch (error) {
    console.error("Download error:", error);
    throw error;
  }
};