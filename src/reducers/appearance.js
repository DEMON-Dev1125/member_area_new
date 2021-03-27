import { EDIT_APPEARANCE, GET_APPEARANCE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_APPEARANCE:
      return { ...state, data: payload.data };

    case GET_APPEARANCE:
      return { ...state, allData: payload.data };

    default:
      return state;
  }
}
