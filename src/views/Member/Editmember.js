import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Select, FormControl } from "@material-ui/core";
import SwitchDrop from "../../components/Switch";
import Togglebutton from "../../components/Togglebutton";
import "../../assets/css/login.css";

import { getMemberById, editMember, deleteMember } from '../../actions/member';

const InfoIcon = "info-icon.svg";

export default function EditContent(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [membertype, setmembertype] = useState(false);
  const [dropType, setDropType] = useState(10);

  const memberData = useSelector((state) => state.member.memberData ? state.member.memberData.member : {});
  console.log(memberData);

  const [name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [newPwa, setNewPwa] = useState("");
  const [confirmPwa, setConfirmPwa] = useState("");

  const memberId = props.location.state.id;

  const Back_fun = () => {
    history.goBack();
  };

  const onChangeSwitch = (type) => {
    setmembertype(type);
  };

  const HandleDropType = (e) => {
    console.log(e.target.value);
    setDropType(e.target.value);
  };

  const onEdit = () => {
    let memberType = "";
    if(membertype === false) memberType = "student";
    else if(memberType === true) memberType = "collaborate";
    else memberType = "blocker";
    
    dispatch(editMember(history, memberId, name, email, newPwa, confirmPwa, memberType));
  }

  const onDelete = () => {
    dispatch(deleteMember(history, memberId));
  }

  useEffect(() => {
    dispatch(getMemberById(memberId));
  }, []);

  useEffect(() => {
    if (Object.keys(memberData).length !== 0) {
      if (memberData.id !== memberId) return;
      setFullname(memberData.name);
      setEmail(memberData.email);

      if(memberData.membertype === "student") setmembertype(false);
      else if(memberData.membertype === "collaborate") setmembertype(true);
      // else set
    }
  }, [memberData])

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
              value={name}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Email</div>
            <input
              type="text"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="joaolimaduarte6@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Nova senha</div>
            <input
              type="password"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="Nova senha"
              value={newPwa}
              onChange={(e) => setNewPwa(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Confirme nova senha</div>
            <input
              type="password"
              className="Edit-warp mt-3 w-100 Edit-ft4"
              placeholder="Confirme nova senha"
              value={confirmPwa}
              onChange={(e) => setConfirmPwa(e.target.value)}
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
            <SwitchDrop onChange={onChangeSwitch} value={membertype} />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">
              {membertype ? "Perfil de acesso" : "Turma"}
            </div>
            {membertype ? (
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
              <button type="button" className="but_save w-100" onClick={onEdit}>
                Salvar edição
              </button>
            </div>
            <div className="col-xl-3 col-6 mt-2">
              <button type="button" className="but_cancel w-100" onClick={Back_fun}>
                Cancelar
              </button>
            </div>
            <div className="col-xl-3 col-6 mt-2">
              <button type="button" className="but_delete w-100" onClick={onDelete}>
                Excluir
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
