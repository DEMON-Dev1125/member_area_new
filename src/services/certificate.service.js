import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getAllCertificate = () => {
  return axios.get(API_URL + "/certificates", { headers: authHeader() });
};

const editCertificate = (id) => {
  return (
    axios.post(API_URL + "/certificate/edit"), { id }, { headers: authHeader() }
  );
};

export default {
  getAllCertificate,
  editCertificate,
};
