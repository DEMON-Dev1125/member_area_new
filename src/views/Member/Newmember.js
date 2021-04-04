import React, { useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Select, FormControl, MenuItem } from "@material-ui/core";
import SwitchDrop from "../../components/Switch";
import "../../assets/css/login.css";

import { addMember } from '../../actions/member';

const InfoIcon = "info-icon.svg";

export default function Newmember() {
  const [membertype, setmembertype] = useState(false);
  const [dropType, setDropType] = useState(10);

  const [name, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const Back_fun = () => {
    history.goBack();
  };
  
  const onChangeSwitch = (type) => {
    console.log(type);
    setmembertype(type);
  };

  const HandleDropType = (e) => {
    console.log(e.target.value);
    setDropType(e.target.value);
  };

  const onSave = () => {
    let memType = membertype ? "collaborator" : "student";
    dispatch(addMember(history, name, email, memType));
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="Edit-ft1 mt-5">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2">Nova membro</div>
          <div className="mt-5">
            <div className="Edit-ft3">Nome completo</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="Nome completo"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Email</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <img src={require(`../../assets/img/${InfoIcon}`).default} />
            <span className="ml-2">
              O e-mail e senha serão enviados para o e-mail do usuário após o
              cadastro.
            </span>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 mb-3">Tipo de membro</div>
            <SwitchDrop onChange={onChangeSwitch} value={membertype} />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">
              {membertype ? "Perfil de acesso" : "Turma"}
            </div>
            {membertype ? (
              <div className="mt-1 position-relative ht-45 new_group_select">
                <FormControl
                  variant="outlined"
                  width="100%"
                >
                  <Select
                    native
                    defaultValue="Aula"
                    id="grouped-native-select"
                    onChange={HandleDropType}
                    label="class"
                  >
                    <option value={10}>Administrador</option>
                    <option value={20}>Atendimento</option>
                    <option value={30}>Moderador</option>
                  </Select>
                </FormControl>
              </div>
            ) : (
              <div className="mt-1 position-relative ht-45 new_group_select">
                <FormControl
                  variant="outlined"
                  width="100%"
                >
                  <Select
                    native
                    value={dropType}
                    id="grouped-native-select"
                    onChange={HandleDropType}
                    label="class"
                  >
                    <option value={10}>Turma A (Padrão)</option>
                    <option value={20}>Turma B</option>
                  </Select>
                </FormControl>
              </div>
            )}
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100" onClick={onSave}>Adicionar membro</button>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button className="but_cancel w-100" onClick={Back_fun}>Cancelar</button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
