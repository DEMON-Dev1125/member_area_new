import axios from "axios";
import authHeader from "./auth-header";
//sever url
const API_URL = "http://192.168.107.163:5000/api";

const addModule = (sendData) => {
  return axios.post(
    API_URL + "/invite/add",
    { sendData },
    { headers: authHeader() }
  );
};

export default {
  addModule,
};
