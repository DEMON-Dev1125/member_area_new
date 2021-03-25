import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const addModule = (name) => {
  return axios.post(
    API_URL + "/modules/add",
    { name },
    { headers: authHeader() }
  );
};

const deleteModule = (id) => {
  return axios.delete(API_URL + `/modules/delete/${id}`, {
    headers: authHeader(),
  });
};

const getAllModule = () => {
  return axios.get(API_URL + "/modules", { headers: authHeader() });
};

const addContent = (contentData) => {
  return axios.post(API_URL + "/contents/add", contentData, {
    headers: authHeader(),
  });
};

const getAllContent = () => {
  return axios.get(API_URL + "/contents", { headers: authHeader() });
};

const updateContent = (contents) => {
  return axios.post(
    API_URL + "/contents/edit",
    { contents },
    { headers: authHeader() }
  );
};

const updateModule = (modules) => {
  return axios.post(
    API_URL + "/modules/edit",
    { modules },
    { headers: authHeader() }
  );
};

export default {
  addModule,
  getAllModule,
  deleteModule,
  addContent,
  getAllContent,
  updateContent,
  updateModule,
};
