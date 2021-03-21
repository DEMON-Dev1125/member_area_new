import axios from "axios";
import authHeader from "./auth-header";
//sever url
const API_URL = "http://192.168.107.163:5000/api";

const add = (name) => {
  return axios.post(
    API_URL + "/modules/add",
    { name },
    { headers: authHeader() }
  );
};

const getAll = () => {
  return axios.get(API_URL + "/modules", { headers: authHeader() });
};

const deleteModule = (id) => {
  return axios.delete(API_URL + `/modules/delete/${id}`, {
    headers: authHeader(),
  });
};

export default {
  add,
  getAll,
  deleteModule,
};
