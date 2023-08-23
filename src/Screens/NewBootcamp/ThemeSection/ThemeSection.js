import React, { useEffect, useState } from 'react';
import "./ThemeSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import learn_img from "../img/learn_img.png";
import game_img_1 from "../img/game_img_1.png";
import game_img_2 from "../img/game_img_2.png";
import block_coding_img from "../img/block_coding_img.png"
import img_cover from "../img/img_cover.png";
import rectangle_img from "../img/rectangle_img.png";
import select_icon from "../img/select_icon.png";

import coding_img from "../img/coding_img.png";
import mario_game_img from "../img/mario_game_img.png";
import ai_img from "../img/ai_img.png";
import design_thinking_img from "../img/design_thinking_img.png";
import bouncing_ball_img from "../img/bouncing_ball_img.png";
import coins_img from "../img/coins_img.png";
import recognition_img from "../img/recognition_img.png";
import app_dev_img from "../img/app_dev_img.png";
import translator_app_img from "../img/translator_app_img.png";
import voice_recognition_img from "../img/voice_recognition_img.png";
import idea_bulb_img from "../img/idea_bulb_img.png";
import app_wireframe_img from "../img/app_wireframe_img.png";
import app_coding_img from "../img/app_coding_img.png";
import release_app_img from "../img/release_app_img.png";
import robotic_img from "../img/robotic_img.png";
import smart_cane_img from "../img/smart_cane_img.png";
import code_img from "../img/code_img.png";
import circuit_design_img from "../img/circuit_design_img.png";
import robot_dev_img from "../img/robot_dev_img.png";

const themeData = [
  {
    title: "First Steps in Game Development & AI",
    step_1_img: game_img_2,
    step_2_img: block_coding_img,
    step_3_img: game_img_1,
    step_1_text: "Design characters & game layout",
    step_2_text: "Code like a pro!",
    step_3_text: "Level Design & Algorithm",
    learn_img_1: coding_img,
    learn_img_2: mario_game_img,
    learn_img_3: ai_img,
    learn_img_4: design_thinking_img,
    learn_text_1: "Coding",
    learn_text_2: "Game Development",
    learn_text_3: "AI",
    learn_text_4: "Design Thinking",
    build_img_1: bouncing_ball_img,
    build_img_2: coins_img,
    build_img_3: recognition_img,
    build_img_4: learn_img,
    build_text_1: "Bouncing Ball game",
    build_text_2: "Collect the Coins",
    build_text_3: "Object Recognition",
    build_text_4: "Coding",
  },
  {
    title: "First Steps in Robotics & AI",
    step_1_img: circuit_design_img,
    step_2_img: code_img,
    step_3_img: robot_dev_img,
    step_1_text: "Circuit Design",
    step_2_text: "Code like a pro!",
    step_3_text: "Robot Development",
    learn_img_1: coding_img,
    learn_img_2: robotic_img,
    learn_img_3: ai_img,
    learn_img_4: design_thinking_img,
    learn_text_1: "Coding",
    learn_text_2: "Robotics",
    learn_text_3: "AI",
    learn_text_4: "Design Thinking",
    build_img_1: learn_img,
    build_img_2: smart_cane_img,
    build_img_3: recognition_img,
    build_img_4: idea_bulb_img,
    build_text_1: "Traffic Light Controller",
    build_text_2: "Smart Cane",
    build_text_3: "Object Recognition",
    build_text_4: "Your Idea",
  },
  {
    title: "First Steps in App Development & AI",
    step_1_img: app_wireframe_img,
    step_2_img: app_coding_img,
    step_3_img: release_app_img,
    step_1_text: "Wireframe and App Design",
    step_2_text: "Code like a pro!",
    step_3_text: "Release Application",
    learn_img_1: coding_img,
    learn_img_2: app_dev_img,
    learn_img_3: ai_img,
    learn_img_4: design_thinking_img,
    learn_text_1: "Coding",
    learn_text_2: "App Development",
    learn_text_3: "AI",
    learn_text_4: "Design Thinking",
    build_img_1: translator_app_img,
    build_img_2: voice_recognition_img,
    build_img_3: recognition_img,
    build_img_4: idea_bulb_img,
    build_text_1: "Translator App",
    build_text_2: "Speech Recognition App",
    build_text_3: "Object Recognition",
    build_text_4: "Your Idea",
  },
];


const StepsComponent = ({ currentTheme }) => {
  return (
    <div className="container-fluid">
      <h1 className='theme_steps_title'>{themeData[currentTheme].title}</h1>
      <div className="row">
        <div className="col">
          <img className='img' src={img_cover} alt="" />
          <img className='steps_img' src={themeData[currentTheme].step_1_img} alt="" />
          <p className="theme_p steps_text">{themeData[currentTheme].step_1_text}</p>
        </div>
        <div className="col">
          <img className='img' src={img_cover} alt="" />
          <img className='steps_img' src={themeData[currentTheme].step_2_img} alt="" />
          <p className="theme_p" >{themeData[currentTheme].step_2_text}</p>
        </div>
        <div className="col">
          <img className='img' src={img_cover} alt="" />
          <img className='steps_img' src={themeData[currentTheme].step_3_img} alt="" />
          <p className="theme_p" >{themeData[currentTheme].step_3_text}</p>
        </div>
      </div>
    </div>
  )
}

const StepsContentComponent = ({ currentTheme }) => {
  // console.log(currentTheme);
  return (
    <div className="theme_content_box">
      <div className="theme_content">
        <div className="theme_top_box">
          <h3 className="theme_top_box_title">What will you learn</h3>
        </div>
        <div className="theme_main_box">
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].learn_img_1} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].learn_text_1}</p>
          </div>
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].learn_img_2} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].learn_text_2}</p>
          </div>
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].learn_img_3} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].learn_text_3}</p>
          </div>
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].learn_img_4} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].learn_text_4}</p>
          </div>
        </div>
      </div>
      <div className="theme_content">
        <div className="theme_top_box">
          <h3 className="theme_top_box_title">What will you build?</h3>
        </div>
        <div className="theme_main_box">
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].build_img_1} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].build_text_1}</p>
          </div>
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].build_img_2} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].build_text_2}</p>
          </div>
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].build_img_3} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].build_text_3}</p>
          </div>
          <div className="theme_main_content">
            <div className="theme_img_box">
              <img className="theme_img" src={themeData[currentTheme].build_img_4} alt="" />
            </div>
            <p className="theme_img_text">{themeData[currentTheme].build_text_4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ThemeSection() {

  const themes = {
    themeOne: 1,
    themeTwo: 2,
    themeThree: 3
  }

  const [selectTheme, setSelectTheme] = useState({
    themeOne: 1,
    themeTwo: 0,
    themeThree: 0
  })
  const [currentTheme, setCurrentTheme] = useState(0);
  const [gameDevText, setGameDevText] = useState("Game Development & AI");
  const [appDevText, setAppDevText] = useState("App Development & AI");
  const [roboticsText, setRoboticsText] = useState("Robotics & AI");
  const [selectThemeText, setSelectThemeText] = useState(gameDevText);
  const [openDD,setOpenDD] = useState(false);

  const selectThemeHandler = (themeIndex) => {
    if (themeIndex === 1 && selectTheme.themeOne !== themes.themeOne) {
      setSelectTheme({
        themeOne: 1,
        themeTwo: 0,
        themeThree: 0
      });
      setCurrentTheme(0);
    } else if (themeIndex === 2 && selectTheme.themeTwo !== themes.themeTwo) {
      setSelectTheme({
        themeOne: 0,
        themeTwo: 2,
        themeThree: 0
      });
      setCurrentTheme(1);
    } else if (themeIndex === 3 && selectTheme.themeThree !== themes.themeThree) {
      setSelectTheme({
        themeOne: 0,
        themeTwo: 0,
        themeThree: 3
      });
      setCurrentTheme(2);
    }
  }

  const onSelectValueChange = () => {
    let value = document.getElementById('theme_dd').value;
    setCurrentTheme(() => parseInt(value));
  }

  const onChangeThemeHandler = (themeId) => {
      if(themeId === 0) {
        setCurrentTheme(0);
        setSelectThemeText(gameDevText)
        document.getElementById('gamedev_id').style.display = 'none';
        document.getElementById('appdev_id').style.display = 'block';
        document.getElementById('robotics_id').style.display = 'block';
        toggleDDHandler()
      } else if(themeId === 1) {
        setCurrentTheme(1)
        setSelectThemeText(roboticsText)
        document.getElementById('gamedev_id').style.display = 'block';
        document.getElementById('robotics_id').style.display = 'none';
        document.getElementById('appdev_id').style.display = 'block';
        toggleDDHandler()
      } else if(themeId === 2) {
        setCurrentTheme(2)
        setSelectThemeText(appDevText)
        document.getElementById('gamedev_id').style.display = 'block';
        document.getElementById('robotics_id').style.display = 'block';
        document.getElementById('appdev_id').style.display = 'none';
        toggleDDHandler()
      }
  }

  const toggleDDHandler = () => {
      let dd_list = document.getElementById('dd_list');
      if(openDD) {
        dd_list.style.opacity = 1;
        dd_list.style.visibility = 'visible';
      } else {
        dd_list.style.opacity = 0;
        dd_list.style.visibility = 'hidden';
      }
      setOpenDD(!openDD);
  }


  return (
    <div className="theme_section">
      <h1 className="theme_title">Select <span className="theme_text">Theme</span></h1>
      {
        window.innerWidth > 600 ?
          <div className="theme_btn_box">
            {selectTheme.themeOne === themes.themeOne && <img className="select_btn_img_1" src={rectangle_img} alt="select theme" />}
            {selectTheme.themeTwo === themes.themeTwo && <img className="select_btn_img_2" src={rectangle_img} alt="select theme" />}
            {selectTheme.themeThree === themes.themeThree && <img className="select_btn_img_3" src={rectangle_img} alt="select theme" />}

            <button className={selectTheme.themeOne === themes.themeOne ? "theme_btn btn_active" : "theme_btn"} onClick={() => selectThemeHandler(1)} >Game Development & AI</button>
            <button className={selectTheme.themeTwo === themes.themeTwo ? "theme_btn btn_active theme_btn_margin" : "theme_btn theme_btn_margin"} onClick={() => selectThemeHandler(2)} >Robotics & AI</button>
            <button className={selectTheme.themeThree === themes.themeThree ? "theme_btn btn_active" : "theme_btn"} onClick={() => selectThemeHandler(3)} >App Development & AI</button>
          </div> :
          // <div className="theme_drop_down">
          //   {selectTheme.themeOne === themes.themeOne && <img className="select_btn_img_1" src={rectangle_img} alt="select theme" />}
          //   <select className="theme_dd_select" id="theme_dd" onChange={() => onSelectValueChange()}>
          //     <option value={0}>Game Development & AI</option>
          //     <option value={1}>Robotics & AI</option>
          //     <option value={2}>App Development & AI</option>
          //   </select>
          // </div>
          <div className="theme_select_box">
            <img className="select_dd_img" src={rectangle_img} alt="select theme" />
            <div className="dropdown_box">
              <div className="dropdown_select" id="dropdown_select" >
                <span className="select_text">{selectThemeText}</span>
                <img className="select_icon" id="select_icon_id" src={select_icon} onClick={toggleDDHandler} alt="select img" />
              </div>
              <div className="dropdown_list" id="dd_list">
                <div className="dropdown_list_item" id="gamedev_id" onClick={() => onChangeThemeHandler(0)} >{gameDevText}</div>
                <div className="dropdown_list_item" id="robotics_id" onClick={() => onChangeThemeHandler(1)} >{roboticsText}</div>
                <div className="dropdown_list_item" id="appdev_id" onClick={() => onChangeThemeHandler(2)} >{appDevText}</div>
              </div>
            </div>
          </div>
      }

      <StepsComponent currentTheme={currentTheme} />
      <StepsContentComponent currentTheme={currentTheme} />

    </div>
  )
}

export default ThemeSection;