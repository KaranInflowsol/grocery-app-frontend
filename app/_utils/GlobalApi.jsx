const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCatgory = () => axiosClient.get("/categories?populate=*");

export default {
  getCatgory,
};
