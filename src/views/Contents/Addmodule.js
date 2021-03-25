import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import { addModule } from "../../actions/content";
import { store } from "react-notifications-component";

const AddIcon = "add_icon.svg";
const CloseIcon = "ios-close.svg";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default function AddMoudle() {
  const form = useRef();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.content.data);

  useEffect(() => {
    if (data && data["success"]) {
      store.addNotification({
        title: "Success!",
        message: "Add module success",
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
      setModuleName("");
      setOpen(false);
    } else if (data && data.errors) {
      store.addNotification({
        title: "Warning!",
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

  const handleDelete = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [moduleName, setModuleName] = useState();
  const onChangeModuleName = (e) => {
    const moduleName = e.target.value;
    setModuleName(moduleName);
  };

  const addModules = (e) => {
    e.preventDefault();

    form.current.validateAll();

    if (!moduleName) {
      return;
    } else {
      dispatch(addModule(moduleName));
    }
  };

  return (
    <div>
      <div
        className="con-ft4"
        onClick={handleDelete}
        style={{ cursor: "pointer" }}
      >
        Novo módulo
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        PaperProps={{ style: { borderRadius: 20 } }}
      >
        <div className="dialog_container">
          <div className=" d-flex align-items-center">
            <div
              className="mr-auto"
              // onClick={() => {
              //   history.push("/main/content/editor");
              // }}
            >
              <img
                className="add_icon"
                src={require(`../../assets/img/${AddIcon}`).default}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="mobile-position" onClick={handleClose}>
              <img
                className="close_icon"
                src={require(`../../assets/img/${CloseIcon}`).default}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="Edit-ft6 mt-5">Adicionar módulo</div>
          <div className="con-ft5 mt-3">Nome do módulo</div>
          <Form onSubmit={addModules} ref={form}>
            <div className="form-group">
              <Input
                type="text"
                className="input-ft1 w-100 mt-1"
                placeholder="Nome do módulo"
                value={moduleName}
                onChange={onChangeModuleName}
                validations={[required]}
              />
            </div>

            <div className="mt-5">
              <button className="add_but add_pd" style={{ cursor: "pointer" }}>
                Adicionar módulo
              </button>
            </div>
          </Form>
        </div>
      </Dialog>
    </div>
  );
}
