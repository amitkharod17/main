import React, { useState } from "react";
import "./HowItWorks.css";
import red_ellipse from "../img/red_ellipse.png";
import whatsapp_icon from "../img/whatsapp_icon.png";
import whatsapp_chat_img from "../img/whatsapp_chat_img.png";
import blue_ellipse from "../img/blue_ellipse.png";
import network from "../img/network.png";
import red_rectangle from "../img/red_rectangle.png";
import electrical_circuit from "../img/electrical_circuit.png";
import yellow_rectangle from "../img/yellow_rectangle.png";
import coding from "../img/coding.png";
import online_study from "../img/online_study.png";
import light_blue_ellipse from "../img/light_blue_ellipse.png";
import question_img from "../img/question_img.png";
import customization from "../img/customization.png";
import lego from "../img/lego.png";
import webinar from "../img/webinar.png";
import play_icon from "../img/play_icon.png";
import logotypes_full from "../img/logotypes_full.png";
import live_img from "../img/live_img.png";
import play_img from "../img/play_img.png";
import teacher_img from "../img/teacher_img.png";
import live_learning_img from "../img/live_learning_img.png";
import project_based_img from "../img/project_based_img.png";
import teacher_text_img from "../img/teacher_text_img.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalVideo from 'react-modal-video'

import { LazyLoadImage } from 'react-lazy-load-image-component';


const storiesText = [
    {
        id: 0,
        text: "Interactive 1:1 & 1:3 Live Class",
        className_1: "award_img",
        className_2: "paper_img",
        className_text: "text_1"
    },
    {
        id: 1,
        text: "Project Based Active Learning",
        className_1: "family_img",
        className_2: "family_img",
        className_text: "text_2"
    },
    {
        id: 2,
        text: `Peer to Peer Learning`,
        batch: "Young Innovator Batch of 2020",
        className_1: "person_img",
        className_2: "project_img",
        className_text: "text_3"
    },
    {
        id: 3,
        text: "24*7 Doubt Support on Whatsapp",
        batch: "Young Innovator Batch of 2021",
        className_1: "pranav_img",
        className_2: "hand_img",
        className_text: "text_4"
    }
]

const StoriesCard = ({ index, item, setOpen, setVideoId }) => {
    // console.log(index);
    return (
        <div className="interactive_card">
            <div className="int_middle">
                {index === 0 && <InteractiveComponentForMobile setOpen={setOpen} setVideoId={setVideoId} />}
                {index === 1 && <ProjectBasedComponentForMobile setOpen={setOpen} setVideoId={setVideoId} />}
                {index === 2 && <PeerToPeerForMobile />}
                {index === 3 && <WhatsAppSupportForMobile />}
            </div>
            <div className="int_bottom">
                <p className={item.className_text} >{item.text}</p>
            </div>
        </div>
    )
}

const HowItWorksHeading = () => {
    return (
        <div className="work_heading">
            <h2>How it works?</h2>
            <h2>A modern approach to education</h2>
        </div>
    )
}

const InteractiveComponent = ({ setOpen, setVideoId }) => {
    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId("n8yI-8TF_Ag")
    }
    return (
        <>
            {/* <iframe
                src="https://www.youtube.com/embed/ThnXoW4iRNg"
                    title="Young Innovators Program"
                    allowFullScreen={true} /> */}
            <img
                className="yt_thumbnail"
                src={live_learning_img}
                // src={`http://img.youtube.com/vi/n8yI-8TF_Ag/mqdefault.jpg`}
                onClick={handleVideoPopup}
                alt='project video' />
            {/* <img className="red_ellipse" src={red_ellipse} alt="light blue ellipse" /> */}
            {/* <img className="online_study" src={online_study} alt="online study" /> */}
            <img className="teacher_img" src={teacher_img} alt="online study" />
            <img className="live_img" src={live_img} alt="Live video" />
            <img className="teacher_text" className="teacher_text_img" src={teacher_text_img} alt="teacher text" />
            <div className="teacher_bg"></div>
            <img className="play_icon" src={play_img} onClick={handleVideoPopup} alt="online study" />
        </>
    )
}

const InteractiveComponentForMobile = ({ setOpen, setVideoId }) => {
    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId("n8yI-8TF_Ag")
    }
    return (
        <>
            {/* <iframe
                src="https://www.youtube.com/embed/ThnXoW4iRNg"
                title="Young Innovators Program"
                allowFullScreen={true} /> */}
            <img
                className="mobile_yt_thumbnail"
                // src={`http://img.youtube.com/vi/n8yI-8TF_Ag/mqdefault.jpg`}
                src={live_learning_img}
                onClick={handleVideoPopup}
                alt='project video' />
            {/* <img className="int_red_ellipse" src={red_ellipse} alt="light blue ellipse" /> */}
            {/* <img className="int_online_study" src={online_study} alt="online study" /> */}
            {/* <img className="int_logotypes_full" src={logotypes_full} alt="online study" /> */}
            <img className="int_teacher_img" src={teacher_img} alt="online study" />
            <img className="int_live_img" src={live_img} alt="Live video" />
            {/* <img  className="int_teacher_text_img" src={teacher_text_img} alt="teacher text" /> */}
            <div className="int_teacher_bg">Teacher</div>
            <img className="play_icon" src={play_img} onClick={handleVideoPopup} alt="online study" />
        </>
    )
}

const ProjectBasedComponent = ({ setOpen, setVideoId }) => {
    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId("f1GoPZXBvGs")
    }
    return (
        <>
            {/* <iframe
                src="https://www.youtube.com/embed/ThnXoW4iRNg"
                title="Young Innovators Program"
                allowFullScreen={true} /> */}
            <img
                className="yt_thumbnail"
                // src={`http://img.youtube.com/vi/f1GoPZXBvGs/mqdefault.jpg`}
                src={project_based_img}
                onClick={handleVideoPopup}
                alt='project video' />
            {/* <img className="light_blue_ellipse" src={light_blue_ellipse} alt="light blue ellipse" /> */}
            {/* <img className="yellow_rectangle" src={yellow_rectangle} alt="yellow rectangle" />
            <img className="red_rectangle" src={red_rectangle} alt="red rectangle" />
            <img className="electrical_circuit" src={electrical_circuit} alt="electrical circuit" />
            <img className="coding" src={coding} alt="coding" />
            <span className="circuit_text" >Circuit Design</span>
            <span className="code_text" >CODE</span> */}
            <img className="logotypes_full" src={logotypes_full} alt="online study" />
            <img className="play_icon" src={play_img} onClick={handleVideoPopup} alt="online study" />
        </>
    )
}

const ProjectBasedComponentForMobile = ({ setOpen, setVideoId }) => {
    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId("f1GoPZXBvGs")
    }
    return (
        <>
            {/* <iframe
                src="https://www.youtube.com/embed/ThnXoW4iRNg"
                title="Young Innovators Program"
                allowFullScreen={true} /> */}
            <img
                className="mobile_yt_thumbnail"
                // src={`http://img.youtube.com/vi/f1GoPZXBvGs/mqdefault.jpg`}
                src={project_based_img}
                onClick={handleVideoPopup}
                alt='project video' />
            {/* <img className="int_light_blue_ellipse" src={light_blue_ellipse} alt="light blue ellipse" /> */}
            {/* <img className="int_yellow_rectangle" src={yellow_rectangle} alt="yellow rectangle" />
            <img className="int_red_rectangle" src={red_rectangle} alt="red rectangle" />
            <img className="int_electrical_circuit" src={electrical_circuit} alt="electrical circuit" />
            <img className="int_coding" src={coding} alt="coding" />
            <span className="int_circuit_text" >Circuit Design</span>
            <span className="int_code_text" >CODE</span> */}
            <img className="int_logotypes_full" src={logotypes_full} alt="online study" />
            <img className="play_icon" src={play_img} onClick={handleVideoPopup} alt="online study" />
        </>
    )
}

const PeerToPeer = () => {
    return (
        <>
            <img className="blue_ellipse" src={blue_ellipse} alt="blue ellipse" />
            <img className="network" src={network} alt="network" />
        </>
    )
}

const PeerToPeerForMobile = () => {
    return (
        <>
            <img className="int_blue_ellipse" src={blue_ellipse} alt="blue ellipse" />
            <img className="int_network" src={network} alt="network" />
        </>
    )
}

const WhatsAppSupport = () => {
    return (
        <>
            <div className="support">
                <img className="whatsapp_chat_img" src={whatsapp_chat_img} alt="whatsapp chat images" />
                <img className="whatsapp_icon" src={whatsapp_icon} alt="whatsapp icon" />
            </div>
        </>
    )
}

const WhatsAppSupportForMobile = () => {
    return (
        <>
            <div className="support">
                <img className="int_whatsapp_chat_img" src={whatsapp_chat_img} alt="whatsapp chat images" />
                <img className="int_whatsapp_icon" src={whatsapp_icon} alt="whatsapp icon" />
            </div>
        </>
    )
}

const ConditiondalComponent = ({ id, setOpen, setVideoId }) => {
    switch (id) {
        case 0:
            return <InteractiveComponent setOpen={setOpen} setVideoId={setVideoId} />
        case 1:
            return <ProjectBasedComponent setOpen={setOpen} setVideoId={setVideoId} />
        case 2:
            return <PeerToPeer />
        case 3:
            return <WhatsAppSupport />
        default:
            break;
    }
}

const HowDesktop = ({ setSelected, selected, classes, setOpen, setVideoId, prevSelected, setPrevSelected }) => {
    const handleChange = (id) => {
        setSelected(id);
        setPrevSelected(id);
    }
    const handleMouseEnter = (id) => {
        setSelected(id);
    }
    const handleMouseLeave = () => {
        setSelected(prevSelected);
    }
    return (
        <>
            <div className="how-cls-btns">
                {classes.map((cls, i) => (
                    <div key={cls.id} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave()} onClick={() => handleChange(i)} className={selected === i ? "how-cls-selected" : ""}>
                        <span className="img-bg" ><LazyLoadImage src={cls.img} alt={cls.name} /></span><p className={selected === i ? "onSelect" : ""}>{cls.name}</p>
                    </div>
                ))}
            </div>
            <div className="right_box">
                <ConditiondalComponent id={selected} setOpen={setOpen} setVideoId={setVideoId} />
            </div>
        </>
    )
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1200, min: 800 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 800, min: 600 },
        items: 1,
    },
    mobileSmall: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    }
};

const DesktopView = ({ classes, setSelected, selected, setOpen, setVideoId, prevSelected, setPrevSelected }) => {
    return (
        <div className="howitworks-container">
            <div className="how-heading">
                <h2>How it works?</h2>
                <h2>A modern approach to education</h2>
            </div>
            <div>
                <HowDesktop
                    classes={classes} 
                    setSelected={setSelected} 
                    selected={selected} 
                    setOpen={setOpen} 
                    setVideoId={setVideoId}
                    prevSelected={prevSelected}
                    setPrevSelected={setPrevSelected} />
            </div>
        </div>
    )
}

export default function HowItWorks() {
    const [selected, setSelected] = useState(0);
    const [prevSelected, setPrevSelected] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");

    const handleModalClose = () => {
        setOpen(false);
    }

    const classes = [
        {
            id: 0,
            name: "Interactive 1:1 & 1:3 Live Class",
            img: webinar,
        },
        {
            id: 1,
            name: "Project Based Active Learning",
            img: lego,
        },
        {
            id: 2,
            name: "Peer to Peer Learning",
            img: customization,
        },
        {
            id: 3,
            name: "24*7 Doubt Support on Whatsapp",
            img: question_img,
        },
    ]
    return (
        <>
            {(window.innerWidth > 900 ?
                <DesktopView
                    classes={classes}
                    setSelected={setSelected}
                    selected={selected}
                    setOpen={setOpen}
                    setVideoId={setVideoId}
                    prevSelected={prevSelected}
                    setPrevSelected={setPrevSelected} />
                : <section className="work_container">
                    <HowItWorksHeading />
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={2500}
                        arrows={false}
                        className="video-testimonials-carousel"
                    >
                        {storiesText.map((item, index) => (
                            <StoriesCard index={index} item={item} setOpen={setOpen} setVideoId={setVideoId} />
                        ))}
                    </Carousel>
                </section>)}
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
        </>
    );
}
