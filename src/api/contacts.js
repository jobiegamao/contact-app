import axios from "axios"; //npm i --save axios

export default axios.create({
  baseURL: "http://localhost:3000/",
});