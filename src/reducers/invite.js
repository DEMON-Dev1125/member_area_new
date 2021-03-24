import { ADD_INVITE } from "../actions/types";

const initialState = {
  data: "",
  delData: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_INVITE:
      return { ...state, status: payload.status };

    default:
      return state;
  }
}
