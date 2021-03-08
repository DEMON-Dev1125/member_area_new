/********************This is 5 page***************************** */
import react, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import StyledCheckbox from "../../components/Checkbox.js";
import "../../assets/css/login.css";
import { Divider } from "@material-ui/core";

export default function Editor() {
  const history = useHistory();
  const Back_fun = () => {
    history.goBack();
  };
  const Handle_Save = () => {
    history.push("/");
  };
  const [sigla, setSigla] = useState("");
  const [description, setDescription] = useState("");
  const [vender, setVender] = useState("");
  const [remote, setRemote] = useState("");
  const Handle_Setsigla = (e) => {
    setSigla(e.target.value);
  };
  const Handle_Description = (e) => {
    setDescription(e.target.value);
  };
  const Handle_Vender = (e) => {
    setVender(e.target.value);
  };
  const Handle_Remote = (e) => {
    setRemote(e.target.value);
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-md-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="Edit-ft1 mt-5 none-mobile">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2">Editar Curso</div>
          <div className="row mt-5">
            <div className="col-xl-10">
              <div className="Edit-ft3">Nome do curso</div>
              <input
                type="text"
                className="Edit-warp Edit-ft4 w-100"
                placeholder="Método Remoto 3.0"
                value={remote}
                onChange={Handle_Remote}
              />
            </div>
            <div className="col-xl-2">
              <div className="Edit-ft3">Sigla</div>
              <input
                type="text"
                className="Edit-warp Edit-ft4 w-100"
                placeholder="MR3"
                value={sigla}
                onChange={Handle_Setsigla}
              />
            </div>
          </div>
          <div className="Edit-ft3 mt-5">URL da página de vendas</div>
          <input
            type="text"
            className="Edit-warp Edit-ft4 w-100"
            placeholder="https://metodoremoto.com.br/"
            value={vender}
            onChange={Handle_Vender}
          />
          <div className="Edit-ft3 w-100 mt-5">Descrição do curso</div>
          <div className="w-100">
            <textarea
              rows="4"
              className="Edit-warp Edit-ft4 w-100 text__style"
              placeholder="Treinamento MR 3.0 foi criado para ajudar pessoas a conseguirem prestar serviço online."
              value={description}
              onChange={Handle_Description}
            />
          </div>
          <div className="mt-5 d-flex">
            <StyledCheckbox />
            <div>
              <div className="Edit-ft3">Ativar moderação de comentários</div>
              <div className="Edit-ft5 mt-1">
                Todos os comentários serão revisados por seus administradores.
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-6 col-12">
              <button
                type="button"
                className="but_save w-100"
                onClick={Handle_Save}
              >
                Salvar edição
              </button>
            </div>
            <div className="col-xl-6 col-12">
              <button type="button" className="but_cancel w-100">
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
