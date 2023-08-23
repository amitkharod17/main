import React, { useState } from "react";
import "./component.css";
import AboutMe from "./AboutMe/component";
import Navbar from "./Navbar/component";
import ProjectComponent from "../../NewSummerCampDashboard/ProjectComponent/ProjectComponent";
import AllStudentsComponent from "../../NewSummerCampDashboard/AllStudentsComponent/AllStudentsComponent";
import SessionComponent from "../../NewSummerCampDashboard/SessionsComponent/SessionComponent";
import HelpSupportComponent from "../../NewSummerCampDashboard/HelpSupportComponent/HelpSupportComponent";
import { useHistory } from "react-router-dom";
import white_down_arrow_img from "../../NewSummerCampDashboard/Assets/white_down_arrow_img.png";
import NavbarSecond from "./NavbarSecond/component";
const ToggleComponent = ({ activeTab }) => {
  switch (activeTab) {
    case 0:
      return <AboutMe />;
    case 1:
      return <SessionComponent />;
    case 2:
      return <ProjectComponent add_project />;
    // case 3: return <AllStudentsComponent />
    // case 4: return <h1>Certificate</h1>
    case 3:
      return <HelpSupportComponent />;
    default:
      return <></>;
  }
};

const DashboardComponent = () => {
  document.body.style.backgroundColor = "white";

  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const NoAccess = () => {
    history.push("/summercamp2022-login");
    return <></>;
  };

  const handleShowMenu = () => {
    if (show) {
      console.log("Show off");
      document.getElementsByClassName("scd_mobile_navbar")[0].style.left =
        "-1000%";
      setShow(false);
    } else {
      console.log("Show on");
      document.getElementsByClassName("scd_mobile_navbar")[0].style.left = "0%";
      setShow(true);
    }
  };

  return (
    <>
      {localStorage.getItem("scUserDetails") &&
      JSON.parse(localStorage.getItem("scUserDetails")).auth ? (
        <div className="font-montserrat container-fluid py-0 ">
          {window.innerWidth < 900 && (
            <div className="scd_navbar_icon_cover" onClick={handleShowMenu}>
              <img
                src={white_down_arrow_img}
                className="scd_navbar_icon"
                alt="SideNav Bar icon"
              />
            </div>
          )}
          <div className="mt-0">
            {window.innerWidth > 900 ? (
              <div className="row" style={{ minHeight: "100vh" }}>
                {/* {
                activeTab!=0&&<div className="col-2"></div>

                } */}
                <div
                  className="col-1"
                  style={{ position: "STICKY", LEFT: 0, zIndex: 2 }}
                >
                  <Navbar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  ></Navbar>
                </div>
                {activeTab === 0 && (
                  <div
                    className="col-3"
                    style={{
                      paddingLeft: "0",
                      position: "",
                      zIndex: 1,
                      marginRight: "-50px",
                    }}
                  >
                    <NavbarSecond />
                  </div>
                )}

                <div className={"col-" + (activeTab === 0 ? 7 : 11) + " px-6"}>
                  <ToggleComponent activeTab={activeTab} />
                </div>
              </div>
            ) : (
              <div className="row" style={{ minHeight: "100vh" }}>
                <div className="col-1">
                  <Navbar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  ></Navbar>
                </div>
                <div className="col-11">
                  <ToggleComponent activeTab={activeTab} />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <NoAccess />
      )}
    </>
  );
};

export default DashboardComponent;
