import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select } from "@material-ui/core";

import TextWYSIWYG from "../../components/Wysiwyg";
import Fileupload from "../../components/Fileupload";
import StyledCheckbox from "../../components/Checkbox.js";
import { getAllModule, addContent } from "../../actions/content";
import "../../assets/css/login.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewContent() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [contentTitle, setContentTitle] = useState("");
  const [link, setLink] = useState("");
  const [moduleId, setModuleName] = useState("");
  const [contentDetail, setEditorData] = useState("");
  const [status, setCheckStatus] = useState("");
  const [sourceFile, setFileUpload] = useState("");

  const Back_fun = () => {
    history.goBack();
  };

  const addContentInfo = (e) => {
    e.preventDefault();

    // if (!(contentTitle && moduleId, contentDetail, link, sourceFile, status)) {
    //   return;
    // } else {
    const contentData = {
      contentTitle,
      contentDetail,
      moduleId,
      link,
      sourceFile,
      status,
    };
    dispatch(addContent(contentData));
    // }
  };

  const contentDatas = useSelector((state) => state.content.contentData);
  
  useEffect(() => {
    dispatch(getAllModule());
  }, []);

  const allModuleData = useSelector((state) => state.content.allData);

  const onChangeTitle = (e) => {
    setContentTitle(e.target.value);
  };
  const editorData = (data) => {
    setEditorData(data);
  };

  const onChangeSelect = (e) => {
    setModuleName(e.target.value);
  };
  const onChangeLink = (e) => {
    setLink(e.target.value);
  };

  const checkStatus = (status) => {
    setCheckStatus(status);
  };

  const fileUpload = (sourceFile) => {
    setFileUpload(sourceFile);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="Edit-ft1 mt-5 none-mobile">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2">Novo conteúdo</div>
          {/* <Form onSubmit={addContentInfo}> */}
          <div className="mt-5 form-group">
            <div className="Edit-ft3">Título do conteúdo</div>
            <input
              type="text"
              value={contentTitle}
              onChange={onChangeTitle}
              className="input-ft1 mt-1 w-100"
              placeholder="Título do conteúdo"
            />
          </div>
          <div className="Edit-ft3 mt-5">Módulo do conteúdo</div>
          <div className="new_content_select">
            <FormControl
              variant="outlined"
              className={`${classes.formControl} mt-3`}
              width="50%"
            >
              <Select
                native
                id="grouped-native-select"
                value={moduleId}
                onChange={onChangeSelect}
                label="modules"
              >
                <option>Selecione o nome do módulo</option>
                {allModuleData
                  ? allModuleData.map((item, key) => {
                      return (
                        <option value={item._id} key={key}>
                          {key + 1} - {item.name}
                        </option>
                      );
                    })
                  : ""}
              </Select>
            </FormControl>
          </div>
          <div className="mt-5 form-group">
            <div className="Edit-ft3">Texto do conteúdo</div>
            <TextWYSIWYG editorData={editorData} />
          </div>
          <div className="mt-5 form-group">
            <div className="Edit-ft3">Link do vídeo</div>
            <input
              type="text"
              className="input-ft1 mt-3 w-100"
              placeholder="Link do vídeo"
              value={link}
              onChange={onChangeLink}
            />
          </div>
          <div className="mt-5 from-group">
            <div className="Edit-ft3 mb-3">Arquivos</div>
            <Fileupload fileUpload={fileUpload} />
          </div>
          <div className="mt-5 d-flex  from-group">
            <StyledCheckbox status={checkStatus} />
            <div>
              <div className="Edit-ft3">Desativar comentários</div>
              <div className="Edit-ft5 mgt-10">
                A seção de comentários ficará para todos os membros do curso.
              </div>
            </div>
          </div>
          <div className="row mt-5  mb-5">
            <div className="col-xl-6 col-12">
              <button
                type="submit"
                className="but_save w-100"
                onClick={addContentInfo}
              >
                Adicionar conteúdo
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
          {/* </Form> */}
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
