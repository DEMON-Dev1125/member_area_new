import {
  ADD_MEMBER,
  EDIT_MEMBER,
  DELETE_MEMBER,
  GET_ALLMEMBER,
  GET_MEMBER_BY_ID,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MEMBER:
      return { ...state, data: payload.data };

    case EDIT_MEMBER:
      return { ...state, editData: payload.data };

    case DELETE_MEMBER:
      return { ...state, delData: payload.data };

    case GET_ALLMEMBER:
      return { ...state, allData: payload.data };

    case GET_MEMBER_BY_ID:
      return { ...state, memberData: payload.data };

    default:
      return state;
  }
}
