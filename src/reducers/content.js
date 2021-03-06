import {
  ADD_MODULE,
  GET_ALLMODULEDATA,
  DELETE_MODULE,
  ADD_MODULECONTENT,
  GET_ALL_CONTENT,
  UPDATE_CONTENT,
  UPDATE_MODULE,
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
        item.collapseKey = false;
        item.moreButtonKey = false;
        item.editKey = false;

        temp.push(item);
      });
      return { ...state, allData: temp };

    case ADD_MODULECONTENT:
      return { ...state, contentData: payload.data };

    case UPDATE_MODULE:
      let temp1 = [];
      payload.data.modules.map((item) => {
        item.collapseKey = false;
        item.moreButtonKey = false;
        item.editKey = false;
        temp1.push(item);
      });
      return { ...state, allData: temp1 };
      
    case GET_ALL_CONTENT:
      return { ...state, allContentData: payload.data };

    case UPDATE_CONTENT:
      return { ...state, status: payload.data };

    default:
      return state;
  }
}
