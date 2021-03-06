/**********************This is 15 page************ */
import react, { useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import ToogleButton from "../../components/Togglebutton.js";
import Fileupload from "../../components/Fileupload";
import StyledCheckbox from "../../components/Checkbox.js";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group"; // ES6
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import "../../assets/css/login.css";
import { SelectionState } from "draft-js";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: () => {
      if (window.innerWidth < 575) return "100%";
      else return 264;
    },
  },
  formControl2: {
    margin: theme.spacing(0),
    minWidth: () => {
      if (window.innerWidth < 575) return "100%";
      else return 637;
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function EditContent() {
  const history = useHistory();
  const classes = useStyles();
  const Back_fun = () => {
    history.goBack();
  };
  const [newgroup, setNewgroup] = useState("");
  const [drpdwn, setDrpDwn] = useState(false);
  const Handle_Newgroup = (e) => {
    setNewgroup(e.target.value);
  };
  const [itemaccess, setItemaccess] = useState("");
  const Handle_Itemaccess = (e) => {
    setItemaccess(e.target.value);
  };
  const [role1, setRole1] = useState(10);
  const Handle_Role1 = (e) => {
    setRole1(e.target.value);
  };
  const [role2, setRole2] = useState(10);
  const Handle_Role2 = (e) => {
    setRole2(e.target.value);
  };
  const [role3, setRole3] = useState(10);
  const Handle_Role3 = (e) => {
    setRole3(e.target.value);
  };
  const Handle_Add = () => {
    history.push("/main/group/groupadd");
  };

  const showLearning = () => {
    setDrpDwn(!drpdwn);
  };

  const drpdwnCls = drpdwn
    ? "group-new6 group-content1"
    : "drpdwn group-new6 group-content1";
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="Edit-ft1 mt-5">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2">Nova turma</div>
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="Edit-ft3">Nome da turma</div>
                <input
                  type="text"
                  className="Edit-warp w-100 Edit-ft4"
                  placeholder="Nome da turma"
                  value={newgroup}
                  onChange={Handle_Newgroup}
                />
              </div>
              <div className="col-lg-3">
                <div className="Edit-ft3">Prazo de acesso</div>
                <div className="position-relative">
                  <input
                    type="text"
                    className="Edit-warp mgt-15 Edit-ft4 w-100"
                    placeholder="01"
                    value={itemaccess}
                    onChange={Handle_Itemaccess}
                  />
                  <div className="item-day Edit-ft1">DIAS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex">
            <ToogleButton />
            <div className="ml-3">
              <div className="Edit-ft3">Turma padrão</div>
              <div className="Edit-ft5">
                Ingressar membros novos nesta turma.
            </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Regras de Liberação de Módulos</div>
            <div className="Edit-ft5 mt-1">
              Ingressar membros novos nesta turma.
            </div>
          </div>
          <div className="group-new4 group-content">
            <div className="group-new41">
              <div>
                <div className="Edit-ft1">MÓDULO 1</div>
                <div className="mt-1 con-ft5">Introdução</div>
              </div>
              <div className="topmargin">
                <div className="Edit-ft1">SELECIONE UMA REGRA</div>
                <div className="mt-1 position-relative ht-45 new_group_select">
                  <FormControl
                    variant="outlined"
                    className={`${classes.formControl}`}
                  >
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={role1}
                      onChange={Handle_Role1}
                      label="age"
                    >
                      <MenuItem value={10}>Acesso Livre</MenuItem>
                      <MenuItem value={20}>Data programada</MenuItem>
                      <MenuItem value={30}>Dias após compra</MenuItem>
                      <MenuItem value={40}>Oculto</MenuItem>
                      <MenuItem value={50}>Bloqueado</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="group-new42">
              <div>
                <div className="Edit-ft1">MÓDULO 2</div>
                <div className="mt-1 con-ft5">Agora é pra Valer!</div>
              </div>
              <div className="topmargin">
                <div className="Edit-ft1">SELECIONE UMA REGRA</div>
                <div className="mt-1 position-relative ht-45 new_group_select">
                  <FormControl
                    variant="outlined"
                    className={`${classes.formControl}`}
                  >
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={role2}
                      onChange={Handle_Role2}
                      label="age"
                    >
                      <MenuItem value={10}>Acesso Livre</MenuItem>
                      <MenuItem value={20}>Data programada</MenuItem>
                      <MenuItem value={30}>Dias após compra</MenuItem>
                      <MenuItem value={40}>Oculto</MenuItem>
                      <MenuItem value={50}>Bloqueado</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="group-new5">
            <div className="Edit-ft3">Regras de Liberação de Aulas</div>
            <div className="Edit-ft5 mgt-10">
              Programe aulas específicas quando as regras de módulos não forem
              aplicáveis.
          </div>
          </div>
          <div className={`${drpdwnCls}`}>
            <div className="d-flex justify-content-between mgb-10">
              <div className="">
                <div className="Edit-ft1">SELECIONE UMA REGRA</div>
                <div className="d-flex ">
                  <div className="mgt-10 position-relative ht-45 new_group_select">
                    <FormControl
                      variant="outlined"
                      className={`${classes.formControl2}`}
                    >
                      <Select
                        native
                        defaultValue="Aula"
                        id="grouped-native-select"
                        onChange={Handle_Role3}
                      >
                        <optgroup className="opt-group" label="1 - Introdução">
                          <option value={0} hidden className="opt-item">
                            Aula
                        </option>
                          <option value={1}>
                            Como melhorar o seu Aprendizado?
                        </option>
                          <option value={2}>Revolução Digital</option>
                          <option value={3}>O que é Home Office?</option>
                          <option value={4}>Área de Atuação</option>
                          <option value={5}>Vantagens do Home Office</option>
                          <option value={6}>Boas Práticas Home Office</option>
                        </optgroup>
                      </Select>
                    </FormControl>
                  </div>
                  <div
                    className="but-plus mgt-19 mgl-30"
                    onClick={() => showLearning()}
                  >
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {drpdwn && (
            <>
              <div className="desktop">
                <TransitionGroup component={null}>
                  <CSSTransition classNames="dialog" timeout={300}>
                    <div className="pd-50 drpdwn-content d-flex justify-content-between">
                      <div className="text-content">
                        <div className="title">MÓDULO 1 | AULA 1</div>
                        <div className="main-content">
                          Como melhorar o seu Aprendizado?
                      </div>
                      </div>
                      <div className="select-section d-flex justify-content-between align-items-center">
                        <div className="selection-content">
                          <div className="Edit-ft1">SELECIONE UMA REGRA</div>
                          <div className="mgt-10 position-relative ht-45 new_group_select">
                            <FormControl
                              variant="outlined"
                              className={`${classes.formControl}`}
                            >
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={role1}
                                onChange={Handle_Role1}
                                label="age"
                              >
                                <MenuItem value={10}>Acesso Livre</MenuItem>
                                <MenuItem value={20}>Data programada</MenuItem>
                                <MenuItem value={30}>Dias após compra</MenuItem>
                                <MenuItem value={40}>Oculto</MenuItem>
                                <MenuItem value={50}>Bloqueado</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                        <div className="delete_icon text-center">
                          <i
                            className="fas fa-trash icon-all"
                            onClick={() => {
                              setDrpDwn(!drpdwn);
                            }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </div>
              <div className="group-mobile">
                <TransitionGroup component={null}>
                  <CSSTransition classNames="dialog" timeout={300}>
                    <div className="pd-30 drpdwn-content">
                      <div className=" d-flex justify-content-between">
                        <div className="text-content">
                          <div className="title">MÓDULO 1 | AULA 1</div>
                          <div className="main-content">O processo de vendas</div>
                        </div>
                        <div className="delete_icon text-center">
                          <i
                            className="fas fa-trash icon-all"
                            onClick={() => {
                              setDrpDwn(!drpdwn);
                            }}
                          ></i>
                        </div>
                      </div>
                      <div className="select-section">
                        <div className="selection-content">
                          <div className="Edit-ft1">SELECIONE UMA REGRA</div>
                          <div className="mgt-10 position-relative ht-45 new_group_select">
                            <FormControl
                              variant="outlined"
                              className={`${classes.formControl}`}
                            >
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={role1}
                                onChange={Handle_Role1}
                                label="age"
                              >
                                <MenuItem value={10}>Acesso Livre</MenuItem>
                                <MenuItem value={20}>Data programada</MenuItem>
                                <MenuItem value={30}>Dias após compra</MenuItem>
                                <MenuItem value={40}>Oculto</MenuItem>
                                <MenuItem value={50}>Bloqueado</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </>
          )}
          <div className="align-items-center mgt-50 mgb-30 cancel_save_btngroup">
            <div className="col-12 col-sm-6 text-center pl-1 pr-1">
              <div className="but_save " onClick={Handle_Add}>
                {drpdwn ? "Adicionar turma" : "Adicionar conteúdo"}
              </div>
            </div>
            <div className="col-12 col-sm-6 Edit-ft4 mgl-210">Cancelar</div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
