import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import InviteIndex from "./Invite.js";
import Addinvite from "./Addinvite.js";
import Editinvite from "./Editinvite.js";

export default function Inviteroute() {
  let history = useHistory();
  return (
    <Switch>
      <Route
        exact
        path="/main/invite"
        component={(props) => <InviteIndex {...props} />}
      />
      <Route
        path="/main/invite/addinvite"
        component={(props) => <Addinvite {...props} />}
      />
      <Route
        path="/main/invite/editinvite"
        component={(props) => <Editinvite {...props} />}
      />
    </Switch>
  );
}
