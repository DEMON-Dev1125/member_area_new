import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import "../../assets/css/login.css";

export default function Community() {
  const history = useHistory();

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Comunidade</div>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
