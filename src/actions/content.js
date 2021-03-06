import {
  ADD_MODULE,
  GET_ALLMODULEDATA,
  DELETE_MODULE,
  ADD_MODULECONTENT,
  GET_ALL_CONTENT,
  UPDATE_CONTENT,
  UPDATE_MODULE,
} from "./types";

import ContentService from "../services/content.service";
import { store } from "react-notifications-component";

export const addModule = (name) => (dispatch) => {
  return ContentService.addModule(name).then((data) => {
    dispatch({
      type: ADD_MODULE,
      payload: data,
    });
  });
};

export const moduleNameEdit = (id, name, order) => (dispatch) => {
  return ContentService.editModuleName(id, name, order).then((status) => {
    // dispatch({
    //   type:
    // })
    console.log(status);
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

export const addContent = (history, contentData) => (dispatch) => {
  return ContentService.addContent(contentData).then((status) => {
    if (status.data.success === "success") {
      store.addNotification({
        title: "Success!",
        message: "Save Success",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });

      history.push("/main/content");
    }
    dispatch({
      type: ADD_MODULECONTENT,
      payload: status,
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
