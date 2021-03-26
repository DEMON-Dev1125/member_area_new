import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Tab,
  Tabs,
  Menu,
  Badge,
  Select,
  Checkbox,
  MenuItem,
  IconButton,
  Typography,
  FormControl,
} from "@material-ui/core";
import { TabContext } from "@material-ui/lab";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector,  useDispatch } from 'react-redux';

import "../../assets/css/login.css";
import "../../assets/css/member.css";
import StyledCheckbox from "components/Checkbox";
import { getAllMember } from "../../actions/member";

const MemberAvatar = "face-5.jpg";
const MemberBack = "membro.png";

const MemberData = [
  {
    _id: 123123123,
    name: "asdfasdf",
    role: 1,
    team: 1,
  },
  {
    _id: 1232123123,
    name: "asdfasdf",
    role: 1,
    team: 1,
  },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  formcontrol: {
    width: "100%",
  },
  active: {
    "& span": {
      color: "rgba(7, 121, 228, 1)",
      backgroundColor: "rgba(7, 121, 228, 0.1)",
    },
  },
  redactive: {
    "& span": {
      color: "rgba(228, 63, 90, 1)",
      backgroundColor: "rgba(228, 63, 90, 0.1)",
    },
  },
  disable: {},
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

const ITEM_HEIGHT = 48;

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

export default function Member() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [dropType, setDropType] = useState(10);
  
  const HandleDropType = (e) => {
    console.log(e.target.value);
    setDropType(e.target.value);
  };

  const AddMember = () => {
    history.push("/main/member/addmember");
  };
  const handleEdit = () => {
    history.push("/main/member/editmember");
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [NoMember, setMember] = useState("");
  const OneMember = () => {
    setMember((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getAllMember());
  }, []);

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
          {NoMember ? (
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
                          Alunos
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
                          Colaboradores
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
                          className={value == 2 ? classes.redactive : ""}
                        >
                          Bloqueados
                        </StyledBadge>
                      }
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </div>
                <TabPanel value={value} index={0}>
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
                <TabPanel value={value} index={1}>
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
                <TabPanel value={value} index={2}>
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
                          badgeContent={152}
                          className={value == 0 ? classes.active : ""}
                        >
                          Alunos
                        </StyledBadge>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={3}
                          className={value == 1 ? classes.active : ""}
                        >
                          Colaboradores
                        </StyledBadge>
                      }
                      {...a11yProps(1)}
                    />
                    <Tab
                      label={
                        <StyledBadge
                          showZero
                          max={999}
                          badgeContent={2}
                          className={value == 2 ? classes.redactive : ""}
                        >
                          Bloqueados
                        </StyledBadge>
                      }
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </div>
                <TabPanel value={value} index={0}>
                  <div className="container content_style">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                          />
                        </div>
                        <div className="col-12 col-md-4 mt-1 position-relative new_group_select">
                          <FormControl
                            variant="outlined"
                            className={classes.root}
                          >
                            <Select
                              native
                              value={dropType}
                              onChange={HandleDropType}
                              label="class"
                            >
                              <option value={10}>Turma A (Padrão)</option>
                              <option value={20}>Turma B</option>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-12 col-md-3 mt-1 desktop_hidden">
                          <div className="d-flex">
                            <Checkbox
                              defaultChecked
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                            <div className="con-ft6 pt-2">Ativado</div>
                          </div>
                          <div className="d-flex">
                            <Checkbox
                              defaultChecked
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                            <div className="con-ft6 pt-2">Pendente</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-3 mt-1 mobile_hidden">
                          <div className="row">
                            <div className="d-flex col-6">
                              <StyledCheckbox />
                              <div className="con-ft6 pt-2">Ativado</div>
                            </div>
                            <div className="d-flex col-6">
                              <StyledCheckbox />
                              <div className="con-ft6 pt-2">Pendente</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="row">
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
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
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
                            <button type="button" className="btn_edit">
                              <i className="fa fa-pen-alt"></i>
                            </button>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                          </div>
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
                            <button type="button" className="btn_edit">
                              <i className="fa fa-pen-alt"></i>
                            </button>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                          </div>
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
                            <button type="button" className="btn_edit">
                              <i className="fa fa-pen-alt"></i>
                            </button>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                          </div>
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="container content_style">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                          />
                        </div>
                        <div className="col-12 col-md-4 mt-1 position-relative new_group_select">
                          <FormControl
                            variant="outlined"
                            className={classes.root}
                          >
                            <Select
                              native
                              value={dropType}
                              onChange={HandleDropType}
                              label="class"
                            >
                              <option value={10}>Administrador</option>
                              <option value={20}>Atendimento</option>
                              <option value={30}>Moderador</option>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-12 col-md-3 mt-1 desktop_hidden">
                          <div className="d-flex">
                            <Checkbox
                              defaultChecked
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                            <div className="con-ft6 pt-2">Ativado</div>
                          </div>
                          <div className="d-flex">
                            <Checkbox
                              defaultChecked
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                            <div className="con-ft6 pt-2">Pendente</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mt-1 mobile_hidden">
                          <div className="row">
                            <div className="d-flex col-6">
                              <StyledCheckbox />
                              <div className="con-ft6 pt-2">Ativado</div>
                            </div>
                            <div className="d-flex col-6">
                              <StyledCheckbox />
                              <div className="con-ft6 pt-2">Pendente</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      <div className="row">
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
                            <button type="button" className="btn_edit">
                              <i className="fa fa-pen-alt"></i>
                            </button>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                          </div>
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
                            <button type="button" className="btn_edit">
                              <i className="fa fa-pen-alt"></i>
                            </button>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                          </div>
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="container content_style">
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
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
                            <button type="button" className="btn_edit">
                              <i className="fa fa-pen-alt"></i>
                            </button>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                          </div>
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-9 col-9 d-flex">
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
                        <div className="col-sm-3 col-3 mt-1">
                          <div className="desktop_hidden">
                            <button type="button" className="btn_edit">
                              <i className="fa fa-pen-alt"></i>
                            </button>
                            <button type="button" className="btn_eye ml-2">
                              <i className="fa fa-eye"></i>
                            </button>
                          </div>
                          <div className="mobile_hidden">
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              <MenuItem onClick={handleEdit}>Edit</MenuItem>
                              <MenuItem onClick={handleClose}>view</MenuItem>
                            </Menu>
                          </div>
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
