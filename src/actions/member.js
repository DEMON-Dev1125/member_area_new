import { ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER, GET_ALLMEMBER } from "./types";

import MemberService from "../services/member.service";

export const getAllMemever = () => (dispatch) => {
  return MemberService.getAllMemever().then((allData) => {
    dispatch({
      type: GET_ALLMEMBER,
      payload: allData,
    });
  });
};

export const addMember = () => (dispatch) => {
  return MemberService.addMember().then((data) => {
    dispatch({
      type: ADD_MEMBER,
      payload: data,
    });
  });
};

export const editMember = (id) => (dispatch) => {
  return ContentService.editMember(id).then((data) => {
    dispatch({
      type: EDIT_MEMBER,
      payload: data,
    });
  });
};

export const deleteMember = (id) => (dispatch) => {
  return ContentService.deleteMember(id).then((data) => {
    dispatch({
      type: DELETE_MEMBER,
      payload: data,
    });
  });
};
