import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
import { get } from "jquery";
const API_URL = config.SERVER_URL;

const getAllMember = () => {
  return axios.get(API_URL + "/members", { headers: authHeader() });
};

const getMemberById = (memberId) => {
  return axios.get(API_URL + `/members/${memberId}`, { headers: authHeader() });
};

const addMember = (name, email, membertype) => {
  return axios.post(
    API_URL + "/members/add",
    { name, email, email, membertype },
    { headers: authHeader() }
  );
};

const editMember = (
  memberId,
  name,
  email,
  password,
  confirmPassword,
  memberType
) => {
  return axios.post(
    API_URL + `/members/edit/${memberId}`,
    { name, email, password, confirmPassword, memberType },
    { headers: authHeader() }
  );
};

const deleteMember = (id) => {
  return axios.delete(API_URL + `/members/delete/${id}`, {
    headers: authHeader(),
  });
};

export default {
  addMember,
  editMember,
  deleteMember,
  getAllMember,
  getMemberById,
};
