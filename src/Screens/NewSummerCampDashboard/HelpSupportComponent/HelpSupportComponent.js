import React from 'react';
import getGreeting from '../helpers/Greeting';
import './HelpSupportComponent.css';

import phone_call_icon from "../Assets/phone_call_icon.png";
import mail_icon from "../Assets/mail_icon.png";
import whatsapp_img from "../Assets/whatsapp_img.png";

function HelpSupportComponent({ todaysDate }) {
    return (
        <div className="main_left">
            {/* <div className="main_left_top d-flex justify-content-between">
                <h1 className="greeting_text">{getGreeting()}, Air Bender!</h1>
                <h1 className="schedule_text">{todaysDate}</h1>
            </div> */}
            <div className="support_content">
                <div className="support_item">
                    <img src={whatsapp_img} className="whatsapp_img" alt="whatsapp icon" />
                    <p className="support_item_text">Whatsapp us on +91 7427882787</p>
                </div>
                <div className="support_item">
                    <img src={mail_icon} className="mail_icon" alt="mail icon" />
                    <p className="support_item_text">Email us on info@rancholabs.com</p>
                </div>
                <div className="support_item">
                    <img src={phone_call_icon} className="phone call icon" alt="whatsapp icon" />
                    <p className="support_item_text">Call us on +91 7427800499</p>
                </div>
            </div>
        </div>
    )
}

export default HelpSupportComponent;