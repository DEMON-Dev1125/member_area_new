import { ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER, GET_MEMBER } from "./types";

import MemberService from "../services/member.service";
import { store } from "react-notifications-component";

export const add = (name, email, membertype, rolwtype) => (dispatch) => {
  return MemberService.add(name, email, membertype, rolwtype).then();
};
