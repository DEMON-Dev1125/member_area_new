import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { getAllModule } from "actions/content";
import DeleteMoudle from "./Deletedialog";
import AddMoudle from "./Addmodule";
// import "assets/scss/entire.scss";

const CheckBule = "check-bule.svg";
const FileIcon = "fileIcon.svg";
const DotIcon = "dotIcon.svg";
const TextIcon = "textIcon.svg";
const VideoIcon = "vídeoIcon.svg";
const MoveIcon = "moveIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  edit: {
    fontSize: 40,
    color: "red",
  },
}));

export default function ContentIndex() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(getAllModule());
  }, []);

  const allModuleData = useSelector((state) => state.content.allData);

  const [active1, setActive1] = useState(false);
  const selectFold1 = () => {
    setActive1(!active1);
  };
  const [active2, setActive2] = useState(false);
  const selectFold2 = () => {
    setActive2(!active2);
  };
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const HandleMore = () => {
    setSelect1(!select1);
  };
  const Handle_Select2 = () => {
    setSelect2(!select2);
  };
  const [edit, setEdit] = useState(true);

  const editModuleName = () => {
    setEdit(!edit);
    setSelect1(!select1);
    setMoveflag(true);
  };

  const [textvalue, setTextvalue] = useState("");

  const onChangeText = (e) => {
    const moduleName = e.target.value;
    setTextvalue(moduleName);
  };

  const editModuleSuccess = () => {
    setEdit(!edit);
  };

  const [moveflag, setMoveflag] = useState(true);

  const handleMove = () => {
    setMoveflag(false);
    setSelect1(false);
  };
  const Handle_Edit_Course = () => {
    history.push("/main/content/editor");
  };
  const goAddContent = () => {
    // state.eData.data.modules
    history.push("/main/content/newcontent");
  };
  const goImprove = () => {
    history.push("/main/content/improve");
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-1"></div>
        <div className="col-12 col-lg-12 col-xl-5 content_height">
          <div className="ml-4">
            <div className="Edit-ft1">REMOTE METHOD 3.0</div>
            <div className="Edit-ft2">Conteúdos</div>
            <div className="con-ft3 mt-3 mgr-174">
              Treinamento MR 3.0 foi criado para ajudar pessoas a conseguirem
              prestar serviço online.
            </div>
            <div className=" mt-5 d-flex">
              <div className="d-flex align-items-center mr-5">
                <i className="fas fa-clock con-color"></i>
                <div className="con-ft3 ml-2">4h 4m</div>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-play-circle con-color"></i>
                <div className="con-ft3 ml-2">8 aulas</div>
              </div>
            </div>
            <div className="number-progress mt-3">
              <div className="con-ft3">25%</div>
              <div className="u-progress wd-400">
                <div className="u-progress-bar w-25"></div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <button
                type="button"
                id="firstButton"
                className="u-btn u-btn-outline btn-ft1 mr-5 d-flex align-items-center justify-content-center"
                onClick={Handle_Edit_Course}
              >
                <div className="mr-2">Editar curso</div>
                <i className="fas fa-pen-alt"></i>
              </button>

              <div className="dropdown">
                <button
                  type="button"
                  className="u-btn u-btn-color btn-ft1 d-flex align-items-center justify-content-center dropbtn"
                >
                  <div className="mr-2">Adicionar</div>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="dropdown-content">
                  <div
                    className="con-ft4 mgb-15"
                    onClick={() => goAddContent()}
                    style={{ cursor: "pointer" }}
                  >
                    Novo conteúdo
                  </div>
                  <AddMoudle />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-12 col-xl-5 mgt-70 d-flex justify-content-center flex-column">
          {allModuleData
            ? allModuleData.modules.map((item, key) => {
                return (
                  <div
                    className="accordion mt-3"
                    id={`accordion` + key}
                    key={key}
                  >
                    <div className="fold">
                      <div
                        className={`d-flex justify-content-between align-items-center ${
                          active1 ? "open-fold" : ""
                        }`}
                        id={`elActive` + key}
                      >
                        <button
                          className={`fold_trigger ${active1 ? "open" : ""}`}
                          onClick={edit && selectFold1}
                        >
                          <div className="Edit-ft1 mgl-40">
                            MÓDULO {key + 1}
                          </div>
                          <div className="d-flex align-items-center">
                            <i
                              className={`fas fa-chevron-up mr-2 down-up ${
                                active1 ? "open1" : ""
                              }`}
                            ></i>
                            {edit ? (
                              <div className="con-ft1">{item.name}</div>
                            ) : (
                              <input
                                type="text"
                                className="input-text"
                                value={textvalue}
                                onChange={onChangeText}
                              />
                            )}
                          </div>
                        </button>
                        {edit ? (
                          <button
                            id={`moreBtn` + key}
                            className="dropBtn text-center"
                            onClick={(e) => HandleMore(e)}
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                        ) : (
                          <button
                            className="checkBtn text-center"
                            onClick={editModuleSuccess}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                        )}

                        {select1 && (
                          <div className="select-content con-ft2">
                            <div
                              className="select-item mgb-15"
                              onClick={editModuleName}
                            >
                              Editar
                            </div>
                            <div className="select-item mgb-15">Mover cima</div>
                            <div className="select-item mgb-15">
                              Mover baixo
                            </div>
                            <div className="select-item mgb-15">Duplicar</div>
                            <div
                              className="select-item mgb-15"
                              onClick={handleMove}
                            >
                              Mover aulas
                            </div>
                            <DeleteMoudle moduleId={item._id} />
                          </div>
                        )}
                      </div>

                      <div className={`fold_content ${active1 ? "open" : ""}`}>
                        <hr className="line" />
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${CheckBule}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div onClick={() => goImprove()}>
                            <div className="Edit-ft1 mb-2">AULA 1 | 7:23</div>
                            <div className="con-ft5">
                              Como melhorar o seu Aprendizado?
                            </div>
                          </div>
                        </div>
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${CheckBule}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div>
                            <div className="Edit-ft1 mb-2">
                              AULA 2 | VÍDEO 12:54
                            </div>
                            <div className="con-ft5">Revolução Digital</div>
                          </div>
                        </div>
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${DotIcon}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div>
                            <div className="Edit-ft1 mb-2">
                              AULA 3 | VÍDEO 15:54
                            </div>
                            <div className="con-ft5">O que é Home Office?</div>
                          </div>
                        </div>
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${VideoIcon}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div>
                            <div className="Edit-ft1 mb-2">
                              AULA 4 | VÍDEO 5:05
                            </div>
                            <div className="con-ft5">Área de Atuação</div>
                          </div>
                        </div>
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${VideoIcon}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div>
                            <div className="Edit-ft1 mb-2">
                              AULA 5 | VÍDEO 12:39
                            </div>
                            <div className="con-ft5">
                              Vantagens do Home Office
                            </div>
                          </div>
                        </div>
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${FileIcon}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div>
                            <div className="Edit-ft1 mb-2">
                              AULA 6 | ARQUIVO
                            </div>
                            <div className="con-ft5">
                              Boas Práticas Home Office
                            </div>
                          </div>
                        </div>
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${TextIcon}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div>
                            <div className="Edit-ft1 mb-2">AULA 7 | TEXTO</div>
                            <div className="con-ft5">Por que Home Office?</div>
                          </div>
                        </div>
                        <div className="test-content d-flex mb-4">
                          {moveflag ? (
                            <img
                              src={
                                require(`../../assets/img/${FileIcon}`).default
                              }
                              className="mr-2"
                            />
                          ) : (
                            <img
                              src={
                                require(`../../assets/img/${MoveIcon}`).default
                              }
                              className="mr-2"
                            />
                          )}
                          <div>
                            <div className="Edit-ft1 mb-2">
                              AULA 8 | ARQUIVO
                            </div>
                            <div className="con-ft5">
                              Relacionamento Interpessoal
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
          {/* <div className="accordion">
            <div className="fold">
              <div
                className={`d-flex justify-content-between align-items-center  ${
                  active2 ? "open-fold" : ""
                }`}
              >
                <button
                  className={`fold_trigger ${active2 ? "open" : ""}`}
                  onClick={selectFold2}
                >
                  <div className="Edit-ft1 mgl-40">MÓDULO 2</div>
                  <div className="d-flex align-items-center">
                    <i
                      className={`fas fa-chevron-up mr-2 down-up ${
                        active2 ? "open1" : ""
                      }`}
                    ></i>
                    <div className="con-ft1">Agora é pra Valer!</div>
                  </div>
                </button>
                <button
                  className="dropbut text-center"
                  // onClick={Handle_Select2}
                >
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                {select2 && (
                  <div className="select-content con-ft2">
                    <div className="select-item mgb-15">Editar</div>
                    <div className="select-item mgb-15">Mover cima</div>
                    <div className="select-item mgb-15">Mover baixo</div>
                    <div className="select-item mgb-15">Duplicar</div>
                    <div className="select-item mgb-15">Mover aulas</div>
                    <div className="select-item con-color1">Excluir</div>
                  </div>
                )}
              </div>

              <div className={`fold_content ${active2 ? "open" : ""}`}>
                <hr className="line" />
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${CheckBule}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 1 | 7:23</div>
                    <div className="con-ft5">
                      Como melhorar o seu Aprendizado?
                    </div>
                  </div>
                </div>
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${CheckBule}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 2 | VÍDEO 12:54</div>
                    <div className="con-ft5">Revolução Digital</div>
                  </div>
                </div>
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${DotIcon}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 3 | VÍDEO 15:54</div>
                    <div className="con-ft5">O que é Home Office?</div>
                  </div>
                </div>
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${VideoIcon}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 4 | VÍDEO 5:05</div>
                    <div className="con-ft5">Área de Atuação</div>
                  </div>
                </div>
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${VideoIcon}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 5 | VÍDEO 12:39</div>
                    <div className="con-ft5">Vantagens do Home Office</div>
                  </div>
                </div>
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${FileIcon}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 6 | ARQUIVO</div>
                    <div className="con-ft5">Boas Práticas Home Office</div>
                  </div>
                </div>
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${TextIcon}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 7 | TEXTO</div>
                    <div className="con-ft5">Por que Home Office?</div>
                  </div>
                </div>
                <div className="test-content d-flex mb-4">
                  <img
                    src={require(`../../assets/img/${FileIcon}`).default}
                    className="mr-2"
                  />
                  <div>
                    <div className="Edit-ft1 mb-2">AULA 8 | ARQUIVO</div>
                    <div className="con-ft5">Relacionamento Interpessoal</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-xl-1"></div>
      </div>
    </div>
  );
}
