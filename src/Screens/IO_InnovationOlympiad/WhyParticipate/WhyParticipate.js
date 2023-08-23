import React from 'react';
import "./WhyParticipate.css";
import earth_img from "../img/earth_img.png";
import learning_resources_img from "../img/learning_resources_img.png";

function WhyParticipate() {
  return (
    <div className="why_participate_section">
        <div className="why_participate_box">
            <h1 className="why_participate_title">Why Participate?</h1>
            <div className="why_participate_content">
                <div className="why_participate_row">
                    <div className="why_participate_item">
                        <img className="wp_item_img" src={earth_img} alt="" />
                        <p className="wp_item_text">Particiapte & Compete at International Level</p>
                    </div>
                    <div className="why_participate_item">
                        <img className="wp_item_img" src={learning_resources_img} alt="" />
                        <p className="wp_item_text">Get Access to Learning Resources</p>
                    </div>
                    <div className="why_participate_item">
                        <img className="wp_item_img" src={earth_img} alt="" />
                        <p className="wp_item_text">Particiapte & Compete at International Level</p>
                    </div>
                </div>
                <div className="why_participate_row">
                    <div className="why_participate_item">
                        <img className="wp_item_img" src={earth_img} alt="" />
                        <p className="wp_item_text">Particiapte & Compete at International Level</p>
                    </div>
                    <div className="why_participate_item">
                        <img className="wp_item_img" src={learning_resources_img} alt="" />
                        <p className="wp_item_text">Get Access to Learning Resources</p>
                    </div>
                    <div className="why_participate_item">
                        <img className="wp_item_img" src={earth_img} alt="" />
                        <p className="wp_item_text">Particiapte & Compete at International Level</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyParticipate;