import React, { useState } from "react";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextWYSIWYG from "../components/Wysiwyg";
import Timezone from "../components/Timezone";
import "../assets/css/login.css";
import "../assets/css/certificate.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    width: "100%",
  },
}));

export default function Setting() {
  const classes = useStyles();

  const [lang, setLanguage] = useState(20);
  const HandleLang = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Configurações</div>
            </div>
          </div>
          <hr />
          <div className="mt-5">
            <div className="Edit-ft3">Nome da área de membros</div>
            <input
              className="input-ft1 mt-1 w-100"
              placeholder="Método Remoto"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">E-mail de contato</div>
            <input
              className="input-ft1 mt-1 w-100"
              placeholder="suporte@metodoremoto.com"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Domínio personalizado</div>
            <input
              className="input-ft1 mt-1 w-100"
              placeholder="membros.meusite.com"
            />
          </div>
          <div className="international mt-5">
            <div className="mt-5 con-ft1">Internacionalização</div>
            <div className="mt-5">
              <div className="Edit-ft3">Idioma</div>
              <div className="new_content_select">
                <FormControl
                  variant="outlined"
                  className={`${classes.formControl} mt-3`}
                  width="100%"
                >
                  <Select
                    native
                    defaultValue="Aula"
                    id="grouped-native-select"
                    onChange={HandleLang}
                    label="lang"
                    value={lang}
                  >
                    <option value={10} className="opt-item">
                      English (United States)
                    </option>
                    <option value={20}>Português (Brasil)</option>
                    <option value={30}>Español</option>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="mt-5">
              <div className="Edit-ft3">Fuso horário padrão</div>
              <Timezone />
            </div>
          </div>

          <div className="mt-5 email">
            <div className="con-ft1 mt-5">E-mail de boas-vindas</div>
            <div className="mt-5">
              <div className="Edit-ft3">Tags disponíveis</div>
              <div className="Edit-ft5 mt-1">
                Use as tags abaixo para compor o seu e-mail de boas-vindas.
                @E-mail, @Senha de acesso e @Link área de membros são
                obrigatórios.
              </div>
              <div className="d-flex mt-3 container-fluid row">
                <span className="tag_style mt-1">@E-mail</span>
                <span className="tag_style mt-1 ml-2">@Senha de acesso</span>
                <span className="tag_style mt-1 ml-2">
                  @Link área de membros
                </span>
                <span className="tag_style mt-1 ml-2">@Nome completo</span>
                <span className="tag_style mt-1 ml-2">@Nome exibição</span>
              </div>
            </div>
            <div className="mt-5">
              <div className="Edit-ft3">Assunto</div>
              <input
                className="input-ft1 mt-1 w-100"
                placeholder="Seu acesso foi liberado!"
              />
            </div>
            <div className="mt-5">
              <TextWYSIWYG />
            </div>
          </div>
          <div className="row mt-5  mb-5">
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
