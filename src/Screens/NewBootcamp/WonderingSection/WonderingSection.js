import React from 'react';
import "./WonderingSection.css";

import player_img from "../img/player_img.png";
import mobile_app_img from "../img/mobile_app_img.png";
import board_img from "../img/board_img.png";
import the_innovator_img from "../img/the_innovator_img.png";

function WonderingSection() {
  return (
    <div className="wondering_section">
        <h1 className="wondering_title">Still wondering if this bootcamp is for <span className="wondering_text">you</span>?</h1>
        <div className="wondering_content">
            <div className="wc_box_1 wc_right_margin">
                <div className="wc_left">
                    <h1 className="wc_title wc_title_margin">The Gamer</h1>
                    <p className="wc_text wc_text_margin">Who loves playing games whole day and want to build one</p>
                </div>
                <img className="wc_player_img" src={player_img} alt="player img"/>
            </div>
            <div className="wc_box_1">
                <div className="wc_left">
                    <h1 className="wc_title">The Technophile</h1>
                    <p className="wc_text">Who are thankful to apps like Amazon, Zomato and Instagram & looking to build one</p>
                </div>
                <img className="mobile_app_img" src={mobile_app_img} alt="mobile app img"/>
            </div>
        </div>
        <div className="wondering_content wc_top_margin">
            <div className="wc_box_1 wc_right_margin">
                <div className="wc_left">
                    <h1 className="wc_title wc_title_padding">Always Intrigued</h1>
                    <p className="wc_text wc_text_padding">Who keep meddling with electrical components at home</p>
                </div>
                <img className="wc_img board_img" src={board_img} alt="electrical board img"/>
            </div>
            <div className="wc_box_1">
                <div className="wc_left">
                    <h1 className="wc_title px-4">The Innovator</h1>
                    <p className="wc_text">One with ideas and looking to implement them</p>
                </div>
                <img className="the_innovator_img" src={the_innovator_img} alt="innovation img"/>
            </div>
        </div>
    </div>
  )
}

export default WonderingSection;