import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import "../assets/css/login.css";
import "../assets/css/certificate.css";
import Fileupload from "components/Fileupload";

export default function Profile() {
  const [selectedTimezone, setSelectedTimezone] = useState("");

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Minha conta</div>
            </div>
          </div>
          <hr />
          <div className="mt-5">
            <div className="user_avatar">
              <Fileupload />
              <div className="mt-3 text-center">
                <button className="btn_upload">Alterar avatar</button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Nome completo</div>
            <input
              type="text"
              className="input-ft1 mt-1 w-100"
              placeholder="Alexander Moreira Frota"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Nome exibição</div>
            <input
              type="text"
              className="input-ft1 mt-1 w-100"
              placeholder="Alexander Frota"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">E-mail</div>
            <input
              type="email"
              className="input-ft1 mt-1 w-100"
              placeholder="alexanderfrota@abmex.com"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3 mb-3">Fuso horário padrão</div>
            <TimezoneSelect
              value={selectedTimezone}
              onChange={setSelectedTimezone}
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Nova senha</div>
            <input
              type="password"
              className="input-ft1 mt-1 w-100"
              placeholder="Nova senha"
            />
          </div>
          <div className="mt-5">
            <div className="Edit-ft3">Confirme nova senha</div>
            <input
              type="password"
              className="input-ft1 mt-1 w-100"
              placeholder="Confirme nova senha"
            />
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <button className="but_save w-100">Salvar edição</button>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button className="but_cancel w-100">Cancelar</button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
