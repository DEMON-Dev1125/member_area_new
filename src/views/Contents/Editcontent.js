import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextWYSIWYG from "../../components/Wysiwyg";
import Fileupload from "../../components/Fileupload";
import StyledCheckbox from "../../components/Checkbox.js";
// import "../../assets/css/login.css";

import { getContentById, updateContentData, deleteContentData } from "../../actions/improve";

const API_URL = 'http://192.168.107.163:5000';

export default function EditContent(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const id = props.location.state.id;
  const moduleId = props.location.state.moduleId;

  const contentData = useSelector((state) =>
    state.improve.contentData ? state.improve.contentData.content : {}
  );

  const Back_fun = () => {
    history.goBack();
  };
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [value, setValue] = useState("");
  const [path, setPath] = useState("");
  const [comment, setComment] = useState(false);

  const Handle_Title = (e) => {
    setTitle(e.target.value);
  };
  const [contenttext, setContenttext] = useState("");

  const [contentDetail, setEditorData] = useState("");
  const editorData = (data) => {
    setEditorData(data);
    // setValue(data);
  };

  const [sourceFile, setFileUpload] = useState("");
  const fileUpload = (sourceFile) => {
    setFileUpload(sourceFile);
  };

  const Handle_Save = () => {
    const data = new FormData();
    data.append('file', sourceFile);
    data.append('module', moduleId);
    data.append('title', title);
    data.append('text', contentDetail);
    data.append('videoLink', videoLink);
    data.append('comment', comment);
    dispatch(updateContentData(history, id, data));
  };

  const onDelete = () => {
    dispatch(deleteContentData(history, id));
  }

  const onStatus = (value) => {
    setComment(value);
  };

  useEffect(() => {
    dispatch(getContentById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(contentData).length !== 0) {
      if (contentData.id !== id) return;
      setTitle(contentData.title);
      setVideoLink(contentData.videolink);
      setValue(contentData.text);
      setComment(contentData.comment)

      let pathName = contentData.file.replace(/\\/g, '/');
      if(pathName[0] !== '/') pathName = '/' + pathName;
      setPath(API_URL + pathName);
    }
  }, [contentData]);

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
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="Edit-ft3 mt-5">Módulo do conteúdo</div>
          <TextWYSIWYG editorData={editorData} value={value} />
          <div className="Edit-ft3 mt-5">Link do vídeoo</div>
          <input
            type="text"
            className="Edit-warp mt-3 Edit-ft4 w-100"
            placeholder="https://www.youtube.com/watch?v=Gbc"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <div className="Edit-ft3 mt-5">Arquivos</div>
          <Fileupload fileUpload={fileUpload} imagePath={path} />
          <div className="d-flex mt-5">
            <StyledCheckbox status={onStatus} checkStatus={comment} />
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
              <button type="button" className="but_cancel w-100" onClick={Back_fun}>
                Cancelar
              </button>
            </div>
            <div className="col-xl-3 col-6">
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
