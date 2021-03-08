/**************************This is content route define part***************** */
import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import ContentIndex from "./Content";
import Editor from "./Editcourse";
import EditContent from "./Editcontent";
import NewContent from "./NewContent";
import Improve from "./Improve";

export default function Cententroute() {
  let history = useHistory();
  return (
    <Switch>
      <Route
        exact
        path="/main/content"
        component={(props) => <ContentIndex {...props} />}
      />
      <Route
        path="/main/content/editor"
        component={(props) => <Editor {...props} />}
      />
      <Route
        path="/main/content/newcontent"
        component={(props) => <NewContent {...props} />}
      />
      <Route
        path="/main/content/improve"
        component={(props) => <Improve {...props} />}
      />
      <Route
        path="/main/content/editcontent"
        component={(props) => <EditContent {...props} />}
      />
    </Switch>
  );
}
