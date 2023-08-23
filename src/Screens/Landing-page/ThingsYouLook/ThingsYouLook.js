import React, { useState } from "react";
import "./ThingsYouLook.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rakhee from '../img/rakhee.png'
import toya from '../img/toya.jpg'
import ujjwal from '../img/ujjwal.jpg'
import karandeep from "../img/karandeep.jpg";
import sidarth from '../img/siddharth.jpg'
import abhipragya from '../img/abhipragya.jpg'
import ModalVideo from 'react-modal-video'
import play_img from '../img/play_img.png';
import arush_img from '../img/Arush.png';
import rishita_img from '../img/Rishita.jpeg';
import atreyi_img from '../img/Atreyi.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const ThingsHeading = () => {
    return (
        <>
            <h2>Things You Look</h2>
            <p>
                Our happy Students and Parents <br />
            </p>
        </>
    )
}

const VideoCard = ({ item, setOpen, setVideoId, isAutoPlay, setIsAutoPlay }) => {

    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId(item.videoId)
        setIsAutoPlay(false);
    }
    return (
        <div className="th-video-card" onClick={handleVideoPopup}>
            <img
                className="th_yt_thumbnail"
                src={item.thumbnailImg}
                alt='project video' />
            {/* <i class="fab fa-youtube"></i> */}
            <p className='project-name'>{item.name}</p>
            <p className='creator-class'>Class {item.class}th</p>
            <div>
                {/* <p className='project-name'>{item.name}</p> */}
                {/* <p className='creator-name'>class {item.class}th</p> */}
                {/* <p className='creator-class'>Class {item.class}</p> */}
                <img src={play_img} className="th_play_img" alt="play img" />
            </div>
        </div>
    );
};

const TextCard = ({ item }) => {
    return (
        <div className="text-card">
            <LazyLoadImage src={item.img} alt="yip" />
            <div>
                <i className="fas fa-quote-left" /> <hr />
            </div>
            <p>
                {item.testimonial}
            </p>
            <div>
                <hr />
                <i className="fas fa-quote-right" />
            </div>
            <div className="text-card-text">
                <p>- {item.name}</p>
                <p>{item.school}</p>
                <p>Batch at RL</p>
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

const responsive2 = {
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
        breakpoint: { max: 800, min: 600 },
        items: 2,
    },
    mobileSmall: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    }
};

const textTestimonials = [
    {
        id: 1,
        name: "Gurnoor Kapoor",
        school: "Class 7, Delhi Public School",
        testimonial: "The program was just too good and it helped me utilise my time in the best way. I acquired new learnings and also developed an app for my Father’s business that was used to book cabs for his transport business",
        img: rakhee
    },
    {
        id: 3,
        name: "Pratibha (Abhipragya’s mother) ",
        school: "Class 7, Seth Anandram Jaipuria Schoo",
        testimonial: "Abhi is so interested in the new concepts he learns every day. He is gratified with the instructor and the program. I have no complaints and am more than satisfied.",
        img: abhipragya
    },
    {
        id: 4,
        name: "Vandhana (Siddharth’s Mother)",
        school: "Class 7, St Thomas Residential School      ",
        testimonial: "I am happy to have enrolled my son in this course, as it has given a solid foundation to 'future proof' his skill sets. Hands-on projects in simulated environments helped students reinforce the concepts taught by instructors who were available round the clock.",
        img: sidarth
    },
    {
        id: 5,
        name: "Karandeep Singh      ",
        school: "Class 11, Dayawati Modi Academy",
        testimonial: "I liked the program as it has been very useful, educational and innovative for me. It brings the creativity out of the students. All this has been possible due to the wonderful guidance of the zealous instructors",
        img: karandeep
    },
    {
        id: 6,
        name: "Toya Goyal’s Mother      ",
        school: "Class 7, Delhi Public School Ghaziabad      ",
        testimonial: "Earlier Toya used computers only to play games. After taking up this course at Rancho Labs, she has become a computer loving person that gets excited to build her own games now! ",
        img: toya
    },
    {
        id: 7,
        name: "Ujjwal Mahapatra’s Father ",
        school: "Class 6, Epistemo Vikas Leadership School",
        testimonial: "I have personally witnessed all the faculty members being very  dedicated. The approachability to them is really amazing. The effort of the instructors really contributed to increasing my son’s learning curve. I  found the course both comprehensive and well structured.",
        img: ujjwal
    }
]

const videoTestimonials = [
    {
        id: 1,
        name: "Arush", //Deshpande
        class: "9",
        school: "Presidency School Bangalore South  ",
        // video: "https://www.youtube.com/embed/1jjTHCJd-vM",
        video: "https://www.youtube.com/watch?v=f5T0_7IflSo",
        thumbnailImg: arush_img,
        videoId: "f5T0_7IflSo"
    },
    // {
    //     id: 2,
    //     name: "Johann", //Job    
    //     class: "7",
    //     school: "Presidency School Bangalore South  ",
    //     video: "https://www.youtube.com/embed/d6vMVjKMNtw",
    //     videoId: "d6vMVjKMNtw",
    //     thumbnailImg: `https://img.youtube.com/vi/d6vMVjKMNtw/mqdefault.jpg`
    // },
    {
        id: 3,
        name: "Vaibhav", //Krishna
        class: "6",
        school: "Bala Vidya Mandir, Adyar      ",
        video: "https://www.youtube.com/embed/aPw6MkOG2R4",
        videoId: "aPw6MkOG2R4",
        thumbnailImg: `https://img.youtube.com/vi/aPw6MkOG2R4/mqdefault.jpg`
    },
    {
        id: 4,
        name: "Rishita", //Priyadarshini
        class: "6",
        school: "APS Delhi Cantt  ",
        // video: "https://www.youtube.com/embed/-BLMlCLsXYE",
        video: "https://www.youtube.com/embed/dgaFd77Oc_I",
        videoId: "dgaFd77Oc_I",
        thumbnailImg: rishita_img 
    },
    {
        id: 5,
        name: "Mrini",
        class: "8",
        video: "https://www.youtube.com/watch?v=6m6VsnJrRN0",
        videoId: "6m6VsnJrRN0",
        thumbnailImg: `https://img.youtube.com/vi/6m6VsnJrRN0/mqdefault.jpg` 
    },
    {
        id: 6,
        name: "Varda",
        class: "9",
        video: "https://www.youtube.com/watch?v=m1MvC-AVIck",
        videoId: "m1MvC-AVIck",
        thumbnailImg: `https://img.youtube.com/vi/m1MvC-AVIck/mqdefault.jpg` 
    },
    {
        id: 7,
        name: "Parth",
        class: "10",
        video: "https://www.youtube.com/watch?v=5k3EBV_mKL0",
        videoId: "5k3EBV_mKL0",
        thumbnailImg: `https://img.youtube.com/vi/5k3EBV_mKL0/mqdefault.jpg`
    },
    // {
    //     id: 8,
    //     name: "Akshay",
    //     class: "7",
    //     video: "https://www.youtube.com/watch?v=w6hu5MUBab4",
    //     videoId: "w6hu5MUBab4",
    //     thumbnailImg: `https://img.youtube.com/vi/w6hu5MUBab4/mqdefault.jpg`
    // },
    {
        id: 9,
        name: "Atreyi",
        class: "6",
        video: "https://youtu.be/mYhdNSCQ2Lk",
        videoId: "mYhdNSCQ2Lk",
        thumbnailImg: atreyi_img
    }
]


export default function ThingsYouLook() {
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const handleModalClose = () => {
        setOpen(false);
        setIsAutoPlay(true);
    }

    return (
        <div className="things-container">
            <ThingsHeading />
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
                className="video-testimonials-carousel"
            >
                {videoTestimonials.map((item, index) => (
                    <VideoCard key={index} item={item} isOpen={isOpen}
                        setOpen={setOpen} setVideoId={setVideoId}
                        isAutoPlay={isAutoPlay} setIsAutoPlay={setIsAutoPlay} />
                ))}
            </Carousel>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={window.innerWidth < 600 ? true : false}
                responsive={responsive2}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                className="video-testimonials-carousel"
            >
                {textTestimonials.map((item, index) => (
                    <TextCard key={index} item={item} />
                ))}
            </Carousel>
        </div>
    );
}
