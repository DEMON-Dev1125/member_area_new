import { EDIT_CERTIFICATE, GET_ALLCERTIFICATE } from "../actions/types";

import CertificateServic from "../services/certificate.service";

export const getAllCertificate = () => (dispatch) => {
  return CertificateServic.getAllCertificate().then((allData) => {
    dispatch({
      type: GET_ALLCERTIFICATE,
      payload: allData,
    });
  });
};
export const editCertificate = () => (dispatch) => {
  return CertificateServic.editCertificate().then((editData) => {
    dispatch({
      type: EDIT_CERTIFICATE,
      payload: allData,
    });
  });
};
