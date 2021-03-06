import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Tab,
  Tabs,
  Badge,
  Select,
  Typography,
  FormControl,
} from "@material-ui/core";
import { TabContext } from "@material-ui/lab";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import DeleteDialogIcon from "../Contents/Deleteicon.js";
import "../../assets/css/login.css";
import "../../assets/css/member.css";

const Member = "member4.png";
const CommunityBack = "community.png";
const Avatar = "face-4.jpg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  formControl: {
    width: "100%",
  },
  active: {
    "& span": {
      color: "rgba(7, 121, 228, 1)",
      backgroundColor: "rgba(7, 121, 228, 0.1)",
    },
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    top: "25px",
    right: "-25px",
    padding: "3px",
    fontSize: "16px",
    lineHeight: "19px",
    borderRadius: "5px",
    color: "rgba(136, 146, 158, 1)",
    backgroundColor: "rgba(136, 146, 158, 0.1)",
  },
}))(Badge);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function Community() {
  const classes = useStyles();
  const history = useHistory();
  const [publish1, setPublish1] = useState(false);

  const [NoCommunity, setCommunity] = useState("");
  const OneCommunity = () => {
    setCommunity((prevState) => !prevState);
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [responder, setResponder] = useState(false);
  const Handle_Responder = () => {
    setResponder(!responder);
  };

  const [comment1, setComment1] = useState("");
  const Handle_Comment1 = (e) => {
    setComment1(e.target.value);
  };
  const Handle_Publish = () => {
    setResponder(false);
    setPublish1(true);
  };

  const [role3, setRole3] = useState(10);
  const Handle_Role3 = (e) => {
    setRole3(e.target.value);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">M??TODO REMOTO 3.0</div>
              <div
                className="Edit-ft2 mt-1"
                onClick={OneCommunity}
                style={{ cursor: "pointer" }}
              >
                Comunidade
              </div>
            </div>
          </div>
          <hr />
          {!NoCommunity ? (
            <div className={classes.root}>
              <TabContext value={value}>
                <div className="d-flex justify-content-center">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                  >
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={0}
                          className={value == 0 ? classes.active : ""}
                        >
                          N??o lidos
                        </StyledBadge>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={0}
                          className={value == 1 ? classes.active : ""}
                        >
                          Lidos
                        </StyledBadge>
                      }
                      {...a11yProps(1)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={0}
                          className={value == 2 ? classes.active : ""}
                        >
                          Aprovados
                        </StyledBadge>
                      }
                      {...a11yProps(2)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={0}
                          className={value == 3 ? classes.active : ""}
                        >
                          Reprovados
                        </StyledBadge>
                      }
                      {...a11yProps(3)}
                    />
                  </Tabs>
                </div>
                <TabPanel value={value} index={0}>
                  <div className="text-center">
                    <img
                      src={require(`../../assets/img/${CommunityBack}`).default}
                    />
                    <div className="Edit-ft3 mt-5">
                      Nenhum membro cadastrado!
                    </div>
                    <div className="Edit-ft1 mt-3">
                      Seus membros cadastrados ir??o aparecer aqui!
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="text-center">
                    <img
                      src={require(`../../assets/img/${CommunityBack}`).default}
                    />
                    <div className="Edit-ft3 mt-5">
                      Nenhum coment??rio pendente!
                    </div>
                    <div className="Edit-ft1 mt-3">
                      Os coment??rios pendentes dos seus alunos ir??o aparecer
                      aqui.
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="text-center">
                    <img
                      src={require(`../../assets/img/${CommunityBack}`).default}
                    />
                    <div className="Edit-ft3 mt-5">
                      Nenhum coment??rio pendente!
                    </div>
                    <div className="Edit-ft1 mt-3">
                      Os coment??rios pendentes dos seus alunos ir??o aparecer
                      aqui.
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <div className="text-center">
                    <img
                      src={require(`../../assets/img/${CommunityBack}`).default}
                    />
                    <div className="Edit-ft3 mt-5">
                      Nenhum coment??rio pendente!
                    </div>
                    <div className="Edit-ft1 mt-3">
                      Os coment??rios pendentes dos seus alunos ir??o aparecer
                      aqui.
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          ) : (
            <div className={classes.root}>
              <TabContext value={value}>
                <div className="d-flex justify-content-center">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                  >
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={1}
                          className={value == 0 ? classes.active : ""}
                        >
                          N??o lidos
                        </StyledBadge>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={0}
                          className={value == 1 ? classes.active : ""}
                        >
                          Lidos
                        </StyledBadge>
                      }
                      {...a11yProps(1)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={0}
                          className={value == 2 ? classes.active : ""}
                        >
                          Aprovados
                        </StyledBadge>
                      }
                      {...a11yProps(2)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={0}
                          className={value == 3 ? classes.active : ""}
                        >
                          Reprovados
                        </StyledBadge>
                      }
                      {...a11yProps(3)}
                    />
                  </Tabs>
                </div>
                <TabPanel value={value} index={0}>
                  <div className="container content_style p-5">
                    <div className="content_header">
                      <div className="mt-1 position-relative ht-45 new_group_select">
                        <FormControl
                          variant="outlined"
                          className={`${classes.formControl}`}
                          width="100%"
                        >
                          <Select
                            native
                            defaultValue="Aula"
                            id="grouped-native-select"
                            onChange={Handle_Role3}
                            label="select"
                          >
                            <optgroup
                              className="opt-group"
                              label="1 - Introdu????o"
                            >
                              <option value={0} className="opt-item">
                                Como melhorar o seu Aprendizado?
                              </option>
                              <option value={1}>Revolu????o Digital</option>
                              <option value={2}>O que ?? Home Office?</option>
                              <option value={3}>??rea de Atua????o</option>
                              <option value={4}>
                                Vantagens do Home Office
                              </option>
                              <option value={5}>
                                Boas Pr??ticas Home Office
                              </option>
                              <option value={6}>Por que Home Office?</option>
                            </optgroup>
                            <optgroup
                              className="opt-group"
                              label="2 - Agora ?? pra Valer!"
                            >
                              <option value={0} className="opt-item">
                                O que voc?? quer seguir?
                              </option>
                            </optgroup>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="second-m">
                        <img
                          className="u-img1"
                          src={require(`../../assets/img/${Member}`).default}
                        />
                        <div className="pdl-20">
                          <div className="d-flex justify-content-between mgb-20">
                            <div className="Edit-ft3">Jo??o Lima</div>
                            <div className="Edit-ft5">2 dias atr??s</div>
                          </div>
                          <div className="mgb-20 con-ft8 mgr-94">
                            Boa tarde, assisti a aula e curti muito o conte??do
                            apresentado, mas n??o encontrei o arquivo PDF que foi
                            mostrado, se algu??m puder me ajudar com isso eu
                            agrade??o muito.
                          </div>
                          <div className="d-flex">
                            <div
                              className="but_respond mgr-10"
                              onClick={Handle_Responder}
                            >
                              Responder
                            </div>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-up"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-down"></i>
                            </button>
                            <div className="ml-5">
                              <DeleteDialogIcon />
                            </div>
                          </div>
                          <TransitionGroup component={null}>
                            {responder && (
                              <CSSTransition classNames="dialog" timeout={300}>
                                <div className="d-flex pdl-5 mgt-50">
                                  <img
                                    className="u-img1"
                                    style={{ cursor: "pointer" }}
                                    src={
                                      require(`../../assets/img/faces/${Avatar}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder="Escreva sua pergunta ou coment??rio aqui..."
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
                                    src={
                                      require(`../../assets/img/${Member}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder={comment1}
                                      value={comment1}
                                      onChange={Handle_Comment1}
                                    />
                                    <div className="d-flex">
                                      <div className="but_respond mgr-10">
                                        Responder
                                      </div>
                                      <button
                                        type="button"
                                        className="btn_eye ml-2"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-up"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-down"></i>
                                      </button>
                                      <div className="ml-5">
                                        <DeleteDialogIcon />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CSSTransition>
                            )}
                          </TransitionGroup>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="container content_style p-5">
                    <div className="content_header">
                      <div className="mt-1 position-relative ht-45 new_group_select">
                        <FormControl
                          variant="outlined"
                          className={`${classes.formControl}`}
                          width="100%"
                        >
                          <Select
                            native
                            defaultValue="Aula"
                            id="grouped-native-select"
                            onChange={Handle_Role3}
                            label="select"
                          >
                            <optgroup
                              className="opt-group"
                              label="1 - Introdu????o"
                            >
                              <option value={0} className="opt-item">
                                Como melhorar o seu Aprendizado?
                              </option>
                              <option value={1}>Revolu????o Digital</option>
                              <option value={2}>O que ?? Home Office?</option>
                              <option value={3}>??rea de Atua????o</option>
                              <option value={4}>
                                Vantagens do Home Office
                              </option>
                              <option value={5}>
                                Boas Pr??ticas Home Office
                              </option>
                              <option value={6}>Por que Home Office?</option>
                            </optgroup>
                            <optgroup
                              className="opt-group"
                              label="2 - Agora ?? pra Valer!"
                            >
                              <option value={0} className="opt-item">
                                O que voc?? quer seguir?
                              </option>
                            </optgroup>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="second-m">
                        <img
                          className="u-img1"
                          src={require(`../../assets/img/${Member}`).default}
                        />
                        <div className="pdl-20">
                          <div className="d-flex justify-content-between mgb-20">
                            <div className="Edit-ft3">Jo??o Lima</div>
                            <div className="Edit-ft5">2 dias atr??s</div>
                          </div>
                          <div className="mgb-20 con-ft8 mgr-94">
                            Boa tarde, assisti a aula e curti muito o conte??do
                            apresentado, mas n??o encontrei o arquivo PDF que foi
                            mostrado, se algu??m puder me ajudar com isso eu
                            agrade??o muito.
                          </div>
                          <div className="d-flex">
                            <div
                              className="but_respond mgr-10"
                              onClick={Handle_Responder}
                            >
                              Responder
                            </div>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-up"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-down"></i>
                            </button>
                            <div className="ml-5">
                              <DeleteDialogIcon />
                            </div>
                          </div>
                          <TransitionGroup component={null}>
                            {responder && (
                              <CSSTransition classNames="dialog" timeout={300}>
                                <div className="d-flex pdl-5 mgt-50">
                                  <img
                                    className="u-img1"
                                    style={{ cursor: "pointer" }}
                                    src={
                                      require(`../../assets/img/faces/${Avatar}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder="Escreva sua pergunta ou coment??rio aqui..."
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
                                    src={
                                      require(`../../assets/img/${Member}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder={comment1}
                                      value={comment1}
                                      onChange={Handle_Comment1}
                                    />
                                    <div className="d-flex">
                                      <div className="but_respond mgr-10">
                                        Responder
                                      </div>
                                      <button
                                        type="button"
                                        className="btn_eye ml-2"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-up"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-down"></i>
                                      </button>
                                      <div className="ml-5">
                                        <DeleteDialogIcon />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CSSTransition>
                            )}
                          </TransitionGroup>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="container content_style p-5">
                    <div className="content_header">
                      <div className="mt-1 position-relative ht-45 new_group_select">
                        <FormControl
                          variant="outlined"
                          className={`${classes.formControl}`}
                          width="100%"
                        >
                          <Select
                            native
                            defaultValue="Aula"
                            id="grouped-native-select"
                            onChange={Handle_Role3}
                            label="select"
                          >
                            <optgroup
                              className="opt-group"
                              label="1 - Introdu????o"
                            >
                              <option value={0} className="opt-item">
                                Como melhorar o seu Aprendizado?
                              </option>
                              <option value={1}>Revolu????o Digital</option>
                              <option value={2}>O que ?? Home Office?</option>
                              <option value={3}>??rea de Atua????o</option>
                              <option value={4}>
                                Vantagens do Home Office
                              </option>
                              <option value={5}>
                                Boas Pr??ticas Home Office
                              </option>
                              <option value={6}>Por que Home Office?</option>
                            </optgroup>
                            <optgroup
                              className="opt-group"
                              label="2 - Agora ?? pra Valer!"
                            >
                              <option value={0} className="opt-item">
                                O que voc?? quer seguir?
                              </option>
                            </optgroup>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="second-m">
                        <img
                          className="u-img1"
                          src={require(`../../assets/img/${Member}`).default}
                        />
                        <div className="pdl-20">
                          <div className="d-flex justify-content-between mgb-20">
                            <div className="Edit-ft3">Jo??o Lima</div>
                            <div className="Edit-ft5">2 dias atr??s</div>
                          </div>
                          <div className="mgb-20 con-ft8 mgr-94">
                            Boa tarde, assisti a aula e curti muito o conte??do
                            apresentado, mas n??o encontrei o arquivo PDF que foi
                            mostrado, se algu??m puder me ajudar com isso eu
                            agrade??o muito.
                          </div>
                          <div className="d-flex">
                            <div
                              className="but_respond mgr-10"
                              onClick={Handle_Responder}
                            >
                              Responder
                            </div>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-up"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-down"></i>
                            </button>
                            <div className="ml-5">
                              <DeleteDialogIcon />
                            </div>
                          </div>
                          <TransitionGroup component={null}>
                            {responder && (
                              <CSSTransition classNames="dialog" timeout={300}>
                                <div className="d-flex pdl-5 mgt-50">
                                  <img
                                    className="u-img1"
                                    style={{ cursor: "pointer" }}
                                    src={
                                      require(`../../assets/img/faces/${Avatar}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder="Escreva sua pergunta ou coment??rio aqui..."
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
                                    src={
                                      require(`../../assets/img/${Member}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder={comment1}
                                      value={comment1}
                                      onChange={Handle_Comment1}
                                    />
                                    <div className="d-flex">
                                      <div className="but_respond mgr-10">
                                        Responder
                                      </div>
                                      <button
                                        type="button"
                                        className="btn_eye ml-2"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-up"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-down"></i>
                                      </button>
                                      <div className="ml-5">
                                        <DeleteDialogIcon />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CSSTransition>
                            )}
                          </TransitionGroup>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <div className="container content_style p-5">
                    <div className="content_header">
                      <div className="mt-1 position-relative ht-45 new_group_select">
                        <FormControl
                          variant="outlined"
                          className={`${classes.formControl}`}
                          width="100%"
                        >
                          <Select
                            native
                            defaultValue="Aula"
                            id="grouped-native-select"
                            onChange={Handle_Role3}
                            label="select"
                          >
                            <optgroup
                              className="opt-group"
                              label="1 - Introdu????o"
                            >
                              <option value={0} className="opt-item">
                                Como melhorar o seu Aprendizado?
                              </option>
                              <option value={1}>Revolu????o Digital</option>
                              <option value={2}>O que ?? Home Office?</option>
                              <option value={3}>??rea de Atua????o</option>
                              <option value={4}>
                                Vantagens do Home Office
                              </option>
                              <option value={5}>
                                Boas Pr??ticas Home Office
                              </option>
                              <option value={6}>Por que Home Office?</option>
                            </optgroup>
                            <optgroup
                              className="opt-group"
                              label="2 - Agora ?? pra Valer!"
                            >
                              <option value={0} className="opt-item">
                                O que voc?? quer seguir?
                              </option>
                            </optgroup>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="second-m">
                        <img
                          className="u-img1"
                          src={require(`../../assets/img/${Member}`).default}
                        />
                        <div className="pdl-20">
                          <div className="d-flex justify-content-between mgb-20">
                            <div className="Edit-ft3">Jo??o Lima</div>
                            <div className="Edit-ft5">2 dias atr??s</div>
                          </div>
                          <div className="mgb-20 con-ft8 mgr-94">
                            Boa tarde, assisti a aula e curti muito o conte??do
                            apresentado, mas n??o encontrei o arquivo PDF que foi
                            mostrado, se algu??m puder me ajudar com isso eu
                            agrade??o muito.
                          </div>
                          <div className="d-flex">
                            <div
                              className="but_respond mgr-10"
                              onClick={Handle_Responder}
                            >
                              Responder
                            </div>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-up"></i>
                            </button>
                            <button type="button" className="btn_thumbs ml-2">
                              <i className="fa fa-thumbs-down"></i>
                            </button>
                            <div className="ml-5">
                              <DeleteDialogIcon />
                            </div>
                          </div>
                          <TransitionGroup component={null}>
                            {responder && (
                              <CSSTransition classNames="dialog" timeout={300}>
                                <div className="d-flex pdl-5 mgt-50">
                                  <img
                                    className="u-img1"
                                    style={{ cursor: "pointer" }}
                                    src={
                                      require(`../../assets/img/faces/${Avatar}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder="Escreva sua pergunta ou coment??rio aqui..."
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
                                    src={
                                      require(`../../assets/img/${Member}`)
                                        .default
                                    }
                                  />
                                  <div className="pdl-20">
                                    <textarea
                                      className="Edit-warp1 ht-200  Edit-ft4 wd-632 mgl-20"
                                      placeholder={comment1}
                                      value={comment1}
                                      onChange={Handle_Comment1}
                                    />
                                    <div className="d-flex">
                                      <div className="but_respond mgr-10">
                                        Responder
                                      </div>
                                      <button
                                        type="button"
                                        className="btn_eye ml-2"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-up"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn_thumbs ml-2"
                                      >
                                        <i className="fa fa-thumbs-down"></i>
                                      </button>
                                      <div className="ml-5">
                                        <DeleteDialogIcon />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CSSTransition>
                            )}
                          </TransitionGroup>
                        </div>
                      </div>
                    </div>
                    <div></div>
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
