import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { useHistory } from "react-router-dom";
import TextWYSIWYG from "../../components/Wysiwyg";
import { getPrevData, editCertificate } from "../../actions/certificate";
import { store } from "react-notifications-component";

import "../../assets/css/login.css";
import "../../assets/css/certificate.css";

const ImageName = "Certificado@2x.png";

export default function Certificate(props) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleShowImage = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Back_fun = () => {
    history.goBack();
  };

  const id = props.location.state.id;

  const [contentDetail, setEditorData] = useState("");
  const editorData = (data) => {
    setEditorData(data);
  };

  const prevData = useSelector((state) =>
    state.certificate.prevData ? state.certificate.prevData.certificate : ""
  );
  const value = prevData ? prevData.contentDetail : "";

  const SaveEdit = () => {
    dispatch(editCertificate(history, id, contentDetail));
  };

  useEffect(() => {
    dispatch(getPrevData(id));
  }, []);

  useEffect(() => {
    if(Object.keys(prevData).length !== 0) {
      setEditorData(prevData.contentDetail);
    }
  }, [prevData])

  // useEffect(() => {
  //   if (updateData && updateData["success"]) {
  //     store.addNotification({
  //       title: "Success!",
  //       message: "Update certificate success",
  //       type: "success",
  //       insert: "top",
  //       container: "top-right",
  //       animationIn: ["animate__animated", "animate__fadeIn"],
  //       animationOut: ["animate__animated", "animate__fadeOut"],
  //       dismiss: {
  //         duration: 3000,
  //         onScreen: true,
  //       },
  //     });
  //   } else if (updateData && updateData.errors) {
  //     store.addNotification({
  //       title: "Error!",
  //       message: updateData.errors["name"],
  //       type: "danger",
  //       insert: "top",
  //       container: "top-right",
  //       animationIn: ["animate__animated", "animate__fadeIn"],
  //       animationOut: ["animate__animated", "animate__fadeOut"],
  //       dismiss: {
  //         duration: 3000,
  //         onScreen: true,
  //       },
  //     });
  //   }
  // }, [ ]);

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
            <div className="Edit-ft3">Tags disponíveis</div>
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
              <TextWYSIWYG editorData={editorData} value={value} />
            </div>
            <div className="mt-5 img_style">
              <img
                width="100%"
                onClick={handleShowImage}
                src={require(`./../../assets/img/${ImageName}`).default}
              />
              <Dialog
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                style={{ borderRadius: 20 + "px" }}
              >
                <img
                  width="100%"
                  className="dialog_img"
                  src={require(`./../../assets/img/${ImageName}`).default}
                />
              </Dialog>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100" onClick={SaveEdit}>
                Salvar edição
              </button>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button className="but_cancel w-100" onClick={Back_fun}>Cancelar</button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
