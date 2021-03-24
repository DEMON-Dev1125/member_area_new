import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmail } from "validator";
import { register } from "../actions/auth";

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

const vfullname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
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

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

function Register(props) {
  const form = useRef();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (!(name && username && email && password && confirmPassword)) {
    } else {
      dispatch(register(name, username, email, password, confirmPassword)).then(
        (response) => {
          const status = response.data;
          if (status.success) {
            props.history.push("/login");
          } else {
            return;
          }
        }
      );
    }
  };

  return (
    <div className="outer">
      <div className="inner">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="d-flex justify-content-center mt-3 mb-5">
                <img
                  className="login-img1"
                  src={require(`../assets/img/${LogoWL}`).default}
                />
              </div>
              <div className="form-group">
                <label>Nome completo</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Nome completo"
                  value={name}
                  onChange={onChangeName}
                  validations={[required, vfullname]}
                />
              </div>
              <div className="form-group">
                <label>Nome de usuário</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Nome de usuário"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <Input
                  type="text"
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
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <label>Confirme sua senha</label>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={onChangeConfirmPassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-lg btn-block">
                  <span>Criar Conta</span>
                </button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Register;
