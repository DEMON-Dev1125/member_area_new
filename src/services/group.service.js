import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getAllGroup = () => {
  return axios.get(API_URL + "/groups", { headers: authHeader() });
};

const addGroup = (groupData) => {
  return axios.post(
    API_URL + "/groups/add",
    groupData,
    { headers: authHeader() }
  );
};

const editGroup = (id) => {
  return axios.post(API_URL + `/groups/edit/${id}`, { headers: authHeader() });
};

const deleteGroup = (id) => {
  return axios.delete(API_URL + `/groups/delete/${id}`, {
    headers: authHeader(),
  });
};

export default {
  addGroup,
  editGroup,
  deleteGroup,
  getAllGroup,
};
