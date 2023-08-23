import React from "react";
import "./css/AboutUsInvest.css";
import { useHistory } from "react-router-dom";

const Invest = () => {

  const history = useHistory();

    function handleEvent() {
        history.push("/younginnovators");
    }

  return (
    <div className="aboutus-invest">
      <div className="invest-title">Take a step towards your dream journey</div>
      <div className="invest-desc">
        Explore future technologies and take a step towards your Passion and
        Career.
      </div>
      <div className="invest-enroll">
        <a href="/younginnovators">
          <button onClick={handleEvent}>YIP 2022</button>
        </a>
      </div>
    </div>
  );
};

export default Invest;
