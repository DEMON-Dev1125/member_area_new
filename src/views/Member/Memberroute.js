import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import MemberIndex from "./Member.js";
import NewMember from "./Newmember.js";

export default function Inviteroute() {
  let history = useHistory();
  return (
    <Switch>
      <Route
        exact
        path="/main/member"
        component={(props) => <MemberIndex {...props} />}
      />
      <Route
        exact
        path="/main/member/addmember"
        component={(props) => <NewMember {...props} />}
      />
    </Switch>
  );
}
