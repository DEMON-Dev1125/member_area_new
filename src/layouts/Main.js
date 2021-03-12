import React, { Component, useState } from "react";
import { useLocation, Route, Switch, useHistory } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.js";
import $ from "jquery";
import routes from "../routes.js";
import Profile from "./../views/Profile";

const LogoWhite = "Logo_white.svg";
const SidebarImg = "sidebar-3.jpg";
const Avatar = "Avatar.png";

function Main() {
  const history = useHistory();
  const [image, setImage] = React.useState(SidebarImg);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/main") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
          ></Route>
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  const Handle_Nav = () => {
    if (window.innerWidth < 991) {
      document.querySelector(".wrapper .mobile-sidebar").style.transform =
        "translate3d(0px, 0, 0)";
    }
    $(".main-panel")
      .not(".wrapper .mobile-sidebar")
      .on("click", function () {
        document.querySelector(".wrapper .mobile-sidebar").style.transform =
          "translate3d(-343px, 0, 0)";
      });
  };

  const HandleProfile = () => {
    history.push("/main/profile");
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar
          className="" /*Navbar_select={nav_selected}*/
          color={color}
          image={hasImage ? image : ""}
          routes={routes}
        />
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <div className="user_navbar">
              <div className="sidebar-img" onClick={Handle_Nav}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
              <img
                className="sidebar-img2"
                src={require(`../assets/img/${LogoWhite}`).default}
              />
              <img
                className="sidebar-img"
                src={require(`../assets/img/${Avatar}`).default}
                onClick={HandleProfile}
              />
            </div>
            <Switch>
              <Route path={"/main/profile"} component={Profile}></Route>
              {getRoutes(routes)}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
