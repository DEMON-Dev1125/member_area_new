import {
  ADD_MEMBER,
  EDIT_MEMBER,
  DELETE_MEMBER,
  GET_MEMBER,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case ADD_MEMBER:
    //   return { message: payload };

    default:
      return state;
  }
}
