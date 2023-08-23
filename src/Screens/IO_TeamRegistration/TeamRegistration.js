import React, { useRef, useState } from 'react';
import "./TeamRegistration.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TeamInitiated from '../IO_TeamInitiated/TeamInitiated';
const grades = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
];

function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
        return false;
    } else return true;
}

const DetailForm = ({
    title,
    name,
    memberClass,
    phoneNumber,
    emailId,
    schoolName,
    setPhoneNumber,
    nameError,
    memberClassError,
    phoneNumberError,
    emailIdError,
    schoolNameError,
}) => {
    return (
        <>
            <h1 className="team_form_title">{title}</h1>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label className="form_label" htmlFor="name">Name</label>
                    <input ref={name} type="text" className="form-control team_form_input" id="name" placeholder="" autoComplete='off' required />
                    {nameError !== "" && <span className="input_error">{nameError}</span>}
                </div>
                <div class="form-group col-md-6">
                    <label className="form_label" htmlFor="class">Class</label>
                    {/* <input ref={memberClass} type="text" className="form-control team_form_input" id="class" placeholder="" autoComplete='off' required /> */}
                    <select
                        className="form-control team_form_input member_class_select"
                        id="grade"
                        name="grade"
                        ref={memberClass}
                    >
                        {grades.map((grade, idx) => (
                            <option key={idx}>{grade}</option>
                        ))}
                    </select>
                    {memberClassError !== "" && <span className="input_error">{memberClassError}</span>}
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label className="form_label" htmlFor="phoneNumber">Phone Number</label>
                    {/* <input ref={phoneNumber} type="text" className="form-control team_form_input" id="phoneNumber" placeholder="" autoComplete='off' required /> */}
                    <PhoneInput
                        country={'in'}
                        value={phoneNumber}
                        onChange={value => setPhoneNumber(value)}
                        containerClass='form-control team_form_input'
                        inputClass='phone_input'
                        buttonClass='phone_btn'
                        dropdownClass='phone_dd'
                    />
                    {phoneNumberError !== "" && <span className="input_error">{phoneNumberError}</span>}
                </div>
                <div class="form-group col-md-6">
                    <label className="form_label" htmlFor="emailId">Email Id</label>
                    <input ref={emailId} type="email" className="form-control team_form_input" id="emailId" placeholder="" autoComplete='off' required />
                    {emailIdError !== "" && <span className="input_error">{emailIdError}</span>}
                </div>
            </div>
            <div class="form-group">
                <label className="form_label" htmlFor="schoolName">School Name</label>
                <input ref={schoolName} type="text" className="form-control team_form_input school_name_input" id="schoolName" placeholder="" autoComplete='off' required />
                {schoolNameError !== "" && <span className="input_error">{schoolNameError}</span>}
            </div>
        </>
    )
}

const MembersForm = ({
    leaderName,
    leaderClass,
    leaderPhoneNumber,
    leaderEmailId,
    leaderSchoolName,
    member1Name,
    member1Class,
    member1PhoneNumber,
    member1EmailId,
    member1SchoolName,
    member2Name,
    member2Class,
    member2PhoneNumber,
    member2EmailId,
    member2SchoolName,
    setLeaderPhoneNumber,
    setMember1PhoneNumber,
    setMember2PhoneNumber,
    leaderNameError,
    leaderClassError,
    leaderPhoneNumberError,
    leaderEmailIdError,
    leaderSchoolNameError,
    member1NameError,
    member1ClassError,
    member1PhoneNumberError,
    member1EmailIdError,
    member1SchoolNameError,
    member2NameError,
    member2ClassError,
    member2PhoneNumberError,
    member2EmailIdError,
    member2SchoolNameError,
}) => {
    return (
        <>
            <DetailForm
                title="Team Leader Details"
                name={leaderName}
                memberClass={leaderClass}
                phoneNumber={leaderPhoneNumber}
                emailId={leaderEmailId}
                schoolName={leaderSchoolName}
                setPhoneNumber={setLeaderPhoneNumber}
                nameError={leaderNameError}
                memberClassError={leaderClassError}
                phoneNumberError={leaderPhoneNumberError}
                emailIdError={leaderEmailIdError}
                schoolNameError={leaderSchoolNameError} />
            <DetailForm title="Team Member 1"
                name={member1Name}
                memberClass={member1Class}
                phoneNumber={member1PhoneNumber}
                emailId={member1EmailId}
                schoolName={member1SchoolName}
                setPhoneNumber={setMember1PhoneNumber}
                nameError={member1NameError}
                memberClassError={member1ClassError}
                phoneNumberError={member1PhoneNumberError}
                emailIdError={member1EmailIdError}
                schoolNameError={member1SchoolNameError} />
            <DetailForm title="Team Member 2"
                name={member2Name}
                memberClass={member2Class}
                phoneNumber={member2PhoneNumber}
                emailId={member2EmailId}
                schoolName={member2SchoolName}
                setPhoneNumber={setMember2PhoneNumber}
                nameError={member2NameError}
                memberClassError={member2ClassError}
                phoneNumberError={member2PhoneNumberError}
                emailIdError={member2EmailIdError}
                schoolNameError={member2SchoolNameError} />

            <div className="form_submit_box">
                <button type="submit" class="btn btn-primary team_form_submit">Submit</button>
            </div>
        </>
    )
}

function TeamRegistration() {

    const history = useHistory();

    const teamName = useRef();
    const leaderName = useRef();
    const leaderClass = useRef();
    const leaderEmailId = useRef();
    const leaderSchoolName = useRef();
    const member1Name = useRef();
    const member1Class = useRef();
    const member1EmailId = useRef();
    const member1SchoolName = useRef();
    const member2Name = useRef();
    const member2Class = useRef();
    const member2EmailId = useRef();
    const member2SchoolName = useRef();
    const [leaderPhoneNumber, setLeaderPhoneNumber] = useState('');
    const [member1PhoneNumber, setMember1PhoneNumber] = useState('');
    const [member2PhoneNumber, setMember2PhoneNumber] = useState('');

    const [teamNameError, setTeamNameError] = useState('');
    const [leaderNameError, setLeaderNameError] = useState('');
    const [leaderClassError, setLeaderClassError] = useState('');
    const [leaderEmailIdError, setLeaderEmailIdError] = useState('');
    const [leaderPhoneNumberError, setLeaderPhoneNumberError] = useState('');
    const [leaderSchoolNameError, setLeaderSchoolNameError] = useState('');

    const [member1NameError, setMember1NameError] = useState('');
    const [member1ClassError, setMember1ClassError] = useState('');
    const [member1EmailIdError, setMember1EmailIdError] = useState('');
    const [member1PhoneNumberError, setMember1PhoneNumberError] = useState('');
    const [member1SchoolNameError, setMember1SchoolNameError] = useState('');

    const [member2NameError, setMember2NameError] = useState('');
    const [member2ClassError, setMember2ClassError] = useState('');
    const [member2EmailIdError, setMember2EmailIdError] = useState('');
    const [member2PhoneNumberError, setMember2PhoneNumberError] = useState('');
    const [member2SchoolNameError, setMember2SchoolNameError] = useState('');

    const [isTeamRegistered, setIsTeamRegistered] = useState(false);
    const [registeredTeamName,setRegisteredTeamName] = useState('');
    const [registeredTeamPassword,setRegisteredTeamPassword] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const date = new Date();
        let currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        const data = {
            teamName: teamName.current.value,
            teamMembers: [
                {
                    name: leaderName.current.value,
                    class: leaderClass.current.value,
                    phoneNumber: leaderPhoneNumber,
                    emailId: leaderEmailId.current.value,
                    schoolName: leaderSchoolName.current.value,
                    isLeader: true
                },
                {
                    name: member1Name.current.value,
                    class: member1Class.current.value,
                    phoneNumber: member1PhoneNumber,
                    emailId: member1EmailId.current.value,
                    schoolName: member1SchoolName.current.value,
                    isLeader: false
                },
                {
                    name: member2Name.current.value,
                    class: member2Class.current.value,
                    phoneNumber: member2PhoneNumber,
                    emailId: member2EmailId.current.value,
                    schoolName: member2SchoolName.current.value,
                    isLeader: false
                }
            ],
            date: currentDate,
            time: currentTime
        }

        if (
            data.teamName !== ''
            && data.teamMembers[0].name !== ''
            && data.teamMembers[0].class !== ''
            && data.teamMembers[0].phoneNumber !== ''
            && data.teamMembers[0].phoneNumber.length >= 10
            && data.teamMembers[0].emailId !== ''
            && data.teamMembers[0].schoolName !== ''
            && data.teamMembers[1].name !== ''
            && data.teamMembers[1].class !== ''
            && data.teamMembers[1].phoneNumber !== ''
            && data.teamMembers[1].phoneNumber.length >= 10
            && data.teamMembers[1].emailId !== ''
            && data.teamMembers[1].schoolName !== ''
            && data.teamMembers[2].name !== ''
            && data.teamMembers[2].class !== ''
            && data.teamMembers[2].phoneNumber !== ''
            && data.teamMembers[2].phoneNumber.length >= 10
            && data.teamMembers[2].emailId !== ''
            && data.teamMembers[2].schoolName !== ''
        ) {
            try {
                const response = await axios.post('/api/olympiad/team/register', data);
                if(response.status === 200) {
                    setIsTeamRegistered(true);
                    setRegisteredTeamName(response.data.data.teamName);
                    setRegisteredTeamPassword(response.data.data.teamPassword);
                }
            } catch (err) {
                // console.log(err.response);
                if(err.response.status === 400) {
                    if(err.response.data.isLeaderExists) setLeaderEmailIdError('*Email already exists');
                    else setLeaderEmailIdError('');
                    if(err.response.data.isMember1Exists) setMember1EmailIdError('*Email already exists');
                    else setMember1EmailIdError('');
                    if(err.response.data.isMember2Exists) setMember2EmailIdError('*Email already exists');
                    else setMember2EmailIdError('');
                    window.scrollTo(0, 0);
                }
            }
        } else {
            if (data.teamName === '') { setTeamNameError('*This field must not be empty.'); }
            else { setTeamNameError(''); }

            if (data.teamMembers[0].name === '') { setLeaderNameError('*This field must not be empty.'); }
            else { setLeaderNameError(''); }

            if (data.teamMembers[0].phoneNumber === '') { setLeaderPhoneNumberError('*This field must not be empty.') }
            else if (data.teamMembers[0].phoneNumber.length <= 10) { setLeaderPhoneNumberError('*Mobile number should contains 10 digits') }
            else { setLeaderPhoneNumberError(''); }

            if (data.teamMembers[0].schoolName === '') { setLeaderSchoolNameError('*This field must not be empty.') }
            else { setLeaderSchoolNameError(''); }

            if (data.teamMembers[0].emailId === '') { setLeaderEmailIdError('*This field must not be empty.') }
            else if (!validateEmail(data.teamMembers[0].emailId)) { setLeaderEmailIdError('*Please enter a valid email address') }
            else { setLeaderEmailIdError(''); }

            if (data.teamMembers[1].name === '') { setMember1NameError('*This field must not be empty.'); }
            else { setMember1NameError(''); }

            if (data.teamMembers[1].phoneNumber === '') { setMember1PhoneNumberError('*This field must not be empty.') }
            else if (data.teamMembers[1].phoneNumber.length <= 10) { setMember1PhoneNumberError('*Mobile number should contains 10 digits') }
            else { setMember1PhoneNumberError(''); }

            if (data.teamMembers[1].schoolName === '') { setMember1SchoolNameError('*This field must not be empty.') }
            else { setMember1SchoolNameError(''); }

            if (data.teamMembers[1].emailId === '') { setMember1EmailIdError('*This field must not be empty.') }
            else if (!validateEmail(data.teamMembers[1].emailId)) { setMember1EmailIdError('*Please enter a valid email address') }
            else { setMember1EmailIdError(''); }

            if (data.teamMembers[2].name === '') { setMember2NameError('*This field must not be empty.'); }
            else { setMember2NameError(''); }

            if (data.teamMembers[2].phoneNumber === '') { setMember2PhoneNumberError('*This field must not be empty.') }
            else if (data.teamMembers[2].phoneNumber.length <= 10) { setMember2PhoneNumberError('*Mobile number should contains 10 digits') }
            else { setMember2PhoneNumberError(''); }

            if (data.teamMembers[2].schoolName === '') { setMember2SchoolNameError('*This field must not be empty.') }
            else { setMember2SchoolNameError(''); }

            if (data.teamMembers[2].emailId === '') { setMember2EmailIdError('*This field must not be empty.') }
            else if (!validateEmail(data.teamMembers[2].emailId)) { setMember2EmailIdError('*Please enter a valid email address') }
            else { setMember2EmailIdError(''); }

            window.scrollTo(0, 0);
        }
    }

    const NoAccess = () => {
        history.push('/team-dashboard');
        return <></>
    }

    return (
        <>
            {
                localStorage.getItem("teamDetail") &&
                JSON.parse(localStorage.getItem("teamDetail")).auth ?
                <NoAccess />:
                isTeamRegistered ? 
                <TeamInitiated 
                    registeredTeamName={registeredTeamName} 
                    registeredTeamPassword={registeredTeamPassword} 
                    /> :
                <div className="io_team_registration">
                    <div className="team_form">
                        <form method="POST" onSubmit={handleFormSubmit}>
                            <h1 className="team_registration_title">New Team Registration</h1>
                            <div class="form-row team_name_box">
                                <div class="form-group col-md-6">
                                    <label className="form_label" htmlFor="name">Team Name</label>
                                    <input ref={teamName} type="text" className="form-control team_form_input" id="name" placeholder="" autoComplete='off' required />
                                    {teamNameError !== "" && <span className="input_error">{teamNameError}</span>}
                                </div>
                            </div>
                            <MembersForm
                                leaderName={leaderName}
                                leaderClass={leaderClass}
                                leaderPhoneNumber={leaderPhoneNumber}
                                leaderEmailId={leaderEmailId}
                                leaderSchoolName={leaderSchoolName}
                                member1Name={member1Name}
                                member1Class={member1Class}
                                member1PhoneNumber={member1PhoneNumber}
                                member1EmailId={member1EmailId}
                                member1SchoolName={member1SchoolName}
                                member2Name={member2Name}
                                member2Class={member2Class}
                                member2PhoneNumber={member2PhoneNumber}
                                member2EmailId={member2EmailId}
                                member2SchoolName={member2SchoolName}
                                setLeaderPhoneNumber={setLeaderPhoneNumber}
                                setMember1PhoneNumber={setMember1PhoneNumber}
                                setMember2PhoneNumber={setMember2PhoneNumber}
                                leaderNameError={leaderNameError}
                                leaderClassError={leaderClassError}
                                leaderPhoneNumberError={leaderPhoneNumberError}
                                leaderEmailIdError={leaderEmailIdError}
                                leaderSchoolNameError={leaderSchoolNameError}
                                member1NameError={member1NameError}
                                member1ClassError={member1ClassError}
                                member1PhoneNumberError={member1PhoneNumberError}
                                member1EmailIdError={member1EmailIdError}
                                member1SchoolNameError={member1SchoolNameError}
                                member2NameError={member2NameError}
                                member2ClassError={member2ClassError}
                                member2PhoneNumberError={member2PhoneNumberError}
                                member2EmailIdError={member2EmailIdError}
                                member2SchoolNameError={member2SchoolNameError}
                            />
                        </form>
                    </div>
                </div >
            }
        </>
    )
}

export default TeamRegistration;