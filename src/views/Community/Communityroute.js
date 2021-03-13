import React from "react";
import { Switch, Route } from "react-router-dom";
import CommunityIndex from "./Community.js";

export default function Communityroute() {
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
