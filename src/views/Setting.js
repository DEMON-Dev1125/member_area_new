import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextWYSIWYG from "../components/Wysiwyg";
import TimezoneSelect from "react-timezone-select";
import { store } from "react-notifications-component";
import "../assets/css/certificate.css";
import "../assets/css/timezone.css";

const Language = [
  {
    id: 111,
    lang: "English (United States)",
  },
  {
    id: 222,
    lang: "Portuguese - Brazil)",
  },
  {
    id: 333,
    lang: "Español",
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    width: "100%",
  },
}));

export default function Setting() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [siteName, setSiteName] = useState("");
  const changeSiteName = (e) => {
    setSiteName(e.target.value);
  };

  const [contactEmail, setContactEmail] = useState("");
  const changeContactEmail = (e) => {
    setContactEmail(e.target.value);
  };

  const [domainAddress, setDomainAddress] = useState("");
  const changeDomainAddress = (e) => {
    setDomainAddress(e.target.value);
  };

  const [lang, setLanguage] = useState("");
  const changeSelectLang = (e) => {
    setLanguage(e.target.value);
  };

  const [access, setAccess] = useState("");
  const changeAccess = (e) => {
    setAccess(e.target.value);
  };

  const [selectedTimezone, setSelectedTimezone] = useState("");
  const timezone = selectedTimezone.label;

  const [contentDetail, setEditorData] = useState("");
  const editorData = (data) => {
    setEditorData(data);
  };

  useEffect(() => {
    dispatch(getSettingData());
  }, []);

  const data = useSelector((state) => state.setting.data);

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

  const saveSetting = (e) => {
    e.preventDefault();

    const settingData = {
      siteName,
      contactEmail,
      domainAddress,
      lang,
      timezone,
      access,
      contentDetail,
    };
    
    if (!settingData) {
      return;
    } else {
      // dispatch(saveSettings(data));
      console.log("setting", settingData);
    }
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
              type="text"
              className="input-ft1 mt-1 w-100"
              placeholder="Método Remoto"
              value={siteName}
              onChange={changeSiteName}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">E-mail de contato</div>
            <input
              type="email"
              className="input-ft1 mt-1 w-100"
              placeholder="suporte@metodoremoto.com"
              value={contactEmail}
              onChange={changeContactEmail}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Domínio personalizado</div>
            <input
              type="text"
              className="input-ft1 mt-1 w-100"
              placeholder="membros.meusite.com"
              value={domainAddress}
              onChange={changeDomainAddress}
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
                    id="grouped-native-select"
                    onChange={changeSelectLang}
                    label="lang"
                    value={lang}
                  >
                    {Language.map((item, key) => {
                      return (
                        <option value={key + 1} key={key}>
                          {item.lang}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="mt-5">
              <div className="Edit-ft3 mb-3">Fuso horário padrão</div>
              <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
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
                type="text"
                className="input-ft1 mt-1 w-100"
                placeholder="Seu acesso foi liberado!"
                value={access}
                onChange={changeAccess}
              />
            </div>
            <div className="mt-5">
              <TextWYSIWYG editorData={editorData} />
            </div>
          </div>
          <div className="row mt-5  mb-5">
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100" onClick={saveSetting}>
                Salvar edição
              </button>
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
