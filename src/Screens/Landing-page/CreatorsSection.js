import React, { useState, useEffect } from 'react';
import './css/CreatorsSection.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalVideo from 'react-modal-video';
import $ from 'jquery';

const creatorsData = [
    {
        id: 1,
        name: "Atreyi Kaul",
        class: "6",
        projectName: "Automatic Hand Sanitizer",
        videoUrl: "https://www.youtube.com/watch?v=CxOhcUvi824",
        videoId: "CxOhcUvi824"
    },
    {
        id: 2,
        name: "Pranav Hedge",
        class: "10",
        projectName: "Auto Sap",
        videoUrl: "https://www.youtube.com/watch?v=Kj9ht4tpYNI",
        videoId: "Kj9ht4tpYNI"
    },
    {
        id: 3,
        name: "Agrima Srivastava",
        class: "7",
        projectName: "Person Personality",
        videoUrl: "https://www.youtube.com/watch?v=MPj5Un2Jglo",
        videoId: "MPj5Un2Jglo"
    },
    {
        id: 4,
        name: "Darsh Goel",
        class: "6",
        projectName: "The Robber Game",
        videoUrl: "https://www.youtube.com/watch?v=zVl0HpTwbDM",
        videoId: "zVl0HpTwbDM"
    },
    {
        id: 5,
        name: "Takshil Agrawal",
        class: "8",
        projectName: "Automatic Barrier Gate",
        videoUrl: "https://youtu.be/R84UbNQTizE",
        videoId: "R84UbNQTizE"
    },
    {
        id: 6,
        name: "Jyotsna",
        class: "9",
        projectName: "Wifi Controller Robot",
        videoUrl: "https://youtu.be/VTvyAhSe0RE",
        videoId: "VTvyAhSe0RE"
    },
    {
        id: 7,
        name: "Arush Deshpande",
        class: "8",
        projectName: "T-Rex Runner",
        videoUrl: "https://youtu.be/wOSuNxD2ygs",
        videoId: "wOSuNxD2ygs"
    },
    {
        id: 8,
        name: "Shantanu",
        class: "7",
        projectName: "The Radar",
        videoUrl: "https://youtu.be/XvC3jC9WD_U",
        videoId: "XvC3jC9WD_U"
    },
    {
        id: 9,
        name: "Himagna",
        class: "7",
        projectName: "Object Avoiding Robot",
        videoUrl: "https://youtu.be/ueWJ_EGC23A",
        videoId: "ueWJ_EGC23A"
    },
    {
        id: 10,
        name: "Ishan Shrivastava",
        class: "9",
        projectName: "Game using LCD display",
        videoUrl: "https://youtu.be/6q1Awbo8v2U",
        videoId: "6q1Awbo8v2U"
    },
    {
        id: 11,
        name: "Viha",
        class: "6",
        projectName: "Social Distancing Project",
        videoUrl: "https://youtu.be/9YMFKDa4S18",
        videoId: "9YMFKDa4S18"
    },
];

const VideoCard = ({ item, setOpen, setVideoId, isAutoPlay, setIsAutoPlay }) => {

    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId(item.videoId)
        setIsAutoPlay(false);
    }
    return (
        <div className="cs-video-card" onClick={handleVideoPopup}>
            <img
                className="yt_thumbnail"
                src={`http://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                alt='project video' />
            <i class="fab fa-youtube"></i>
            <div>
                <p className='project-name'>
                    {item.projectName}
                </p>
                <p className='creator-name' >by {item.name}</p>
                <p className='creator-class' >class {item.class}th</p>
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
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1200, min: 800 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 800, min: 440 },
        items: 2,
    },
    mobileSmall: {
        breakpoint: { max: 440, min: 0 },
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
        <div className="creators-section">
            <div className="cs-title">
                Creators' Section
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
                autoPlaySpeed={2000}
                arrows={false}
                // customDot={<CustomDot />}
                className="video-testimonials-carousel"
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
