/**************************This is content route define part***************** */
import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import GroupIndex from "./Group.js";
import NewGroup from "./Newgroup.js";
import GroupAdd from "./Groupadd.js";
import GroupEdit from "./Groupedit.js";

export default function CententRoute() {
  let history = useHistory();
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
    </Switch>
  );
}
