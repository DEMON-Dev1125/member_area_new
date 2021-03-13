import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import TextWYSIWYG from "../../components/Wysiwyg";
import Fileupload from "../../components/Fileupload";
import StyledCheckbox from "../../components/Checkbox.js";
import "../../assets/css/login.css";

export default function EditContent() {
  const history = useHistory();
  const Back_fun = () => {
    history.goBack();
  };
  const [title, setTitle] = useState("");
  const Handle_Title = (e) => {
    setTitle(e.target.value);
  };
  const [contenttext, setContenttext] = useState("");
  const Handle_ContentText = (e) => {
    setContenttext(e.target.value);
  };
  const Handle_Save = () => {
    history.push("/main/content/improve");
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
          <div className="Edit-ft2">Editar conteúdo</div>
          <div className="Edit-ft3 mt-5">Título do conteúdo</div>
          <input
            type="text"
            className="Edit-warp mt-3 Edit-ft4 w-100"
            placeholder="Como melhorar o seu Aprendizado?"
            value={title}
            onChange={Handle_Title}
          />
          <div className="Edit-ft3 mt-5">Módulo do conteúdo</div>
          <TextWYSIWYG />
          <div className="Edit-ft3 mt-5">Link do vídeoo</div>
          <input
            type="text"
            className="Edit-warp mt-3 Edit-ft4 w-100"
            placeholder="https://www.youtube.com/watch?v=Gbc"
            value={contenttext}
            onChange={Handle_ContentText}
          />
          <div className="Edit-ft3 mt-5">Arquivos</div>
          <Fileupload />
          <div className="d-flex mt-5">
            <StyledCheckbox />
            <div>
              <div className="Edit-ft3">Desativar comentários</div>
              <div className="Edit-ft5 mt-2">
                A seção de comentários ficará para todos os membros do curso.
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-xl-6 col-12">
              <button
                type="button"
                className="but_save w-100"
                onClick={Handle_Save}
              >
                Adicionar conteúdo
              </button>
            </div>
            <div className="col-xl-3 col-6">
              <button type="button" className="but_cancel w-100">
                Cancelar
              </button>
            </div>
            <div className="col-xl-3 col-6">
              <button type="button" className="but_delete w-100">
                Excluir conteúdo
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
