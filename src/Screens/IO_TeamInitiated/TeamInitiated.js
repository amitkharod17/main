import React from 'react';
import "./TeamInitiated.css";
import { useHistory } from 'react-router-dom';

function TeamInitiated({ registeredTeamName, registeredTeamPassword }) {

  const history = useHistory();

  const handleLoginBtn = () => {
    history.push('/team-login');
  }

  return (
    <div className="io_team_initiated">
        <h1 className="team_initiated_title">Team Registration Initiated</h1>
        <div className="team_login_details">
            <p className="details_item">Team Login Details</p>
            <p className="details_item">Username: {registeredTeamName}</p>
            <p className="details_item">Password: {registeredTeamPassword}</p>
        </div>
        <button className="btn_team_login" onClick={handleLoginBtn} >Team Login</button>
    </div>
  )
}

export default TeamInitiated;