import axiosClient from "@/utils/axiosClient";
import axios from "axios";
export const get_data_excel = async () => {
  try {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://go.microsoft.com/fwlink/?LinkID=521962";

    const response = await axios.get(corsProxy + url, {
      responseType: "arraybuffer",
      headers: {
        "Access-Control-Allow-Origin": "*",
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://go.microsoft.com',
        Origin: "https://go.microsoft.com",
      },
    });

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
