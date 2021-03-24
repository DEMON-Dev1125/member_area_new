import {
    ADD_INVITE,
  } from "./types";
  
  import InviteService from "../services/invite.service";
  
  export const addInvite = (sendData) => (dispatch) => {
    return InviteService.addModule(sendData).then((status) => {
      dispatch({
        type: ADD_INVITE,
        payload: status,
      });
    });
  };
  