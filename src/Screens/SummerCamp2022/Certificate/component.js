import React from "react";
import "./component.css";
import { useHistory } from "react-router-dom";
import cert2 from "./sc22_cert_img_2.png";
import bgicon from "./bgicon.svg";

const Component = (props) => {

  const history = useHistory();

  const handleApplyNow = () => {
    history.push("/summercamp2022-apply-form");
  };

  return (
    <div>
      <img src={bgicon} alt="" className="bgicon" />
      <div className="container my-5 py-5 text-center">
        <div className="heading my-5">Certificate</div>
        <div className="container w-100">
          <div className="text-certificate my-5 mx-0 mx-lg-5">
            You will be certified for the program by <b>Rancho Labs</b> and{" "}
            <b>IIT Delhi's Technology Innovation Hub on Cobotics</b> (IHFC).
          </div>
          <div className="row">
            <div className="col-0 col-lg-1 col-xl-2"></div>
            <div className="col-12 col-lg-10 col-xl-8">
              <img src={cert2} alt="" className="w-100" />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleApplyNow}
            type="button"
            class="mt-5 px-5 py-3 btn cta-button"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
