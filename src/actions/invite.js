import {
  ADD_INVITE,
  ALL_INVITE_DATA,
  GET_INVITE,
  UPDATE_INVITE,
  DELETE_INVITE,
} from "./types";

import InviteService from "../services/invite.service";
import { store } from "react-notifications-component";

export const addInvite = (history, data) => (dispatch) => {
  return InviteService.addInvite(data).then((status) => {
    console.log("++++++", status);
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

      history.push("/main/invite");
    }
    dispatch({
      type: ADD_INVITE,
      payload: status,
    });
  });
};

export const allInviteData = () => (dispatch) => {
  return InviteService.allInviteData().then((inviteData) => {
    dispatch({
      type: ALL_INVITE_DATA,
      payload: inviteData.data,
    });
  });
};

export const getInvite = (id) => (dispatch) => {
  return InviteService.getInvite(id).then((inviteDataById) => {
    dispatch({
      type: GET_INVITE,
      payload: inviteDataById,
    });
  });
};

export const updateInviteData = (history, id, data) => (
  dispatch
) => {
  return InviteService.updateInviteData(id, data).then(
    (status) => {
      dispatch({
        type: UPDATE_INVITE,
        payload: status,
      });
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

        history.push("/main/invite");
      }
    }
  );
};

export const deleteInvite = (history, id) => (dispatch) => {
  return InviteService.deleteInvite(id).then((status) => {
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

      history.push("/main/invite");
    }
    dispatch({
      type: DELETE_INVITE,
      payload: status,
    });
  });
};

export const addInviteTest = (formData) => (dispatch) => {
  return InviteService.addInviteTest(formData).then((status) => {
    
  })
}
