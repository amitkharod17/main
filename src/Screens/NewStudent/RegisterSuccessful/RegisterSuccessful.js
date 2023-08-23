import React from 'react';
import "./RegisterSuccessful.css";
import NewLogoSvg from "../img/logo.svg";
import CheckedImg from "../img/checked.png";

import { useHistory } from "react-router-dom";

function RegisterSuccessful() {

  const history = useHistory();

  function handleClick() {
      history.push("/studentlogin");
  }

  return (
    <section className="registered_successful_section">
      <div className="new_logo">
        <img src={NewLogoSvg} onClick={handleClick} alt="Rancho Labs Logo" />
      </div>
      <div className="registered_successful_content">
        <div className="registered_successful_heading">
          <p>Dear, Rancho!</p>
          <h2>Your registration for 2 Days Bootcamp is successful. 
              Please find the credentials over email to access the dashboard.</h2>
        </div>
        <div className="registered_successful_container">
            <img src={CheckedImg} alt="Success icon" />
        </div>
        <form>
          <button class="btn btn-primary" onClick={handleClick}>LOGIN TO DASHBOARD</button>
        </form>
      </div>
    </section>
  )
}

export default RegisterSuccessful;
