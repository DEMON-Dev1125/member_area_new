import {
  ADD_MODULE,
  GET_ALLMODULEDATA,
  DELETE_MODULE,
  ADD_MODULECONTENT,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MODULE:
      return { ...state, data: payload.data };

    case DELETE_MODULE:
      return { ...state, delData: payload.data };

    case GET_ALLMODULEDATA:
      let temp = [];
      payload.data.modules.map((item) => {
        item.ruleKey = 0;
        temp.push(item);
      });
      return { ...state, allData: temp };

    case ADD_MODULECONTENT:
      return { ...state, contentData: payload.data };

    default:
      return state;
  }
}
