import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import DeleteDialogIcon from "./Deleteicon.js";
import "../../assets/scss/entire.scss";
import "../../assets/css/login.css";

import { getModuleById, updateStatusById } from "../../actions/improve";
import { convertFromHTML } from "draft-js";

const CheckBule = "check-bule.svg";
const FileIcon = "fileIcon.svg";
const DotIcon = "dotIcon.svg";
const TextIcon = "textIcon.svg";
const VideoIcon = "vídeoIcon.svg";
const MoveIcon = "moveIcon.svg";
const Avatar = "Avatar.png";
const Member = "member4.png";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 98,
  },
}));
export default function NewContent(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const moduleId = props.location.state.id;
  const moduleName = props.location.state.name;

  const moduleData = useSelector((state) =>
    state.improve.moduleData ? state.improve.moduleData.contents : []
  );
  const status = useSelector((state) => state.improve.status ? state.improve.status.success : "");
  console.log(moduleData);

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [text, setText] = useState("");
  const [readStatus, setReadStatus] = useState("");
  const [itemStatusId, setItemStatusId] = useState("");
  
  const [classcomplete, setClasscomplete] = useState(true);

  const getContent = (data) => {
    setTitle(data.title);
    setSubTitle(`AULA ${data.order}`);
    // setText(convertFromHTML(data.text));
    setText(data.text);
    setItemStatusId(data._id);
    if(data.status === "read") setClasscomplete(false);
    else setClasscomplete(true);
  };

  const goEditContent = () => {
    history.push({
      pathname: "/main/content/editcontent",
      state: { id: itemStatusId, moduleId: moduleId }
    });
  }

  const [active1, setActive1] = useState(true);
  const selectFold1 = () => {
    setActive1(!active1);
  };
  const [active2, setActive2] = useState(false);
  const selectFold2 = () => {
    setActive2(!active2);
  };
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const Handle_Select1 = () => {
    setSelect1(!select1);
  };
  const Handle_Select2 = () => {
    setSelect2(!select2);
  };
  const [edit, setEdit] = useState(true);
  const Handle_Edit1 = () => {
    setEdit(!edit);
    setSelect1(!select1);
    setMoveflag(true);
  };
  const [textvalue, setTextvalue] = useState("Introdução");
  const Handle_TextValue = (e) => {
    setTextvalue(e.target.value);
  };
  const Handle_Initial_Select1 = () => {
    setEdit(!edit);
  };
  const [moveflag, setMoveflag] = useState(true);
  const Handle_Moveraulas = () => {
    setMoveflag(false);
    setSelect1(false);
  };
  const [comment, setComment] = useState("");
  const Handle_Comment = (e) => {
    setComment(e.target.value);
  };
  const [comment1, setComment1] = useState("");
  const Handle_Comment1 = (e) => {
    setComment1(e.target.value);
  };
  const [group, setGroup] = useState(10);
  const Handle_Group = (e) => {
    setGroup(e.target.value);
  };
  const [responder, setResponder] = useState(false);
  const Handle_Responder = () => {
    setResponder(!responder);
  };
  const [publish1, setPublish1] = useState(false);
  const Handle_Publish = () => {
    setResponder(false);
    setPublish1(true);
  };
  const Handle_Complete = () => {
    // setClasscomplete(!classcomplete);
    dispatch(updateStatusById(itemStatusId));
  };

  useEffect(() => {
    dispatch(getModuleById(moduleId));
  }, []);

  useEffect(() => {
    if(status === "success") {
      dispatch(getModuleById(moduleId));
      setClasscomplete(false);
    }
  }, [status]);

  return (
    <>
      <div>
        <div className="conf-section d-flex">
          <div className="conference">
            <div className="video-button step-buttons">
              <i className="fas fa-step-backward step-icon"></i>
              <div className="d-flex justify-content-center align-items-center play-box">
                <i className="fas fa-play step-icon"></i>
              </div>
              <i className="fas fa-step-forward step-icon"></i>
            </div>
          </div>
          <div className="introduction">
            <div className="Edit-ft1">{moduleName}</div>
            <div className="imp-ft1 mgt-10">{moduleName}</div>
            <div className="intro-list mgt-50">
              {moduleData.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="test-content d-flex mb-4">
                      {data.status === "read" && (
                        <img
                          src={require(`../../assets/img/${CheckBule}`).default}
                          className="mr-2"
                        />
                      )}
                      {data.status === "unread" && (
                        <img
                          src={require(`../../assets/img/${VideoIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div onClick={() => getContent(data)}>
                        <div className="Edit-ft1 mb-2">
                          AULA {index + 1} | {data.type} {data.time}
                        </div>
                        <div className="con-ft5" style={{ color: "white" }}>
                          {data.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${CheckBule}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 1 | 7:23</div>
                  <div className="imp-ft2">
                    Como melhorar o seu Aprendizado?
                  </div>
                </div>
              </div> */}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${CheckBule}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 2 | VÍDEO 12:54</div>
                  <div className="imp-ft2">Revolução Digital</div>
                </div>
              </div> */}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${DotIcon}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 3 | VÍDEO 15:54</div>
                  <div className="imp-ft2">O que é Home Office?</div>
                </div>
              </div> */}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${VideoIcon}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 4 | VÍDEO 5:05</div>
                  <div className="imp-ft2">Área de Atuação</div>
                </div>
              </div> */}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${VideoIcon}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 5 | VÍDEO 12:39</div>
                  <div className="imp-ft2">Vantagens do Home Office</div>
                </div>
              </div> */}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${FileIcon}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 6 | ARQUIVO</div>
                  <div className="imp-ft2">Boas Práticas Home Office</div>
                </div>
              </div> */}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${TextIcon}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 7 | TEXTO</div>
                  <div className="imp-ft2">Por que Home Office?</div>
                </div>
              </div> */}
              {/* <div className="test-content d-flex mgb-32">
                {moveflag ? (
                  <img
                    src={require(`../../assets/img/${FileIcon}`).default}
                    className="mgr-20"
                  />
                ) : (
                  <img
                    src={require(`../../assets/img/${MoveIcon}`).default}
                    className="mgr-20"
                  />
                )}
                <div className="">
                  <div className="Edit-ft1 mgb-5">AULA 8 | ARQUIVO</div>
                  <div className="imp-ft2">Relacionamento Interpessoal</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="improve-container flag1">
          <div className="imp-left-section">
            <div
              className="mgt-5 con-ft6 pd-5 but-module"
              onClick={() => {
                history.push("/main/content");
              }}
            >
              {moduleName}: {moduleName}
            </div>
            <div className="mgt-50 Edit-ft1">{subTitle}</div>
            <div className="mgt-10 Edit-ft2">{title}</div>
            <div className="mgt-30 con-ft3">{text}</div>
            <div className="mgt-50 Edit-ft1">ARQUIVOS COMPLEMENTARES</div>
            <div className="pdf">
              <div className="con-ft7 pd-5 mgr-15">PDF</div>
              <div className="con-ft7">Explicação Bônus | 1MB</div>
            </div>
          </div>
          <div className="imp-right-section">
            <button
              type="button"
              className="u-btn-improve1 u-btn-outline1 btn-ft1 d-flex align-items-center justify-content-center mgb-20"
              onClick={Handle_Complete}
            >
              {classcomplete ? (
                <div className="mgr-15">Marcar aula como concluído</div>
              ) : (
                <div className="mgr-15">Concluído</div>
              )}
              <i className="fa fa-check" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="u-btn-improve u-btn-outline btn-ft1 d-flex align-items-center justify-content-center"
            >
              <div
                className="mgr-15"
                onClick={goEditContent}
              >
                Editar conteúdo
              </div>
              <i className="fas fa-pen-alt"></i>
            </button>
          </div>
        </div>
        <div className="improve-container">
          <div className="imp-left-section">
            <div className="d-flex justify-content-between mgb-30">
              <div className="Edit-ft6">1 comentário</div>
              <div className="new_group_select1">
                <FormControl
                  variant="outlined"
                  className={`${classes.formControl}`}
                >
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={group}
                    onChange={Handle_Group}
                    label="age"
                  >
                    <MenuItem value={10}>Turma A</MenuItem>
                    <MenuItem value={20}>Turma B</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="d-flex pdl-5">
              <img
                className="u-img1"
                src={require(`../../assets/img/${Avatar}`).default}
              />
              <div className="pdl-20">
                <textarea
                  className="Edit-warp1 ht-200  Edit-ft4 wd-722 mgl-20"
                  placeholder="Escreva sua pergunta ou comentário aqui..."
                  value={comment}
                  onChange={Handle_Comment}
                />
                <div className="but-publish">Publicar</div>
              </div>
            </div>
            <div className="second-m">
              <img
                className="u-img1"
                src={require(`../../assets/img/${Member}`).default}
              />
              <div className="pdl-20">
                <div className="d-flex justify-content-between mgb-20">
                  <div className="Edit-ft3">João Lima</div>
                  <div className="Edit-ft5">2 dias atrás</div>
                </div>
                <div className="mgb-20 con-ft8 mgr-94">
                  Boa tarde, assisti a aula e curti muito o conteúdo
                  apresentado, mas não encontrei o arquivo PDF que foi mostrado,
                  se alguém puder me ajudar com isso eu agradeço muito.
                </div>
                <div className="d-flex">
                  <div
                    className="but_respond mgr-10"
                    onClick={Handle_Responder}
                  >
                    Responder
                  </div>
                  <DeleteDialogIcon />
                </div>
                <TransitionGroup component={null}>
                  {responder && (
                    <CSSTransition classNames="dialog" timeout={300}>
                      <div className="d-flex pdl-5 mgt-50">
                        <img
                          className="u-img1"
                          style={{ cursor: "pointer" }}
                          src={require(`../../assets/img/${Avatar}`).default}
                        />
                        <div className="pdl-20">
                          <textarea
                            className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                            placeholder="Escreva sua pergunta ou comentário aqui..."
                            value={comment1}
                            onChange={Handle_Comment1}
                          />
                          <div className="d-flex mobile-publish">
                            <div
                              className="but-publish mgr-30"
                              onClick={Handle_Publish}
                            >
                              Publicar
                            </div>
                            <div
                              className="Edit-ft5 py-13"
                              onClick={Handle_Responder}
                            >
                              Cancelar
                            </div>
                          </div>
                        </div>
                      </div>
                    </CSSTransition>
                  )}
                </TransitionGroup>
                <TransitionGroup component={null}>
                  {publish1 && (
                    <CSSTransition classNames="dialog" timeout={300}>
                      <div className="d-flex pdl-5 mgt-50">
                        <img
                          className="u-img1"
                          style={{ cursor: "pointer" }}
                          src={require(`../../assets/img/${Member}`).default}
                        />
                        <div className="pdl-20">
                          <textarea
                            className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                            placeholder={comment1}
                            value={comment1}
                            onChange={Handle_Comment1}
                          />
                          <div className="d-flex">
                            <div className="but_respond mgr-10">Responder</div>
                            <DeleteDialogIcon />
                          </div>
                        </div>
                      </div>
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
