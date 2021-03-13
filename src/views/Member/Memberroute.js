import React from "react";
import { Switch, Route } from "react-router-dom";
import MemberIndex from "./Member.js";
import NewMember from "./Newmember.js";
import EditMember from "./Editmember.js";

export default function Inviteroute() {
  return (
    <Switch>
      <Route
        exact
        path="/main/member"
        component={(props) => <MemberIndex {...props} />}
      />
      <Route
        path="/main/member/addmember"
        component={(props) => <NewMember {...props} />}
      />
      <Route
        path="/main/member/editmember"
        component={(props) => <EditMember {...props} />}
      />
    </Switch>
  );
}
