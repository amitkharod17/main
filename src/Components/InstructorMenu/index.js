import React, { useEffect, useState } from "react";
import "./InstructorMenu.css";
import deepak from "./img/deepak.png";
import dashboard from "./img/dashboardactive.png";
import Fontawesome from "react-fontawesome";
import { updateFooter } from "../../Actions/Footer";
import { setDefaultHeader, updateHeader } from "../../Actions/Header";
import { useDispatch } from "react-redux";
import { logout } from "../../Actions/userAction";
import { useHistory } from "react-router-dom";

const InstructorMenu = ({ location, profileIMG, fname, lname }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [pclass, setPclass] = useState("");
  const [dclass, setDclass] = useState("");
  const [lclass, setlclass] = useState("");

  const active = window.location.pathname.split("instructor/")[1];

  useEffect(() => {
    if (active === "profile") {
      setPclass("active-section");
    } else if (active === "schedule") {
      setDclass("active-section");
    } else if (active === "logout") {
      setlclass("active-section");
    }
  });

  useEffect(() => {
    dispatch(
      updateHeader({
        backgroundColor: "#171636",
        color: "#FFFFFF",
        iconColor: "#3CFAFF",
        iconDisplay: "block",
        headerDisplay: "none",
      })
    );
    dispatch(updateFooter({ footerDisplay: "none" }));
  });

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload("/");
  };

  return (
    <>
      <div className="instructor-menu">
        <div className="instructor-pic">
          <img src={profileIMG} className="img-fluid" alt=""></img>
        </div>
        <div className="instructor-greeting">Hi {fname + " " + lname}!</div>
        <div className="instructor-greeting-desc">
          Keep learning building and innovating
        </div>
        <div className="links">
          <div className={dclass}>
            <a href="/instructor/schedule">
              {/* <img src={dashboard} /> */}
              <Fontawesome name="th-large" />
              <div className="section-name">Dashboard</div>
            </a>
          </div>
          <div className={pclass}>
            <a href="/instructor/profile">
              <Fontawesome name="user" />
              <div className="section-name">Profile</div>
            </a>
          </div>
          <div
            onClick={handleLogout}
            style={{
              cursor: "pointer",
            }}
            className={lclass}
          >
            <Fontawesome name="sign-out" />
            <div className="section-name">Logout</div>
          </div>
          {/* <div className="">
                        <Fontawesome name="comment" /> 
                        <div className="section-name">Inbox</div>
                    </div>
                    <div className="">
                        <Fontawesome name="calendar" />
                        <div className="section-name">Schedule</div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default InstructorMenu;
