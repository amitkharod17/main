import React from 'react';
import "./TeamCompleteRegistration.css";
import { useHistory } from 'react-router-dom';

const Activity = ({ btnText, activityText }) => {
    const history = useHistory();

    const handleOnClick = (type) => {
        if (type === 'login') history.push(`/studentlogin?mode=olympiad`);
        else if (type === 'register') history.push(`/studentsignup`);
    }

    return (
        <div className="activity_box">
            <h2 className="activity_text">{activityText}</h2>
            <button className="btn_bootcamp_activity" onClick={btnText === 'Login' ? () => handleOnClick('login') : () => handleOnClick('register')} >Bootcamp {btnText}</button>
        </div>
    )
}

const LoginWithLaptop = () => {
    return (
      <>
        <div
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            padding: "20px"
          }} >
          <h2 className="text-dark">Please login from the laptop to access the dashboard </h2>
        </div>
      </>
    )
  }

function TeamCompleteRegistration() {

    const history = useHistory();

    const handleWhyClick = () => {
        history.push('/bootcamp');
    }

    const NoAccess = () => {
        history.push('/team-login');
        return <></>
    }

    return (
        <>
            {
                window.innerWidth < 900 ? <LoginWithLaptop /> :
                localStorage.getItem("teamDetail") &&
                JSON.parse(localStorage.getItem("teamDetail")).auth ?
                <div className="io_complete_registration">
                    <div className="complete_registration_header">
                        <h2 className="header_text">To complete the registration participation
                            must have completed 2 Days Bootcamp</h2>
                    </div>
                    <div className="complete_content_box">
                        <Activity
                            btnText="Login"
                            activityText="If you have already completed, proceed ahead to login with your bootcamp credentials to validate your registration" />
                        <Activity
                            btnText="Registration"
                            activityText="If you not yet registered for bootcamp, proceed ahead to register" />
                    </div>
                    <div className="why_bootcamp" onClick={handleWhyClick} >
                        <p className="why_bootcamp_text">Why Bootcamp is required?</p>
                    </div>
                </div> :
                <NoAccess />
            }
        </>
    )
}

export default TeamCompleteRegistration;

