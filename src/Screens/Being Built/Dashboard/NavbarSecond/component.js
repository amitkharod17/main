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
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import eye from "./eye.svg";
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

const NavbarSecond = ({ activeTab, setActiveTab, shareFlag }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, set_profile] = useState({});
  const [copied, set_copied] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(true);

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
      <div className="col-10 dashboard-sidebar dashboard-sidebar-2 pt-0">
        <div className="mx-auto text-center pt-2 pb-5 mb-5">
          <div className="div avtaar-border-2 mx-auto mt-5 mb-3">
            <img src={profile.photo || avtaar} alt="" className="fit-cover" />
            <img
              src={changephoto}
              alt=""
              className={
                !shareFlag ? "change-photo" : "change-photo sharedProfile"
              }
              onClick={handleShow}
            />
          </div>
          <div className="pt-3 mt-1 mx-4">
            <div className="sidebar_name mb-2">{`Hi! ${profile.name}`}</div>
            <div className="sidebar_school mb-5 font-montserrat font-weight-bolder">
              {`${profile.school}`}
            </div>
            <a
              style={
                isProfileActive
                  ? { textAlign: "center", background: "white" }
                  : { textAlign: "center" }
              }
              href="#"
              className="my_site_nav"
              onClick={() => setIsProfileActive(!isProfileActive)}
            >
              Profile
            </a>
            <a
              style={
                !isProfileActive
                  ? { textAlign: "center", background: "white" }
                  : { textAlign: "center" }
              }
              href="#"
              className="my_site_nav"
              onClick={() => setIsProfileActive(!isProfileActive)}
            >
              Projects
            </a>
          </div>
          {/* <div className="mt-5">Profile Views</div>
          <div class="row">
            <div class="col-12">
              <img src={eye} />
              {profile.visitors}
            </div>
          </div> */}

          {!shareFlag && (
            <div className="mt-5">
              <CopyToClipboard
                text={`https://rancholabs.com/sc-profile-${
                  profile && profile._id
                }`}
                onCopy={() => {
                  window.alert("Profile link copied to clipboard");
                }}
              >
                <a href="#" class="share-profile">
                  Share Profile{" "}
                </a>
              </CopyToClipboard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarSecond;
