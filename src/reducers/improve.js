import {
  GET_CONTENT_BY_ID,
  GET_MODULE_BY_ID,
  UPDATE_STATUS_BY_ID,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MODULE_BY_ID:
      return { ...state, moduleData: payload.data };

    case UPDATE_STATUS_BY_ID:
      return { ...state, status: payload.data };

    case GET_CONTENT_BY_ID:
      return { ...state, contentData: payload.data };

    default:
      return state;
  }
}
