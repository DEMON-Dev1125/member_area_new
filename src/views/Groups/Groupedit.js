import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ToogleButton from "../../components/Togglebutton";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../assets/css/login.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    width: "100%",
  },
  formControl2: {
    margin: theme.spacing(0),
    width: "100%",
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
    ? "mgt-25 pd-50 group-content1"
    : "drpdwn mgt-25 pd-50 group-content1";
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <button className="but_back" onClick={Back_fun}>
            <i className="fas fa-chevron-left img_back"></i>
          </button>
          <div className="Edit-ft1 mt-5">MÉTODO REMOTO 3.0</div>
          <div className="Edit-ft2">Editar turma</div>
          <div className="row mt-5">
            <div className="col-lg-8">
              <div className="Edit-ft3">Nome da turma</div>
              <input
                type="text"
                className="Edit-warp mt-3 w-100 Edit-ft4"
                placeholder="Turma A"
                value={newgroup}
                onChange={Handle_Newgroup}
              />
            </div>
            <div className="col-lg-4">
              <div className="Edit-ft3">Prazo de acesso</div>
              <div className="position-relative">
                <input
                  type="number"
                  className="Edit-warp mt-3 Edit-ft4 w-100"
                  placeholder="01"
                  value={itemaccess}
                  onChange={Handle_Itemaccess}
                />
                <div className="item-day Edit-ft1">DIAS</div>
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
                    className={`${classes.formControl} mt-3`}
                    width="100%"
                  >
                    <Select
                      native
                      defaultValue="Aula"
                      id="grouped-native-select"
                      onChange={Handle_Role1}
                      label="lang"
                    >
                      <option value={10}>Acesso Livre</option>
                      <option value={20}>Data programada</option>
                      <option value={30}>Dias após compra</option>
                      <option value={40}>Oculto</option>
                      <option value={50}>Bloqueado</option>
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
                <div className="mt-1 position-relative new_group_select">
                  <FormControl
                    variant="outlined"
                    className={`${classes.formControl} mt-3`}
                    width="100%"
                  >
                    <Select
                      native
                      defaultValue="Aula"
                      id="grouped-native-select"
                      onChange={Handle_Role2}
                      label="lang"
                    >
                      <option value={10}>Acesso Livre</option>
                      <option value={20}>Data programada</option>
                      <option value={30}>Dias após compra</option>
                      <option value={40}>Oculto</option>
                      <option value={50}>Bloqueado</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="group-new5">
            <div className="Edit-ft3">Regras de Liberação de Aulas</div>
            <div className="Edit-ft5 mt-3">
              Programe aulas específicas quando as regras de módulos não forem
              aplicáveis.
            </div>
          </div>
          <div className={`${drpdwnCls}`}>
            <div className="Edit-ft1">SELECIONE UMA REGRA</div>
            <div className="row">
              <div className="col-10 col-xl-11">
                <div className="mt-1 position-relative ht-45 new_group_select">
                  <FormControl
                    variant="outlined"
                    className={`${classes.formControl2}`}
                  >
                    <Select
                      native
                      id="grouped-native-select"
                      onChange={Handle_Role3}
                      label="rule"
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
              </div>
              <div className="col-2 col-xl-1">
                <div className="but-plus mt-3" onClick={() => showLearning()}>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <TransitionGroup component={null}>
            {drpdwn && (
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
            )}
          </TransitionGroup>
          <div className="row mt-5 mb-5">
            <div className="col-xl-6 col-12 mt-2">
              <button
                type="button"
                className="but_save w-100"
                onClick={Handle_Add}
              >
                Salvar edição
              </button>
            </div>
            <div className="col-xl-3 col-6 mt-2">
              <button type="button" className="but_cancel w-100" onClick={Back_fun}>
                Cancelar
              </button>
            </div>
            <div className="col-xl-3 col-6 mt-2">
              <button type="button" className="but_delete w-100">
                Excluir
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
