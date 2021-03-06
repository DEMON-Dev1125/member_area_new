/**********************This is 14 page************ */
import react, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import MemberImg1 from "../../assets/img/member1.png";
import MemberImg2 from "../../assets/img/member2.png";
import MemberImg3 from "../../assets/img/member3.png";

import "../../assets/css/login.css";

export default function Group() {
  const history = useHistory();
  const Handle_Newgroup = () => {
    history.push("/main/group/newgroup");
    // history.push('/main/content/newcontent');
  };
  return (
    <div className="main-container">
      <div className="pdr-38">
        <div className="group-flex">
          <div className="mgt-5">
            <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
            <div className="Edit-ft2 mgt-10">Turmas</div>
          </div>
          <div>
            <button
              type="button"
              className="u-btn-group u-btn-color btn-ft1 d-flex align-items-center justify-content-center dropbtn mgt-8 mgb-57"
            >
              <div className="mgr-15" onClick={Handle_Newgroup}>
                Nova turma
              </div>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="mgt-50 pd-50 group-content desktop">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className="Edit-ft1">TURMA (PADRÃO)</div>
              <div className="mgt-5 con-ft5">Turma A</div>
            </div>
            <div className="">
              <div className="Edit-ft1">MEMBROS</div>
              <div className="mgt-5 position-relative ht-45">
                <img className="position-absolute" src={MemberImg1} />
                <img className="member2" src={MemberImg2} />
                <img className="member3" src={MemberImg3} />
                <div className="member4">+609</div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mgt-14">
            <div className="">
              <div className="Edit-ft1">COMENTÁRIOS</div>
              <div className="con-ft5 mgt-10">1523</div>
            </div>
            <div className="">
              <div className="Edit-ft1">APROVEITAMENTO</div>
              <div className="d-flex align-items-center mgt-15">
                <div className="Edit-ft5">25%</div>
                <div className="u-progress wd-441">
                  <div className="u-progress-bar w-25"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-content mobile">
          <div className="">
            <div className="Edit-ft1">TURMA (PADRÃO)</div>
            <div className="mgt-5 con-ft5">Turma A</div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="Edit-ft1">MEMBROS</div>
              <div className="mgt-5 position-relative ht-45">
                <img className="member1" src={MemberImg1} />
                <img className="member2" src={MemberImg2} />
                <img className="member3" src={MemberImg3} />
                <div className="member4">+609</div>
              </div>
            </div>
            <div className="col-6">
              <div className="Edit-ft1">COMENTÁRIOS</div>
              <div className="con-ft5 mgt-10">1523</div>
            </div>
          </div>
          <div className="Edit-ft1 mt-3">APROVEITAMENTO</div>
          <div className="d-flex align-items-center">
            <div className="Edit-ft5">45%</div>
            <div className="u-progress wd-441">
              <div className="u-progress-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
