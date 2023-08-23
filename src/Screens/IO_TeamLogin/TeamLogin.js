import React, { useState, useRef } from 'react';
import "./TeamLogin.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function TeamLogin() {
    const teamName = useRef();
    const teamPassword = useRef();
    const [teamNameError, setTeamNameError] = useState('');
    const [teamError, setTeamError] = useState('');
    const [teamPasswordError, setTeamPasswordError] = useState('');

    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = {
            teamName: teamName.current.value,
            password: teamPassword.current.value
        }

        if (teamName !== '' && teamPassword !== '') {
            try {
                const response = await axios.post('/api/olympiad/team/login', data);
                if (response.status === 200) {
                    localStorage.setItem("teamDetail", JSON.stringify(response.data));
                    history.push('/team-dashboard');
                }
            } catch (err) {
                if (err.response.status === 401) setTeamError("*Invalid email / password");
                else if (err.response.status === 404) setTeamError("*Team is not registered");
            }
        } else {
            if (teamName === '') setTeamNameError('*This field must not be empty.');
            else setTeamNameError('');

            if (teamPassword === '') setTeamPasswordError('*This field must not be empty.');
            else setTeamPasswordError('');
        }

    }

    const NoAccess = () => {
        // console.log(localStorage.getItem("teamDetail"));
        history.push('/team-dashboard');
        return <></>
    }

    return (
        <>
            {
                localStorage.getItem("teamDetail") &&
                JSON.parse(localStorage.getItem("teamDetail")).auth ? <NoAccess /> :
                <div className="io_team_login">
                    <div className="team_form">
                        <form method="POST" onSubmit={handleFormSubmit} >
                            <h1 className="team_login_title">Team Login</h1>
                            <div class="form-row team_name_box">
                                <div class="form-group col-md-6">
                                    <label className="form_label" htmlFor="name">Team Name</label>
                                    <input ref={teamName} type="text" className="form-control team_form_input" id="name" placeholder="" autoComplete='off' required />
                                    {teamNameError && <span className="input_error">{teamNameError}</span>}
                                    {teamError && <span className="input_error">{teamError}</span>}
                                </div>
                            </div>
                            <div class="form-row team_name_box">
                                <div class="form-group col-md-6">
                                    <label className="form_label" htmlFor="name">Password</label>
                                    <input ref={teamPassword} type="password" className="form-control team_form_input" id="password" placeholder="" autoComplete='off' required />
                                    {teamPasswordError && <span className="input_error">{teamPasswordError}</span>}
                                </div>
                            </div>
                            <div className="form_login_submit">
                                <button type="submit" class="btn btn-primary btn_team_login">Login</button>
                            </div>
                        </form>
                    </div>
                </div >
            }
        </>
    )
}

export default TeamLogin;