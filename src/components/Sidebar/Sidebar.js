import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const AvatarImg = "Avatar.png";
const LogoSvg = "Logo.svg";
import $ from "jquery";

// $(window).on("resize", function () {
//   if (window.innerWidth > 760) {
//     document.querySelector(".wrapper .mobile-sidebar ").style.transform =
//       "translate3d(0px, 0, 0)";
//   } else document.querySelector(".wrapper .mobile-sidebar ").style.transform = "translate3d(-343px, 0, 0)";
// });
function Sidebar(props) {
  const { image, color, routes, Navbar_select } = props;
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  const Handle_NavHidden = () => {
    if (window.innerWidth < 575) {
      document.querySelector(".wrapper .mobile-sidebar ").style.transform =
        "translate3d(-343px, 0, 0)";
    }
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
            <img src={require(`../../assets/svg/${LogoSvg}`).default} />
          </div>
          <div className="log-img1 desktop">
            <img
              className=""
              src={require(`../../assets/svg/${LogoSvg}`).default}
            />
          </div>
          <div className="log-img2">
            <img
              className=""
              src={require(`../../assets/img/${AvatarImg}`).default}
            />
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
                    {/* <FontAwesomeIcon icon={prop.icon} /> */}
                    <p>{prop.name}</p>
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
