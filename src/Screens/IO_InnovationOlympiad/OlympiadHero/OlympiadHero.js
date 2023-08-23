import React from 'react';
import "./OlympiadHero.css"
import live_learning_img from "../img/live_learning_img.png";
import { useHistory } from 'react-router-dom';

function OlympiadHero() {

  const history = useHistory();

  const handleOnClick = () => {
    history.push('/team-registration');
  }

  return (
    <div className="olympiad_hero">
        <div className="olympiad_left">
            <div className="olympiad_left_content">
                <h1 className="olympiad_left_title">Innovation Olympiad</h1>
                <p className="olympiad_left_subtitle">For Grade 6th to 10th</p>
                <button className="olympiad_btn_enroll" onClick={handleOnClick} >Enroll Now for Free</button>
            </div>
        </div>
        <div className="hero_div_right">
            {/* <img src={live_learning_img} alt="live learning img" className="hero_right_img"/> */}
        </div>
    </div>
  )
}

export default OlympiadHero;