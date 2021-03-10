import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import $ from "jquery";

const AvatarImg = "Avatar.png";
const LogoSvg = "Logo.svg";

$(window).on("resize", function () {
  if (window.innerWidth > 770) {
    document.querySelector(".wrapper .mobile-sidebar ").style.transform =
      "translate3d(0px, 0, 0)";
  } else document.querySelector(".wrapper .mobile-sidebar ").style.transform = "translate3d(-343px, 0, 0)";
});
function Sidebar(props) {
  const { image, color, routes, Navbar_select } = props;
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  const Handle_NavHidden = () => {
    if (window.innerWidth < 769) {
      document.querySelector(".wrapper .mobile-sidebar ").style.transform =
        "translate3d(-343px, 0, 0)";
    }
  };
  const HandleProfile = () => {
    console.log("clicked!!!");
  };

  return (
    <div
      className="sidebar mobile-sidebar "
      data-image={image}
      data-color={color}
    >
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <div className="log-img1 group-mobile" onClick={Handle_NavHidden}>
            <img src={require(`../../assets/img/${LogoSvg}`).default} />
          </div>
          <div className="log-img1 desktop">
            <img src={require(`../../assets/img/${LogoSvg}`).default} />
          </div>
          <div
            className="log-img2"
            style={{ cursor: "pointer" }}
            onClick={HandleProfile}
          >
            <img src={require(`../../assets/img/${AvatarImg}`).default} />
          </div>
        </div>

        <p className="nav-title">GERENCIAMENTO DE CONTEÚDO</p>
        <Nav>
          {routes.map((prop, key) => {
            if (prop.permission === "public")
              return (
                <li
                  onClick={Handle_NavHidden}
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                    <span className="badge float-right mt-1">{prop.badge}</span>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
        <p className="nav-title">CONFIGURAÇÕES AVANÇADAS</p>
        <Nav>
          {routes.map((prop, key) => {
            if (prop.permission === "private")
              return (
                <li
                  onClick={Handle_NavHidden}
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
