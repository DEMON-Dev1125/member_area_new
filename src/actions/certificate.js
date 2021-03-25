import {
  EDIT_CERTIFICATE,
  GET_ALLCERTIFICATE,
  GET_PREVDATA,
} from "../actions/types";

import CertificateService from "../services/certificate.service";

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

export const editCertificate = (id, contentDetail) => (dispatch) => {
  return CertificateService.editCertificate(id, contentDetail).then(
    (editData) => {
      dispatch({
        type: EDIT_CERTIFICATE,
        payload: editData,
      });
    }
  );
};
