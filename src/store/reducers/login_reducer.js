import * as types from "../types";

const initialState = [];
export default function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN:
      return { ...state, login_data: action?.Payload };
    default:
      return state;
  }
}
