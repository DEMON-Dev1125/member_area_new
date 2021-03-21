import axios from "axios";

// server url
const API_URL = "http://192.168.107.163:5000/api";

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
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
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
