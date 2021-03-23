import { EDIT_CERTIFICATE, GET_ALLCERTIFICATE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALLCERTIFICATE:
      return { ...state, allData: payload.data };

    case EDIT_CERTIFICATE:
      return { ...state, editData: payload.data };

    default:
      return state;
  }
}
