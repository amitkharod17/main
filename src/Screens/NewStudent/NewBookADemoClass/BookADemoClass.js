import React, { useState } from 'react';
import "./BookADemoClass.css";
import NewLogoSvg from "../img/logo.svg";
import MicrosoftIcon from "../img/microsoft_icon.png";
import IITDelhiIcon from "../img/iit_delhi_icon.png";
import IITBombayIcon from "../img/iit_bombay_icon.png";
import AmazonIcon from "../img/amazon_icon.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

function validateEmail(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email) === false) {
    return false;
  } else return true;
}

function BookADemoClass() {

  const [errors, setErrors] = useState({ data: [] });
  const [nameError,setNameError] = useState("");
  const [phoneError,setPhoneError] = useState("");
  const [emailError,setEmailError] = useState("");

  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const date = new Date();
    let currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
 
    const data = {  
      parentName: e.target.parentName.value,
      phoneNumber: e.target.phoneNumber.value,
      emailId: e.target.emailId.value,
      date: currentDate,
      time: currentTime
    }

    // console.log(data);
    if( data.parentName !== "" && 
        data.phoneNumber !==""  &&
        data.emailId !=="" &&   
        data.phoneNumber.length >= 10 &&
        validateEmail(data.emailId)
    ) {
      try {
        const response = await axios.post('/api/bookafreeclass/form', data);
        if (response.data.success) {
          history.push('/democlass-form-submitted');
        }
      } catch (err) {
        setErrors({ data: err.response.data.errors });
        // window.scrollTo(0, 0);
        // console.log(err.response.data.errors);
      }
    } else {
        if(data.parentName==="") {
          setNameError("*This field must not be empty.");
        } else {
          setNameError("");
        }
        if(data.phoneNumber==="") {
          setPhoneError("*This field must not be empty." );
        } else if(data.phoneNumber.length < 10) {
          setPhoneError("*Mobile number should contains 10 digits");
        } else {
          setPhoneError("");
        }
        if(data.emailId==="") {
          setEmailError("*This field must not be empty.");
        } else if(!validateEmail(data.emailId)) {
          setEmailError("*Please enter a valid email address");
        } else {
          setEmailError("");
        }
    }
  };

  return (
    <section className="book_a_demo_class">
      <div className="new_logo">
        <img src={NewLogoSvg} onClick={handleClick} alt="Rancho Labs Logo" />
      </div>
      <div className="form_container">
        <div className="form_heading">
          <p>WELCOME TO RANCHO LABS!</p>
          <h2>BOOK A DEMO CLASS</h2>
        </div>
        <form method='POST' onSubmit={onSubmitForm}>
          <div class="form-group">
            <label htmlFor="parentName">Parent Name</label>
            <input type="text" class="form-control" name="parentName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Parent Name" required autoComplete='off' />
            { nameError !== "" && <span className="error">{nameError}</span> }
            {/* {
              errors.data.map((error) => {
                if (error.param === "parentName") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            } */}
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Phone Number</label>
            <input type="text" class="form-control" name="phoneNumber" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" required autoComplete='off' />
            { phoneError !== "" && <span className="error">{phoneError}</span> }
            {/* {
              errors.data.map((error) => {
                if (error.param === "phoneNumber") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            } */}
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Email Id</label>
            <input type="email" name="emailId" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Id" required autoComplete='off' />
            { emailError !== "" && <span className="error">{emailError}</span> }
            {/* {
              errors.data.map((error) => {
                if (error.param === "emailId") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            } */}
          </div>
          <button type="submit" class="btn btn-primary">SCHEDULE DEMO CLASS</button>
        </form>
      </div>
      <div className="team_container">
        <h2>BROUGHT TO YOU BY A TEAM FROM</h2>
        <div className="team_content">
          <div className="team_badge">
            <img className="team_logo iit_delhi_icon" src={IITDelhiIcon} alt="IIT Delhi Logo" />
            <h1>IIT DELHI</h1>
          </div>
          <div className="team_badge">
            <img className="team_logo iit_bombay_icon" src={IITBombayIcon} alt="IIT Bombay Logo" />
            <h1>IIT BOMBAY</h1>
          </div>
          <div className="team_badge">
            <img className="team_logo microsoft_logo" src={MicrosoftIcon} alt="Microsoft Logo" />
            <h1>MICROSOFT</h1>
          </div>
          <div className="team_badge">
            <img className="amazon_icon" src={AmazonIcon} alt="Amazon Logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookADemoClass;
