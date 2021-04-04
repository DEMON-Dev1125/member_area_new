import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllCertificate } from "../../actions/certificate";

import "../../assets/css/login.css";
import "../../assets/css/certificate.css";

const ImageName = "Certificado.png";
const MemberImg1 = "member1.png";
const MemberImg2 = "member2.png";
const MemberImg3 = "member3.png";

export default function Certificate() {
  useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const EditCertificate = (item) => {
    const certificateId = item.id;
    history.push({
      pathname: "/main/certificate/editcertificate",
      state: { id: certificateId },
    });
  };
  const showMember = () => {
    // setOpen(true);
  };

  useEffect(() => {
    dispatch(getAllCertificate());
  }, []);

  const certificateData = useSelector((state) => state.certificate.allData);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2 mt-1">Certificado</div>
          <hr />
          {certificateData &&
            certificateData.certificates.map((item, key) => {
              const Detail = item.contentDetail;
              const detailData = Detail.replace(/(<([^>]+)>)/gi, "");
              return (
                <div
                  key={key}
                  className="group-content mt-3"
                  onClick={() => EditCertificate(item)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <img
                        src={require(`../../assets/img/${ImageName}`).default}
                        width="100%"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5 p-5">
                      <div>
                        <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
                        <div className="mt-1 con-ft5">{detailData}</div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-sm-6 col-6">
                          <div className="Edit-ft1">GRADUADOS</div>
                          <div
                            className="mt-1 position-relative show_member"
                            style={{ cursor: "pointer" }}
                            onClick={showMember}
                          >
                            <img
                              className="position-absolute"
                              src={
                                require(`../../assets/img/${MemberImg1}`)
                                  .default
                              }
                            />
                            <img
                              className="member2"
                              src={
                                require(`../../assets/img/${MemberImg2}`)
                                  .default
                              }
                            />
                            <img
                              className="member3"
                              src={
                                require(`../../assets/img/${MemberImg3}`)
                                  .default
                              }
                            />
                            <div className="member4">+15</div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-6 pt-3">
                          <button type="button" className="btn btn-primary">
                            Exportar lista
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
