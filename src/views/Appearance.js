import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fileupload from "../components/Fileupload";

import "../assets/css/login.css";
import "../assets/css/appearance.css";

import ColorBackgroundPicker from "../components/ColorBackgroundPicker";
import ColorTextPicker from "../components/ColorTextPicker";

import { editAppearance, getAppearance } from "../actions/appearance.js";

const API_URL = 'http://192.168.107.163:5000';

export default function Appearance() {
  const dispatch = useDispatch();

  const [colorBackground, setColorBackground] = useState("");
  const [colorText, setColorText] = useState("");
  const [navimg, setNavimg] = useState("");
  const [favicon, setFavicon] = useState("");
  const [loginimg, setLoginimg] = useState("");
  const [loginbackground, setLoginbackground] = useState("");

  const [navimgPath, setNavimgPath] = useState("");
  const [faviconPath, setFaviconPath] = useState("");
  const [loginimgPath, setLoginimgPath] = useState("");
  const [loginbackgroundPath, setLoginBackgroundPath] = useState("");

  const appearanceData = useSelector((state) =>
    state.appearance.allData ? state.appearance.allData.appearance : []
  );
  console.log(appearanceData);

  const colorBackChange = (colorVal) => {
    let rgbColor =
      colorVal.r + "," + colorVal.g + "," + colorVal.b + "," + colorVal.a;
    setColorBackground(rgbColor);
  };

  const colorTextChange = (colorVal) => {
    let rgbColor =
      colorVal.r + "," + colorVal.g + "," + colorVal.b + "," + colorVal.a;
    setColorText(rgbColor);
  };

  const navimgUpload = (file) => {
    setNavimg(file);
  };

  const faviconUpload = (file) => {
    setFavicon(file);
  };

  const loginimgUpload = (file) => {
    setLoginimg(file);
  };

  const loginbackgroundUpload = (file) => {
    setLoginbackground(file);
  };

  const editAppearanceData = () => {
    const data = new FormData();
    data.append("color1", colorBackground);
    data.append("color2", colorText);
    data.append("navimg", navimg);
    data.append("favicon", favicon);
    data.append("loginimg", loginimg);
    data.append("loginbackground", loginbackground);

    dispatch(editAppearance(data));
  };

  useEffect(() => {
    dispatch(getAppearance());
  }, []);

  useEffect(() => {
    if (appearanceData.length !== 0) {
      appearanceData.map((data) => {
        setColorBackground(data.color1);
        setColorText(data.color2);

        if(data.navimg) {
          let pathNavimgName = data.navimg.replace(/\\/g, '/');
          if(pathNavimgName[0] !== '/') pathNavimgName = '/' + pathNavimgName;
          setNavimgPath(API_URL + pathNavimgName);
        }
        if(data.favicon) {
          let pathFaviconName = data.favicon.replace(/\\/g, '/');
          if(pathFaviconName[0] !== '/') pathFaviconName = '/' + pathFaviconName;
          setFaviconPath(API_URL + pathFaviconName);
        }
        if(data.loginimg) {
          let pathLoginimgName = data.loginimg.replace(/\\/g, '/');
          if(pathLoginimgName[0] !== '/') pathLoginimgName = '/' + pathLoginimgName;
          setLoginimgPath(API_URL + pathLoginimgName);
        }
        if(data.loginbackground) {
          let pathLoginBackgroundName = data.loginbackground.replace(/\\/g, '/');
          if(pathLoginBackgroundName[0] !== '/') pathLoginBackgroundName = '/' + pathLoginBackgroundName;
          setLoginBackgroundPath(API_URL + pathLoginBackgroundName);
        }
      });
    }
  }, [appearanceData]);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">M??TODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Apar??ncia</div>
            </div>
          </div>
          <hr />
          <div className="mt-5">
            <div className="con-ft1">Barra de navega????o</div>
            <div className="con-ft-3 mt-3">
              Escolha as cores de fundo e texto, respectivamente. Opte por cores
              que contrastem. Escolha tamb??m uma imagem da sua logo que fique
              bem.
            </div>
            <div className="mt-3 d-flex">
              <ColorBackgroundPicker colorChange={colorBackChange} colorBackground={colorBackground} />
              <ColorTextPicker colorChange={colorTextChange} colorText={colorText} />
            </div>
            <div className="col-sm-6 row mt-3">
              <Fileupload fileUpload={navimgUpload} imagePath={navimgPath} />
            </div>
          </div>
          <div className="mt-5">
            <div className="con-ft1">Favicon personalizado</div>
            <div className="con-ft2 mt-3">
              Suba um ??cone com 32 x 32 pixels de tamanho no formato .png ou
              .ico para ser exibido na aba do navegador.
            </div>
            <div className="mt-3">
              <button className="btn_select">Escolher imagem</button>
              <Fileupload fileUpload={faviconUpload} imagePath={faviconPath} />
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
              Use uma imagem com 200 pixels de largura m??xima, fundo
              transparente e adapt??vel em um fundo claro para melhor
              visualiza????o.
            </div>
            <div className="col-sm-6 row mt-3">
              <Fileupload fileUpload={loginimgUpload} imagePath={loginimgPath} />
            </div>
            <div className="con-ft2 mt-3">
              Use uma imagem com 1600 x 900 pixels de dimens??o para ser colocado
              no fundo do login.
            </div>
            <div className="mt-3">
              <Fileupload fileUpload={loginbackgroundUpload} imagePath={loginbackgroundPath} />
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-xl-6 col-12">
              <button
                type="button"
                className="but_save w-100"
                onClick={editAppearanceData}
              >
                Salvar edi????o
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
