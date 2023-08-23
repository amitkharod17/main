import React from 'react';
import './HeroSection.css';
import hero_img from "../img/hero_bg.png";
import star_img from "../img/star_img.png";
import live_learning_img from "../../Landing-page/img/live_learning_img.png";
import teacher_img from "../../Landing-page/img/teacher_img.png";
import play_img from "../../Landing-page/img/play_img.png";
import live_img from "../../Landing-page/img/live_img.png";
import teacher_text_img from "../../Landing-page/img/teacher_text_img.png";
import ModalVideo from 'react-modal-video';

import { useHistory } from "react-router-dom";

const InteractiveComponent = ({ setOpen, setVideoId }) => {
    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId("f1GoPZXBvGs")
    }
    return (
        <>
            <img
                className="bootcamp_video_img"
                src={live_learning_img}
                onClick={handleVideoPopup}
                alt='project video' />
            <img className="bootcamp_teacher_img" src={teacher_img} alt="online study" />
            <img className="bootcamp_live_img" src={live_img} alt="Live video" />
            <img className="bootcamp_teacher_text bootcamp_teacher_text_img" src={teacher_text_img} alt="teacher text" />
            <div className="bootcamp_teacher_bg"></div>
            <img className="bootcamp_play_icon" src={play_img} onClick={handleVideoPopup} alt="online study" />
        </>
    )
}

function HeroSection() {

    const history = useHistory();

    const enrollBtnHandler = () => {
        history.push("/studentsignup");
    }

    const [isOpen, setOpen] = React.useState(false);
    const [videoId, setVideoId] = React.useState("");

    const handleModalClose = () => {
        setOpen(false);
    }

    return (
        <div className="hero_section">
            <div className="hero_left_box">
                <h1 className="hero_left_title1" >Innovation Bootcamp</h1>
                <h1 className="hero_left_title2" >by IITians</h1>
                <p className='hero_left_subtitle' >For Grade 6th to 10th</p>
                <div className="detail_box">
                    <div className="detail_item">
                        <h1 className="item_title">2</h1>
                        <p className="item_text">Days</p>
                    </div>
                    <div className="detail_item">
                        <h1 className="item_title">4</h1>
                        <p className="item_text">Hours</p>
                    </div>
                    <div className="detail_item rating_box">
                        <h1 className="item_title rating_title">4.9/5</h1>
                        <div className="rating">
                            <img className="star_img" src={star_img} alt="star img" />
                            <img className="star_img" src={star_img} alt="star img" />
                            <img className="star_img" src={star_img} alt="star img" />
                            <img className="star_img" src={star_img} alt="star img" />
                            <img className="star_img" src={star_img} alt="star img" />
                        </div>
                    </div>
                </div>
                <button className="btn_enroll" onClick={enrollBtnHandler} >Enroll Now</button>
            </div>
            <div className="hero_right_box" >
                {/* <img src={hero_img} className="hero_img" alt="hero img" /> */}
                <InteractiveComponent setOpen={setOpen} setVideoId={setVideoId} />
            </div>
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
        </div>
    )
}

export default HeroSection;