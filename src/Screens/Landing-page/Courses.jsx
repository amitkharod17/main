import React from "react";
import "./css/index.css";
import "./css/Courses.css";

import robokid from "./img/Robot_illustration_png.png";
import programmer from "./img/pg8.png";
import ai from "./img/Artificial_intelligence-_illustration_png.png";
import mobileai from "./img/mobileai.png";
import mobilepg8 from "./img/mobilepg8.png";
import mobilerobokid from "./img/mobilerobo.png";
import { useHistory } from "react-router-dom";

var customStyle = {
  right: "5%",
};

var customStyle2 = {
  left: "5%",
};

const CardData = [
  {
    coursename: "Young Innovators Program",
    tag: "Newly Added",
    Title: "Young Innovators Program",
    Description:
    "An experiential program in coding, robotics, game development and app development conducted by IITians with a unique methodology to Learn, Build, and Innovate.",
    style1: customStyle,
    style2: {
      width: "100%",
      height: "125%",
      marginTop: "-18vh",
    },
    imgsrc: robokid,
    imgmob: mobilerobokid,
    groupId: "5f797f247a188f4a5c1046bf",
  },
  {
    coursename: "Programming",
    tag: "BRAINIAC",
    Title: "Programming",
    Description:
      "Learn logic and structure to command tech tools and generate outcomes like games and apps. Either side of the brain works and balances with Coding. It offers creativity plus intelligence.",
    style1: customStyle2,
    style2: {
      width: "100%",
      height: "125%",
      marginTop: "-18vh",
    },
    imgsrc: programmer,
    imgmob: mobilepg8,
    groupId: "5f85ada0529b253708a71225",
  },
  {
    coursename: "Artificial Intelligence",
    tag: "SMART CHAMPS",
    Title: "Artificial Intelligence",
    Description:
      "Look forward to solve some real life problems with machines enabled with human intelligence. AI is intelligence demonstrated by machine, unlike the natural human intelligence.",
    style1: customStyle,
    style2: {
      width: "80%",
      height: "100%",
      marginTop: "-10vh",
    },
    imgsrc: ai,
    imgmob: mobileai,
    groupId: "5f79f717fdd87f4fb4c3fc24",
  },
];

function OuterCard(props, index) {
  const history = useHistory();
  const onclickHandler = (groupId) => {
    history.push(`/younginnovators`);
  };
  return (
    <div className={index === 0 ? "card outer card-no-margin" : "card outer"}>
      <img src={props.imgsrc} alt={props.coursename}></img>
      <div className="card inner" style={props.style1}>
        <div className={index===0 ? "tag newly":"tag"}>{props.tag}</div>
        <div className="coursename">{props.coursename}</div>
        <div className="course-description">{props.Description}</div>
        <div
          className="btn learnmore"
          onClick={() => onclickHandler(props.groupId)}
        >
          Learn More
        </div>
      </div>
    </div>
  );
}

function Course() {
  return (
    <div className="courses">
      <div className="container">
        <div className="course-title">Specially Curated Programs for You</div>
        {/* <p>Specially curated courses for you</p> */}
        <div className="btn grade">GRADE 8-10</div>
        <div className="btn grade">GRADE 11-12</div>
        {CardData.map(OuterCard)}
      </div>
    </div>
  );
}

function MobileCard(props) {
  const history = useHistory();
  const onclickHandler = (groupId) => {
    // history.push(`/courses/${groupId}`)
    history.push(`/younginnovators`);
  };
  return (
    <div className="mobilecard">
      <div className="card">
        <img
          className="card-img-top"
          src={props.imgmob}
          alt={props.coursename}
        ></img>
        <div className="card-body">
          <div className={props.tag==="Newly Added" ? "card-coursename newly":"card-coursename"}>{props.tag}</div>
          <div className="card-title">{props.coursename}</div>
          <div className="card-text">{props.Description}</div>
          <center>
            <div
              className="btn learnmore"
              onClick={() => onclickHandler(props.groupId)}
            >
              Learn More
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

function MobileCourses() {
  return (
    <div className="mobilecourses">
      <div className="course-title">Specially curated programs for you</div>
      {CardData.map(MobileCard)}
    </div>
  );
}

function Courses() {
  return (
    <>
      <Course />
      <MobileCourses />
    </>
  );
}

export default Courses;
