import axios from "axios";
import authHeader from "./auth-header";
//sever url
const API_URL = "http://192.168.107.163:5000/api";

const addInvite = (data) => {
  return axios.post(
    API_URL + "/invites/add",
    data,
    { headers: authHeader() }
  );
};

const allInviteData = () => {
  return axios.get(API_URL + "/invites", { headers: authHeader() });
};

const getInvite = (id) => {
  return axios.get(API_URL + `/invites/${id}`, { headers: authHeader() });
};

const updateInviteData = (id, data) => {
  return axios.post(API_URL + `/invites/edit/${id}`, data, { headers: authHeader() });
}

const deleteInvite = (id) => {
  return axios.delete(API_URL + `/invites/delete/${id}`, { headers: authHeader() });
}

const addInviteTest = (formData) => {
  console.log(formData);
  return axios.post(API_URL + "/contents/addfile",formData, { headers: authHeader() });
}

export default {
  addInvite,
  allInviteData,
  getInvite,
  deleteInvite,
  updateInviteData,
  addInviteTest,
};
