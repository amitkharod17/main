import React from "react";
import './BeforeYouAsk.css'
import pic1 from '../../YoungInnovators/img/b41.png'
import pic2 from '../../YoungInnovators/img/b42.png'
import pic3 from '../../YoungInnovators/img/b43.png'
import pic from '../../YoungInnovators/img/b4.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function BeforeYouAsk() {
  return (
    <div className="byask-container">
      <h2 className="byask_title" >
        Before you <span>Ask!</span>
      </h2>
      <p className="byask_text" >
      Yes! You will be certified for this workshop on submission of your assignment.
      </p>
      <div className="ask_details">
        <div>
          <div>
            <LazyLoadImage src={pic1} alt="yip"/>
            <div>
              <h5 className="byask_detail_title" >Official and Verified</h5>
              <p className="point_text" >
              Build an innovation project based on your interests and validate your achievement with an industry verified certificate
              </p>
            </div>
          </div>
          <div>
            <LazyLoadImage src={pic2} alt="yip"/>
            <div>
              <h5 className="byask_detail_title" >Portfolio Building</h5>
              <p className="point_text" >
              Gain the latest knowledge and proficiency in information technology and add a feather of certified, new skill to your portfolio. 
              </p>
            </div>
          </div>
          <div>
            <LazyLoadImage src={pic3} alt="yip"/>
            <div>
              <h5 className="byask_detail_title" >Path Breaking</h5>
              <p className="point_text" >
              90% Ranchos report a positive career growth and an increase in creativity, logical thinking and problem solving. 
              </p>
            </div>
          </div>
        </div>
        <LazyLoadImage src={pic} alt="yip"/>
      </div>
    </div>
  );
}
