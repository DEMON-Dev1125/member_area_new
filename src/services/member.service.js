import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getAllMember = () => {
  return axios.get(API_URL + "/members", { headers: authHeader() });
};

const addMember = (fullname, email, membertype) => {
  return axios.post(
    API_URL + "/members/add",
    { fullname, email, email, membertype},
    { headers: authHeader() }
  );
};

const editMember = (id) => {
  return axios.post(API_URL + `/member/edit/${id}`, { headers: authHeader() });
};

const deleteMember = (id) => {
  return axios.delete(API_URL + `/member/delete/${id}`, {
    headers: authHeader(),
  });
};

export default {
  addMember,
  editMember,
  deleteMember,
  getAllMember,
};
