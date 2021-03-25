import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getAllCertificate = () => {
  return axios.get(API_URL + "/certificates", { headers: authHeader() });
};

const getPrevData = (id) => {
  return axios.get(API_URL + `/certificates/${id}`, { headers: authHeader() });
};

const editCertificate = (id, contentDetail) => {
  return axios.post(
    API_URL + `/certificates/edit/${id}`,
    { contentDetail },
    {
      headers: authHeader(),
    }
  );
};

export default {
  getAllCertificate,
  editCertificate,
  getPrevData,
};
