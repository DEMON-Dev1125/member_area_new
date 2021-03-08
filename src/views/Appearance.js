import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import Fileupload from "../components/Fileupload";

import "../assets/css/login.css";

export default function Appearance() {
  const history = useHistory();

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Aparência</div>
            </div>
          </div>
          <hr />
          <div className="mt-5">
            <div className="con-ft1">Barra de navegação</div>
            <div className="con-ft-3 mt-3">
              Escolha as cores de fundo e texto, respectivamente. Opte por cores
              que contrastem. Escolha também uma imagem da sua logo que fique
              bem.
            </div>
            <div className="mt-3">
              asdf
            </div>
            <div className="col-sm-6 row mt-3">
              <Fileupload />
            </div>
          </div>
          <div className="mt-5">
            <div className="con-ft1">Favicon personalizado</div>
            <div className="con-ft2 mt-3">
              Suba um ícone com 32 x 32 pixels de tamanho no formato .png ou
              .ico para ser exibido na aba do navegador.
            </div>
            <div className="mt-3">
              <button className="btn_select">Escolher imagem</button>
            </div>
            <div className="col-sm-6 mt-3 row">
              <input
                className="input-ft1 mt-1 w-100"
                placeholder="Seu acesso foi liberado!"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="con-ft1">Imagens no Login</div>
            <div className="con-ft2 mt-3">
              Use uma imagem com 200 pixels de largura máxima, fundo
              transparente e adaptável em um fundo claro para melhor
              visualização.
            </div>
            <div className="col-sm-6 row mt-3">
              <Fileupload />
            </div>
            <div className="con-ft2 mt-3">
              Use uma imagem com 1600 x 900 pixels de dimensão para ser colocado
              no fundo do login.
            </div>
            <div className="mt-3">
              <Fileupload />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-6 col-12">
              <button type="button" className="but_save w-100">
                Salvar edição
              </button>
            </div>
            <div className="col-xl-6 col-12">
              <button type="button" className="but_cancel w-100">
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
