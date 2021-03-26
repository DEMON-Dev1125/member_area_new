import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import member from "./member";
import content from "./content";
import group from "./group";
import certificate from "./certificate";
import invite from './invite';
import improve from './improve';

export default combineReducers({
  auth,
  message,
  member,
  content,
  group,
  certificate,
  invite,
  improve,
});
