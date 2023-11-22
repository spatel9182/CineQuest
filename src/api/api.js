import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://moviesearch-api.onrender.com",
  timeout: 30000,
  //   headers: { "X-Custom-Header": "foobar" },
});
