import React from "react";
import { Switch, Route } from "react-router-dom";
import CertificateIndex from "./Certificate.js";
import EditCertificate from "./Editcertificate.js";

export default function Certificateroute() {
  return (
    <Switch>
      <Route
        exact
        path="/main/certificate"
        component={(props) => <CertificateIndex {...props} />}
      />
      <Route
        path="/main/certificate/editcertificate"
        component={(props) => <EditCertificate {...props} />}
      />
    </Switch>
  );
}
