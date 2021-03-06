import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextWYSIWYG from "../components/Wysiwyg";
import TimezoneSelect from "react-timezone-select";
import { store } from "react-notifications-component";
import "../assets/css/certificate.css";
import "../assets/css/timezone.css";

import { getSettingData, editSetting } from '../actions/setting';

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
  const history = useHistory();

  const settingData = useSelector((state) => state.setting.allData ? state.setting.allData.settings : []);
  console.log(settingData);
  const value = settingData && settingData.length != 0 ? settingData[0].message : "";

  const [memberareaname, setMemberAreaName] = useState("");
  const changeSiteName = (e) => {
    setMemberAreaName(e.target.value);
  };

  const Back_fun = () => {
    history.goBack();
  };

  const [contactEmail, setContactEmail] = useState("");
  const changeContactEmail = (e) => {
    setContactEmail(e.target.value);
  };

  const [domain, setDomain] = useState("");
  const changeDomainAddress = (e) => {
    setDomain(e.target.value);
  };

  const [lang, setLanguage] = useState("");
  const changeSelectLang = (e) => {
    setLanguage(e.target.value);
  };

  const [emailsubject, setEmailsubject] = useState("");
  const changeAccess = (e) => {
    setEmailsubject(e.target.value);
  };

  const [selectedTimezone, setSelectedTimezone] = useState("");
  const setSelectedTimezones = (value) => {
    setSelectedTimezone(value.value)
  }

  const [message, setEditorData] = useState("");
  const editorData = (data) => {
    setEditorData(data);
  };

  useEffect(() => {
    dispatch(getSettingData());
  }, []);

  useEffect(() => {
    if(settingData && settingData.length !== 0) {
      settingData.map(data => {
        setMemberAreaName(data.memberareaname);
        setContactEmail(data.contactemail);
        setDomain(data.domain);
        setLanguage(data.lang);
        setSelectedTimezone(data.timezone);
        setEmailsubject(data.emailsubject);
        setEditorData(data.message);
      });
    }
  }, [settingData])

  // const data = useSelector((state) => state.setting.data);

  // useEffect(() => {
  //   if (data && data["success"]) {
  //     store.addNotification({
  //       title: "Success!",
  //       message: "Setting success",
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
  //   } else if (data && data.errors) {
  //     store.addNotification({
  //       title: "Worning!",
  //       message: data.errors["name"],
  //       type: "warning",
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
  // }, [data]);

  const saveSetting = (e) => {
    e.preventDefault();

    // const settingData = {
    //   siteName,
    //   contactEmail,
    //   domainAddress,
    //   lang,
    //   timezone,
    //   access,
    //   contentDetail,
    // };

    dispatch(editSetting(history, memberareaname, contactEmail, domain, lang, selectedTimezone, emailsubject, message));

    // if (!settingData) {
    //   return;
    // } else {
    //   // dispatch(saveSettings(data));
    //   console.log("setting", settingData);
    // }
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
              value={memberareaname}
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
              value={domain}
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
                        <option value={item.lang} key={key}>
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
                onChange={setSelectedTimezones}
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
                value={emailsubject}
                onChange={changeAccess}
              />
            </div>
            <div className="mt-5">
              <TextWYSIWYG editorData={editorData} value={value} />
            </div>
          </div>
          <div className="row mt-5  mb-5">
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100" onClick={saveSetting}>
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
