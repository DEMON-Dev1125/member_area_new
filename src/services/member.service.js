import axios from "axios";

// server url
const API_URL = "http://192.168.107.163:5000/api/member";

const add = (name, email, membertype, rolwtype) => {
  return axios.post(API_URL + "add", {
    name,
    email,
    membertype,
    roletype,
  });
};
