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
import { useSelector, useDispatch } from "react-redux";

import "../../assets/css/login.css";
import "../../assets/css/member.css";
import StyledCheckbox from "components/Checkbox";
import { getAllMember, getFilterMember } from "../../actions/member";
import { getAllGroup } from "../../actions/group";

const MemberAvatar = "face-5.jpg";
const MemberBack = "membro.png";

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
    setDropType(e.target.value);
    setGroupId(e.target.value);
    dispatch(
      getFilterMember(
        searchName,
        e.target.value,
        pageNum,
        pageCount,
        memberType
      )
    );
  };

  const memberData = useSelector((state) =>
    state.member.allData ? state.member.allData.members : []
  );
  const total = useSelector((state) =>
    state.member.allData ? state.member.allData.total : 0
  );

  console.log(memberData, total);

  const AddMember = () => {
    history.push("/main/member/addmember");
  };

  const handleEdit = (id) => {
    history.push({
      pathname: "/main/member/editmember",
      state: { id: id },
    });
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    let memberType;
    if (newValue === 0) {
      setMemberType("student");
      memberType = "student";
    } else if (newValue === 1) {
      setMemberType("collaborate");
      memberType = "collaborate";
    }

    setSearchName("");
    setGroupId("");
    dispatch(getFilterMember("", groupId, pageNum, pageCount, memberType));
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

  const goViewMember = () => {
    history.push("/main/member/viewmember");
  };

  const [searchName, setSearchName] = useState("");
  const [groupId, setGroupId] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(5);
  const [memberType, setMemberType] = useState("student");

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
    dispatch(
      getFilterMember(e.target.value, groupId, pageNum, pageCount, memberType)
    );
  };

  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
      dispatch(
        getFilterMember(searchName, groupId, pageNum - 1, pageCount, memberType)
      );
    }
  };

  const nextPage = () => {
    if (pageNum < Math.ceil(total / 5)) {
      setPageNum(pageNum + 1);
      dispatch(
        getFilterMember(searchName, groupId, pageNum + 1, pageCount, memberType)
      );
    }
  };

  useEffect(() => {
    dispatch(getAllGroup());
    dispatch(getFilterMember("", "", 1, 5, "student"));
  }, []);

  const groupDatas = useSelector((state) =>
    state.group.allData ? state.group.allData.groups : []
  );

  const pageButton = (key) => {
    let pageNumber = key + 1;
    setPageNum(pageNumber);
    dispatch(
      getFilterMember(searchName, groupId, pageNumber, pageCount, memberType)
    );
  };

  const [listDiv, setListDiv] = useState([]);

  useEffect(() => {
    if (memberData.length !== 0) {
      let numArr = [];
      let i;
      for (i = 1; i <= Math.ceil(total / 5); i++) {
        numArr.push(i);
      }
      setListDiv(numArr);
    }
  }, [memberData]);

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
          {memberData.length === 0 ? (
            <div className={classes.root}>
              <TabContext value={value ? value : ""}>
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
              <TabContext value={value ? value : ""}>
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
                          badgeContent={value == 0 ? total : 0}
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
                          badgeContent={value == 1 ? total : 0}
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
                          badgeContent={value == 2 ? total : 0}
                          className={value == 2 ? classes.redactive : ""}
                        >
                          Bloqueados
                        </StyledBadge>
                      }
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </div>

                {/*---------------------- student tabpan start -------------------------------------- */}

                <TabPanel value={value} index={0}>
                  <div className="container content_style">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                            value={searchName}
                            onChange={handleSearchName}
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
                              {groupDatas.map((item, index) => {
                                if (item.standardclass === "true")
                                  return (
                                    <option key={index} value={item.id}>
                                      {item.name}(standard)
                                    </option>
                                  );
                                else
                                  return (
                                    <option key={index} value={item.id}>
                                      {item.name}
                                    </option>
                                  );
                              })}
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
                      {memberData.map((data, index) => {
                        return (
                          data.membertype === "student" && (
                            <div key={index}>
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
                                    <div className="member_name">
                                      {data.name}
                                    </div>
                                    <div className="member_mail">
                                      {data.email}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3 col-3 mt-1">
                                  <div className="desktop_hidden">
                                    <button
                                      type="button"
                                      className="btn_edit"
                                      onClick={() => handleEdit(data.id)}
                                    >
                                      <i className="fa fa-pen-alt"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn_eye ml-2"
                                    >
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
                                      <MenuItem
                                        onClick={() => handleEdit(data.id)}
                                      >
                                        Edit
                                      </MenuItem>
                                      <MenuItem onClick={handleClose}>
                                        view
                                      </MenuItem>
                                    </Menu>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </TabPanel>

                {/*---------------------- student tabpan end -------------------------------------- */}

                {/*---------------------- collabrate tabpan start -------------------------------------- */}

                <TabPanel value={value} index={1}>
                  <div className="container content_style">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                            value={searchName}
                            onChange={handleSearchName}
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
                      {memberData.map((data, index) => {
                        return (
                          data.membertype === "collaborate" && (
                            <div key={index}>
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
                                    <div className="member_name">
                                      {data.name}
                                    </div>
                                    <div className="member_mail">
                                      {data.email}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3 col-3 mt-1">
                                  <div className="desktop_hidden">
                                    <button
                                      type="button"
                                      className="btn_edit"
                                      onClick={() => handleEdit(data.id)}
                                    >
                                      <i className="fa fa-pen-alt"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn_eye ml-2"
                                    >
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
                                      <MenuItem
                                        onClick={() => handleEdit(data.id)}
                                      >
                                        Edit
                                      </MenuItem>
                                      <MenuItem onClick={handleClose}>
                                        view
                                      </MenuItem>
                                    </Menu>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </TabPanel>

                {/*---------------------- collabrate tabpan end ------------------------- */}

                {/*---------------------- blocked tabpan start -------------------------- */}

                <TabPanel value={value} index={2}>
                  <div className="container content_style">
                    <div className="content_header">
                      <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                          <input
                            className="input-ft2 w-100"
                            placeholder="Busque por nome"
                            value={searchName}
                            onChange={handleSearchName}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="content_body mt-5">
                      {memberData.map((data, index) => {
                        return (
                          data.blocked && (
                            <div key={index}>
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
                                    <div className="member_name">
                                      {data.name}
                                    </div>
                                    <div className="member_mail">
                                      {data.email}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-3 col-3 mt-1">
                                  <div className="desktop_hidden">
                                    <button
                                      type="button"
                                      className="btn_edit"
                                      onClick={() => handleEdit(data.id)}
                                    >
                                      <i className="fa fa-pen-alt"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn_eye ml-2"
                                      onClick={goViewMember}
                                    >
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
                                      <MenuItem
                                        onClick={() => handleEdit(data.id)}
                                      >
                                        Edit
                                      </MenuItem>
                                      <MenuItem onClick={handleClose}>
                                        view
                                      </MenuItem>
                                    </Menu>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </TabPanel>

                {/*---------------------- blocked tabpan end -------------------------------------- */}
              </TabContext>
              <div className="pagination d-flex justify-content-center">
                <div className="pagiNum" onClick={prevPage}>
                  <i className="fa fa-chevron-left"></i>
                </div>
                {/* <div className="pagiNum active ml-1">1</div> */}
                {listDiv.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className={
                        pageNum == key + 1
                          ? "pagiNum ml-1 active"
                          : "pagiNum ml-1"
                      }
                      onClick={() => pageButton(key)}
                      id={`page-number${key + 1}`}
                    >
                      {item}
                    </div>
                  );
                })}
                {/* <div className="pagiNum ml-1">2</div>
                <div className="pagiNum ml-1">...</div>
                <div className="pagiNum ml-1">16</div> */}
                <div className="pagiNum ml-1" onClick={nextPage}>
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
