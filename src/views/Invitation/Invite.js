import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../../assets/css/login.css";
import "../../assets/css/invite.css";

const MemberImg1 = "member1.png";
const MemberImg2 = "member2.png";
const MemberImg3 = "member3.png";
const InviteImg = "convite.png";

export default function Invite() {
  const [value, setValue] = useState("");
  const [copied, setStatus] = useState(false);
  const [NoInvite, setInvite] = useState("");

  const history = useHistory();
  const AddInvite = () => {
    history.push("/main/invite/addinvite");
  };
  const ShowMember = () => {
    alert("Clicked!");
  };
  const EditInvite = () => {
    history.push("/main/invite/editinvite");
  };
  const OneInvite = () => {
    setInvite((prevState) => !prevState);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 col-sm-12">
          <div className="row mb-5">
            <div className="col-lg-6 col-sm-12">
              <div className="Edit-ft1">MÉTODO REMOTO 3.0</div>
              <div
                className="Edit-ft2 mt-1"
                style={{ cursor: "pointer" }}
                onClick={OneInvite}
              >
                Convites
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <button
                type="button"
                className="u-btn-group u-btn-color btn-ft1 d-flex align-items-center justify-content-center dropbtn w-100"
                onClick={AddInvite}
              >
                <div className="mr-3">Nova convite</div>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <hr />
          {!NoInvite ? (
            <div className="mt-5 text-center">
              <div className="none_image">
                <img src={require(`../../assets/img/${InviteImg}`).default} />
              </div>
              <div className="Edit-ft3 mt-2">Nenhum convite criado!</div>
              <div className="Edit-ft1 mt-1">
                Seus convites criados irão aparecer aqui.
              </div>
            </div>
          ) : (
            <div
              className="group-content p-5 mt-5"
              style={{ cursor: "pointer" }}
              onClick={EditInvite}
            >
              <div>
                <div className="Edit-ft3">Convite Método Remoto</div>
                <div className="Edit-ft1 mt-3">
                  Venha conhecer o curso que mudou a vida de mais de 15.000
                  alunos por todo Brasil!
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-9 col-md-9">
                  <div className="Edit-ft1">LINK DIVULGAÇÃO</div>
                  <input
                    type="text"
                    className="link_url mt-2 w-100"
                    value=" https://metodoremoto.abmexacademy.com/main/content/invite/friend/vladi"
                  />
                </div>
                <div className="col-3 col-md-3 text-right">
                  {/* <input
                  value={value}
                  onChange={({ target: { value } }) =>
                    setStatus({ value, copied: false })
                  }
                /> */}
                  {/* <CopyToClipboard
                    text={setValue}
                    onCopy={() => setStatus({ copied: true })}
                  >
                    <button className="btn_copy mt-2">
                      <i className="fa fa-copy"></i>
                    </button>
                  </CopyToClipboard>

                  {copied ? (
                    <span style={{ color: "red" }}>Copied.</span>
                  ) : null} */}
                  <button
                    type="button"
                    className="btn_copy mt-2"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Copied!"
                  >
                    <i className="fa fa-copy"></i>
                  </button>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-sm-3">
                  <div className="Edit-ft1">INSCRITOS</div>
                  <div
                    className="mt-2 position-relative show_memeber"
                    style={{ cursor: "pointer" }}
                    onClick={ShowMember}
                  >
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
                <div className="col-sm-9">
                  <div className="Edit-ft1 text-right">DATA CRIAÇÃO</div>
                  <div className="con-ft5 mt-2 text-right">06/01/2021</div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
}
