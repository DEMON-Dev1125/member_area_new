import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import member from "./member";
import content from "./content";
import invite from './invite';

export default combineReducers({
  auth,
  message,
  member,
  content,
  invite,
});
