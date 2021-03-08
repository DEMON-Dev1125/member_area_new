/*********************This is 2,3,4 page********************** */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AddMoudle from "./Addmodule";
import DeleteMoudle from "./Deletedialog";

import { makeStyles } from "@material-ui/core/styles";
import "assets/scss/entire.scss";

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
  const Handle_Edit_Course = () => {
    history.push("/main/content/editor");
  };
  const goAddContent = () => {
    history.push("/main/content/newcontent");
  };
  const goImprove = () => {
    history.push("/main/content/improve");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 mgt-292">
          <div className="mgl-43">
            <div className="Edit-ft1">REMOTE METHOD 3.0</div>
            <div className="Edit-ft2">Conteúdos</div>
            <div className="con-ft3 mgt-30 mgr-174">
              Treinamento MR 3.0 foi criado para ajudar pessoas a conseguirem
              prestar serviço online.
            </div>
            <div className=" mgt-50 d-flex">
              <div className="d-flex align-items-center mgr-50">
                <i className="fas fa-clock con-colr"></i>
                <div className="con-ft3">4h 4m</div>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-play-circle con-color"></i>
                <div className="con-ft3">8 aulas</div>
              </div>
            </div>
            <div className="number-progress mgt-30">
              <div className="con-ft3">25%</div>
              <div className="u-progress wd-400">
                <div className="u-progress-bar w-25"></div>
              </div>
            </div>
            <div className="d-flex mgt-30">
              <button
                type="button"
                id="firstButton"
                className="u-btn u-btn-outline btn-ft1 mgr-30 d-flex align-items-center justify-content-center"
              >
                <div className="mgr-15" onClick={Handle_Edit_Course}>
                  Editar curso
                </div>
                <i className="fas fa-pen-alt"></i>
              </button>

              <div className="dropdown">
                <button
                  type="button"
                  className="u-btn u-btn-color btn-ft1 d-flex align-items-center justify-content-center dropbtn"
                >
                  <div className="mgr-15">Adicionar</div>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="dropdown-content">
                  <div
                    className="con-ft4 mgb-15"
                    onClick={() => goAddContent()}
                  >
                    Novo conteúdo
                  </div>
                  <AddMoudle />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mgt-70 d-flex justify-content-center flex-column">
          <div className="accordion">
            <div className="fold">
              <div
                className={`d-flex justify-content-between align-items-center con-fold ${
                  active1 ? "open-fold" : ""
                }`}
              >
                <button
                  className={`fold_trigger ${active1 ? "open" : ""}`}
                  onClick={edit && selectFold1}
                >
                  <div className="Edit-ft1 mgl-40">MÓDULO 1</div>
                  <div className="d-flex align-items-center">
                    <i
                      className={`fas fa-chevron-up mgr-20 down-up ${
                        active1 ? "open1" : ""
                      }`}
                    ></i>
                    {edit ? (
                      <div className="con-ft1">Introdução</div>
                    ) : (
                      // <TextField required id="standard-required" defaultValue="Introdução" className={classes.edit} />
                      <input
                        type="text"
                        className="input-text"
                        value={textvalue}
                        onChange={Handle_TextValue}
                      />
                    )}
                  </div>
                </button>
                {edit ? (
                  <button
                    className="dropbut text-center"
                    onClick={Handle_Select1}
                  >
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                ) : (
                  <button
                    className="dropbut1 text-center"
                    onClick={Handle_Initial_Select1}
                  >
                    <i className="fas fa-check"></i>
                  </button>
                )}

                {select1 && (
                  <div className="select-content con-ft2">
                    <div className="select-item mgb-15" onClick={Handle_Edit1}>
                      Editar
                    </div>
                    <div className="select-item mgb-15">Mover cima</div>
                    <div className="select-item mgb-15">Mover baixo</div>
                    <div className="select-item mgb-15">Duplicar</div>
                    <div
                      className="select-item mgb-15"
                      onClick={Handle_Moveraulas}
                    >
                      Mover aulas
                    </div>
                    <DeleteMoudle />
                  </div>
                )}
              </div>

              <div className={`fold_content ${active1 ? "open" : ""}`}>
                {active1 && (
                  <>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${CheckBule}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="" onClick={() => goImprove()}>
                        <div className="Edit-ft1 mgb-5">AULA 1 | 7:23</div>
                        <div className="con-ft5">
                          Como melhorar o seu Aprendizado?
                        </div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${CheckBule}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 2 | VÍDEO 12:54
                        </div>
                        <div className="con-ft5">Revolução Digital</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${DotIcon}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 3 | VÍDEO 15:54
                        </div>
                        <div className="con-ft5">O que é Home Office?</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${VideoIcon}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 4 | VÍDEO 5:05
                        </div>
                        <div className="con-ft5">Área de Atuação</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${VideoIcon}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 5 | VÍDEO 12:39
                        </div>
                        <div className="con-ft5">Vantagens do Home Office</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${FileIcon}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="">
                        <div className="Edit-ft1 mgb-5">AULA 6 | ARQUIVO</div>
                        <div className="con-ft5">Boas Práticas Home Office</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${TextIcon}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="">
                        <div className="Edit-ft1 mgb-5">AULA 7 | TEXTO</div>
                        <div className="con-ft5">Por que Home Office?</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      {moveflag ? (
                        <img
                          src={require(`../../assets/svg/${FileIcon}`).default}
                          className="mgr-20"
                        />
                      ) : (
                        <img
                          src={require(`../../assets/svg/${MoveIcon}`).default}
                          className="mgr-20"
                        />
                      )}
                      <div className="">
                        <div className="Edit-ft1 mgb-5">AULA 8 | ARQUIVO</div>
                        <div className="con-ft5">
                          Relacionamento Interpessoal
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="fold">
              <div
                className={`d-flex justify-content-between align-items-center con-fold ${
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
                      className={`fas fa-chevron-up mgr-20 down-up ${
                        active2 ? "open1" : ""
                      }`}
                    ></i>
                    <div className="con-ft1">Agora é pra Valer!</div>
                  </div>
                </button>
                <button
                  className="dropbut text-center"
                  onClick={Handle_Select2}
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
                {active2 && (
                  <>
                    <div className="test-content d-flex mgb-30">
                      <img src={checkBule} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">AULA 1 | 7:23</div>
                        <div className="con-ft5">
                          Como melhorar o seu Aprendizado?
                        </div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      <img src={checkBule} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 2 | VÍDEO 12:54
                        </div>
                        <div className="con-ft5">Revolução Digital</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      <img src={dotIcon} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 3 | VÍDEO 15:54
                        </div>
                        <div className="con-ft5">O que é Home Office?</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      <img src={videoIcon} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 4 | VÍDEO 5:05
                        </div>
                        <div className="con-ft5">Área de Atuação</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      <img src={videoIcon} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">
                          AULA 5 | VÍDEO 12:39
                        </div>
                        <div className="con-ft5">Vantagens do Home Office</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      <img src={fileIcon} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">AULA 6 | ARQUIVO</div>
                        <div className="con-ft5">Boas Práticas Home Office</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      <img src={textIcon} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">AULA 7 | TEXTO</div>
                        <div className="con-ft5">Por que Home Office?</div>
                      </div>
                    </div>
                    <div className="test-content d-flex mgb-30">
                      <img src={fileIcon} className="mgr-20"></img>
                      <div className="">
                        <div className="Edit-ft1 mgb-5">AULA 8 | ARQUIVO</div>
                        <div className="con-ft5">
                          Relacionamento Interpessoal
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
