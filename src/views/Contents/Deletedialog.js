import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { store } from "react-notifications-component";
import { deleteModule } from "../../actions/content";

const CloseIcon = "ios-close.svg";
const DeleteIcon = "delete_icon.svg";

export default function Deletedialog(props) {
  const { moduleId } = props;

  const [open, setOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const deleteModuleName = () => {
    if (!moduleId) {
      return;
    } else {
      const id = moduleId;
      dispatch(deleteModule(id));
    }
  };

  const data = useSelector((state) => state.content.delData);

  useEffect(() => {
    if (data && data["success"]) {
      store.addNotification({
        title: "Success!",
        message: "Delete success!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
      setOpen(false);
    } else if (data && data.errors) {
      store.addNotification({
        title: "Worning!",
        message: data.errors["name"],
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
  }, [data]);

  return (
    <div>
      <div className="select-item con-color1" onClick={handleOpen}>
        Excluir
      </div>
      <Dialog
        onClose={handleCancel}
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
                src={require(`../../assets/img/${DeleteIcon}`).default}
              />
            </div>
            <div className="mobile-position">
              <img
                onClick={handleCancel}
                className="close_icon"
                style={{ cursor: "pointer" }}
                src={require(`../../assets/img/${CloseIcon}`).default}
              />
            </div>
          </div>
          <div className="Edit-ft6 mgt-50">Deseja excluir esse módulo?</div>
          <div className="mgt-30 conl-ft5">
            Você está prestes a excluir o módulo{" "}
            <span className="con-color2">1-Introdução</span> do curso{" "}
            <span className="con-color2">Método Remoto 3.0</span>! Caso prossiga
            com a ação, todos os conteúdos presentes nesse módulo serão
            excluídos também.
          </div>
          <div className="mgt-50">
            <div
              className="but_delete delete_content_dialog1 text-center"
              onClick={deleteModuleName}
            >
              Excluir módulo
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
