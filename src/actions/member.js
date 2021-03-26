import { ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER, GET_ALLMEMBER } from "./types";

import MemberService from "../services/member.service";
import { store } from "react-notifications-component";

export const getAllMember = () => (dispatch) => {
  return MemberService.getAllMember().then((allData) => {
    dispatch({
      type: GET_ALLMEMBER,
      payload: allData,
    });
  });
};

export const addMember = (history, fullname, email, membertype) => (dispatch) => {
  return MemberService.addMember(fullname, email, membertype).then((status) => {
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

      history.push("/main/member");
    }
    dispatch({
      type: ADD_MEMBER,
      payload: status,
    });
  });
};

export const editMember = (id) => (dispatch) => {
  return MemberService.editMember(id).then((data) => {
    dispatch({
      type: EDIT_MEMBER,
      payload: data,
    });
  });
};

export const deleteMember = (id) => (dispatch) => {
  return MemberService.deleteMember(id).then((data) => {
    dispatch({
      type: DELETE_MEMBER,
      payload: data,
    });
  });
};
