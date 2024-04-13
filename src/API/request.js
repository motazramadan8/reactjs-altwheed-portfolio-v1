import axios from "axios";

const request = axios.create({
  baseURL: "https://nodejs-altwheed-portfolio-api-v1-1.onrender.com",
});

export default request;
