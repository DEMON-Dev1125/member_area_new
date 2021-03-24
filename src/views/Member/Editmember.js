import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Select, FormControl } from "@material-ui/core";
import SwitchDrop from "../../components/Switch";
import Togglebutton from "../../components/Togglebutton";
import "../../assets/css/login.css";

const InfoIcon = "info-icon.svg";

export default function EditContent() {
  const history = useHistory();
  const [memberType, setMemberType] = useState(false);
  const [dropType, setDropType] = useState(10);

  const Back_fun = () => {
    history.goBack();
  };
  const onChangeSwitch = (type) => {
    setMemberType(type);
  };
  const HandleDropType = (e) => {
    console.log(e.target.value);
    setDropType(e.target.value);
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
          <div className="Edit-ft2">Editar membro</div>
          <div className="mt-5">
            <div className="Edit-ft3">Nome completo</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="Editar membro"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Email</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="joaolimaduarte6@gmail.com"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Nova senha</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="Nova senha"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Confirme nova senha</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="Confirme nova senha"
            />
          </div>
          <div className="mt-5">
            <img src={require(`../../assets/img/${InfoIcon}`).default} />
            <span className="ml-2">
              Caso preencha uma nova senha, ao salvar a edição será enviado um
              e-mail informando a nova senha para o membro.
            </span>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 mb-3">Tipo de membro</div>
            <SwitchDrop onChange={onChangeSwitch} value={memberType} />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">
              {memberType ? "Perfil de acesso" : "Turma"}
            </div>
            {memberType ? (
              <div className="mt-1 position-relative ht-45 new_group_select">
                <FormControl variant="outlined" width="100%">
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
                <FormControl variant="outlined" width="100%">
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
          <div className="mt-5 d-flex">
            <Togglebutton />
            <div className="ml-4">
              <div className="Edit-ft3">Bloquear membro</div>
              <div className="Edit-ft5 mt-1">
                Bloqueia o membro de entrar na área de membros.
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-xl-6 col-12 mt-2">
              <button type="button" className="but_save w-100">
                Salvar edição
              </button>
            </div>
            <div className="col-xl-3 col-6 mt-2">
              <button type="button" className="but_cancel w-100">
                Cancelar
              </button>
            </div>
            <div className="col-xl-3 col-6 mt-2">
              <button type="button" className="but_delete w-100">
                Excluir membro
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
