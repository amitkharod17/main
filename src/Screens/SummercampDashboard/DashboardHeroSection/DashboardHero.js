import React from "react";
import "./DashboardHero.css";
import live_class_img from "../img/live_class_img.png";
import video_play_img from "../img/video_play_img.png";
import hero_img from "../img/hero_img.png";
import download_img from "../img/download_img.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ModalVideo from "react-modal-video";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import live_learning_img from "../../Landing-page/img/live_learning_img.png";
import play_img from "../../Landing-page/img/play_img.png";
import sc22_profile_pic from "../img/sc22_profile_pic.png";

const sessionData = [
  {
    title: "Game Development and AI Bootcamp",
    session_1: "Game Development",
    session_2: "AI and Design Thinking",
    liveClass: "Game Development",
  },
  {
    title: "Coding, Robotics and AI Bootcamp",
    session_1: "Coding and Robotics",
    session_2: "AI and Design Thinking",
    liveClass: "Robotics",
  },
  {
    title: "App Development and AI Bootcamp",
    session_1: "App Development",
    session_2: "AI and Design Thinking",
    liveClass: "App Development",
  },
];

const ProfileCard = ({props}) => {
  return (
    <div className="sc22_profile_card_container">
      <div className="sc22_pc_header">
        <img className="sc22_pc_pic" src={sc22_profile_pic} alt={'Air Bender'} />
      </div>
      <h1 className="sc22_pc_bold_text">
        {'Air Bender'}
      </h1>
      <h2 className="normal-text">{"The Avatar World Higher School"}</h2>
      <p className="sc22_pc_description">
        I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.
      </p>
      <div className="social-container">
        <div className="followers">
          <h1 className="bold-text">{"1.2k"}</h1>
          <h2 className="smaller-text">Followers</h2>
        </div>
        <div className="likes">
          <h1 className="bold-text">{"5k"}</h1>
          <h2 className="smaller-text">Likes</h2>
        </div>
        <div className="photos">
          <h1 className="bold-text">{"322"}</h1>
          <h2 className="smaller-text">Photos</h2>
        </div>
      </div>
    </div>
  )
}

function DashboardHero() {
  const history = useHistory();
  const [isYIPApplied, setIsYIPApplied] = React.useState(false);
  const [isCertificateApplied, setIsCertificateApplied] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const [videoId, setVideoId] = React.useState("");
  const [sessionFirstDate, setSessionFirstDate] = React.useState(19);
  const [sessionSecondDate, setSessionSecondDate] = React.useState(20);
  const [sessionIndex, setSessionIndex] = React.useState(0);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleVideoPopup = () => {
    setOpen(true);
    setVideoId("f1GoPZXBvGs");
  };

  const onApplyCertificateHandler = async () => {
    if (!isCertificateApplied) {
      const userDetail = JSON.parse(localStorage.getItem("userDetail"));
      try {
        const response = await axios.post("/api/bootcamp/user/apply-for", {
          userDetail,
          isApplyForBootcampCertificate: true,
          isApplyForYIP: false,
        });
        if (response.status === 200) setIsCertificateApplied(true);
      } catch (err) {
        console.log(err);
      }
    } else console.table("already", "applied");
  };

  const onYIPApplyHandler = async () => {
    if (!isYIPApplied) {
      const userDetail = JSON.parse(localStorage.getItem("userDetail"));
      const data = {
        userDetail: userDetail,
        isApplyForBootcampCertificate: false,
        isApplyForYIP: true,
      };

      try {
        const response = await axios.post("/api/bootcamp/user/apply-for", data);
        if (response.status === 200) {
          setIsYIPApplied(true);
          const updateSheet = await axios.get("/api/bootcamp/spreadsheet");
          if (updateSheet.status === 200) console.log("Successfully Applied");
        }
      } catch (err) {
        console.log(err);
      }
    } else console.table("already", "applied");
  };

  const onKnowMoreHandler = () => {
    history.push("/summercamp2022");
  };

  const getAppliedDetails = async () => {
    const userDetail = JSON.parse(localStorage.getItem("userDetail"));
    try {
      const response = await axios.post(
        "/api/bootcamp/user/applied",
        userDetail
      );
      // console.log(response);
      setIsYIPApplied(response.data.data.isApplyForYIP);
      setIsCertificateApplied(response.data.data.isApplyForBootcampCertificate);
      const userTheme = response.data.data.selectedTheme;
      const userDate = response.data.data.selectedBatchDateAndTime;
      // console.log(userDate);
      const firstDate = userDate[0] + userDate[1];
      const secondDate = userDate[7] + userDate[8];
      setSessionFirstDate(firstDate);
      setSessionSecondDate(secondDate);
      if (userTheme === "Game Development & AI") {
        setSessionIndex(0);
      } else if (userTheme === "Robotics & AI") {
        setSessionIndex(1);
      } else if (userTheme === "App Development & AI") {
        setSessionIndex(2);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getAppliedDetails();
  }, []);

  return (
    <div className="dashboard_hero_section">
      <ModalVideo
        className="video-popup"
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        aria={{
          openMessage: "Video is out",
          dismissBtnMessage: "x",
        }}
        onClose={() => handleModalClose()}
      />

      <div className="dashboard_hero_left_box">
        <h1 className="left_box_title">{sessionData[sessionIndex].title}</h1>
        <div className="sc22_profile_box">
          <ProfileCard />
        </div>
        {/* <button className="btn_apply_for" onClick={onApplyCertificateHandler} >{isCertificateApplied ? "Applied for Certificate" : "Apply for Bootcamp Certificate"}</button> */}
        <Popup
          trigger={
            <button className="btn_apply_for">
              {isCertificateApplied
                ? "Applied for Certificate"
                : "Apply for Bootcamp Certificate"}
            </button>
          }
          position="right center"
        >
          <div>It will be activated after Bootcamp is complete.</div>
        </Popup>
      </div>
      <div className="dashboard_hero_right_box">
        <h1 className="right_box_title">Welcome To</h1>
        <h1 className="right_box_title">Summer Camp 2022 Dashboard 🎉🎉</h1>
        <img
          className="right_thumbnail"
          src={live_learning_img}
          onClick={handleVideoPopup}
          alt="youtube thumbnail"
        />
        <img
          className="video_play_img"
          src={play_img}
          onClick={handleVideoPopup}
          alt="video play img"
        />
        <div className="right_btns">
          <button className="btn_know_more" onClick={onKnowMoreHandler}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardHero;
