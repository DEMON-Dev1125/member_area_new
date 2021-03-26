import React from "react";
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
      <div className="delete_icon text-center" onClick={handleClickOpen}>
        <i className="fas fa-trash icon-all"></i>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
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
                src={require(`../../assets/img/${DeleteIcon}`).default}
              />
            </div>
            <div className="mobile-position" onClick={handleClose}>
              <img
                className="close_icon"
                style={{ cursor: "pointer" }}
                src={require(`../../assets/img/${CloseIcon}`).default}
              />
            </div>
          </div>
          <div className="Edit-ft6 mgt-50">Deseja excluir esse comentário?</div>
          <div className="mgt-30 Edit-ft5">
            Você está prestes a excluir o seu próprio comentário!
          </div>
          <div className="mt-5">
            <button className="but_delete delete_content_dialog">
              Excluir comentário
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
