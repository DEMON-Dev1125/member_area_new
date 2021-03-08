import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import CommunityIndex from "./Community.js";

export default function Communityroute() {
  let history = useHistory();
  return (
    <Switch>
      <Route
        exact
        path="/main/community"
        component={(props) => <CommunityIndex {...props} />}
      />
    </Switch>
  );
}
