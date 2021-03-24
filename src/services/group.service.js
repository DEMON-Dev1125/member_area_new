import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getAllGroup = () => {
  return axios.get(API_URL + "/groups", { headers: authHeader() });
};

const addGroup = (name) => {
  return axios.post(
    API_URL + "/group/add",
    { name },
    { headers: authHeader() }
  );
};

const editGroup = (id) => {
  return axios.post(API_URL + `/group/edit/${id}`, { headers: authHeader() });
};

const deleteGroup = (id) => {
  return axios.delete(API_URL + `/group/delete/${id}`, {
    headers: authHeader(),
  });
};

export default {
  addGroup,
  editGroup,
  deleteGroup,
  getAllGroup,
};
