import {
  ADD_MODULE,
  GET_ALLMODULEDATA,
  DELETE_MODULE,
  GET_ALL_CONTENT,
  UPDATE_CONTENT,
  UPDATE_MODULE,
} from "./types";

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

export const getAllContent = () => (dispatch) => {
  return ContentService.getAllContent().then((allContentData) => {
    dispatch({
      type: GET_ALL_CONTENT,
      payload: allContentData,
    });
  });
};

export const updateContent = (contents) => (dispatch) => {
  return ContentService.updateContent(contents).then((status) => {
    dispatch({
      type: UPDATE_CONTENT,
      payload: status,
    });
  });
};

export const updateModule = (modules) => (dispatch) => {
  return ContentService.updateModule(modules).then((updateData) => {
    dispatch({
      type: UPDATE_MODULE,
      payload: updateData,
    });
  });
};
