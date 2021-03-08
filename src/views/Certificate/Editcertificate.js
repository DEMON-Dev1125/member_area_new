import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { useHistory, Switch, Route } from "react-router-dom";
import TextWYSIWYG from "../../components/Wysiwyg";

import "../../assets/css/login.css";
import "../../assets/css/certificate.css";

const ImageName = "Certificado@2x.png";

export default function Certificate() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleShowImage = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Back_fun = () => {
    history.goBack();
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
          <div className="Edit-ft2">Editar certificado</div>
          <div className="Edit-ft3 mt-5">Texto do certificado</div>
          <div className="mt-3">
            <div className="Edit-ft4 text-dark p-0">Tags disponíveis</div>
            <div className="Edit-ft5 mt-1">
              Use as tags abaixo para compor o seu texto no final do
              certificado.
            </div>
            <div className="d-flex mt-3 container-fluid row">
              <span className="tag_style mt-1">@Data inico</span>
              <span className="tag_style mt-1 ml-2">@Data conclusão</span>
              <span className="tag_style mt-1 ml-2">@Tempo curso</span>
              <span className="tag_style mt-1 ml-2">@Nome produtor(a)</span>
              <span className="tag_style mt-1 ml-2">@Nome aluno(a)</span>
            </div>
            <div className="mt-5">
              <TextWYSIWYG />
            </div>
            <div className="mt-5 img_style">
              <img
                src={require(`./../../assets/img/${ImageName}`).default}
                width="100%"
                onClick={handleShowImage}
              />
              <Dialog
                paperWidthMd
                open={open}
                onClose={handleClose}
                style={{ borderRadius: 20 + "px" }}
              >
                <img
                  className="dialog_img"
                  src={require(`./../../assets/img/${ImageName}`).default}
                />
              </Dialog>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100">Salvar edição</button>
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
