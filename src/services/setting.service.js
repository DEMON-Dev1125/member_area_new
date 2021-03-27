import axios from "axios";
import authheader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getSettingData = () => {
  return axios.get(API_URL + "/settings", { headers: authheader() });
};

const editSetting = (memberareaname, contactemail, domain, lang, timezone, emailsubject, message) => {
  return axios.post(API_URL + "/settings/edit", {memberareaname, contactemail, domain, lang, timezone, emailsubject, message}, { headers: authheader() });
};

export default {
  getSettingData,
  editSetting,
};
