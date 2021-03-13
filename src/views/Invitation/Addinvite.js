import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Fileupload from "../../components/Fileupload";

import "../../assets/css/login.css";
import "../../assets/css/invite.css";

export default function Invite() {
  const [description, setDescription] = useState("");

  const history = useHistory();
  const Back_fun = () => {
    history.goBack();
  };
  const Handle_Description = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="Edit-ft1 mt-5 none-mobile">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2">Novo conteúdo</div>
          <div className="mt-5">
            <div className="Edit-ft3">Título do conteúdo</div>
            <input
              className="input-ft1 mt-2 w-100"
              placeholder="Título do conteúdo"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 w-100">Descrição do curso</div>
            <div className="w-100">
              <textarea
                rows="4"
                className="Edit-warp Edit-ft4 w-100 text__style"
                placeholder="Treinamento MR 3.0 foi criado para ajudar pessoas a conseguirem prestar serviço online."
                value={description}
                onChange={Handle_Description}
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Imagem destaque</div>
            <Fileupload />
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-xl-6 col-12">
              <button type="button" className="but_save w-100">
                Adicionar conteúdo
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
