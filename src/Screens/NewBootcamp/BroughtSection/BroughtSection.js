import React from 'react';
import "./BroughtSection.css";

import amazon_img from "../img/amazon_img.png";
import microsoft_img from "../img/microsoft_img.png";
import iit_delhi_img from "../img/iit_delhi_img.png";
import iit_bombay_img from "../img/iit_bombay_img.png";

function BroughtSection() {
  return (
    <div className="brought_section">
    <h1 className="brought_title">Brought to you by a <span className="brought_text">team</span> from</h1>
    <div className="brought_content">
      <div className="brought_badge">
        <img className="brought_logo iit_delhi_img" src={iit_delhi_img} alt="IIT Delhi Logo" />
        <h1>IIT DELHI</h1>
      </div>
      <div className="brought_badge">
        <img className="brought_logo iit_bombay_img" src={iit_bombay_img} alt="IIT Bombay Logo" />
        <h1>IIT BOMBAY</h1>
      </div>
      <div className="brought_badge">
        <img className="brought_logo microsoft_img" src={microsoft_img} alt="Microsoft Logo" />
        <h1>MICROSOFT</h1>
      </div>
      <div className="brought_badge">
        <img className="amazon_img" src={amazon_img} alt="Amazon Logo" />
      </div>
    </div>
  </div>
  )
}

export default BroughtSection;