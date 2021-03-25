import { EDIT_SETTING, GET_SETTINGDATA } from "./types";

import SettingService from "../services/setting.service";

export const editSetting = (settingData) => (dispatch) => {
  return SettingService.editSetting(settingData).then((data) => {
    dispatch({
      type: EDIT_SETTING,
      payload: data,
    });
  });
};

export const getSettingData = () => (dispatch) => {
  return SettingService.editSetting().then((allData) => {
    dispatch({
      type: GET_SETTINGDATA,
      payload: allData,
    });
  });
};
