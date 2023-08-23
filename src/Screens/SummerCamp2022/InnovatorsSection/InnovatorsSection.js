import React, { useState, useEffect } from 'react';
import './InnovatorsSection.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalVideo from 'react-modal-video';
import play_img from '../../Landing-page/img/play_img.png';
import semi_circle from '../../Landing-page/img/semi_circle.png';
import atreyi_pp from '../../Landing-page/img/virus_1.png';
import game_pp from '../../Landing-page/img/virus_2.png';
import virus_3 from '../../Landing-page/img/virus_3.png';
import virus_4 from '../../Landing-page/img/virus_4.png';
import virus_5 from '../../Landing-page/img/virus_5.png';
import abel_pp from '../../Landing-page/img/abel_pp.png';
import agrima_pp from '../../Landing-page/img/agrima_pp.png';
import anshuman_pp from '../../Landing-page/img/anshuman_pp.png';
import darsh_pp from '../../Landing-page/img/darsh_pp.png';
import himagna_pp from '../../Landing-page/img/himagna_pp.png';
import ishan_pp from '../../Landing-page/img/ishan_pp.png';
import jyotsna_pp from '../../Landing-page/img/jyotsna_pp.png';
import robot_pp from '../../Landing-page/img/robot_pp.png';
import shantanu_pp from '../../Landing-page/img/shantanu_pp.png';
import takshil_pp from '../../Landing-page/img/takshil_pp.png';
import tanvi_pp from '../../Landing-page/img/tanvi_pp.png';
import ankesh_pp from '../../Landing-page/img/ankesh_pp.png';

import abel_img from '../../Landing-page/img/Abel.png';
import agrima_img from '../../Landing-page/img/Agrima.png';
import anshuman_img from '../../Landing-page/img/Anshuman.png';
import arush_img from '../../Landing-page/img/Arush.png';
import atreyi_img from '../../Landing-page/img/Atreyi.png';
import himagna_img from '../../Landing-page/img/Himagna.png';
import jyotsna_img from '../../Landing-page/img/Jyotsna.png';
import pranav_img from '../../Landing-page/img/Pranav.png';
import shantanu_img from '../../Landing-page/img/Shantanu.png';
import takshil_img from '../../Landing-page/img/Takshil.png';
import viha_img from '../../Landing-page/img/Viha.png';
import tanvi_img from '../../Landing-page/img/Tanvi.jpeg';
import ankesh_img from '../../Landing-page/img/Ankesh.jpeg';
import ishan_img from '../../Landing-page/img/Ishan.jpeg';

const creatorsData = [
    {
        id: 1,
        name: "Atreyi", //Kaul
        class: "6",
        projectName: "Automatic Hand Sanitizer",
        videoUrl: "https://www.youtube.com/watch?v=CxOhcUvi824",
        videoId: "CxOhcUvi824",
        virusImg: atreyi_pp, 
        thumbnailImg: atreyi_img
    },
    {
        id: 2,
        name: "Pranav", //Hedge
        class: "10",
        projectName: "Auto Sap",
        videoUrl: "https://www.youtube.com/watch?v=Kj9ht4tpYNI",
        videoId: "Kj9ht4tpYNI",
        virusImg: game_pp,
        thumbnailImg: pranav_img
    },
    {
        id: 3,
        name: "Agrima", //Srivastava
        class: "7",
        projectName: "Person Personality",
        videoUrl: "https://www.youtube.com/watch?v=MPj5Un2Jglo",
        videoId: "MPj5Un2Jglo",
        virusImg: virus_3,
        thumbnailImg: agrima_img
    },
    // {
    //     id: 4,
    //     name: "Darsh", //Goel
    //     class: "6",
    //     projectName: "The Robber Game",
    //     videoUrl: "https://www.youtube.com/watch?v=zVl0HpTwbDM",
    //     videoId: "zVl0HpTwbDM",
    //     virusImg: game_pp,
    //     thumbnailImg: `https://img.youtube.com/vi/zVl0HpTwbDM/mqdefault.jpg`
    // },
    {
        id: 5,
        name: "Takshil", //Agrawal
        class: "8",
        projectName: "Automatic Barrier Gate",
        videoUrl: "https://youtu.be/R84UbNQTizE",
        videoId: "R84UbNQTizE",
        virusImg: takshil_pp,
        thumbnailImg: takshil_img
    },
    {
        id: 6,
        name: "Jyotsna",
        class: "9",
        projectName: "Wifi Controller Robot",
        videoUrl: "https://youtu.be/VTvyAhSe0RE",
        videoId: "VTvyAhSe0RE",
        virusImg: jyotsna_pp,
        thumbnailImg: jyotsna_img
    },
    {
        id: 7,
        name: "Arush ", //Deshpande
        class: "8",
        projectName: "T-Rex Runner",
        videoUrl: "https://youtu.be/wOSuNxD2ygs",
        videoId: "wOSuNxD2ygs",
        virusImg: game_pp,
        thumbnailImg: arush_img
    },
    {
        id: 8,
        name: "Shantanu",
        class: "7",
        projectName: "The Radar",
        videoUrl: "https://youtu.be/XvC3jC9WD_U",
        videoId: "XvC3jC9WD_U",
        virusImg: shantanu_pp,
        thumbnailImg: shantanu_img
    },
    {
        id: 9,
        name: "Himagna",
        class: "7",
        projectName: "Object Avoiding Robot",
        videoUrl: "https://youtu.be/ueWJ_EGC23A",
        videoId: "ueWJ_EGC23A",
        virusImg: himagna_pp,
        thumbnailImg: himagna_img
    },
    // {
    //     id: 10,
    //     name: "Ishan ", //Shrivastava
    //     class: "9",
    //     projectName: "Game using LCD display",
    //     videoUrl: "https://youtu.be/6q1Awbo8v2U",
    //     videoId: "6q1Awbo8v2U",
    //     virusImg: ishan_pp,
    //     thumbnailImg: ishan_img
    // },
    {
        id: 11,
        name: "Viha",
        class: "6",
        projectName: "Social Distancing Project",
        videoUrl: "https://youtu.be/9YMFKDa4S18",
        videoId: "9YMFKDa4S18",
        virusImg: virus_3,
        thumbnailImg: viha_img
    },
    {
        id: 12,
        name: 'Anshuman',
        class:"9",
        projectName: "Dr Vs Pathogen Game",
        videoUrl: "https://youtu.be/_ynsA9yHj8E",
        videoId: "_ynsA9yHj8E",
        virusImg: anshuman_pp,
        thumbnailImg: anshuman_img
    },
    // {
    //     id: 13,
    //     name: 'Ankesh',
    //     class:"9",
    //     projectName: "Vocab Builder",
    //     videoUrl: "https://youtu.be/9i1GkUDT68Q",
    //     videoId: "9i1GkUDT68Q",
    //     virusImg: ankesh_pp,
    //     thumbnailImg: ankesh_img
    // },
    {
        id: 14,
        name: 'Abel',
        class:"8",
        projectName: "Xhunter Game",
        videoUrl: "https://youtu.be/qA01F0FnHoU",
        videoId: "qA01F0FnHoU",
        virusImg: abel_pp,
        thumbnailImg: abel_img
    },
    // {
    //     id: 15,
    //     name: 'Tanvi',
    //     class:"8",
    //     projectName: "Virtual Library",
    //     videoUrl: "https://youtu.be/btWmQ0tLMnY",
    //     videoId: "btWmQ0tLMnY",
    //     virusImg: tanvi_pp,
    //     thumbnailImg: tanvi_img
    // }
];

const VideoCard = ({ item, setOpen, setVideoId, isAutoPlay, setIsAutoPlay }) => {

    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId(item.videoId)
        setIsAutoPlay(false);
    }
    return (
        <div className="cs-video-card video_bg" onClick={handleVideoPopup}>
            <img
                className="cs_yt_thumbnail"
                src={item.thumbnailImg}
                alt='project video' />
            {/* <i class="fab fa-youtube"></i> */}
            <img src={play_img} className="play_img" alt="play button"/>
            <img src={semi_circle} className="semi_circle" alt="semi circle" />
            <img src={item.virusImg} className="virus_1" alt="virus img" />
            <p className='creator-name' >{item.name}</p>
            <p className='creator-class' >Class {item.class}th</p>
            <div>
                <p className='project-name'>
                    {item.projectName}
                </p>
            </div>
        </div>
    );
};


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1200, min: 800 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 800, min: 600 },
        items: 2,
    },
    mobileSmall: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    },
};

const CustomDot = ({ onClick, ...rest }) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    // console.log(index, active, currentSlide);
    return (
        <button
      className={active ? "active btn-dot" : "inactive btn-dot"}
      onClick={() => onClick()}
    >
      {index+1}
    </button>
    );
};

// $(window).on('load', function () {  
//     let dots = $('.btn-dot');
//     for (let key in dots) {
//         if (key === '0' || key === '1' || key === '2') continue;
//         dots[key].style.display = 'none';
//         if(key === '10') break;
//     }
//     // console.log(dots);
// });

function CreatorsSection() {
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const handleModalClose = () => {
        setOpen(false);
        setIsAutoPlay(true);
    }

    return (
        <div className="innovators_section sc22_innovators_section">
            <div className=" sc22_inno_section_title">
                Young Innovators at <span className="sc22_rl_text">Rancho Labs</span>
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
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={window.innerWidth < 600 ? true : false}
                responsive={responsive}
                infinite={true}
                autoPlay={isAutoPlay}
                autoPlaySpeed={1300}
                arrows={false}
                // customDot={<CustomDot />}
                className="video-testimonials-carousel"
                // customTransition='linear 350ms'
            >
                {creatorsData.map((item, index) => (
                    <VideoCard key={index} item={item} isOpen={isOpen}
                        setOpen={setOpen} setVideoId={setVideoId}
                        isAutoPlay={isAutoPlay} setIsAutoPlay={setIsAutoPlay} />
                ))}
            </Carousel>
        </div>
    );
}

export default CreatorsSection;
