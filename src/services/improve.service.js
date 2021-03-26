import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../config/config";
const API_URL = config.SERVER_URL;

const getModuleById = (moduleId) => {
  return axios.get(API_URL + `/contents/module/${moduleId}`, {
    headers: authHeader(),
  });
};

const updateStatusById = (itemStatusId) => {
  return axios.get(API_URL + `/contents/mark/${itemStatusId}`, {
    headers: authHeader(),
  });
};

const getContentById = (contentId) => {
  return axios.get(API_URL + `/contents/${contentId}`, {
    headers: authHeader(),
  });
};

const updateContentData = (id, data) => {
  console.log("module", module);
  return axios.post(
    API_URL + `/contents/edit/${id}`,
    data,
    { headers: authHeader() }
  );
};

const deleteContentData = (id) => {
  return axios.delete(API_URL + `/contents/delete/${id}`, {
    headers: authHeader(),
  });
};

export default {
  getModuleById,
  updateStatusById,
  getContentById,
  updateContentData,
  deleteContentData,
};
