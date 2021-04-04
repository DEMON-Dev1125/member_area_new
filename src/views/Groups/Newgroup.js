import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ToogleButton from "../../components/Togglebutton.js";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getAllModule } from "../../actions/content";
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

  // ------------------------------------------------------------------------

  const [free, setFree] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [fromdate, setFromdate] = useState();
  const [todate, setTodate] = useState();
  const [moduleId, setModuleId] = useState();
  const [name, setName] = useState();
  // const [accessterm, setAccessTerm] = useState();
  const [standardclass, setStandardClass] = useState();

  // ------------------------------------------------------------------------

  const Back_fun = () => {
    history.goBack();
  };
  const [drpdwn, setDrpDwn] = useState(false);
  const [role1, setRole1] = useState(10);
  const Handle_Role1 = (e) => {
    setRole1(e.target.value);
  };
  const [role2, setRole2] = useState(10);
  const Handle_Role2 = (e) => {
    setRole2(e.target.value);
  };

  const Handle_Add = () => {
    history.push("/main/group/groupadd");
  };

  const addClass = () => {
    setDrpDwn(!drpdwn);
  };

  const drpdwnCls = drpdwn
    ? "group-new6 group-content1"
    : "drpdwn group-new6 group-content1";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllModule());
  }, []);

  const allModuleData = useSelector((state) => state.content.allData);

  const [NewGroupName, setNewGroupName] = useState("");
  const ChangeGroupName = (e) => {
    setNewGroupName(e.target.value);
  };

  const [ItemAccess, setItemAccess] = useState("");
  const changeItemAccess = (e) => {
    setItemAccess(e.target.value);
  };

  const [status, setStatus] = useState();
  const toogleStatus = (status) => {
    setStatus(status);
  };

  const [rule, setRule] = useState(false);
  const selectRule = (e, item) => {
    item.ruleKey = e.target.value;
    setRule(!rule);
  };

  const [StartDate, setStartDate] = useState("");
  const changeStartDate = (e, item) => {
    console.log(document.getElementById(`date-start${item.order}`).value);
  };

  const [EndDate, setEndDate] = useState("");
  const changeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const [AccessTerm, setAccessTerm] = useState("");
  const changeAccessTerm = (e, item) => {
    document.getElementById(`access-term${item.order}`);
    setAccessTerm(e.target.value);
  };

  const [ClassRule, setClassRule] = useState();
  const changeClassRule = (e) => {
    setClassRule(e.target.value);
  };

  const addGroup = () => {};

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
          <div className="row mt-5">
            <div className="col-lg-8">
              <div className="Edit-ft3">Nome da turma</div>
              <input
                type="text"
                className="Edit-warp mt-3 w-100 Edit-ft4"
                placeholder="Nome da turma"
                value={NewGroupName}
                onChange={ChangeGroupName}
              />
            </div>
            <div className="col-lg-4">
              <div className="Edit-ft3">Prazo de acesso</div>
              <div className="position-relative">
                <input
                  type="number"
                  className="Edit-warp mt-3 Edit-ft4 w-100"
                  placeholder="01"
                  value={ItemAccess}
                  onChange={changeItemAccess}
                />
                <div className="item-day Edit-ft1">DIAS</div>
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex">
            <ToogleButton status={toogleStatus} />
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
            {allModuleData &&
              allModuleData.map((item, key) => {
                return (
                  <div className="group-new41" key={key}>
                    <div>
                      <div className="Edit-ft1">MÓDULO {key + 1}</div>
                      <div className="mt-1 con-ft5">{item.name}</div>
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
                            id="grouped-native-select"
                            onChange={(e) => selectRule(e, item)}
                            label="rule"
                          >
                            <option value={10}>Acesso Livre</option>
                            <option value={20}>Data programada</option>
                            <option value={30}>Dias após compra</option>
                            <option value={40}>Oculto</option>
                            <option value={50}>Bloqueado</option>
                          </Select>
                        </FormControl>
                      </div>

                      {item.ruleKey == 20 && (
                        <div className="mt-5">
                          <div className="mb-3">
                            <div className="Edit-ft1">DATA LIBERAÇÃO</div>
                            <input
                              type="date"
                              className="input-ft2 mt-2 w-100"
                              placeholder="05/01/2021 12:00"
                              name="from"
                              id={`date-start${item.order}`}
                              // value={StartDate}
                              onChange={(e) => changeStartDate(e, item)}
                            />
                          </div>
                          <div className="mb-3">
                            <div className="Edit-ft1">DATA FECHAMENTO</div>
                            <input
                              type="date"
                              className="input-ft2 mt-2 w-100"
                              placeholder="14/01/2021 12:00"
                              name="to"
                              id={`date-end${item.order}`}
                              // value={EndDate}
                              onChange={changeEndDate}
                            />
                          </div>
                        </div>
                      )}
                      {item.ruleKey == 30 && (
                        <div className="mt-5">
                          <div className="position-relative">
                            <input
                              type="number"
                              className="Edit-warp mt-3 Edit-ft4-1 w-100"
                              placeholder="01"
                              id={`access-term${item.order}`}
                              // value={AccessTerm}
                              onChange={(e) => changeAccessTerm(e, item)}
                            />
                            <div className="item-day-1 Edit-ft1">DIAS</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
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
                      onChange={changeClassRule}
                      label="role"
                      value={ClassRule}
                    >
                      <option>Aula</option>
                      {allModuleData &&
                        allModuleData.map((item, key) => {
                          return (
                            <optgroup
                              className="opt-group"
                              key={key}
                              label={`${key + 1} - ${item.name}`}
                            >
                              {allModuleData &&
                                allModuleData.map((item, key) => {
                                  return (
                                    <option key={key} value={key + 1}>
                                      {item.id}
                                    </option>
                                  );
                                })}
                            </optgroup>
                          );
                        })}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="col-2 col-xl-1">
                <div className="but-plus mt-3" onClick={() => addClass()}>
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
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100" onClick={addGroup}>
                {drpdwn ? "Adicionar turma" : "Adicionar conteúdo"}
              </button>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button className="but_cancel w-100" onClick={Back_fun}>
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
