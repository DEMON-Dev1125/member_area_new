import axios from "axios";
import authheader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getSettingData = () => {
  return axios.get(API_URL + "/setting", { headers: authheader() });
};

const editSetting = () => {
  return axios.post(API_URL + "/setting/edit", { headers: authheader() });
};

export default {
  getSettingData,
  editSetting,
};
