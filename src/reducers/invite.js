import { ADD_INVITE, ALL_INVITE_DATA, GET_INVITE, DELETE_INVITE, UPDATE_INVITE } from "../actions/types";

const initialState = {
  data: "",
  delData: "",
  inviteDataById: [],
  inviteData: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_INVITE:
      return { ...state, status: payload.data };

    case ALL_INVITE_DATA:
      return { ...state, inviteData: payload.invites };

    case GET_INVITE:
      return { ...state, inviteDataById: payload.data };

    case UPDATE_INVITE:
        return { ...state, status: payload.data };

    case DELETE_INVITE:
      return { ...state, status: payload.data };

    default:
      return state;
  }
}
