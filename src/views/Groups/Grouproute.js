import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupIndex from "./Group.js";
import NewGroup from "./Newgroup.js";
import GroupAdd from "./Groupadd.js";
import GroupEdit from "./Groupedit.js";
import EditClass from "./Editclass.js";

export default function Grouproute() {
  return (
    <Switch>
      <Route
        exact
        path="/main/group"
        component={(props) => <GroupIndex {...props} />}
      />
      <Route
        path="/main/group/newgroup"
        component={(props) => <NewGroup {...props} />}
      />
      <Route
        path="/main/group/groupadd"
        component={(props) => <GroupAdd {...props} />}
      />
      <Route
        path="/main/group/groupedit"
        component={(props) => <GroupEdit {...props} />}
      />
      <Route
        path="/main/group/editclass"
        component={(props) => <EditClass {...props} />}
      />
    </Switch>
  );
}
