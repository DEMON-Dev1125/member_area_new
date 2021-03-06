import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {
  getAllModule,
  getAllContent,
  updateContent,
  updateModule,
  moduleNameEdit,
} from "../../actions/content";
import DeleteMoudle from "./Deletedialog";
import AddMoudle from "./Addmodule";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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

const accordionData = [
  {
    id: 1,
    title: "Como melhorar o seu Aprendizado?",
    type: "",
    time: "7:23",
  },
  {
    id: 2,
    title: "Revolução Digital",
    type: "VÍDEO",
    time: "12:54",
  },
  {
    id: 3,
    title: "O que é Home Office?",
    type: "VÍDEO",
    time: "15:54",
  },
  {
    id: 4,
    title: "Área de Atuação",
    type: "VÍDEO",
    time: "5:05",
  },
  {
    id: 5,
    title: "Vantagens do Home Office",
    type: "VÍDEO",
    time: "12:39",
  },
  {
    id: 6,
    title: "Boas Práticas Home Office",
    type: "ARQUIVO",
    time: "",
  },
  {
    id: 7,
    title: "Por que Home Office?",
    type: "TEXTO",
    time: "",
  },
  {
    id: 8,
    title: "Relacionamento Interpessoal",
    type: "ARQUIVO",
    time: "",
  },
];

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
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const allModuleData = useSelector((state) => state.content.allData);
  const allContentData = useSelector((state) => state.content.allContentData);
  const [characters, updateCharacters] = useState([]);

  useEffect(() => {
    dispatch(getAllContent());
    dispatch(getAllModule());
  }, []);

  const [active1, setActive1] = useState(false);
  const selectFold1 = (item) => {
    if (item.collapseKey) item.collapseKey = false;
    else item.collapseKey = true;
    setActive1(!active1);
    updateCharacters(allContentData ? allContentData.contents : []);
  };
  const [active2, setActive2] = useState(false);
  const selectFold2 = () => {
    setActive2(!active2);
  };
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const HandleMore = (item) => {
    if (item.moreButtonKey) item.moreButtonKey = false;
    else item.moreButtonKey = true;
    setSelect1(!select1);
  };
  const Handle_Select2 = () => {
    setSelect2(!select2);
  };
  const [edit, setEdit] = useState(true);

  const editModuleName = (item) => {
    item.editKey = true;
    item.moreButtonKey = false;
    setEdit(!edit);
    setSelect1(!select1);
    setMoveflag(true);
    setTextvalue(item.name);
  };

  const [textvalue, setTextvalue] = useState("");

  const onChangeText = (e) => {
    const moduleName = e.target.value;
    setTextvalue(moduleName);
  };

  const editModuleSuccess = (item) => {
    item.editKey = false;
    setEdit(!edit);
    item.name = textvalue;
    dispatch(moduleNameEdit(item.id, textvalue, item.order));
  };

  const [moveflag, setMoveflag] = useState(true);

  const handleMove = (item) => {
    item.moreButtonKey = false;
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
  const goImprove = (item) => {
    console.log(item.name, item.id);
    history.push({
      pathname: "/main/content/improve",
      state: { id: item.id, name: item.name },
    });
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    let temp = [];
    let contents = [];
    items.map((data, index) => {
      data.order = index;
      temp.push(data);
      let content = {};
      content.order = index + 1;
      content.id = data.id;
      contents.push(content);
    });

    updateCharacters(temp);
    dispatch(updateContent(contents));
  };

  const moveUp = (item) => {
    item.moreButtonKey = false;
    let modules = [];
    if (item.order === 0) {
      // allModuleData.map(data => {
      //   modules.push(data);
      // });
      return;
    } else {
      allModuleData.map((data) => {
        let module = {};
        module.id = data.id;
        if (data.id === item.id) {
          data.order = item.order - 1;
        }
        if (item.order - 1 === data.order) {
          data.order = item.order;
        }
        module.order = data.order;
        modules.push(module);
      });

      dispatch(updateModule(modules));
    }
  };

  const moveDown = (item) => {
    item.moreButtonKey = false;
    let modules = [];
    if (item.order === allModuleData.length - 1) {
      return;
    } else {
      allModuleData.map((data) => {
        let module = {};
        module.id = data.id;
        if (data.id === item.id && data.order === item.order) {
          data.order = item.order + 1;
        }
        if (item.order === data.order && data.id !== item.id) {
          data.order = item.order - 1;
        }

        module.order = data.order;
        modules.push(module);
      });

      dispatch(updateModule(modules));
    }
  };

  const [delDig, setDelDig] = useState(false);
  const [moreButtonKeys, setMoreButtonKeys] = useState(false);

  const handleOnBlur = (item) => {
    item.moreButtonKey = false;
    setMoreButtonKeys(!moreButtonKeys);
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
            ? allModuleData.map((item, key) => {
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
                          className={`fold_trigger ${
                            item.collapseKey ? "open" : ""
                          }`}
                          onClick={edit && (() => selectFold1(item))}
                        >
                          <div className="Edit-ft1 mgl-40">
                            MÓDULO {key + 1}
                          </div>
                          <div className="d-flex align-items-center">
                            <i
                              className={`fas fa-chevron-up mr-2 down-up ${
                                item.collapseKey ? "open1" : ""
                              }`}
                            ></i>
                            {!item.editKey ? (
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
                        {!item.editKey ? (
                          <button
                            id={`moreBtn` + key}
                            className="dropBtn text-center"
                            onClick={() => HandleMore(item)}
                            // onBlur={() => handleOnBlur(item)}
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                        ) : (
                          <button
                            className="checkBtn text-center"
                            onClick={() => editModuleSuccess(item)}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                        )}

                        {item.moreButtonKey && (
                          <div
                            className="select-content con-ft2"
                            onMouseLeave={() => handleOnBlur(item)}
                          >
                            <div
                              className="select-item pb-4"
                              onClick={() => editModuleName(item)}
                            >
                              Editar
                            </div>
                            <div
                              className="select-item py-4"
                              onClick={() => moveUp(item)}
                            >
                              Mover cima
                            </div>
                            <div
                              className="select-item py-4"
                              onClick={() => moveDown(item)}
                            >
                              Mover baixo
                            </div>
                            <div className="select-item py-4">Duplicar</div>
                            <div
                              className="select-item py-4 mb-4"
                              onClick={(e) => handleMove(item)}
                            >
                              Mover aulas
                            </div>
                            <DeleteMoudle
                              moduleId={item.id}
                              title={item.name}
                            />
                          </div>
                        )}
                      </div>

                      <div
                        className={`fold_content ${
                          item.collapseKey ? "open" : ""
                        }`}
                      >
                        <hr className="line" />
                        {moveflag ? (
                          characters.map((data, index) => {
                            return (
                              <div key={index}>
                                {item.id === data.module && (
                                  <div className="test-content d-flex mb-4">
                                    <img
                                      src={
                                        require(`../../assets/img/${CheckBule}`)
                                          .default
                                      }
                                      className="mr-2"
                                    />
                                    <div onClick={() => goImprove(item)}>
                                      <div className="Edit-ft1 mb-2">
                                        AULA {index + 1} | {data.type}{" "}
                                        {data.time}
                                      </div>
                                      <div className="con-ft5">
                                        {data.title}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })
                        ) : (
                          <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="characters">
                              {(provided) => (
                                <div
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                >
                                  {characters.map((data, index) => {
                                    return (
                                      <>
                                        {item.id === data.module && (
                                          <Draggable
                                            key={data.order}
                                            draggableId={"item" + data.order}
                                            index={index}
                                          >
                                            {(provided) => (
                                              <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="test-content d-flex mb-4"
                                              >
                                                <img
                                                  src={
                                                    require(`../../assets/img/${MoveIcon}`)
                                                      .default
                                                  }
                                                  className="mr-2"
                                                />
                                                <div
                                                  onClick={() => goImprove()}
                                                >
                                                  <div className="Edit-ft1 mb-2">
                                                    AULA {index + 1} |{" "}
                                                    {data.type} {data.time}
                                                  </div>
                                                  <div className="con-ft5">
                                                    {data.title}
                                                  </div>
                                                </div>
                                              </div>
                                            )}
                                          </Draggable>
                                        )}
                                      </>
                                    );
                                  })}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </DragDropContext>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="col-xl-1"></div>
      </div>
    </div>
  );
}
