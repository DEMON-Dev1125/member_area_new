import React, { useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import SwitchDrop from "../../components/Switch";
import "../../assets/css/login.css";
const InfoIcon = "info-icon.svg";

export default function Newmember() {
  const [memberType, setMemberType] = useState(false);
  const [dropType, setDropType] = useState(10);
  const history = useHistory();
  const onChangeSwitch = (type) => {
    setMemberType(type);
  };
  const HandleDropType = (e) => {
    console.log(e.target.value);
    setDropType(e.target.value);
  };
  const Back_fun = () => {
    history.goBack();
  };
  const NewMember = () => {
    alert("get new memeber name");
  };
  const NewMail = () => {
    alert("get new memeber mail");
  };
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
              onChange={NewMember}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Email</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="E-mail"
              onChange={NewMail}
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
            <div className="Edit-ft3">Tipo de membro</div>
            <SwitchDrop onChange={onChangeSwitch} value={memberType} />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">
              {memberType ? "Perfil de acesso" : "Turma"}
            </div>
            {memberType ? (
              <div className="mt-1 position-relative ht-45 new_group_select">
                <FormControl variant="outlined">
                  {" "}
                  <Select
                    value={dropType}
                    onChange={HandleDropType}
                    label="class"
                  >
                    <MenuItem value={10}>Administrador</MenuItem>
                    <MenuItem value={20}>Atendimento</MenuItem>
                    <MenuItem value={30}>Moderador</MenuItem>
                  </Select>
                </FormControl>
              </div>
            ) : (
              <div className="mt-1 position-relative ht-45 new_group_select">
                <FormControl variant="outlined">
                  <Select
                    value={dropType}
                    onChange={HandleDropType}
                    label="access"
                  >
                    <MenuItem value={10}>Turma A (Padrão)</MenuItem>
                    <MenuItem value={20}>Turma B</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100">Adicionar membro</button>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button className="but_cancel w-100">Cancelar</button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
