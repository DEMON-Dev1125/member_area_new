import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Fileupload from "../../components/Fileupload";

import "../../assets/css/login.css";
import "../../assets/css/invite.css";

import { addInvite } from "../../actions/invite";

export default function Invite() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);
  const dispatch = useDispatch();

  const history = useHistory();
  const Back_fun = () => {
    history.goBack();
  };

  const fileData = (file) => {
    setFile(file);
  };

  const handleSave = () => {
    if (!title || !description) return;
    else {
      dispatch(addInvite(history, title, description));
    }
  };

  // useEffect(() => {
  //   if(status && status.success === "success") history.push("/main/invite");
  // }, [status]);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="Edit-ft1 mt-5 none-mobile">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2">Novo convite</div>
          <div className="mt-5">
            <div className="Edit-ft3">Título do convite</div>
            <input
              className="input-ft1 mt-2 w-100"
              placeholder="Título do convite"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 w-100">Descrição do convite</div>
            <div className="w-100">
              <textarea
                rows="4"
                className="Edit-warp Edit-ft4 w-100 text__style"
                placeholder="Descrição do convite..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Imagem destaque</div>
            <Fileupload fileData={fileData} />
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-xl-6 col-12">
              <button
                type="button"
                className="but_save w-100"
                onClick={handleSave}
              >
                Adicionar convite
              </button>
            </div>
            <div className="col-xl-6 col-12">
              <button
                type="button"
                className="but_cancel w-100"
                onClick={Back_fun}
              >
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
