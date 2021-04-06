import {
  EDIT_CERTIFICATE,
  GET_ALLCERTIFICATE,
  GET_PREVDATA,
} from "../actions/types";

import CertificateService from "../services/certificate.service";
import { store } from "react-notifications-component";

export const getAllCertificate = () => (dispatch) => {
  return CertificateService.getAllCertificate().then((allData) => {
    dispatch({
      type: GET_ALLCERTIFICATE,
      payload: allData,
    });
  });
};

export const getPrevData = (id) => (dispatch) => {
  return CertificateService.getPrevData(id).then((prevData) => {
    dispatch({
      type: GET_PREVDATA,
      payload: prevData,
    });
  });
};

export const editCertificate = (history, id, contentDetail) => (dispatch) => {
  return CertificateService.editCertificate(id, contentDetail).then(
    (editData) => {
      if (editData.data.success === "success") {
        store.addNotification({
          title: "Success!",
          message: "Edit Success",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
  
        history.push("/main/certificate");
      }
      dispatch({
        type: EDIT_CERTIFICATE,
        payload: editData,
      });
    }
  );
};
