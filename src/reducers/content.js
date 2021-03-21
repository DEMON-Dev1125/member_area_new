import { ADD_MODULE, GET_ALLMODULEDATA, DELETE_MODULE } from "../actions/types";

const initialState = {
  data: "",
  delData: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MODULE:
      return { ...state, data: payload.data };

    case DELETE_MODULE:
      return { ...state, delData: payload.data };

    case GET_ALLMODULEDATA:
      return { ...state, allData: payload };

    default:
      return state;
  }
}
