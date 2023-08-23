import React from 'react';
import "./DashboardHero.css";
import live_class_img from "../img/live_class_img.png";
import video_play_img from "../img/video_play_img.png";
import hero_img from "../img/hero_img.png";
import download_img from "../img/download_img.png";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import ModalVideo from 'react-modal-video';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import live_learning_img from "../../Landing-page/img/live_learning_img.png";
import play_img from "../../Landing-page/img/play_img.png";


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
    }
]

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
    }

    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId("f1GoPZXBvGs");
    }

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
        } else console.table("already", "applied")
    }

    const onYIPApplyHandler = async () => {
        if (!isYIPApplied) {
            const userDetail = JSON.parse(localStorage.getItem("userDetail"));
            const data = {
                userDetail: userDetail,
                isApplyForBootcampCertificate: false,
                isApplyForYIP: true,
            }

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
        } else console.table("already", "applied")
    }

    const onKnowMoreHandler = () => {
        history.push("/younginnovators");
    }

    const getAppliedDetails = async () => {
        const userDetail = JSON.parse(localStorage.getItem("userDetail"));
        try {
            const response = await axios.post("/api/bootcamp/user/applied", userDetail);
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
    }

    React.useEffect(() => {
        getAppliedDetails();
    }, []);


    return (
        <div className="dashboard_hero_section">
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

            <div className="dashboard_hero_left_box">
                <h1 className="left_box_title">{sessionData[sessionIndex].title}</h1>
                <div className="session_box">
                    <div className="session_box_top">
                        <p className="top_title">Session 1: {sessionData[sessionIndex].session_1}</p>
                    </div>
                    <div className="session_box_content">
                        <div className="class_item">
                            <div className="item_circle"></div>
                            <div className="item_line"></div>
                            <p className="item_title">Live Class on {sessionData[sessionIndex].liveClass}</p>
                            <img className="live_class_img" src={live_class_img} alt="live class icon" />
                        </div>
                    </div>
                    <div className="session_box_content">
                        <div className="class_item">
                            <div className="item_circle"></div>
                            <div className="item_line"></div>
                            <p className="item_title">Project</p>
                            <div className="item_btns">
                                {/* <button className="btn_view" onClick={""} >View</button> */}
                                <Popup trigger={<button className="btn_view" onClick={""} >View</button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                                {/* <button className="btn_submit">Submit</button> */}
                                <Popup trigger={<button className="btn_submit">Submit</button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <div className="session_box_content">
                        <div className="class_item">
                            <div className="item_circle"></div>
                            <p className="item_title">Resources</p>
                            <div className="item_btns">
                                {/* <button className="btn_slides">Slides <img className='download_img' src={download_img} alt="download img" /></button> */}
                                <Popup trigger={<button className="btn_slides">Slides <img className='download_img' src={download_img} alt="download img" /></button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                                {/* <button className="btn_recording">Recording <img className='download_img' src={download_img} alt="download img" /></button> */}
                                <Popup trigger={<button className="btn_recording">Recording <img className='download_img' src={download_img} alt="download img" /></button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                            </div>
                            {/* <button className="btn_join_class">Join Class</button> */}
                            <Popup trigger={<button className="btn_join_class">Join Class</button>}>
                                <div>It will be active the day before Bootcamp.</div>
                            </Popup>
                        </div>
                    </div>
                    <div className="date_box">
                        <div className="date_cover">
                            <div className="date_box_top"></div>
                            <div className="date_box_content">
                                <h1 className="date_date_text">{sessionFirstDate}</h1>
                                <p className="date_month_text">March</p>
                            </div>
                        </div>
                        <p className="date_time_text">5pm - 7pm</p>
                    </div>
                </div>
                <div className="session_box">
                    <div className="session_box_top">
                        <p className="top_title">Session 2: {sessionData[sessionIndex].session_2}</p>
                    </div>
                    <div className="session_box_content">
                        <div className="class_item">
                            <div className="item_circle"></div>
                            <div className="item_line"></div>
                            <p className="item_title">Live Class on AI & Design Thinking</p>
                            <img className="live_class_img" src={live_class_img} alt="live class icon" />
                        </div>
                    </div>
                    <div className="session_box_content">
                        <div className="class_item">
                            <div className="item_circle"></div>
                            <div className="item_line"></div>
                            <p className="item_title">Project</p>
                            <div className="item_btns">
                                {/* <button className="btn_view" onClick={""} >View</button> */}
                                <Popup trigger={<button className="btn_view" onClick={""} >View</button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                                {/* <button className="btn_submit">Submit</button> */}
                                <Popup trigger={<button className="btn_submit">Submit</button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <div className="session_box_content">
                        <div className="class_item">
                            <div className="item_circle"></div>
                            <p className="item_title">Resources</p>
                            <div className="item_btns">
                                {/* <button className="btn_slides">Slides <img className='download_img' src={download_img} alt="download img" /></button> */}
                                <Popup trigger={<button className="btn_slides">Slides <img className='download_img' src={download_img} alt="download img" /></button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                                {/* <button className="btn_recording">Recording <img className='download_img' src={download_img} alt="download img" /></button> */}
                                <Popup trigger={<button className="btn_recording">Recording <img className='download_img' src={download_img} alt="download img" /></button>} position="right center">
                                    <div>It will be active the day before Bootcamp.</div>
                                </Popup>
                            </div>
                            {/* <button className="btn_join_class">Join Class</button> */}
                            <Popup trigger={<button className="btn_join_class">Join Class</button>}>
                                <div>It will be active the day before Bootcamp.</div>
                            </Popup>
                        </div>
                    </div>
                    <div className="date_box">
                        <div className="date_cover">
                            <div className="date_box_top"></div>
                            <div className="date_box_content">
                                <h1 className="date_date_text">{sessionSecondDate}</h1>
                                <p className="date_month_text">March</p>
                            </div>
                        </div>
                        <p className="date_time_text">5pm - 7pm</p>
                    </div>
                </div>
                {/* <button className="btn_apply_for" onClick={onApplyCertificateHandler} >{isCertificateApplied ? "Applied for Certificate" : "Apply for Bootcamp Certificate"}</button> */}
                <Popup trigger={<button className="btn_apply_for" >{isCertificateApplied ? "Applied for Certificate" : "Apply for Bootcamp Certificate"}</button>} position="right center">
                    <div>It will be activated after Bootcamp is complete.</div>
                </Popup>
            </div>
            <div className="dashboard_hero_right_box">
                <h1 className="right_box_title">Introducing</h1>
                <h1 className="right_box_title">Young Innovators Program 2022 🎉🎉</h1>
                <img className="right_thumbnail" src={live_learning_img} onClick={handleVideoPopup} alt="youtube thumbnail" />
                <img className="video_play_img" src={play_img} onClick={handleVideoPopup} alt="video play img" />
                <div className="right_btns">
                    <button className="btn_apply_now" onClick={onYIPApplyHandler}>{isYIPApplied ? "Applied" : "Apply Now"}</button>
                    <button className="btn_know_more" onClick={onKnowMoreHandler}>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHero;