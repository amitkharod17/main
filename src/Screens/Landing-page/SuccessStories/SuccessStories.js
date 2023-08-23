import React, { useState } from 'react';
import "./SuccessStories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import hand_img from "../img/hand_img.png";
import pranav_img from "../img/pranav_img.png";
import project_img from "../img/project_img_2.png";
import person_img from "../img/person_img.png";
import family_img from "../img/family_img_2.png";
import paper_img from "../img/paper_img_2.png";
import story_card_top from "../img/story_card_top.png";
import award_img from "../img/award_img.png";

import ModalVideo from 'react-modal-video'

const storiesText = [
    {
        id: 0,
        text: "Heartiest Congratulations to Master Siddharth Kumar Gopal for Pradhan Mantri Rashtriya Bal Puraskar 2020",
        img: award_img,
        img_2: paper_img,
        className_1: "award_img",
        className_2: "paper_img",
        className_text: "text_1",
        videoId: "ThnXoW4iRNg"
    },
    {
        id: 1,
        text: "Young Innovators Program Student - Batch of 2020",
        description: `The program by Rancho Labs has been a great learning experience for Siddharth. 
        The claases were well planned and executed and the instructors were available round the clock to clarify doubts. 
        Hands on projects in stimulated environments helped students to reinforce concepts learned every day. I am happy to have enrolled my son in this course, as it has given a solid foundation to 'future proof' his skill sets.
        `,
        name_1:"Vandhana",
        name_2:"Siddharth Mother",
        img: family_img,
        className_1: "family_img",
        className_2: "family_img",
        className_text: "text_2",
        videoId: "ThnXoW4iRNg"
    },
    {
        id: 2,
        text: `Kudos to Vibhav Agrawal for developing an innovative product 
                to help deaf people communicate effectively without any human aid.`,
        batch: "Young Innovator Batch of 2020",
        img: person_img,
        img_2: project_img,
        className_1: "person_img",
        className_2: "project_img",
        className_text: "text_3",
        videoId: "xBzQ_u2ggiQ"
    },
    {
        id: 3,
        text: "Kudos to Pranav Hegde for developing AutoSap - A Smart Irrigation System",
        batch: "Young Innovator Batch of 2021",
        img: pranav_img,
        img_2: hand_img,
        className_1: "pranav_img",
        className_2: "hand_img",
        className_text: "text_4",
        videoId: "Kj9ht4tpYNI"
    }
]


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

const StoriesCard = ({ index, item, setOpen, setVideoId }) => {
    const handleVideoPopup = () => {
        setOpen(true);
        setVideoId(item.videoId)
    }
    return (
        <div className="stories_card">
            <div className="sc_top">
                {
                    (index === 0 || index === 1) ? <img src={story_card_top} className="sc_top_img" alt="story header" />
                        : <div className="sc_batch">
                            <p className='batch_text' >{item.batch}</p>
                        </div>
                }
            </div>
            {
                (index === 0 || index === 1) ?            <div className="sc_middle" >
                <img src={item.img} className={item.className_1} alt="award" />
                {
                   (index !== 1) ? <img src={item.img_2} className={item.className_2} alt="paper cutout" />
                   : <div className="sc_middle_right">
                       <p className="description" >{item.description}</p>
                       <h4>~ {item.name_1} - {item.name_2}</h4>
                   </div>
                }{
                    (index===2 || index===3) && <i class="fab fa-youtube fa-3x"></i> 
                }
                
            </div>:           <div className="sc_middle" onClick={handleVideoPopup}>
                <img src={item.img} className={item.className_1} alt="award" />
                {
                   (index !== 1) ? <img src={item.img_2} className={item.className_2} alt="paper cutout" />
                   : <div className="sc_middle_right">
                       <p className="description" >{item.description}</p>
                       <h4>~ {item.name_1} - {item.name_2}</h4>
                   </div>
                }{
                    (index===2 || index===3) && <i class="fab fa-youtube fa-3x"></i> 
                }
                
            </div>
            }
            <div className="sc_bottom">
                <p className={item.className_text} >{item.text}</p>
            </div>
        </div>
    )
}

const SuccessStoriesHeading = () => {
    return (
        <>
            <h2>Success Stories of Rancho Labs Families</h2>
        </>
    )
}

function SuccessStories() {
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");

    const handleModalClose = () => {
        setOpen(false);
    }

    return (
        <section className="ss-container">
            <SuccessStoriesHeading />
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                arrows={true}
                className="video-testimonials-carousel"
            >
                {storiesText.map((item, index) => (
                    <StoriesCard index={index} item={item} setOpen={setOpen} setVideoId={setVideoId} />
                ))}
            </Carousel>
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
        </section>
    );
}

export default SuccessStories;
