import { EDIT_APPEARANCE, GET_APPEARANCE } from "./types";

import AppearanceService from "../services/appearance.service";
import { store } from "react-notifications-component";

export const editAppearance = (
  data
) => (dispatch) => {
  return AppearanceService.editAppearance(
    data
  ).then((status) => {
    if (status.data.length !== 0) {
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
    }
    dispatch({
      type: EDIT_APPEARANCE,
      payload: status,
    });
  });
};

export const getAppearance = () => (dispatch) => {
  return AppearanceService.getAppearance().then((allData) => {
    dispatch({
      type: GET_APPEARANCE,
      payload: allData,
    });
  });
};
