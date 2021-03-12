/**********************This is 8 page*********************** */
import react, { component } from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Fileupload from "../../components/Fileupload";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextWYSIWYG from "../../components/Wysiwyg";
import StyledCheckbox from "../../components/Checkbox.js";
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
  const Back_fun = () => {
    history.goBack();
  };
  const Handle_Save = () => {
    history.push("/");
  };
  const [age, setAge] = react.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
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
          <div className="mt-5">
            <div className="Edit-ft3">Título do conteúdo</div>
            <input
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
                defaultValue="Aula"
                id="grouped-native-select"
                onChange={handleChange}
                label="lang"
              >
                <option value={1} className="opt-item">
                  Módulo
                </option>
                <option value={2}>1 - Introdução</option>
                <option value={3}>2 - Agora é pra Valer!</option>
              </Select>
            </FormControl>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Texto do conteúdo</div>
            <TextWYSIWYG />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Link do vídeo</div>
            <input
              className="input-ft1 mt-3 w-100"
              placeholder="Link do vídeo"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 mt-5">Arquivos</div>
            <Fileupload />
          </div>
          <div className="mt-5 d-flex">
            <StyledCheckbox />
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
                type="button"
                className="but_save w-100"
                onClick={Handle_Save}
              >
                Adicionar conteúdo
              </button>
            </div>
            <div className="col-xl-6 col-12">
              <button type="button" className="but_cancel w-100">
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
