import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmail } from "validator";
import { login } from "../actions/auth";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import "../assets/css/login.css";

const LogoWL = "Logo-WL.svg";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

function Login(props) {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const createAcc = (e) => {
    e.preventDefault();
    props.history.push("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (!(email && password)) {
      setLoading(false);
    } else {
      dispatch(login(email, password))
        .then((res) => {
          if (res.success === "success") {
            props.history.push("/main/content");
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  // if (isLoggedIn) {
  //   return <Redirect to="/main/content" />;
  // }

  return (
    <div className="outer">
      <div className="inner">
        <Form onSubmit={handleLogin} ref={form}>
          <div className="d-flex justify-content-center mt-3 mb-5">
            <img
              className="login-img1"
              src={require(`../assets/img/${LogoWL}`).default}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <Input
              type="email"
              className="form-control"
              placeholder="E-mail"
              value={email}
              onChange={onChangeEmail}
              validations={[required, validEmail]}
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <Input
              type="password"
              className="form-control"
              placeholder="Senha"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <p className="forgot-password text-left">
            <a href="#">Esqueceu sua senha?</a>
          </p>

          <div className="form-group">
            <button className="btn btn-lg btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-md mr-3"></span>
              )}
              <span>Entrar</span>
            </button>
          </div>
        </Form>
        <div className="register">
          Se você não tem conta, clique&nbsp;
          <span className="btn_create" onClick={createAcc}>
            aqui
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
