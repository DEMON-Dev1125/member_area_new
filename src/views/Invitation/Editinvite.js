import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Fileupload from "../../components/Fileupload";
import {
  getInvite,
  updateInviteData,
  deleteInvite,
} from "../../actions/invite";

import "../../assets/css/login.css";
import "../../assets/css/invite.css";

const API_URL = 'http://192.168.107.163:5000';

export default function EditInvite() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState("");
  const [path, setPath] = useState("");

  const inviteDataById = useSelector((state) =>
    state.invite.inviteDataById.invite ? state.invite.inviteDataById.invite : {}
  );
  const history = useHistory();
  const { id } = useParams();

  const dispatch = useDispatch();

  const Back_fun = () => {
    history.goBack();
  };

  const fileUpload = (file) => {
    setFile(file);
  }

  const onSave = () => {
    const data = new FormData();
    data.append('file', file);
    data.append('title', title);
    data.append('description', description);
    dispatch(updateInviteData(history, id, data));
  };

  const onDelete = () => {
    dispatch(deleteInvite(history, id));
  };
  console.log(inviteDataById);

  useEffect(() => {
    dispatch(getInvite(id));
  }, []);

  useEffect(() => {
    if (Object.keys(inviteDataById).length !== 0) {
      console.log(inviteDataById.id);
      if (inviteDataById.id != id) return;
      setTitle(inviteDataById.title);
      setDescription(inviteDataById.description);

      let pathName = inviteDataById.file.replace(/\\/g, '/');
      if(pathName[0] !== '/') pathName = '/' + pathName;
      setPath(API_URL + pathName);
    }
  }, [inviteDataById]);

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
          <div className="Edit-ft2">Editar convite</div>
          <div className="mt-5">
            <div className="Edit-ft3">Título do convite</div>
            <input
              className="input-ft1 mt-2 w-100"
              // placeholder="Convite Método Remoto 3.0"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 w-100">Descrição do convite</div>
            <div className="w-100">
              <textarea
                rows="4"
                className="Edit-warp Edit-ft4 w-100 text__style"
                placeholder="Venha conhecer o curso que mudou a vida de mais de 15.000 alunos por todo Brasil!"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 mb-3">Imagem destaque</div>
            <Fileupload fileUpload={fileUpload} imagePath={path} />
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-xl-6 col-12">
              <button type="button" className="but_save w-100" onClick={onSave}>
                Salvar edição
              </button>
            </div>
            <div className="col-xl-3 col-6">
              <button type="button" className="but_cancel w-100" onClick={Back_fun}>
                Cancelar
              </button>
            </div>
            <div className="col-xl-3 col-6">
              <button
                type="button"
                className="but_delete w-100"
                onClick={onDelete}
              >
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
