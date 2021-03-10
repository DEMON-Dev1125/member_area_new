import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import "../../assets/css/login.css";
import "../../assets/css/member.css";
import StyledCheckbox from "components/Checkbox";
const MemberAvatar = "face-5.jpg";
const MemberBack = "membro.png";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Member() {
  const history = useHistory();
  const AddMember = () => {
    history.push("/main/member/addmember");
  };
  const handleEdit = () => {
    history.push("/main/member/editmember");
  };
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [NoMember, setMember] = useState("");
  const OneMember = () => {
    setMember((prevState) => !prevState);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div
                className="Edit-ft2 mt-1"
                onClick={OneMember}
                style={{ cursor: "pointer" }}
              >
                Membros
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button
                type="button"
                className="u-btn-group u-btn-color btn-ft1 d-flex align-items-center justify-content-center dropbtn w-100"
                onClick={AddMember}
              >
                <div className="mr-3">Nova membro</div>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <hr />
          {!NoMember ? (
            <div className={classes.root}>
              <TabContext value={value}>
                <div className="d-flex justify-content-center">
                  <TabList onChange={handleChange}>
                    <Tab label="Alunos" value="1" />
                    <Tab label="Colaboradores" value="2" />
                    <Tab label="Bloqueados" value="3" />
                  </TabList>
                </div>
                <TabPanel value="1">
                  <div className="text-center">
                    <img
                      src={require(`../../assets/img/${MemberBack}`).default}
                    />
                    <div className="Edit-ft3 mt-5">
                      Nenhum membro cadastrado!
                    </div>
                    <div className="Edit-ft1 mt-3">
                      Seus membros cadastrados irão aparecer aqui!
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="text-center">
                    <img
                      src={require(`../../assets/img/${MemberBack}`).default}
                    />
                    <div className="Edit-ft3 mt-5">
                      Nenhum membro cadastrado!
                    </div>
                    <div className="Edit-ft1 mt-3">
                      Seus membros cadastrados irão aparecer aqui!
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div className="text-center">
                    <img
                      src={require(`../../assets/img/${MemberBack}`).default}
                    />
                    <div className="Edit-ft3 mt-5">
                      Nenhum membro cadastrado!
                    </div>
                    <div className="Edit-ft1 mt-3">
                      Seus membros cadastrados irão aparecer aqui!
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          ) : (
            <div className={classes.root}>
              <TabContext value={value}>
                <div className="d-flex justify-content-center">
                  <TabList onChange={handleChange}>
                    <Tab label="Alunos" value="1" />
                    <Tab label="Colaboradores" value="2" />
                    <Tab label="Bloqueados" value="3" />
                  </TabList>
                </div>
                <TabPanel value="1">
                  <div className="container content_style p-5">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                          />
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                          />
                        </div>
                        <div className="col-12 col-md-2 mt-1">
                          <div className="d-flex">
                            <StyledCheckbox />
                            <div className="con-ft3 pt-2">Ativado</div>
                          </div>
                          <div className="d-flex">
                            <StyledCheckbox />
                            <div className="con-ft3 pt-2">Pendente</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-online">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button
                            type="button"
                            className="btn_edit"
                            onClick={handleEdit}
                          >
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-away">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" className="btn_edit">
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-away">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" className="btn_edit">
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-away">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" className="btn_edit">
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="container content_style p-5">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                          />
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                          />
                        </div>
                        <div className="col-12 col-md-2 mt-1">
                          <div className="d-flex">
                            <StyledCheckbox />
                            <div className="con-ft3 pt-2">Ativado</div>
                          </div>
                          <div className="d-flex">
                            <StyledCheckbox />
                            <div className="con-ft3 pt-2">Pendente</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-online">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" className="btn_edit">
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-away">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" className="btn_edit">
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div className="container content_style p-5">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-block">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" className="btn_edit">
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-10 d-flex">
                          <div className="member_avatar avatar avatar-block">
                            <img
                              alt="..."
                              className="avatar-img"
                              src={
                                require(`../../assets/img/faces/${MemberAvatar}`)
                                  .default
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <div className="member_name">João Lima</div>
                            <div className="member_mail">
                              joaolimaduarte6@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" className="btn_edit">
                            <i className="fa fa-pen-alt"></i>
                          </button>
                          <button type="button" className="btn_eye ml-2">
                            <i className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
              <div className="pagination d-flex justify-content-center">
                <div className="pagiNum">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div className="pagiNum active ml-1">1</div>
                {/* <div className="pagiNum ml-1">2</div>
                <div className="pagiNum ml-1">...</div>
                <div className="pagiNum ml-1">16</div> */}
                <div className="pagiNum ml-1">
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
