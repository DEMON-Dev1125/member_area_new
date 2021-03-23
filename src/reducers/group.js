import {
  ADD_GROUP,
  EDIT_GROUP,
  DELETE_GROUP,
  GET_ALLGROUP,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_GROUP:
      return { ...state, data: payload.data };

    case EDIT_GROUP:
      return { ...state, editData: payload.data };

    case DELETE_GROUP:
      return { ...state, delData: payload.data };

    case GET_ALLGROUP:
      return { ...state, allData: payload.data };

    default:
      return state;
  }
}
