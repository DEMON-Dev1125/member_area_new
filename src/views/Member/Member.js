import react, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
import { ButtonGroup, Tab } from "@material-ui/core";

import "../../assets/css/login.css";

export default function Member() {
  const history = useHistory();
  const AddMember = () => {
    history.push("/main/member/addmember");
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Membros</div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button
                type="button"
                className="u-btn-group u-btn-color btn-ft1 d-flex align-items-center justify-content-center dropbtn w-100"
                onClick={AddMember}
              >
                <div className="mr-3">Nova membro</div>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <hr />
          <div className="container"></div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
