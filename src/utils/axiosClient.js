import axios from "axios";

const axiosClient = axios.create({
  baseURL: '',
  timeout: 8000,
});

axiosClient.interceptors.request.use(async (request) => {
  if (session) {
    request.headers.Authorization = `Bearer `;
  }
  return request;
});

const handleResponse = (res) => {
  if (res && res.data) {
    return res.data;
  }

  return res;
};

const handleError = (error) => {
  const { data } = error.response;
  return data;
};

axiosClient.interceptors.response.use(
  (response) => {
    const res = handleResponse(response);
    return res;
  },
  async (error) => {
    return Promise.reject(handleError(error));
  }
);

export default axiosClient;
