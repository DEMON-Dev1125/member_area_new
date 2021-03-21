import { ADD_MODULE, GET_ALLMODULEDATA, DELETE_MODULE } from "./types";

import ContentService from "../services/content.service";

export const add = (name) => (dispatch) => {
  return ContentService.add(name).then((data) => {
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

export const getAll = () => (dispatch) => {
  return ContentService.getAll().then((allData) => {
    dispatch({
      type: GET_ALLMODULEDATA,
      payload: allData,
    });
  });
};
