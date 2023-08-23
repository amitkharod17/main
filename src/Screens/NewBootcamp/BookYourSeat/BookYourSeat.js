import React from 'react';
import "./BookYourSeat.css";

import bys_bg_mobile from "../img/bys_bg_mobile.png";

import { useHistory } from "react-router-dom";

function BookYourSeat({ redirectLink }) {
    const history = useHistory();

    const onClickHandler = () => {
        history.push( redirectLink ? redirectLink : "/studentsignup");
    }

    return (
        <div className="bys_section">
            <div className="bys_bg">
                <div className="bys_content">
                    <h1 className='bys_title' >Book your seat today!</h1>
                    <button onClick={onClickHandler} className='bys_btn_register' >Register Now</button>
                </div>
            </div>
            { window.innerWidth <= 600 && <img className="bys_bg_mobile_img" src={bys_bg_mobile} alt="book your seat background" /> }
        </div>
    )
}

export default BookYourSeat;