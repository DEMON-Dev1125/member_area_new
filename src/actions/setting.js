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
  )
    .then((status) => {
      if (status.data.settings.length !== 0) {
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
      // dispatch({
      //   type: GET_SETTINGDATA,
      //   payload: status,
      // });
    })
    .catch((err) => {
      if (err.response.data.message) {
        store.addNotification({
          title: "Error!",
          message: err.response.data.message,
          type: "danger",
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
    });
};

export const getSettingData = () => (dispatch) => {
  return SettingService.getSettingData().then((allData) => {
    console.log(allData);
    dispatch({
      type: GET_SETTINGDATA,
      payload: allData,
    });
  });
};
