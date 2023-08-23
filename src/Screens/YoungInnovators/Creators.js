import React from "react";
import "./css/Creators.css";
// import pic from "./img/person.png";
import pic3 from './img/RitizSainiInstructor.png'
import pic1 from './img/RohanYutthamInstructor.png'
import pic4 from './img/NazneenKhanInstructor.png'
import pic2 from './img/KaashikaPhotoInstructor.png'

export default function Creators() {
  return (
    <div className="people-container">
      <h4>Meet our Curriculum <span>Creators</span></h4>
      <div>
      <div>
          <div>
            <img src={pic1} alt="yip" />
          </div>
          <p className="people-name">Rohan Yuttam</p>
          <p className="people-expertise">Robotics and Automation Expert</p>
          <p className="people-clg">IIT Delhi</p>
        </div>
        <div>
          <div>
            <img src={pic2} alt="yip" />
          </div>
          <p className="people-name">Kaashika Prajaapat</p>
          <p className="people-expertise">Artificial Intelligence Expert</p>
          <p className="people-clg">IIT Delhi</p>
        </div>
        <div>
          <div>
            <img src={pic3} alt="yip" />
          </div>
          <p className="people-name">Ritiz Saini</p>
          <p className="people-expertise">Software and Application Expert</p>
          <p className="people-clg">IIT Bombay</p>
        </div>
        <div>
          <div>
            <img src={pic4} alt="yip" />
          </div>
          <p className="people-name">Nazneen Khan</p>
          <p className="people-expertise">Drones and Computer Vision Expert</p>
          <p className="people-clg">Drone Stark</p>
        </div>
      </div>
    </div>
  );
}
