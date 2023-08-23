import React, { useEffect } from 'react';
import "./StudentLogin.css";
import NewLogoSvg from "../img/logo.svg";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import queryString from 'query-string';

function StudentLogin() {

    const history = useHistory();
    const [isRegistered,setIsRegisterd] = React.useState("");
    const [mode,setMode] = React.useState('');

    const formHandler = async (e) => {
        e.preventDefault();

        const data = {
            emailId: e.target.emailId.value,
            password: e.target.password.value
        }

        try {
            const response = await axios.post("/api/bootcamp/login", data);
            // console.log(response);
            if(response.status === 200) {
                localStorage.setItem("userDetail", JSON.stringify(response.data));
                if(mode === 'olympiad') {
                    history.push('/bootcamp-verified');
                } else history.push("/bootcamp-dashboard");
            }
        } catch(err) {
            // console.log(err.response);
            if(err.response.status === 401) setIsRegisterd("*Invalid email / password");
            else if(err.response.status === 404) setIsRegisterd("*Email is not registered");
        }

    }

    const onClickHandler = () => {
        history.push("/");
    }

    const NoAccess = () => {
        const history = useHistory();
        history.push('/bootcamp-dashboard');
        return <></>
      }     


      useEffect(() => {
        let queries = queryString.parse(window.location.search);
        setMode(queries.mode);
      },[]);

    return (
        <>
        {   localStorage.getItem("userDetail") &&
          JSON.parse(localStorage.getItem("userDetail")).auth ? 
          <NoAccess />:
            <section className="new_student_login">
            <div className="new_logo">
                <img src={NewLogoSvg} alt="Rancho Labs Logo" onClick={onClickHandler} />
            </div>
            <div className="form_container">
                <div className="form_heading">
                    <p>WELCOME BACK, RANCHO!</p>
                    <h2>LOGIN TO YOUR ACCOUNT</h2>
                </div>
                <form method='POST' onSubmit={formHandler} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">E-mail</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="E-mail"
                            name="emailId" 
                            required/>
                        {isRegistered !== "" && <span className={"coupon_error"} >{isRegistered}</span>}
                    </div>
                    <div class="form-group">
                        <div className="label_box">
                            <label for="exampleInputPassword1">Password</label>
                            <label for="exampleForgotPassword1" className="forgot_pass">
                                <a href={mode === 'olympiad' ? `/student-forgot-password?mode=${mode}` : "/student-forgot-password" }>Forgot password?</a>
                            </label>
                        </div>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            name="password" 
                            required/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login Now</button>
                    <div className="not_registered">
                        <small>
                            Not registered yet?
                            <a href='/studentsignup'> Register <i class="fas fa-arrow-right fa-xs"></i> </a>
                        </small>
                    </div>
                </form>
            </div>
        </section>
        }
        </>
    )
}

export default StudentLogin;
