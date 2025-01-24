import axiosClient from "@/utils/axiosClient";
import axios from "axios";
export const get_data_excel = async () => {
  try {
    const proxies = [
      'https://cors-anywhere.onrender.com/',
      'https://cors.bridged.cc/',
      'https://cors-proxy.htmldriven.com/'
    ];

    for (const corsProxy of proxies) {
      try {
        const response = await axios.get(corsProxy + url, {
          responseType: "arraybuffer",
          timeout: 5000 // 5 second timeout
        });
        return response;
      } catch (proxyError) {
        console.warn(`Proxy ${corsProxy} failed`);
        continue;
      }
    }

    throw new Error('All proxies failed');
  } catch (error) {
    console.error("Final download error:", error);
    throw error;
  }
};