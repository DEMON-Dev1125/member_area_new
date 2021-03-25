import { ADD_GROUP, EDIT_GROUP, DELETE_GROUP, GET_ALLGROUP } from "./types";

import GroupService from "../services/group.service";

export const getAllGroup = () => (dispatch) => {
  return GroupService.getAllGroup().then((allData) => {
    dispatch({
      type: GET_ALLGROUP,
      payload: allData,
    });
  });
};

export const addGroup = () => (dispatch) => {
  return GroupService.addGroup().then((data) => {
    dispatch({
      type: ADD_GROUP,
      payload: data,
    });
  });
};

export const editGroup = (id) => (dispatch) => {
  return GroupService.addGroup(id).then((data) => {
    dispatch({
      type: EDIT_GROUP,
      payload: data,
    });
  });
};

export const deleteGroup = (id) => (dispatch) => {
  return GroupService.deleteGroup(id).then((data) => {
    dispatch({
      type: DELETE_GROUP,
      payload: data,
    });
  });
};
