import {
  EDIT_CERTIFICATE,
  GET_ALLCERTIFICATE,
  GET_PREVDATA,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALLCERTIFICATE:
      return { ...state, allData: payload.data };

    case EDIT_CERTIFICATE:
      return { ...state, editData: payload.data };

    case GET_PREVDATA:
      return { ...state, prevData: payload.data };

    default:
      return state;
  }
}
