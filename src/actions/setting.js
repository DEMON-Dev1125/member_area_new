import { EDIT_SETTING, GET_SETTINGDATA } from "./types";

import SettingService from "../services/setting.service";
import { store } from "react-notifications-component";

export const addData = () => (dispatch) => {};
export const editSetting = (
  history,
  memberAreaName,
  contactEmail,
  domain,
  lang,
  timezone,
  emailsubject,
  message
) => (dispatch) => {
  return SettingService.editSetting(
    memberAreaName,
    contactEmail,
    domain,
    lang,
    timezone,
    emailsubject,
    message
  ).then((status) => {
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
    }
    dispatch({
      type: EDIT_SETTING,
      payload: status,
    });
  });
};

export const getSettingData = () => (dispatch) => {
  return SettingService.getSettingData().then((allData) => {
    dispatch({
      type: GET_SETTINGDATA,
      payload: allData,
    });
  });
};
