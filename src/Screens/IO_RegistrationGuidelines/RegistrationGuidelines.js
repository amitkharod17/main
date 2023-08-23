import React from 'react';
import "./RegistrationGuidelines.css";

function RegistrationGuidelines() {
    return (
        <div className="reg_guide_section">
            <div className="reg_guide_hero">
                <button className="btn_new_team">New Team Registration</button>
                <span className="or_text">OR</span>
                <button className="btn_join_team">Join a Team</button>
            </div>
            <div className="guidelines_box">
                <h1 className="guidelines_title">Registration Guidelines</h1>
                <div className="guidelines_content">
                    <div className="guidelines_item">
                        <h2 className="guidelines_content_title">General Guidelines:</h2>
                        <ol className="guidelines_points" >
                            <li className="guidelines_point" >Team should comprise of three students belonging to 6th-8th classes or 9-10th classes.</li>
                            <li className="guidelines_point" >Each Team will have a team leader and two teammates</li>
                            <li className="guidelines_point" >Each team will get a team login credentials which can be accessed by all team members to open team dashboard.</li>
                            <li className="guidelines_point" >Team registration status will be inactive initially. To make their registration status active, all team members will need to complete their registration.</li>
                            <li className="guidelines_point" >For team member to complete their registration they need to complete 2-days bootcamp by Rancho Labs and then later enter their bootcamp credentials on their team dashboard.</li>
                        </ol>
                    </div>
                    <div className="guidelines_item">
                        <h2 className="guidelines_content_title">For New Team Registration</h2>
                        <ol className="guidelines_points" >
                            <li className="guidelines_point" >For New team registration, team leader will need to fill his/her and their team mate details. </li>
                            <li className="guidelines_point" >On registering their team, they will get team login credentials on given email ids of team member.</li>
                        </ol>
                    </div>
                    <div className="guidelines_item">
                        <h2 className="guidelines_content_title">For Existing Team</h2>
                        <ol className="guidelines_points" >
                            <li className="guidelines_point" >For existing team, team-mates need to login through the credentials on email-id and complete their registration by entering 2-days bootcamp login credentials.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationGuidelines;