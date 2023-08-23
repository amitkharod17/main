import React from 'react';
import "./AskSection.css";
import Lottie from 'react-lottie';
import certificate_img from "../img/certificate_img.png";
import certificate_gif from "../../../Asssets/certificate_gif.json";

function AskSection() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: certificate_gif,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

  return (
    <div className="ask_section">
        <h1 className="ask_title">Before you <span className="ask_text">Ask!</span></h1>
        <p className="ask_subtitle">Yes! You will be certified for this workshop on submission of your assignment.</p>
        <div className="ask_gif_box">
            {/* <img className="ask_img" src={certificate_img} alt="" /> */}
            {
              window.innerWidth > 600 ? 
              <Lottie
                options={defaultOptions}
                height={400}
                width={500}
            />:
            <Lottie
                options={defaultOptions}
                height={200}
                width={300}
            />
            }
        </div>
    </div>
  )
}

export default AskSection;