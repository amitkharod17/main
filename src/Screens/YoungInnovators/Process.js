import React from "react";
import "./css/Process.css";
import pic1 from "./img/process1.png";
import pic2 from "./img/process2.png";
import pic3 from "./img/process3.png";
import pic4 from "./img/process4.png";
import arrow from "./img/arrow.png";
import { useHistory } from "react-router-dom";

export default function Process() {

  const history = useHistory();

    function handleEvent() {
        // console.log("click");
        history.push("/younginnovators-form");
    }

  return (
    <div className="process-container">
      <h2>
        This is how your child can be an <span>Innovator</span> too!
      </h2>
      <p>
      We recruit a few students from all over India who undergo the following <b>4 step</b> process which tests logical, algorithmic thinking capability and zeal towards innovation.
      </p>
      <div className="p-container">
        <div className="first-p">
          <img src={pic1} alt="Register" />
          <p style={{ marginTop: "2%", fontWeight: "600" }}>Register</p>
          <p className="fp-1-text">
          Register by using the “Application Now” button below and fill the required details.
          </p>
        </div>
        <img src={arrow} alt="->" className="rightArrow" />
        <div className="first-p second-p">
          <div>
            <img src={pic2} alt="Register" />
            <p style={{ marginTop: "2%", fontWeight: "600" }}>Interview</p>
          </div>
          <p className="fp-1-text">
          Shortlisted students will be called for a brief interview to assess their skills and see whether the program suits them
          </p>
        </div>
      </div>
      <img src={arrow} className="downArrow" alt="->" />
      <div className="p-container p-container-2">
        <div className="first-p second-p third-p">
          <p className="fp-1-text">
          The finalists will be notified via email based on their performance in the interview 
          </p>
          <div>
            <img src={pic3} alt="Register" />
            <p style={{ marginTop: "2%", fontWeight: "600" }}>
              Result and Scholarship
            </p>
          </div>
        </div>
        <img src={arrow} alt="->" className="rightArrow" />
        <div className="first-p">
          <img src={pic4} alt="Register" />
          <p style={{ marginTop: "2%", fontWeight: "600" }}>
            Become a Young Innovator
          </p>
          <p className="fp-1-text">
          Students will be rewarded with scholarships based on their interview
          </p>
        </div>
      </div>
      <button onClick={handleEvent}>Start your Application Now!</button>
    </div>
  );
}
