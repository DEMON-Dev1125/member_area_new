import {
  ADD_MEMBER,
  EDIT_MEMBER,
  DELETE_MEMBER,
  GET_ALLMEMBER,
  GET_MEMBER_BY_ID,
} from "./types";

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

export const getMemberById = (memberId) => (dispatch) => {
  return MemberService.getMemberById(memberId).then((memberData) => {
    dispatch({
      type: GET_MEMBER_BY_ID,
      payload: memberData,
    });
  });
};

export const addMember = (history, group, name, email, membertype) => (
  dispatch
) => {
  return MemberService.addMember(group, name, email, membertype).then(
    (status) => {
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
    }
  );
};

export const editMember = (
  history,
  groupId,
  memberId,
  name,
  email,
  password,
  confirmPassword,
  membertype,
  blocked
) => (dispatch) => {
  return MemberService.editMember(
    groupId,
    memberId,
    name,
    email,
    password,
    confirmPassword,
    membertype,
    blocked
  ).then((status) => {
    if (status.data.success === "success") {
      store.addNotification({
        title: "Success!",
        message: "Edit Success",
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
      type: EDIT_MEMBER,
      payload: status,
    });
  });
};

export const deleteMember = (history, id) => (dispatch) => {
  return MemberService.deleteMember(id).then((status) => {
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

      history.push("/main/member");
    }
    dispatch({
      type: DELETE_MEMBER,
      payload: status,
    });
  });
};

export const getFilterMember = (name, group, pageNum, count, memberType) => (dispatch) => {
  return MemberService.filterMember(name, group, pageNum, count, memberType).then((data) => {
    dispatch({
      type: GET_ALLMEMBER,
      payload: data,
    });
  });
};
