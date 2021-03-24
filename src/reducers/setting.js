import { EDIT_SETTING, GET_SETTINGDATA } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_SETTING:
      return { ...state, data: payload.data };

    case GET_SETTINGDATA:
      return { ...state, allData: payload.data };

    default:
      return state;
  }
}
