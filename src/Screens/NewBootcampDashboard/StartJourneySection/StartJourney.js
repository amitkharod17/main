import React from "react";
import Lottie from 'react-lottie';
import "./StartJourney.css";
import calendar from "../../Courses/img/calendar.png";
import roboGifData from "../../../Asssets/robo_gif.json";

const StartJourney = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: roboGifData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

  return (
    <>
      <div className="courses-growth" >
        <div className="course-growthbg-section"></div>
        {/* <img src={robot} className="courses-growth-robot" alt="robot icon" ></img> */}
        <div className="courses-growth-robot">
            {
              window.innerWidth > 600 ? <Lottie
                options={defaultOptions}
                height={400}
                width={500}
            />:
            <Lottie
                options={defaultOptions}
                height={300}
                width={250}
            />
          }
        </div>
        <div className="courses-growth-title">Your Journey Starts Here!</div>
        <div className="courses-growth-subtitle">
          Set your child up for success with Rancho Labs
        </div>
        <div className="freeclass-button">
          <div className="text-center">
            <button
              onClick={() =>
                (window.location.href = "/younginnovators")
              }
            >
              {/* <img src={calendar} alt="freeclass" /> */}
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartJourney;
