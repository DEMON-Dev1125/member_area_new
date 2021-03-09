import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs, Badge } from "@material-ui/core";

import "../../assets/css/login.css";

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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Membros</div>
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
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab
                label={
                  <Badge badgeContent='1' color="primary">
                    Messages
                  </Badge>
                }
                value="/messages"
              />
            </Tabs>
          </Paper>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
