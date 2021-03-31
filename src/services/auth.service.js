import axios from "axios";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const register = (name, username, email, password, confirmPassword) => {
  return axios.post(API_URL + "/users/signup", {
    name,
    username,
    email,
    password,
    confirmPassword,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/users/signin", {
      email,
      password,
    })
    .then((response) => {
      console.log("service", response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
