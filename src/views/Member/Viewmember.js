import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Select, FormControl } from "@material-ui/core";
import SwitchDrop from "../../components/Switch";
import Togglebutton from "../../components/Togglebutton";
import "../../assets/css/login.css";

import avartarImg from '../../assets/img/member4@2x.png';

export default function Viewmember(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const Back_fun = () => {
    history.goBack();
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="avatar-img-hh">
            <img src={avartarImg} />
          </div>
          <div>
            <div className="Edit-ft3">Editar convite</div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
