import React, { useState, useEffect } from 'react';
import "./TeamDashboard.css";

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TeamMember = ({ title, name, memberClass, phoneNumber, schoolName, isRegisteredForBootcamp }) => {

    const history = useHistory();
    const handleCompleteRegistration = () => {
        history.push('/team-complete-registration');
    }

    return (
        <div className="team_member">
            <h2 className="member_heading">{title}</h2>
            <div className="member_details">
                <p className="detail_item">Name: {name}</p>
                <p className="detail_item">Class: {memberClass}</p>
                <p className="detail_item">School: {schoolName}</p>
                <p className="detail_item">Phone Number: +{phoneNumber}</p>
            </div>
            {
                isRegisteredForBootcamp ?
                    <Popup trigger={<button className="btn_complete_registration completed_btn" onClick={""} >Completed</button>} position="top center">
                         <div>You have completed your registration.</div>
                    </Popup> :
                    <button className="btn_complete_registration" onClick={handleCompleteRegistration} >Complete Registration</button>
            }
        </div>
    )
}

function TeamDashboard() {

    const history = useHistory();

    const [teamName, setTeamName] = useState('');
    const [teamStatus, setTeamStatus] = useState('');
    const [teamNumber, setTeamNumber] = useState('');

    const [leaderName, setLeaderName] = useState('');
    const [leaderClass, setLeaderClass] = useState('');
    const [leaderSchool, setLeaderSchool] = useState('');
    const [leaderPhoneNumber, setLeaderPhoneNumber] = useState('');

    const [member1Name, setMember1Name] = useState('');
    const [member1Class, setMember1Class] = useState('');
    const [member1School, setMember1School] = useState('');
    const [member1PhoneNumber, setMember1PhoneNumber] = useState('');

    const [member2Name, setMember2Name] = useState('');
    const [member2Class, setMember2Class] = useState('');
    const [member2School, setMember2School] = useState('');
    const [member2PhoneNumber, setMember2PhoneNumber] = useState('');

    const [isLeaderRegisteredForBootcamp, setLeaderRegisteredForBootcamp] = useState(false);
    const [isMember1RegisteredForBootcamp, setMember1RegisteredForBootcamp] = useState(false);
    const [isMember2RegisteredForBootcamp, setMember2RegisteredForBootcamp] = useState(false);

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

    const NoAccess = () => {
        history.push('/team-login');
        return <></>
    }

    async function getTeamDetails() {
        const teamDetail = JSON.parse(localStorage.getItem('teamDetail'));
        try {
            const response = await axios.post('/api/olympiad/team/details', teamDetail);
            // console.log(response);
            if (response.status === 200) {
                const {
                    teamName,
                    teamStatus,
                    teamMembers,
                    teamNumber,
                } = response.data.teamData;
                setTeamName(teamName);
                setTeamStatus(teamStatus);
                setTeamNumber(teamNumber);

                setLeaderName(teamMembers[0].name)
                setLeaderPhoneNumber(teamMembers[0].phoneNumber);
                setLeaderClass(teamMembers[0].class);
                setLeaderSchool(teamMembers[0].schoolName);

                setMember1Name(teamMembers[1].name)
                setMember1PhoneNumber(teamMembers[1].phoneNumber);
                setMember1Class(teamMembers[1].class);
                setMember1School(teamMembers[1].schoolName);

                setMember2Name(teamMembers[2].name)
                setMember2PhoneNumber(teamMembers[2].phoneNumber);
                setMember2Class(teamMembers[2].class);
                setMember2School(teamMembers[2].schoolName);

                setLeaderRegisteredForBootcamp(teamMembers[0].isRegisterForBootcamp);
                setMember1RegisteredForBootcamp(teamMembers[1].isRegisterForBootcamp);
                setMember2RegisteredForBootcamp(teamMembers[2].isRegisterForBootcamp);

                if(
                    teamMembers[0].isRegisterForBootcamp &&
                    teamMembers[1].isRegisterForBootcamp &&
                    teamMembers[2].isRegisterForBootcamp 
                ) {
                    const teamStatus = await axios.patch('/api/olympiad/team/update-status', teamDetail);
                    if(teamStatus.status === 200) {
                        setTeamStatus(teamStatus.data.teamStatus);
                    }
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function checkUserRegisteredForBootcamp(userDetail) {
        try {
            const response = await axios.patch('/api/olympiad/team/isregistered', userDetail);
            // console.log(response);
            if (response.status === 200) {
                if (response.data.memberIndex === 0) {
                    setLeaderRegisteredForBootcamp(response.data.isRegistered);
                } else if (response.data.memberIndex === 1) {
                    setMember1RegisteredForBootcamp(response.data.isRegistered);
                } else if (response.data.memberIndex === 2) {
                    setMember2RegisteredForBootcamp(response.data.isRegistered);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTeamDetails();
    }, []);

    useEffect(() => {
        const userDetail = localStorage.getItem("userDetail");
        if (userDetail && JSON.parse(userDetail).auth) {
            checkUserRegisteredForBootcamp(JSON.parse(userDetail));
        } 
        // else console.log('user not login!');
    }, []);

    return (
        <>
            {
                window.innerWidth < 900 ? <LoginWithLaptop /> :
                localStorage.getItem("teamDetail") &&
                    JSON.parse(localStorage.getItem("teamDetail")).auth ?
                    <div className="io_team_dashboard">
                        <div className="io_team_dashboard_header">
                            <div className="header_left">
                                <h2 className="team_name">{teamName}</h2>
                                <h2 className="team_number">{teamNumber}</h2>
                            </div>
                            <div className="header_right">
                                <h2 className="team_status">Team Status: <span className={ teamStatus==='Active'? "team_status_text team_active_text":"team_status_text"}>{teamStatus}</span></h2>
                            </div>
                        </div>
                        <div className="team_members_box">
                            <TeamMember title="Team Leader"
                                name={leaderName}
                                memberClass={leaderClass}
                                phoneNumber={leaderPhoneNumber}
                                schoolName={leaderSchool}
                                isRegisteredForBootcamp={isLeaderRegisteredForBootcamp}
                            />
                            <TeamMember title="Team Member 1"
                                name={member1Name}
                                memberClass={member1Class}
                                phoneNumber={member1PhoneNumber}
                                schoolName={member1School}
                                isRegisteredForBootcamp={isMember1RegisteredForBootcamp}
                            />
                            <TeamMember title="Team Member 2"
                                name={member2Name}
                                memberClass={member2Class}
                                phoneNumber={member2PhoneNumber}
                                schoolName={member2School}
                                isRegisteredForBootcamp={isMember2RegisteredForBootcamp}
                            />
                        </div>
                        <div className="worth_box">
                            <p className="worth_text">Complete the team registration by DD/MM/YYYY to get the Rancho Labs robotics Kit worth ₹1000 </p>
                        </div>
                    </div> :
                    <NoAccess />
            }
        </>
    )
}

export default TeamDashboard;