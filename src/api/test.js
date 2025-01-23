import axiosClient from "@/utils/axiosClient";
import axios from "axios";
export const get_data_excel = async () => {
  try {
    const response = await axios.get(
      "https://go.microsoft.com/fwlink/?LinkID=521962",
      {
        responseType: "arraybuffer",
        withCredentials: true,
        headers: {
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Origin': 'https://go.microsoft.com',
          'Referer': 'https://go.microsoft.com/',
        },
        httpsAgent: new (require("https").Agent)({
          rejectUnauthorized: false
        }),
        maxRedirects: 5,
        validateStatus: function (status) {
          return status >= 200 && status < 500;
        },
      }
    );
    return response;
  } catch (error) {
    // Log chi tiết lỗi
    if (error.response) {
      console.error('Response Error:', {
        status: error.response.status,
        headers: error.response.headers,
        data: error.response.data
      });
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};