import { ADD_MODULE, GET_ALLMODULEDATA, DELETE_MODULE } from "./types";

import ContentService from "../services/content.service";

export const addModule = (name) => (dispatch) => {
  return ContentService.addModule(name).then((data) => {
    dispatch({
      type: ADD_MODULE,
      payload: data,
    });
  });
};

export const deleteModule = (id) => (dispatch) => {
  return ContentService.deleteModule(id).then((delData) => {
    dispatch({
      type: DELETE_MODULE,
      payload: delData,
    });
  });
};

export const getAllModule = () => (dispatch) => {
  return ContentService.getAllModule().then((allData) => {
    dispatch({
      type: GET_ALLMODULEDATA,
      payload: allData,
    });
  });
};
