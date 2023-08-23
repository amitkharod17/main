import React from 'react';
import "./AboutOlympiad.css";
import sustainable_goals_img from "../img/sustainable_goals_img.png";

function AboutOlympiad() {
  return (
    <div className="olympiad_about">
        <h1 className="olympiad_about_title">About Innovation Olympiad</h1>
        <p className="olympiad_about_subtitle">
            Rancho Labs Innovation Olympiad is the team competition inviting young mind and 
            future leaders in helping India achieve the United Nation sustainable development goals.
        </p>
        <div className="olympiad_about_img">
            <img className="sustainable_img" src={sustainable_goals_img} alt="sustainable goals" />
        </div>
        <p className="olympiad_about_img_text">
            The Sustainable Development Goals or Global Goals are a collection of 17 interlinked 
            global goals designed to be a "blueprint to achieve a better and more sustainable future for all"
        </p>
    </div>
  )
}

export default AboutOlympiad