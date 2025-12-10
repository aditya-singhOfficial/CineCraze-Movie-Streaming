import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzBlOTk1ZmJiM2VlYWY2OTE0OGQ5YzUyMjU0OWViMSIsIm5iZiI6MTc2NTM5NDI1OC45MTI5OTk5LCJzdWIiOiI2OTM5Yzc1MmRkNDEwMDFhNzdkZmE2YmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OvzcR5xrtLtD6rEECLKdoGAme33NUzVUjzWerfmkpyw",
  },
});

export default api;
