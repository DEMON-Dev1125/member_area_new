/**********************This is 10 page*********************** */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
const CloseIcon = "ios-close.svg";
const DeleteIcon = "delete_icon.svg";

export default function Deletedialog() {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="but_delete but_delete_content" onClick={handleClickOpen}>
        Excluir conteúdo
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="false"
        PaperProps={{ style: { borderRadius: 20 } }}
      >
        <div className="container_delete">
          <div className=" d-flex align-items-center">
            <div
              className="mr-auto"
              onClick={() => {
                history.push("/main/content/editor");
              }}
            >
              <img
                className="add_icon"
                style={{ cursor: "pointer" }}
                src={require(`../../assets/svg/${DeleteIcon}`).default}
              />
            </div>
            <div className="" onClick={handleClose}>
              <img
                className="close_icon"
                style={{ cursor: "pointer" }}
                src={require(`../../assets/svg/${CloseIcon}`).default}
              />
            </div>
          </div>
          <div className="Edit-ft6 mgt-50">Deseja excluir esse conteúdo?</div>
          <div className="mgt-30 conl-ft5">
            Você está prestes a excluir o conteúdo{" "}
            <span className="con-color2">
              {" "}
              Como melhorar o seu Aprendizado?
            </span>{" "}
            do módulo 1-Introdução do curso{" "}
            <span className="con-color2">Método Remoto 3.0</span>! Caso prossiga
            com a ação, todos os conteúdos presentes nesse módulo serão
            excluídos também.
          </div>
          <div className="mgt-50">
            <div className="but_delete delete_content_dialog text-center">
              Excluir conteúdo
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
