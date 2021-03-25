import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllGroup } from "../../actions/group";
import "../../assets/css/login.css";

const MemberImg1 = "member1.png";
const MemberImg2 = "member2.png";
const MemberImg3 = "member3.png";

export default function Group() {
  const history = useHistory();
  const dispatch = useDispatch();
  const Handle_Newgroup = () => {
    history.push("/main/group/newgroup");
  };

  useEffect(() => {
    dispatch(getAllGroup());
  }, []);

  const groupDatas = useSelector((state) => state.group.allData);
  console.log("group", groupDatas);

  const GroupEdit = () => {
    history.push("/main/group/groupedit");
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div className="Edit-ft2 mt-1">Turmas</div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button
                type="button"
                onClick={Handle_Newgroup}
                className="u-btn-group u-btn-color btn-ft1 d-flex align-items-center justify-content-center dropbtn w-100"
              >
                <div className="mr-3">Nova turma</div>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <hr />
          <div
            className="group-content container-fluid p-5 mt-5"
            onClick={GroupEdit}
            style={{ cursor: "pointer" }}
          >
            <div className="row">
              <div className="col-6 col-md-4">
                <div className="Edit-ft1">TURMA (PADRÃO)</div>
                <div className="mt-1 con-ft5">Turma A</div>
              </div>
              <div className="col-6 col-md-8">
                <div className="Edit-ft1">MEMBROS</div>
                <div className="mt-1 position-relative">
                  <img
                    className="position-absolute"
                    src={require(`../../assets/img/${MemberImg1}`).default}
                  />
                  <img
                    className="member2"
                    src={require(`../../assets/img/${MemberImg2}`).default}
                  />
                  <img
                    className="member3"
                    src={require(`../../assets/img/${MemberImg3}`).default}
                  />
                  <div className="member4">+609</div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-8 col-md-4">
                <div className="Edit-ft1">COMENTÁRIOS</div>
                <div className="con-ft5 mt-2">1523</div>
              </div>
              <div className="col-8 col-md-8">
                <div className="Edit-ft1">APROVEITAMENTO</div>
                <div className="d-flex align-items-center mt-3">
                  <div className="Edit-ft5">25%</div>
                  <div className="u-progress w-100">
                    <div className="u-progress-bar w-25"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
