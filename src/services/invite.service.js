import axios from "axios";
import authHeader from "./auth-header";
//sever url
const API_URL = "http://192.168.107.163:5000/api";

const addModule = (title, description) => {
  return axios.post(
    API_URL + "/invites/add",
    { title, description },
    { headers: authHeader() }
  );
};

const allInviteData = () => {
  return axios.get(API_URL + "/invites", { headers: authHeader() });
};

const getInvite = (id) => {
  return axios.get(API_URL + `/invites/${id}`, { headers: authHeader() });
};

const updateInviteData = (id, title, description) => {
  return axios.post(API_URL + `/invites/edit/${id}`, { title, description }, { headers: authHeader() });
}

const deleteInvite = (id) => {
  return axios.delete(API_URL + `/invites/delete/${id}`, { headers: authHeader() });
}

export default {
  addModule,
  allInviteData,
  getInvite,
  deleteInvite,
  updateInviteData,
};
