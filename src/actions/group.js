import {
  ADD_GROUP,
  EDIT_GROUP,
  DELETE_GROUP,
  GET_ALLGROUP,
  GET_GROUP_BY_ID,
} from "./types";

import GroupService from "../services/group.service";
import { store } from "react-notifications-component";

export const getAllGroup = () => (dispatch) => {
  return GroupService.getAllGroup().then((allData) => {
    dispatch({
      type: GET_ALLGROUP,
      payload: allData,
    });
  });
};

export const getGroupById = (id) => (dispatch) => {
  return GroupService.getGroupById(id).then((groupDataById) => {
    dispatch({
      type: GET_GROUP_BY_ID,
      payload: groupDataById,
    });
  });
};

export const addGroupData = (groupData) => (dispatch) => {
  return GroupService.addGroup(groupData).then((data) => {
    dispatch({
      type: ADD_GROUP,
      payload: data,
    });
  });
};

export const editGroup = (id, groupData) => (dispatch) => {
  return GroupService.editGroup(id, groupData).then((data) => {
    dispatch({
      type: EDIT_GROUP,
      payload: data,
    });
  });
};

export const deleteGroup = (history, id) => (dispatch) => {
  return GroupService.deleteGroup(id).then((status) => {
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

      history.push("/main/group");
    }
    dispatch({
      type: DELETE_GROUP,
      payload: status,
    });
  });
};
