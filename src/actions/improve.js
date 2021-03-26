import { GET_MODULE_BY_ID, UPDATE_STATUS_BY_ID, GET_CONTENT_BY_ID, UPDATE_CONTENT_DATA } from "./types";

import ImproveService from "../services/improve.service";
import { store } from "react-notifications-component";

export const getModuleById = (moduleId) => (dispatch) => {
  return ImproveService.getModuleById(moduleId).then((moduleData) => {
    dispatch({
      type: GET_MODULE_BY_ID,
      payload: moduleData,
    });
  });
};

export const updateStatusById = (itemStatusId) => (dispatch) => {
  return ImproveService.updateStatusById(itemStatusId).then((status) => {
    dispatch({
      type: UPDATE_STATUS_BY_ID,
      payload: status,
    });
  });
};

export const getContentById = (contentId) => (dispatch) => {
  return ImproveService.getContentById(contentId).then((contentData) => {
    dispatch({
      type: GET_CONTENT_BY_ID,
      payload: contentData,
    });
  });
};

export const updateContentData = (history, id, data) => (dispatch) => {
    return ImproveService.updateContentData(id, data).then((status) => {
        if (status.data.success === "success") {
          store.addNotification({
            title: "Success!",
            message: "Update Success",
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
            type: UPDATE_CONTENT_DATA,
            payload: status
        })
    })
}

export const deleteContentData = (history, id) => (dispatch) => {
    return ImproveService.deleteContentData(id).then((status) => {
        if (status.data.success === "success") {
          store.addNotification({
            title: "Success!",
            message: "Delete Success",
            type: "info",
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
            type: UPDATE_CONTENT_DATA,
            payload: status
        })
    })
}
