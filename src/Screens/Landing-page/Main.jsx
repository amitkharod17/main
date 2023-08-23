import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/index.css";
import "./css/Main.css";
import { updateHeader } from "../../Actions/Header";
import mobileimage from "./img/mainmobile.png";
import { useHistory } from "react-router-dom";
import { update, updateUserInfo } from "../../Actions/userAction";
import {
  getStudent,
  updateStudent,
  updateStudentFreeEnroll,
} from "../../Actions/Student";
import mainbg from "./img/main.png";
import mainbgmob from "./img/mainbgmob.png";
import astroCircle from "./img/astroCircle.png";
import astronaut from "./img/astronaut.png";
import ic_circle from "./img/ic_circle.png";
import ic_apps from "./img/ic_apps.png";
import ic_coding from "./img/ic_coding.png";
import ic_electronics from "./img/ic_electronics.png"
import ic_game from "./img/ic_game.png";
import ic_idea from "./img/ic_idea.png";
import ic_robo from "./img/ic_robo.png";
import ic_submarine from "./img/ic_submarine.png";
import iit_delhi_circle_icon from "./img/iit_delhi_circle_icon.png"; 

const mainContent = {
  MainHeading: "Future Technology & Innovation Program for Kids",
  Subheading:`An initiative by IIT Delhi Alumni`,
};

const BackedStartupComponent = () => {
  return (
    <div className="backed_startup">
      <img src={iit_delhi_circle_icon} className="backed_startup_icon" alt="IIT Delhi" />
      <p className="backed_startup_text">An <span className="backed_startup_bold" >IIT Delhi</span> backed startup</p>
    </div>
  )
}

function Content() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { student } = useSelector((state) => state.studentInfo);

  useEffect(() => {
    dispatch(
      updateHeader({
        backgroundColor: "#ffffff",
        color: "#FFFFFF",
        iconColor: "#3cfaff",
        iconDisplay: "block",
        headerDisplay: "block",
      })
    );
  }, []);

  useEffect(() => {
    // console.log(userInfo);
    if (userInfo && userInfo.role === "student") {
      dispatch(getStudent());
    }
  }, [userInfo]);

  function freeclasshandler() {
    history.push('/bootcamp');
  }

  return (
    <div className="home main-content">
       <div className="container-fluid">
        <div className="main-row">
          <div className="text-container">
            <BackedStartupComponent />
            <p className="title">{mainContent.MainHeading}</p>
            <p className="description">An initiative by <b>IIT Delhi</b> Alumni</p>
            <div className="buttons">
              <div className="sign-up">
                <a>
                  <button onClick={freeclasshandler}>Apply For Bootcamp</button>
                </a>
              </div>
            </div>
          </div>
          <div className="img-container" >
            <img src={astroCircle} className="astro-circle" alt="astro circle" />
            <img src={astronaut} className="astronaut" alt="astronaut" /> 
            {/* <img src={ic_circle} alt="circle" className="ic_circle" />
            <img src={ic_robo} alt="circle" className="ic_robo" />
            <img src={ic_idea} alt="circle" className="ic_idea" />
            <img src={ic_coding} alt="circle" className="ic_coding" />
            <img src={ic_apps} alt="circle" className="ic_apps" />
            <img src={ic_electronics} alt="circle" className="ic_electronics" />
            <img src={ic_game} alt="circle" className="ic_game" />
            <img src={ic_submarine} alt="circle" className="ic_submarine" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <>
      <Content />
    </>
  );
}

export default Main;
