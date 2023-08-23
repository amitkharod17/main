import React from "react";
import './css/BeforeYouAsk.css'
import pic1 from './img/b41.png'
import pic2 from './img/b42.png'
import pic3 from './img/b43.png'
import pic from './img/b4.png'

export default function BeforeYouAsk() {
  return (
    <div className="b4uask-container">
      <h2>
        Before you <span>Ask!</span>
      </h2>
      <p>
      Yes! You will be certified for this workshop on submission of your assignment.
      </p>
      <div className="ask-details">
        <div>
          <div>
            <img src={pic1} alt="yip"/>
            <div>
              <h5>Official and Verified</h5>
              <p>
              Build an innovation project based on your interests and validate your achievement with an industry verified certificate
              </p>
            </div>
          </div>
          <div>
            <img src={pic2} alt="yip"/>
            <div>
              <h5>Portfolio Building</h5>
              <p>
              Gain the latest knowledge and proficiency in information technology and add a feather of certified, new skill to your portfolio. 
              </p>
            </div>
          </div>
          <div>
            <img src={pic3} alt="yip"/>
            <div>
              <h5>Path Breaking</h5>
              <p>
              90% Ranchos report a positive career growth and an increase in creativity, logical thinking and problem solving. 
              </p>
            </div>
          </div>
        </div>
        <img src={pic} alt="yip"/>
      </div>
    </div>
  );
}
