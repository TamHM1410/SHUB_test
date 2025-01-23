import axiosClient from "@/utils/axiosClient";
import axios from "axios";
export const get_data_excel = async () => {
  try {
    // Thêm proxy CORS 
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://go.microsoft.com/fwlink/?LinkID=521962";

    const response = await axios.get(corsProxy + url, {
      responseType: "arraybuffer",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Origin': 'https://go.microsoft.com'
      }
    });
    
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};