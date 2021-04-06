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

const addMember = (group, name, email, membertype) => {
  return axios.post(
    API_URL + "/members/add",
    { group, name, email, membertype },
    { headers: authHeader() }
  );
};

const editMember = (
  group,
  memberId,
  name,
  email,
  password,
  confirmPassword,
  membertype,
  blocked
) => {
  return axios.post(
    API_URL + `/members/edit/${memberId}`,
    { group, name, email, password, confirmPassword, membertype, blocked },
    { headers: authHeader() }
  );
};

const deleteMember = (id) => {
  return axios.delete(API_URL + `/members/delete/${id}`, {
    headers: authHeader(),
  });
};

const filterMember = (name, group, pageNum, count, membertype) => {
  return axios.post(
    API_URL + "/members/filter",
    { name, group, pageNum, count, membertype },
    { headers: authHeader() }
  );
};

export default {
  addMember,
  editMember,
  deleteMember,
  getAllMember,
  getMemberById,
  filterMember,
};
