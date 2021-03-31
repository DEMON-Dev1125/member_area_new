import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";
import { store } from "react-notifications-component";

export const register = (name, username, email, password, confirmPassword) => (
  dispatch
) => {
  return AuthService.register(
    name,
    username,
    email,
    password,
    confirmPassword
  ).then(
    (response) => {
      console.log(response.response);
      if (response.data["success"]) {
        store.addNotification({
          title: "Success!",
          message: "Register" + " " + response.data["success"],
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
      }
    //   dispatch({
    //     type: REGISTER_SUCCESS,
    //   });

    //   dispatch({
    //     type: SET_MESSAGE,
    //     payload: response.data.message,
    //   });

    //   return Promise.resolve();
    // },
    // (error) => {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

    //   dispatch({
    //     type: REGISTER_FAIL,
    //   });

    //   dispatch({
    //     type: SET_MESSAGE,
    //     payload: message,
    //   });

    //   return Promise.reject();
    return response;
    }
  )
  .catch((err) => {
    if (err.response.data.message) {
      console.log(err.response.data.message);
      store.addNotification({
        title: "Error",
        message: err.response.data.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
  });
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then((data) => {
    if (data.success) {
      store.addNotification({
        title: "Success!",
        message: "Login" + " " + data.success,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    } else if (data.response.data.message) {
      store.addNotification({
        title: "Errors!",
        message: data.response.data.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: data },
    });

    return data;
  })
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
