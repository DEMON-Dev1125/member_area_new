import {
  ADD_MEMBER,
  EDIT_MEMBER,
  DELETE_MEMBER,
  GET_ALLMEMBER,
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

    default:
      return state;
  }
}
