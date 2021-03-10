import React, { Component, useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import action from "../store/actions";
import "../assets/css/login.css";
import { useHistory } from "react-router-dom";

const LogoWL = "Logo-WL.svg";
function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();

    // props.userLogin();
    history.push("/main/content");
  };
  return (
    <div className="outer">
      <div className="inner">
        <form onSubmit={HandleSubmit}>
          <div className="d-flex justify-content-center mt-4 mb-5">
            <img
              className="login-img1"
              src={require(`../assets/img/${LogoWL}`).default}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="forgot-password text-left">
            <a href="#">Esqueceu sua senha?</a>
          </p>
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    login_data: state.login_data,
  };
};
export default connect(mapStateToProps, action)(Login);
