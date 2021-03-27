import axios from "axios";
import authheader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getAppearance = () => {
  return axios.get(API_URL + "/appearances", { headers: authheader() });
};

const editAppearance = (data) => {
  return axios.post(
    API_URL + "/appearances/edit",
    data,
    { headers: authheader() }
  );
};

export default {
  getAppearance,
  editAppearance,
};
