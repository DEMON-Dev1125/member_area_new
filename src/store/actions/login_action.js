import axios from "axios";

import * as types from "../types";
const LOCAL_URL = "http://localhost:3000";

export function userLogin(param) {
  return function (dispatch) {
    return axios
      .get(`${LOCAL_URL}/login.json`, param)
      .then(({ data }) => {
        dispatch({
          type: types.USER_LOGIN,
          Payload: data,
        });
      })
      .catch((error) => console.log(error));
  };
}
