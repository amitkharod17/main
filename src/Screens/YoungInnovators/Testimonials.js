import React, { useState } from "react";
import "./css/Testimonials.css";
import pic from "./img/person.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rakhee from './img/rakhee.png'
import toya from './img/toya.jpeg'
import ujjwal from './img/ujjwal.jpeg'
import karandeep from "./img/karandeep.jpeg";
import sidarth from './img/siddharth.jpg'
import abhipragya from './img/abhipragya.jpeg'
import ModalVideo from 'react-modal-video';

const VideoCard = ({ item, setOpen, setVideoId, isAutoPlay, setIsAutoPlay }) => {

  const handleVideoPopup = () => {
    setOpen(true);
    setVideoId(item.videoID)
    setIsAutoPlay(false);
  }

  return (
    <div className="video-card"  onClick={handleVideoPopup}>
      {/* <iframe
        width="420"
        height="315"
        src={item.video}
        title="yip"
        allowFullScreen={true}
      /> */}
      <img
        className="yt_thumbnail"
        alt="video thumbnail"
        src={`http://img.youtube.com/vi/${item.videoID}/mqdefault.jpg`}/>
        <i className="fab fa-youtube"></i>
      <div>
        <p style={{fontWeight:"500",fontSize:"medium"}}>
          {item.name}
        </p>
        <p style={{ fontSize: "0.7rem" }}>{item.school}</p>
      </div>
    </div>
  );
};

const TextCard = ({item}) => {
  return (
    <div className="text-card">
      <img src={item.img} alt="yip" />
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
      id:1,
      name:"Gurnoor Kapoor",
      school:"Class 7, Delhi Public School",
      testimonial:"The program was just too good and it helped me utilise my time in the best way. I acquired new learnings and also developed an app for my Father’s business that was used to book cabs for his transport business",
      img:rakhee
    },
    {
      id:3,
      name:"Pratibha (Abhipragya’s mother) ",
      school:"Class 7, Seth Anandram Jaipuria Schoo",
      testimonial:"Abhi is so interested in the new concepts he learns every day. He is gratified with the instructor and the program. I have no complaints and am more than satisfied.",
      img:abhipragya
    },
    {
      id:4,
      name:"Vandhana (Siddharth’s Mother)",
      school:"Class 7, St Thomas Residential School      ",
      testimonial:"I am happy to have enrolled my son in this course, as it has given a solid foundation to 'future proof' his skill sets. Hands-on projects in simulated environments helped students reinforce the concepts taught by instructors who were available round the clock.",
      img:sidarth
    },
    {
      id:5,
      name:"Karandeep Singh      ",
      school:"Class 11, Dayawati Modi Academy",
      testimonial:"I liked the program as it has been very useful, educational and innovative for me. It brings the creativity out of the students. All this has been possible due to the wonderful guidance of the zealous instructors",
      img:karandeep
    },
    {
      id:6,
      name:"Toya Goyal’s Mother      ",
      school:"Class 7, Delhi Public School Ghaziabad      ",
      testimonial:"Earlier Toya used computers only to play games. After taking up this course at Rancho Labs, she has become a computer loving person that gets excited to build her own games now! ",
      img:toya
    },
    {
      id:7,
      name:"Ujjwal Mahapatra’s Father ",
      school:"Class 6, Epistemo Vikas Leadership School",
      testimonial:"I have personally witnessed all the faculty members being very  dedicated. The approachability to them is really amazing. The effort of the instructors really contributed to increasing my son’s learning curve. I  found the course both comprehensive and well structured.",
      img:ujjwal
    }
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: "Arush Deshpande",
      school: "Class 9, Presidency School Bangalore South    ",
      video: "https://www.youtube.com/embed/1jjTHCJd-vM",
      videoID: "1jjTHCJd-vM"
    },
    {
      id: 2,
      name: "Johann Job    ",
      school: "Class 7, Presidency School Bangalore South    ",
      video: "https://www.youtube.com/embed/d6vMVjKMNtw",
      videoID: "d6vMVjKMNtw"
    },
    {
      id: 3,
      name: "Vaibhav Krishna",
      school: "Class 6, Bala Vidya Mandir, Adyar",
      video: "https://www.youtube.com/embed/aPw6MkOG2R4",
      videoID: "aPw6MkOG2R4"
    },
    {
      id: 4,
      name: "Rishita Priyadarshini",
      school: "Class 6, APS Delhi Cantt",
      video: "https://www.youtube.com/embed/-BLMlCLsXYE",
      videoID: "-BLMlCLsXYE"
    }
  ]


export default function Testimonials() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isAutoPlay,setIsAutoPlay] = useState(true);

  const handleModalClose = () => {
    setOpen(false);
    setIsAutoPlay(true);
  }

  return (
    <div className="testimonial-container">
      <h2>
        You may not <span>believe</span> us, but you can believe them...
      </h2>
      <ModalVideo
        className='video-popup'
        channel='youtube' 
        autoplay isOpen={isOpen} 
        videoId={videoId} 
        aria={{
          "openMessage":"Video is out",
          "dismissBtnMessage":"x"
        }}
        onClose={() => handleModalClose()} />
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={isAutoPlay}
        autoPlaySpeed={2000}
        arrows={window.innerWidth < 600 ? false : true}
        className="video-testimonials-carousel"
      >
        {videoTestimonials.map((item,index)=>(
          <VideoCard key={index} item={item} isOpen={isOpen} 
          setOpen={setOpen} setVideoId={setVideoId} 
          isAutoPlay={isAutoPlay} setIsAutoPlay={setIsAutoPlay} />
        ))}
      </Carousel>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive2}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        arrows={window.innerWidth < 600 ? false : true}
        className="video-testimonials-carousel"
      >
        {textTestimonials.map((item,index) => (
          <TextCard key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
