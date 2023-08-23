import React from 'react';
import "./BootcampVerified.css";
import NewLogoSvg from "../NewStudent/img/logo.svg";
import CheckedImg from "../NewStudent/img/checked.png";

import { useHistory } from "react-router-dom";

function BootcampVerified() {

  const history = useHistory();

  const handleClick = () => {
    history.push("/team-dashboard?bootcamp=verified");
  }

  return (
    <section className="registered_successful_section">
      <div className="new_logo">
        <img src={NewLogoSvg} onClick={handleClick} alt="Rancho Labs Logo" />
      </div>
      <div className="registered_successful_content">
        <div className="registered_successful_heading">
          <p>Dear, Rancho!</p>
          <h2>Your Bootcamp login has been successfully verified. </h2>
        </div>
        <div className="registered_successful_container">
            <img src={CheckedImg} alt="Success icon" />
        </div>
        <form>
          <button class="btn btn-primary" onClick={handleClick}>Go TO TEAM DASHBOARD</button>
        </form>
      </div>
    </section>
  )
}

export default BootcampVerified;
