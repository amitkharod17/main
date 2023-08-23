import React from 'react';
import './HeroSection.css';
import sc22_hero_img from '../img/sc22_hero_img.png';
import sc22_rl_logo from '../img/sc22_rl_logo.png';
import sc22_ihfc_img from '../img/sc22_ihfc_img.png';
import sc22_cal_img from '../img/sc22_cal_img.png';
import sc22_venue_img from '../img/sc22_venue_img.png';
import sc22_hero_bg_svg from '../img/sc22_hero_bg_svg.svg'
import { useHistory } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';
import sc22_play_img from '../img/sc22_play_icon.png';

function HeroSection() {

    const history = useHistory();

    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState(false);
    
    const handleApplyNow = () => {
        history.push('/summercamp2022-apply-form')
    }

    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId("f1GoPZXBvGs")
    }

    const handleModalClose = () => {
        setOpen(false);
    }

    return (
        <div className="sc22_hero_section">
             <ModalVideo
                className='video-popup'
                channel='youtube'
                autoplay isOpen={isOpen}
                videoId={videoId}
                aria={{
                    "openMessage": "Video is out",
                    "dismissBtnMessage": "x"
                }}
                onClose={() => handleModalClose()} />
            <img src={sc22_hero_bg_svg} className="sc22_hero_bg_svg" alt="hero bg svg" />
            <div className="sc22_hs_heading_cover">
                <h1 className="sc22_hs_heading">Robotics & Coding Summer Camp</h1>
            </div>
            <div className="sc22_hs_content">
                <div className="sc22_hsc_left">
                    <img onClick={handleVideoPopup} src={sc22_play_img} className="sc22_play_img" alt="Play img" />
                    <img src={"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/01/13/538040-iitdelhi-011217.jpg"} className="sc22_hero_img" alt="hero img" />
                </div>
                <div className="sc22_hsc_right">
                    <div className="sc22_hsc_right_logos">
                        <img src={sc22_rl_logo} className="sc22_rl_logo" alt="rancho labs logo" />
                        <img src={sc22_ihfc_img} className="sc22_ihfc_img" alt="IHFC logo" />
                    </div>
                    <p className="sc22_hsc_right_subtext">
                        by <span className="hsc_subtext_span">Rancho Lab</span>s in support with
                        <span className="hsc_subtext_span"> Technology Innovation Hub of IIT Delhi (IHFC)</span>
                    </p>
                    <div className="sc22_hsc_right_maintext">
                        <p className="hsc_right_maintext_p">For Grade 6th to 12th</p>
                    </div>
                    <div className="sc22_hsc_right_details">
                        <div className="hsc_right_details_left">
                            <img src={sc22_cal_img} className="sc22_cal_img" alt="Calendar img" />
                            <div className="ml-2" >
                                <p className="rf_left_starting">Starting from</p>
                                <p className="rf_left_19_june">19th June</p>
                            </div>
                        </div>
                        <div className="hsc_right_details_right">
                            <img src={sc22_venue_img} className="sc22_venue_img" alt="Calendar img" />
                            <div className="ml-2" >
                                <p className="rf_left_starting">Venue</p>
                                <p className="rf_left_19_june">IIT Delhi</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="sc22_registration_fee_cover">
                        <p className="sc22_reg_fee_text">Registration fee</p>
                        <h2 className="sc22_reg_fee_price">11,999 /-</h2>
                    </div> */}
                    <div className="hsc_right_details_apply">
                        <button className="rd_btn_apply_now" onClick={handleApplyNow} >Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection