import React, { useState } from "react";
import avtaar from "../avtaar.png";
import NavItem from "./NavItems/component";
import user from "./User.svg";
import editreport from "./edit-report.svg";
import newreport from "./new-report.svg";
import add from "./Add.svg";
import bgicon from "./bgicon.svg";
import changephoto from "./change_photo.svg";
import { useHistory } from "react-router-dom";
import logout from "./group.png";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import dashboardIcon from "./element-equal.png";
import mySiteIcon from "./global.png";
import supportIcon from "./message-question.png";

const openPhotoModal = () => {};

const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
};

const ModalComp = (props) => {
  const { handleShow, handleClose, show, set_profile, profile } = props;
  var image;
  const [changing, set_changing] = useState(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="file"
            id="file-input"
            onChange={(e) => {
              getBase64(e.target.files[0], (b64) => {
                image = b64;
              });
            }}
          />
          <Button
            onClick={() => {
              axios
                .post(
                  "api/summercampbootcamp2022/set_profile_photo",
                  { photo: image },
                  {
                    headers: {
                      Authorization:
                        "Bearer " +
                        JSON.parse(localStorage["scUserDetails"]).token,
                    },
                  }
                )
                .then((res) => {
                  profile.photo = res.data.url;
                  set_profile(profile);
                  handleClose();
                });
              set_changing(true);
            }}
          >
            {changing ? "Uploading Photo" : "Change Photo"}
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const NavbarComponent = ({ activeTab, setActiveTab }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, set_profile] = useState({});
  console.log(profile);
  if (!profile._id)
    axios
      .get(`/api/summercampbootcamp2022/profile`, {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage["scUserDetails"]).token,
        },
      })
      .then((res) => {
        set_profile(res.data);
      });
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("scUserDetails");
    history.push("/summercamp2022-login");
  };
  return (
    <div className="row scd_mobile_navbar" style={{ height: "100%" }}>
      <ModalComp
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
        set_profile={set_profile}
        profile={profile}
      />
      <div
        className="col-12 dashboard-sidebar pt-0"
        style={{ background: "#fff" }}
      >
        {/* <div className="bgicon">
          <img
            src={bgicon}
            alt=""
            style={{ width: "calc(100% - 30px)", margin: "30px 15px" }}
          />
        </div> */}
        <div className="mx-auto text-center pt-2 pb-5 mb-5">
          <div className="div avtaar-border mx-auto mt-5 mb-3">
            <img src={profile.photo || avtaar} alt="" className="fit-cover" />
          </div>
          <div className=" mt-1 ">
            <div className="sidebar_name mb-2">{`${profile.name}`}</div>

            <NavItem
              name="Dashboard"
              // icon={editreport}
              icon={dashboardIcon}
              tabId={1}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <NavItem
              active
              name="My Website"
              icon={mySiteIcon}
              tabId={0}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* <NavItem name="Students Projects" icon={add} tabId={3} activeTab={activeTab} setActiveTab={setActiveTab} /> */}
            {/* <NavItem name="Certificate" icon={add} tabId={4} activeTab={activeTab} setActiveTab={setActiveTab} /> */}
            <NavItem
              name="Support"
              icon={supportIcon}
              tabId={3}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "-2rem",
            }}
          >
            <button
              className="scd_logout"
              style={{ background: "transparent", border: "0" }}
              onClick={handleLogout}
            >
              <img src={logout} />
            </button>
            <div style={{ display: "inline-block" }}>
              <p className="signOutPara ">Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
