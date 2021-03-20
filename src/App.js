import "./App.css";
import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import MainLayout from "./layouts/Main";

import "./assets/css/demo.css";
import "./assets/css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";

// import { logout } from "./actions/auth";
// import { history } from "./helpers/history";

function App() {
  // const logOut = () => {
  //   dispatch(logout());
  // };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" render={(props) => <MainLayout {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
