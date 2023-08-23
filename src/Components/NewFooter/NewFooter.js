import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./NewFooter.css";
// import Logo from "./../img/logo.png";
import ic_message from "./img/ic_message.png";
import ic_calling from "./img/ic_calling.png";
import calling_ic from "./img/calling_ic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import ArrowBack from "../../Asssets/Icon ionic-ios-arrow-round-forward@2x.png";
import facebook_img from "./img/facebook_img.png";
import email_img from "./img/email_img.png";
import instagram_img from "./img/instagram_img.png";

const Footer = () => {
  const { appName, isIPadMiniMobileView } = useSelector(
    (state) => state.appDetails
  );
  const { footerDisplay, footerTopDisplay } = useSelector(
    (state) => state.footer
  );
  const footerTop = useRef();
  const footerLinks = useRef();
  const footerBottom = useRef();

  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    const onresize = () => {
    //   if (
    //     window.screen.width <= 600
    //     // (isIPadMiniMobileView && window.screen.width <= 768)
    //   ) {
    //     footerTop.current.classList.add("mobile");
    //     footerLinks.current.classList.add("mobile");
    //     footerBottom.current.classList.add("mobile");
    //   } else {
    //     footerTop.current.classList.remove("mobile");
    //     footerLinks.current.classList.remove("mobile");
    //     footerBottom.current.classList.remove("mobile");
    //   }
    };
    window.addEventListener("resize", onresize);
    onresize();

    return () => {
      window.removeEventListener("resize", onresize);
    };
  }, [isIPadMiniMobileView]);

  return (
    <footer style={{ display: footerDisplay }}>
      <div
        className="footer-top"
        ref={footerTop}
        style={{ display: footerTopDisplay }}
      >
        <div className="flex">
          <div className="footer-subscribe">
            <img src={calling_ic} className="calling_ic" alt="calling pic" />
            <div>
                <h3 className="callUsAt" >CALL US AT</h3>
                <h3>+91 7427800499</h3>
            </div>
          </div>
          <div className="footer-subscribe">
            <img src={email_img} alt="calling pic" />
            <div>
                <h3 className="emailUsAt" >EMAIL US AT</h3>
                <h3>info@rancholabs.com</h3>
            </div>
            {/* <h3 className="emailUsAt">EMAIL US AT info@rancholabs.com</h3> */}
            {/* <h3>info@rancholabs.com</h3> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom" ref={footerBottom}>
        <p className="footer-bottom-copyright">
          @ Ranchovation Labs Pvt Ltd | Rancho Labs
        </p>
        <div className="footer-bottom-right-section">
          <div className="footer-bottom-icons">
            {/* <a href="https://twitter.com/RanchoLabs">
              <FontAwesomeIcon
                className="icon"
                color="#3CFAFF"
                icon={faTwitter}
              />
            </a> */}
            {/* <a href="https://www.linkedin.com/company/rancho-labs/">
              <FontAwesomeIcon
                className="icon"
                color="#3CFAFF"
                icon={faLinkedinIn}
              />{" "}
            </a>{" "} */}
            <a href="https://www.facebook.com/RanchoLabs">
              {/* <FontAwesomeIcon
                className="icon"
                color="#3CFAFF"
                icon={faFacebookF}
              />{" "} */}
              {/* <i class="fab fa-facebook-square fa-2x"></i> */}
              <img src={facebook_img} className="facebook_img" alt="facebook img" />
            </a>{" "}
            <a href="https://www.instagram.com/rancho.labs/">
              {/* <FontAwesomeIcon
                className="icon"
                color="#3CFAFF"
                icon={['fab','instagram']}
              /> */}
              {/* <i class="fab fa-instagram fa-2x"></i> */}
              <img src={instagram_img} className="instagram_img" alt="instagram img"/>
            </a>
          </div>
          {/* <div className="footer-bottom-dum"></div> */}
          {/* <p className="footer-bottom-center-align">Terms and Conditions</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
