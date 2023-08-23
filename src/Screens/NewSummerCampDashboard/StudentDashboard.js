import React, { useEffect, useState } from "react";
import Notifications, { notify } from "react-notify-toast";
import "./StudentDashboard.css";
import rl_logo_img from "./Assets/logo_icon.png";
import calendar_icon from "./Assets/calendar_icon.png";
import curriculum_icon from "./Assets/curriculum_icon.png";
import profile_icon from "./Assets/profile_icon.png";
import logout_icon from "./Assets/logout_icon.png";
import school_icon from "./Assets/school_icon.png";
import edit_icon from "./Assets/edit_icon.png";
import down_arrow_img from "./Assets/down_arrow_img.png";

import dashboard_icon from "./Assets/dashboard_icon.png";
import grade_icon from "./Assets/grade_icon.png";
import profile_img from "./Assets/profile_img.png";
import support_icon from "./Assets/support_icon.png";

import lock_img from "./Assets/lock_img.png";
import lockImg from "./Assets/Vector_2.png";
import unlock_img from "./Assets/unlock_img.png";

import support_icon_hover from "./Assets/support_icon_hover.png";
import dashboard_icon_hover from "./Assets/dashboard_icon_hover.png";
import profile_icon_hover from "./Assets/profile_icon_hover.png";
import grade_icon_hover from "./Assets/grade_icon_hover.png";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import phone_call_icon from "./Assets/phone_call_icon.png";
import mail_icon from "./Assets/mail_icon.png";
import whatsapp_img from "./Assets/whatsapp_img.png";

import student_profile_pic from "./Assets/student_profile_pic.png";
import grade_img from "./Assets/grade_img.png";
import certificate_img from "./Assets/certificate_img.png";
import id_card_img from "./Assets/id_card_img.png";
import new_edit_icon_img from "./Assets/new_edit_icon_img.png";
import grey_edit_icon from "./Assets/grey_edit_icon.png";

import projects_img from "./Assets/projects_img.png";
import recog_project_img from "./Assets/recog_project_img.png";
// import { useNavigate } from 'react-router-dom';

import certificate_2_img from "./Assets/certificate_2_img.png";
import traffic_project_img from "./Assets/traffic_project_img.png";

import default_profile_img from "./Assets/default_profile_img.png";

import axios from "axios";

import Modal from "react-modal";
import moment from "moment";
import getGreeting from "./helpers/Greeting";
import getSessionStatus from "./helpers/SessionStatus";

import Loading from "./helpers/Loading";
import { useHistory } from "react-router-dom";
import SessionComponent from "./SessionsComponent/SessionComponent";
import HelpSupportComponent from "./HelpSupportComponent/HelpSupportComponent";
import ProjectComponent from "./ProjectComponent/ProjectComponent";
import AllStudentsComponent from "./AllStudentsComponent/AllStudentsComponent";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const BASE_URL = "http://3.144.191.57:5000/api";

const SessionFont = {
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "28px",
  height: "28px",
  width: "522px",
  paddingLeft: "20px",
  fontFamily: "Montserrat,sans-serif",
};

const CustonIcon = () => {
  return (
    <img src={down_arrow_img} className="down_arrow_img" alt="arrow img" />
  );
};

const ScheduleContentItem = () => {
  return (
    <div className="schedule_content_box">
      <h1 className="schedule_time_text">
        10:00 AM - 10:40 AM: Class 8, Section A
      </h1>
      <p className="schedule_session_text">Session 3: Intro to Loops</p>
      <img className="edit_icon" src={edit_icon} alt="edit icon" />
    </div>
  );
};

const CurriculumComponent = ({
  expand1,
  setExpand1,
  expand2,
  setExpand2,
  expand3,
  setExpand3,
  expand4,
  setExpand4,
  activeSection,
  // navigate,
  scheduleData,
  userDetail,
  loading,
  session1Lock,
  setSession1Lock,
  quiz1Lock,
  setQuiz1Lock,
  feedback1Lock,
  setFeedback1Lock,
  resources1Lock,
  setResources1Lock,
}) => {
  // // console.log(moment("14.00", ["HH.mm"]).format("hh:mm a"))
  const toggleExpand = (index) => {
    if (index === 1) {
      if (expand1)
        document.getElementsByClassName("date_box")[0].style.display = "none";
      else
        document.getElementsByClassName("date_box")[0].style.display = "block";
      setExpand1(() => !expand1);
    } else if (index === 2) {
      if (expand2)
        document.getElementsByClassName("date_box")[1].style.display = "none";
      else
        document.getElementsByClassName("date_box")[1].style.display = "block";
      setExpand2(() => !expand2);
    } else if (index === 3) {
      if (expand3)
        document.getElementsByClassName("date_box")[2].style.display = "none";
      else
        document.getElementsByClassName("date_box")[2].style.display = "block";
      setExpand3(() => !expand3);
    } else if (index === 4) {
      if (expand4)
        document.getElementsByClassName("date_box")[3].style.display = "none";
      else
        document.getElementsByClassName("date_box")[3].style.display = "block";
      setExpand4(() => !expand4);
    }
    // // console.log(expand);
  };

  const handleClick = (type) => {
    // if (type === 'session') navigate('/session', { replace: false })
    // else if (type === 'quiz') navigate(`/quiz/${userDetail._id}`, { replace: false })
  };

  return (
    <>
      <div
        className={
          activeSection === 0
            ? "curriculum_section padding_left"
            : "curriculum_section padding_left"
        }
      >
        <div className="class_content">
          <Accordion
            style={
              expand1
                ? {
                    borderRadius: "10px",
                    background: "#ffca42",
                  }
                : {}
            }
          >
            <AccordionSummary
              expandIcon={<CustonIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={
                expand1 ? "accordion_header details_box" : "accordion_header"
              }
              onClick={() => toggleExpand(1)}
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <div className="accordion_title">
                <h2 style={SessionFont}>Session 1: Coding, Robotics and AI </h2>
                <p className="status_text">
                  {scheduleData &&
                    scheduleData.length > 0 &&
                    getSessionStatus(
                      new Date(scheduleData[0].startTime1),
                      new Date(scheduleData[0].endTime1)
                    )}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails
              style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
              className="details_box"
            >
              {/* <Typography> */}
              <div className="content_box">
                <div className="topic_box">
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <div className="item_line"></div>
                    <p
                      className="item_text"
                      onClick={
                        session1Lock ? () => {} : () => handleClick("session")
                      }
                    >
                      Class Session
                      {session1Lock ? (
                        <img src={lock_img} className="lock_img" alt="lock" />
                      ) : (
                        <img src={unlock_img} className="lock_img" alt="lock" />
                      )}
                    </p>
                  </div>
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <div className="item_line"></div>
                    <p
                      className="item_text"
                      onClick={() => handleClick("quiz")}
                    >
                      Quiz
                      {quiz1Lock ? (
                        <img src={lock_img} className="lock_img" alt="lock" />
                      ) : (
                        <img src={unlock_img} className="lock_img" alt="lock" />
                      )}
                    </p>
                  </div>
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <div className="item_line"></div>
                    <p className="item_text">
                      Feedback 1
                      {feedback1Lock ? (
                        <img src={lock_img} className="lock_img" alt="lock" />
                      ) : (
                        <img src={unlock_img} className="lock_img" alt="lock" />
                      )}
                    </p>
                  </div>
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <div className="item_line"></div>
                    <p className="item_text">
                      Additional Resources
                      {resources1Lock ? (
                        <img
                          src={lock_img}
                          //   src={lockImg}
                          className="lock_img"
                          alt="lock"
                        />
                      ) : (
                        <img src={unlock_img} className="lock_img" alt="lock" />
                      )}
                    </p>
                  </div>
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <p className="item_text">
                      <a
                        style={{
                          textDecoration: "none",
                          color: "#000",
                        }}
                        href="http://13.235.75.69/python-workspace"
                      >
                        Python Workspace
                      </a>
                      {
                        // resources1Lock ?
                        // <img
                        //     src={lock_img}
                        //     className='lock_img' alt='lock' /> :
                        <img src={unlock_img} className="lock_img" alt="lock" />
                      }
                    </p>
                  </div>
                </div>
                <div className="date_box details_box">
                  <div className="date_cover">
                    <div className="date_box_top"></div>
                    <div className="date_box_content">
                      <h1 className="date_date_text">
                        {loading ? (
                          <p
                            style={{
                              width: "50%",
                              margin: "0 auto",
                            }}
                          >
                            <Loading
                              type="spin"
                              color="#5a6bff"
                              height="28px"
                              width="28px"
                            />
                          </p>
                        ) : (
                          scheduleData &&
                          scheduleData.length > 0 &&
                          new Date(scheduleData[0].startTime1).getDate()
                        )}
                      </h1>
                      <p className="date_month_text">
                        {scheduleData &&
                          scheduleData.length > 0 &&
                          months[
                            new Date(scheduleData[0].startTime1).getMonth()
                          ]}
                      </p>
                    </div>
                  </div>
                  {/* <p className="date_time_text">10:00am - 10:40am</p> */}
                  <p className="date_time_text">
                    {loading
                      ? "loading... "
                      : moment(
                          `${
                            scheduleData &&
                            scheduleData.length > 0 &&
                            new Date(scheduleData[0].startTime1).getHours()
                          }
                                        :${
                                          scheduleData &&
                                          scheduleData.length > 0 &&
                                          new Date(
                                            scheduleData[0].startTime1
                                          ).getMinutes() === 0
                                            ? "00"
                                            : scheduleData &&
                                              scheduleData.length > 0 &&
                                              new Date(
                                                scheduleData[0].startTime1
                                              ).getMinutes()
                                        }`,
                          ["HH.mm"]
                        ).format("hh:mm a")}

                    {loading ? ":)" : "-"}
                    {loading
                      ? ""
                      : moment(
                          `${
                            scheduleData &&
                            scheduleData.length > 0 &&
                            new Date(scheduleData[0].endTime1).getHours()
                          }
                                        :${
                                          scheduleData &&
                                          scheduleData.length > 0 &&
                                          new Date(
                                            scheduleData[0].endTime1
                                          ).getMinutes() === 0
                                            ? "00"
                                            : scheduleData &&
                                              scheduleData.length > 0 &&
                                              new Date(
                                                scheduleData[0].endTime1
                                              ).getMinutes()
                                        }`,
                          ["HH.mm"]
                        ).format("hh:mm a")}
                  </p>
                </div>
              </div>
              {/* </Typography> */}
            </AccordionDetails>
          </Accordion>
          <br></br>
          <Accordion
            style={
              expand2
                ? {
                    borderRadius: "10px",
                    background: "#ffca42",
                  }
                : {}
            }
          >
            <AccordionSummary
              expandIcon={<CustonIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={
                expand2 ? "accordion_header details_box" : "accordion_header"
              }
              onClick={() => toggleExpand(2)}
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <div className="accordion_title">
                <h2 style={SessionFont}>Session 2: Artificial Intelligence </h2>
                <p className="status_text">
                  {scheduleData &&
                    scheduleData.length > 0 &&
                    getSessionStatus(
                      new Date(scheduleData[0].startTime2),
                      new Date(scheduleData[0].endTime2)
                    )}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails
              style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
              className="details_box"
            >
              {/* <Typography> */}
              <div className="content_box">
                <div className="topic_box">
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <div className="item_line"></div>
                    <p
                      className="item_text"
                      onClick={() => handleClick("session")}
                    >
                      Class Session
                      {true ? (
                        <img src={lock_img} className="lock_img" alt="lock" />
                      ) : (
                        <img src={unlock_img} className="lock_img" alt="lock" />
                      )}
                    </p>
                  </div>
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <div className="item_line"></div>
                    <p
                      className="item_text"
                      onClick={() => handleClick("quiz")}
                    >
                      Quiz
                    </p>
                    {true ? (
                      <img src={lock_img} className="lock_img" alt="lock" />
                    ) : (
                      <img src={unlock_img} className="lock_img" alt="lock" />
                    )}
                  </div>
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <div className="item_line"></div>
                    <p className="item_text">Feedback 2</p>
                    {true ? (
                      <img src={lock_img} className="lock_img" alt="lock" />
                    ) : (
                      <img src={unlock_img} className="lock_img" alt="lock" />
                    )}
                  </div>
                  <div className="item_box">
                    <div className="item_circle"></div>
                    <p className="item_text">Additional Resources</p>
                    {true ? (
                      <img src={lock_img} className="lock_img" alt="lock" />
                    ) : (
                      <img src={unlock_img} className="lock_img" alt="lock" />
                    )}
                  </div>
                </div>
                <div className="date_box details_box">
                  <div className="date_cover">
                    <div className="date_box_top"></div>
                    <div className="date_box_content">
                      <h1 className="date_date_text">
                        {scheduleData &&
                          scheduleData.length !== 0 &&
                          new Date(scheduleData[0].startTime2).getDate()}
                      </h1>
                      <p className="date_month_text">
                        {scheduleData &&
                          scheduleData.length !== 0 &&
                          months[
                            new Date(scheduleData[0].startTime1).getMonth()
                          ]}
                      </p>
                    </div>
                  </div>
                  {/* <p className="date_time_text">10:00am - 10:40am</p> */}
                  {/* <p className="date_time_text">
                                        {scheduleData && scheduleData.length !== 0 && new Date(scheduleData[0].startTime2).getHours()}
                                        :{scheduleData && scheduleData.length !== 0 && new Date(scheduleData[0].startTime2).getMinutes()===0 ? '00'
                                        :scheduleData && scheduleData.length !== 0 && new Date(scheduleData[0].startTime2).getMinutes()}
                                        -{scheduleData && scheduleData.length !== 0 && new Date(scheduleData[0].endTime2).getHours()}
                                        :{scheduleData && scheduleData.length !== 0 && new Date(scheduleData[0].endTime2).getMinutes()===0 ? '00'
                                        :scheduleData && scheduleData.length !== 0 && new Date(scheduleData[0].endTime2).getMinutes()}
                                    </p> */}
                  <p className="date_time_text">
                    {moment(
                      `${
                        scheduleData &&
                        scheduleData.length !== 0 &&
                        new Date(scheduleData[0].startTime2).getHours()
                      }
                                        :${
                                          scheduleData &&
                                          scheduleData.length !== 0 &&
                                          new Date(
                                            scheduleData[0].startTime2
                                          ).getMinutes() === 0
                                            ? "00"
                                            : scheduleData &&
                                              scheduleData.length !== 0 &&
                                              new Date(
                                                scheduleData[0].startTime2
                                              ).getMinutes()
                                        }`,
                      ["HH.mm"]
                    ).format("hh:mm a")}
                    -
                    {moment(
                      `${
                        scheduleData &&
                        scheduleData.length !== 0 &&
                        new Date(scheduleData[0].endTime2).getHours()
                      }
                                        :${
                                          scheduleData &&
                                          scheduleData.length !== 0 &&
                                          new Date(
                                            scheduleData[0].endTime2
                                          ).getMinutes() === 0
                                            ? "00"
                                            : scheduleData &&
                                              scheduleData.length !== 0 &&
                                              new Date(
                                                scheduleData[0].endTime2
                                              ).getMinutes()
                                        }`,
                      ["HH.mm"]
                    ).format("hh:mm a")}
                  </p>
                </div>
              </div>
              {/* </Typography> */}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

const DashboardComponent = ({
  expand1,
  expand2,
  expand3,
  expand4,
  setExpand1,
  setExpand2,
  setExpand3,
  setExpand4,
  activeSection,
  todaysDate,
  // navigate,
  scheduleData,
  userDetail,
  loading,
  session1Lock,
  setSession1Lock,
  quiz1Lock,
  setQuiz1Lock,
  feedback1Lock,
  setFeedback1Lock,
  resources1Lock,
  setResources1Lock,
}) => {
  return (
    <>
      <div
        className={
          activeSection === 0 ? "main_left active_overflow" : "main_left"
        }
      >
        <div className="main_left_top d-flex justify-content-between">
          <h1 className="greeting_text">
            {getGreeting()},{" "}
            {localStorage.getItem("userData")
              ? JSON.parse(localStorage.getItem("userData")).userId.name
              : "Anshul"}
          </h1>
          <h1 className="schedule_text">{todaysDate}</h1>
        </div>
        <h1 className="session_topic">Coding, Robotics & AI Workshop</h1>
        <CurriculumComponent
          expand1={expand1}
          expand2={expand2}
          expand3={expand3}
          expand4={expand4}
          setExpand1={setExpand1}
          setExpand2={setExpand2}
          setExpand3={setExpand3}
          setExpand4={setExpand4}
          activeSection={activeSection}
          // navigate={navigate}
          scheduleData={scheduleData}
          userDetail={userDetail}
          loading={loading}
          session1Lock={session1Lock}
          setSession1Lock={setSession1Lock}
          quiz1Lock={quiz1Lock}
          setQuiz1Lock={setQuiz1Lock}
          feedback1Lock={feedback1Lock}
          setFeedback1Lock={setFeedback1Lock}
          resources1Lock={resources1Lock}
          setResources1Lock={setResources1Lock}
        />
        {/* <CertificateComponent /> */}
      </div>
    </>
  );
};

const ProfileComponent = ({
  userDetail,
  studentProfilePic,
  setStudentProfilePic,
  isEditAbout,
  setIsEditAbout,
  studentProfileData,
  isOpen,
  setIsOpen,
  projectLinks,
  setProjectLinks,
  inputLink,
  setInputLink,
  beginnerSkill,
  intermediateSkill,
  advancedSkill,
  softSkills,
  setBeginnerSkill,
  setIntermediateSkill,
  setAdvancedSkill,
  setSoftSkills,
  isSkill,
  setIsSkill,
  setStudentProfileData,
  skillType,
  setSkillType,
  projects,
  setProjects,
  projectId,
  setProjectId,
  saveLoading,
  setSaveLoading,
}) => {
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleEditAbout = () => {
    setIsEditAbout(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    // console.log(base64);
    setStudentProfilePic(base64);
  };

  const handleSaveProile = async () => {
    let aboutMeText = document.getElementById("aboutMeId").innerText;
    try {
      setSaveLoading(true);
      const data = {
        ProfilePic: studentProfilePic,
        AboutMe: aboutMeText,
        Projects: projectLinks,
        BeginnerSkill: beginnerSkill,
        IntermediateSkill: intermediateSkill,
        AdvancedSkill: advancedSkill,
        SoftSkills: softSkills,
      };

      // const existingStudent = await axios.get(`${BASE_URL}/studentProfile/${userDetail._id}`);
      // // console.log("existing", existingStudent)
      // if (existingStudent && existingStudent.length > 0) {
      //     // console.log(existingStudent);
      // } else {
      //     const response = await axios.post(`${BASE_URL}/studentProfile/${userDetail._id}`, data);
      //     // console.log(response);
      //     window.location.reload();
      // }
      if (!studentProfileData) {
        const response = await axios.post(
          `${BASE_URL}/studentProfile/${userDetail._id}`,
          data
        );
        if (response.status === 200) setSaveLoading(false);
        // console.log(response);
        // alert('saved');
        notify.show("✅ Saved Successfully!", "success");
        setStudentProfileData(response.data);
        setProjects(response.data[0].Projects);
        // window.location.reload();
      } else {
        const response = await axios.patch(
          `${BASE_URL}/studentProfile/${userDetail._id}`,
          data
        );
        if (response.status === 200) setSaveLoading(false);
        // console.log("updated ", response);
        // alert('saved');

        notify.show("✅ Saved Successfully!", "success");
        setStudentProfileData(response.data);
        setProjects(response.data[0].Projects);
        // window.location.reload();
      }
    } catch (err) {
      // console.log(err.response);
    }
  };

  const handleSaveLink = () => {
    if (skillType === "beginner") {
      setBeginnerSkill((prevSkill) => [...prevSkill, inputLink]);
    } else if (skillType === "intermediate") {
      setIntermediateSkill((prevSkill) => [...prevSkill, inputLink]);
    } else if (skillType === "advanced") {
      setAdvancedSkill((prevSkill) => [...prevSkill, inputLink]);
    } else if (skillType === "soft") {
      setSoftSkills((prevSkill) => [...prevSkill, inputLink]);
    } else {
      let project_links = projects;
      project_links[projectId] = inputLink;
      // console.log(project_links);
      setProjectLinks(project_links);
    }
    setInputLink("");
    closeModal();
  };

  function openModal(type, typeOfSkill = "default", projId = -1) {
    if (type !== "project") {
      setIsSkill(true);

      switch (typeOfSkill) {
        case "beginner":
          setSkillType("beginner");
          break;
        case "intermediate":
          setSkillType("intermediate");
          break;
        case "advanced":
          setSkillType("advanced");
          break;
        case "soft":
          setSkillType("soft");
          break;
        default:
          setSkillType("");
      }
    } else setIsSkill(false);

    setProjectId(projId);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleProjectRedirect = (id) => {
    // console.log(projects);
    if (projects) window.open(projects[id], "_blank", "noreferrer");
  };

  return (
    <div className="main_left student_profile">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="edit_project_modal">
          <div className="link_input_box text-center">
            <p className="add_link_text">
              {!isSkill ? "Add link to the project" : "Add Skill"}
            </p>
            <input
              value={inputLink}
              onChange={(val) => setInputLink(val.target.value)}
              type="text"
              className="project_link_input"
              placeholder={!isSkill ? "enter your link" : "enter your skill"}
            />
          </div>
          <div className="modal_btns">
            <button className="modal_save_btn" onClick={handleSaveLink}>
              Save
            </button>
            <button className="modal_save_cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <div className="student_basic_detail">
        <div className="student_detail_left position-relative">
          <img
            src={
              studentProfilePic
                ? studentProfilePic
                : studentProfileData && studentProfileData.ProfilePic
                ? studentProfileData.ProfilePic
                : default_profile_img
            }
            className="student_profile_pic"
            alt="student profile pic"
          />
          {/* <input type='file' className='student_profile_file'/>
                    <lable for='file' className='file_label' >+</lable> */}
          <div class="file-input">
            <input
              type="file"
              id="file"
              onChange={(e) => handleFileUpload(e)}
              className="file"
            />
            <label className="file_label" for="file">
              +
            </label>
          </div>
        </div>
        <div className="student_detail_right">
          <div className="student_detail_item">
            <img src={id_card_img} className="id_card_img" alt="id card" />
            <h2 className="student_name_text">{userDetail.name}</h2>
          </div>
          <div className="student_detail_item mt-4">
            <img src={grade_img} className="id_card_img" alt="id card" />
            <h2 className="grade_text">Grade {userDetail.class}</h2>
          </div>
          <div
            className={
              isEditAbout
                ? "about_me_box position-relative active_edit_box"
                : "about_me_box position-relative"
            }
          >
            <p
              id="aboutMeId"
              contentEditable={isEditAbout}
              className={isEditAbout}
            >
              {studentProfileData && studentProfileData.AboutMe
                ? studentProfileData.AboutMe
                : "Hi, love to see you here"}
            </p>
            {!isEditAbout && (
              <img
                src={grey_edit_icon}
                onClick={handleEditAbout}
                className="about_me_edit_icon"
                alt=" edit icon"
              />
            )}
          </div>
        </div>
        <div className="text-center py-5 save_profile_box">
          <button className="save_profile_btn" onClick={handleSaveProile}>
            {saveLoading ? (
              <Loading type="spin" color="#fff" height="28px" width="28px" />
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
      <div className="student_projects">
        <h1 className="student_projects_title">My Projects</h1>
        <div className="student_projects_row">
          <div>
            <div className="card projects_card position-relative">
              <img
                className="card-img-top"
                src={projects_img}
                alt="School Thumbnail"
              />
              <div className="card-body">
                <p
                  className="project_title"
                  onClick={() => handleProjectRedirect(0)}
                >
                  LED Blinking Project
                </p>
                {/* <a href={projects[0]} class="btn btn-primary">LED Blinking Project</a> */}
              </div>
              <div className="project_edit_box">
                <img
                  src={edit_icon}
                  onClick={() => openModal("project", "default", 0)}
                  className="project_edit_icon"
                  alt="Edit Logo"
                />
              </div>
            </div>
            <div className="text-center py-4">
              <label className="switch">
                <input className="toggle_input" type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div>
            <div className="card projects_card position-relative">
              <img
                className="card-img-top"
                src={traffic_project_img}
                alt="School Thumbnail"
              />
              <div className="card-body">
                <p
                  className="project_title"
                  onClick={() => handleProjectRedirect(1)}
                >
                  Traffic Light Controller
                </p>
              </div>
              <div className="project_edit_box">
                <img
                  src={edit_icon}
                  onClick={() => openModal("project", "default", 1)}
                  className="project_edit_icon"
                  alt="Edit Logo"
                />
              </div>
            </div>
            <div className="text-center py-4">
              <label className="switch">
                <input className="toggle_input" type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div>
            <div className="card projects_card position-relative">
              <img
                className="card-img-top"
                src={recog_project_img}
                alt="School Thumbnail"
              />
              <div className="card-body">
                <p
                  className="project_title"
                  onClick={() => handleProjectRedirect(2)}
                >
                  Object Recognition Project
                </p>
              </div>
              <div className="project_edit_box">
                <img
                  src={edit_icon}
                  onClick={() => openModal("project", "default", 2)}
                  className="project_edit_icon"
                  alt="Edit Logo"
                />
              </div>
            </div>
            <div className="text-center py-4">
              <label className="switch">
                <input className="toggle_input" type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="student_certificates">
        <h1 className="student_projects_title">
          Certificates and Achievements
        </h1>
        <div className="student_certificate_row">
          <div className="certificate_scroll_row d-flex overflow-auto">
            <div className="student_certicate_cover">
              <img
                src={certificate_img}
                className="certificate_img"
                alt="certificate_img"
              />
              <div className="text-center py-4">
                <label className="switch">
                  <input className="toggle_input" type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="student_certicate_cover">
              <img
                src={certificate_2_img}
                className="certificate_img"
                alt="certificate_img"
              />
              <div className="text-center py-4">
                <label className="switch">
                  <input className="toggle_input" type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            {/* <div className='student_certicate_cover'>
                            <img src={certificate_img} className='certificate_img' alt='certificate_img' />
                        </div> */}
          </div>
          <div className="add_certificates ml-5">
            <h2 className="add_certificates_text">+ Add Certificate</h2>
          </div>
        </div>
      </div>
      <div className="student_tech_skills">
        <h1 className="student_projects_title d-flex">
          My Tech Skills
          <div className="text-center level_switch_padding">
            <label className="switch level_switch">
              <input className="toggle_input" type="checkbox" />
              <span className="slider level_slider round"></span>
            </label>
          </div>
        </h1>
        <div className="student_tech_skills_item">
          <div className="student_level">
            <p className="level_text">Beginner Level</p>
            <div className="text-center level_switch_padding">
              <label className="switch level_switch">
                <input className="toggle_input" type="checkbox" />
                <span className="slider level_slider round"></span>
              </label>
            </div>
          </div>
          <div className="student_tech_skills_row">
            <div className="d-flex overflow-auto skills">
              {beginnerSkill &&
                beginnerSkill.length > 0 &&
                beginnerSkill.map((skill, index) => {
                  return (
                    <div className="skill_box">
                      <p className="skill_text">{skill}</p>
                    </div>
                  );
                })}
              {/* <div className='skill_box'>
                                <p className='skill_text'>Coding</p>
                            </div>
                            <div className='skill_box'>
                                <p className='skill_text'>Robotics</p>
                            </div>
                            <div className='skill_box'>
                                <p className='skill_text'>AI</p>
                            </div> */}
            </div>
            <div
              className="add_skill ml-5"
              onClick={() => openModal("skill", "beginner")}
            >
              <h2 className="add_skill_text">+ Add Skill</h2>
            </div>
          </div>
        </div>
        <div className="student_tech_skills_item">
          <div className="student_level">
            <p className="level_text">Intermediate Level</p>
            <div className="text-center level_switch_padding">
              <label className="switch level_switch">
                <input className="toggle_input" type="checkbox" />
                <span className="slider level_slider round"></span>
              </label>
            </div>
          </div>
          <div className="student_tech_skills_row">
            <div className="d-flex overflow-auto skills">
              {intermediateSkill &&
                intermediateSkill.length > 0 &&
                intermediateSkill.map((skill, index) => {
                  return (
                    <div className="skill_box">
                      <p className="skill_text">{skill}</p>
                    </div>
                  );
                })}
              {/* <div className='skill_box'>
                                <p className='skill_text'>Coding</p>
                            </div>
                            <div className='skill_box'>
                                <p className='skill_text'>Robotics</p>
                            </div>
                            <div className='skill_box'>
                                <p className='skill_text'>AI</p>
                            </div> */}
            </div>
            <div
              className="add_skill ml-5"
              onClick={() => openModal("skill", "intermediate")}
            >
              <h2 className="add_skill_text">+ Add Skill</h2>
            </div>
          </div>
        </div>
        <div className="student_tech_skills_item">
          <div className="student_level">
            <p className="level_text">Advanced Level</p>
            <div className="text-center level_switch_padding">
              <label className="switch level_switch">
                <input className="toggle_input" type="checkbox" />
                <span className="slider level_slider round"></span>
              </label>
            </div>
          </div>
          <div className="student_tech_skills_row">
            <div className="d-flex overflow-auto skills">
              {advancedSkill &&
                advancedSkill.length > 0 &&
                advancedSkill.map((skill, index) => {
                  return (
                    <div className="skill_box">
                      <p className="skill_text">{skill}</p>
                    </div>
                  );
                })}
              {/* <div className='skill_box'>
                                <p className='skill_text'>Coding</p>
                            </div>
                            <div className='skill_box'>
                                <p className='skill_text'>Robotics</p>
                            </div>
                            <div className='skill_box'>
                                <p className='skill_text'>AI</p>
                            </div> */}
            </div>
            <div className="add_skill ml-5">
              <h2
                className="add_skill_text"
                onClick={() => openModal("skill", "advanced")}
              >
                + Add Skill
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="student_tech_skills">
        <h1 className="student_projects_title d-flex">
          My Soft Skills
          <div className="text-center level_switch_padding">
            <label className="switch level_switch">
              <input className="toggle_input" type="checkbox" />
              <span className="slider level_slider round"></span>
            </label>
          </div>
        </h1>
        <div className="student_tech_skills_row mt-4">
          <div className="d-flex overflow-auto">
            {softSkills &&
              softSkills.length > 0 &&
              softSkills.map((skill, index) => {
                return (
                  <div className="skill_box">
                    <p className="skill_text">{skill}</p>
                  </div>
                );
              })}
            {/* <div className='skill_box'>
                            <p className='skill_text text-center'>Public Speaking</p>
                        </div>
                        <div className='skill_box'>
                            <p className='skill_text'>Empathy</p>
                        </div>
                        <div className='skill_box'>
                            <p className='skill_text'>Listening</p>
                        </div> */}
          </div>
          <div
            className="add_skill ml-5"
            onClick={() => openModal("skill", "soft")}
          >
            <h2 className="add_skill_text">+ Add Skill</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportComponent = ({ todaysDate, userDetail }) => {
  return (
    <div className="main_left">
      <div className="main_left_top d-flex justify-content-between">
        <h1 className="greeting_text">
          {getGreeting()}, {userDetail && userDetail.name}!
        </h1>
        <h1 className="schedule_text">{todaysDate}</h1>
      </div>
      <div className="support_content">
        <div className="support_item">
          <img
            src={whatsapp_img}
            className="whatsapp_img"
            alt="whatsapp icon"
          />
          <p className="support_item_text">Whatsapp us on +91 7427882787</p>
        </div>
        <div className="support_item">
          <img src={mail_icon} className="mail_icon" alt="mail icon" />
          <p className="support_item_text">Email us on info@rancholabs.com</p>
        </div>
        <div className="support_item">
          <img
            src={phone_call_icon}
            className="phone call icon"
            alt="whatsapp icon"
          />
          <p className="support_item_text">Call us on +91 7427800499</p>
        </div>
      </div>
    </div>
  );
};

const CertificateComponent = () => {
  return (
    <div className="certificate_box">
      <p className="certificate_text">Certificate</p>
      <button className="certificate_status">Apply</button>
    </div>
  );
};

const GradeComponent = ({ todaysDate, userDetail, quizData, scheduleData }) => {
  return (
    <div className="main_left grade_component">
      <div className="main_left_top d-flex justify-content-between">
        <h1 className="greeting_text">
          {getGreeting()}, {userDetail && userDetail.name}!
        </h1>
        <h1 className="schedule_text">{todaysDate}</h1>
      </div>
      <h1 className="session_topic">Grades</h1>
      <div className="grades_content">
        <div className="grades_item">
          <p className="quiz_text">
            Quiz 1: Robotics and AI Quiz,{" "}
            {scheduleData &&
              scheduleData.length > 0 &&
              new Date(scheduleData[0].endTime1).toDateString().toString() +
                " " +
                moment(
                  `${
                    scheduleData &&
                    scheduleData.length !== 0 &&
                    new Date(scheduleData[0].endTime1).getHours()
                  }
                                        :${
                                          scheduleData &&
                                          scheduleData.length !== 0 &&
                                          new Date(
                                            scheduleData[0].endTime1
                                          ).getMinutes() === 0
                                            ? "00"
                                            : scheduleData &&
                                              scheduleData.length !== 0 &&
                                              new Date(
                                                scheduleData[0].endTime1
                                              ).getMinutes()
                                        }`,
                  ["HH.mm"]
                ).format("hh:mm a")}
          </p>
          <div className="quiz_details">
            <span className="quiz_marks">
              {quizData && quizData.length > 0
                ? `${quizData[0].marks1}/50`
                : "0/10"}
            </span>
            {quizData &&
            quizData.length > 0 &&
            quizData[0].response1.length > 0 ? (
              <a
                href={`/quiz-details/${userDetail && userDetail._id}`}
                className="quiz_details_text"
              >
                Details
              </a>
            ) : (
              <span className="quiz_details_text">Unattempted</span>
            )}
          </div>
        </div>
        <div className="grades_item">
          <p className="quiz_text">
            Quiz 2: AI Quiz,{" "}
            {scheduleData &&
              scheduleData.length > 0 &&
              new Date(scheduleData[0].endTime2).toDateString().toString() +
                " " +
                moment(
                  `${
                    scheduleData &&
                    scheduleData.length !== 0 &&
                    new Date(scheduleData[0].endTime2).getHours()
                  }
                                        :${
                                          scheduleData &&
                                          scheduleData.length !== 0 &&
                                          new Date(
                                            scheduleData[0].endTime2
                                          ).getMinutes() === 0
                                            ? "00"
                                            : scheduleData &&
                                              scheduleData.length !== 0 &&
                                              new Date(
                                                scheduleData[0].endTime2
                                              ).getMinutes()
                                        }`,
                  ["HH.mm"]
                ).format("hh:mm a")}
          </p>
          <div className="quiz_details">
            <span className="quiz_marks">
              {quizData && quizData.length > 0
                ? `${quizData[0].marks2}/30`
                : "0/10"}
            </span>
            {quizData &&
            quizData.length > 0 &&
            quizData[0].response2.length > 0 ? (
              <a href="/studentdashboard" className="quiz_details_text">
                Details
              </a>
            ) : (
              <span className="quiz_details_text">Unattempted</span>
            )}
          </div>
        </div>
      </div>
      {/* <CertificateComponent /> */}
    </div>
  );
};

const ToggleDashboardSectionComponent = ({
  activeSection,
  setActiveSection,
  expand1,
  expand2,
  expand3,
  expand4,
  setExpand1,
  setExpand2,
  setExpand3,
  setExpand4,
  todaysDate,
  // navigate,
  userDetail,
  setStudentProfilePic,
  studentProfilePic,
  isEditAbout,
  setIsEditAbout,
  studentProfileData,
  isOpen,
  setIsOpen,
  projectLinks,
  setProjectLinks,
  inputLink,
  setInputLink,
  beginnerSkill,
  intermediateSkill,
  advancedSkill,
  softSkills,
  setBeginnerSkill,
  setIntermediateSkill,
  setAdvancedSkill,
  setSoftSkills,
  isSkill,
  setIsSkill,
  setStudentProfileData,
  setSkillType,
  skillType,
  projects,
  setProjects,
  scheduleData,
  quizData,
  loading,
  session1Lock,
  setSession1Lock,
  quiz1Lock,
  setQuiz1Lock,
  feedback1Lock,
  setFeedback1Lock,
  resources1Lock,
  setResources1Lock,
  projectId,
  setProjectId,
  saveLoading,
  setSaveLoading,
}) => {
  switch (activeSection) {
    case 0:
      return <SessionComponent />;
    case 1:
      return <ProjectComponent />;
    case 2:
      return <AllStudentsComponent />;
    case 3:
      return <HelpSupportComponent todaysDate={todaysDate} />;
    default:
      return <></>;
  }
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const NoAccess = ({ navigate }) => {
  // navigate('/login', { replace: false })
  return <></>;
};

function StudentDashboard() {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [userDetail, setUserDetail] = useState();
  const [todaysDate, setTodaysDate] = useState("");
  const [studentProfilePic, setStudentProfilePic] = useState("");
  const [isEditAbout, setIsEditAbout] = useState(false);
  const [studentProfileData, setStudentProfileData] = useState();
  const [schoolData, setSchoolData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [projectLinks, setProjectLinks] = useState([]);
  const [inputLink, setInputLink] = useState("");
  const [beginnerSkill, setBeginnerSkill] = useState([]);
  const [intermediateSkill, setIntermediateSkill] = useState([]);
  const [advancedSkill, setAdvancedSkill] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [isSkill, setIsSkill] = useState(false);
  const [skillType, setSkillType] = useState("");
  const [projects, setProjects] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [session1Lock, setSession1Lock] = useState(true);
  const [quiz1Lock, setQuiz1Lock] = useState(true);
  const [feedback1Lock, setFeedback1Lock] = useState(true);
  const [resources1Lock, setResources1Lock] = useState(true);
  const [projectId, setProjectId] = useState(-1);
  const [saveLoading, setSaveLoading] = useState(false);
  // const navigate = useNavigate();

  const handleDashboardItem = (activeItem) => {
    setActiveSection(activeItem);
  };

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("scUserDetails");
    history.push("/summercamp2022-login");
    // navigate(`/login/school/${userDetail.school}`, { replace: true });
  };

  useEffect(() => {
    if (localStorage.getItem("scUserDetails")) {
      setUserDetail(JSON.parse(localStorage.getItem("scUserDetails")).userId);
    }
    let date = new Date();
    let currentDate =
      months[date.getMonth()] +
      " " +
      date.getDate() +
      ", " +
      date.getFullYear();
    setTodaysDate(currentDate);
  }, []);

  async function getStudentProfile(userDetail) {
    if (userDetail) {
      try {
        // console.log(userDetail);
        const response = await axios.get(
          `/api/summercamp2022/student/${userDetail}`
        );
        console.log("Student Profile", response);
        setStudentProfileData(response.data[0]);
        setBeginnerSkill(response.data[0].BeginnerSkill);
        setIntermediateSkill(response.data[0].IntermediateSkill);
        setAdvancedSkill(response.data[0].AdvancedSkill);
        setSoftSkills(response.data[0].SoftSkills);
        setProjects(response.data[0].Projects);
      } catch (err) {
        // console.log(err);
      }
    }
  }

  useEffect(() => {
    getStudentProfile(userDetail);
  }, [userDetail]);

  // async function getSchoolData() {
  //     const schoolId = userDetail.school;
  //     try {
  //         setLoading(true);
  //         const response = await axios.post('http://3.144.191.57:5000/api/admin/AdminSignin', {
  //             username: 'admin',
  //             password: 'admin123'
  //         });
  //         // console.log(response);
  //         if (response.status === 200) {
  //             setLoading(false);
  //             const schoolDetails = await axios.get(`http://3.144.191.57:5000/api/school/${schoolId}`, {
  //                 headers: {
  //                     "Content-type": "application/json; charset=UTF-8",
  //                     'Authorization': `Bearer ${response.data.token}`
  //                 }
  //             });
  //             console.log(schoolId);
  //             const savedSchedule = await axios.get(`http://3.144.191.57:5000/api/workshop/${schoolId}`,
  //                 {
  //                     headers: {
  //                         "Content-type": "application/json; charset=UTF-8",
  //                         'Authorization': `Bearer ${response.data.token}`
  //                     },
  //                 });
  //             // // console.log(savedSchedule);
  //             if (savedSchedule.status === 200) {
  //                 console.log('savedSchedule ', savedSchedule);
  //                 setScheduleData(savedSchedule.data);
  //             }
  //             if (schoolDetails.status === 200) {
  //                 setSchoolData(schoolDetails.data);
  //             }
  //         }
  //     } catch (err) {
  //         // console.log(err.response);
  //         setLoading(false);
  //     }
  // }

  // async function getQuizData() {
  //     try {
  //         const quizDetails = await axios.get(`http://3.144.191.57:5000/api/quiz/${userDetail._id}`);
  //         // console.log("Quiz", quizDetails);
  //         setQuizData(quizDetails.data);
  //     } catch (err) {
  //         // console.log(err.response);
  //     }
  // }

  // async function getSessionDetails() {
  //     try {
  //         const response = await axios.post('http://3.144.191.57:5000/api/admin/AdminSignin', {
  //             username: 'admin',
  //             password: 'admin123'
  //         });

  //         if (response.status === 200) {
  //             const sessionDetails = await axios.get(`http://3.144.191.57:5000/api/sessionLocks/${userDetail.school}`, {
  //                 headers: {
  //                     "Content-type": "application/json; charset=UTF-8",
  //                     'Authorization': `Bearer ${response.data.token}`
  //                 }
  //             });
  //             // console.log(savedSession);
  //             if(sessionDetails.status === 200) {
  //                 setSession1Lock(sessionDetails.data[0].session1Content);
  //                 setQuiz1Lock(sessionDetails.data[0].session1Quiz);
  //                 setFeedback1Lock(sessionDetails.data[0].session1Feedback)
  //                 setResources1Lock(sessionDetails.data[0].session1Resources)
  //                 console.log(sessionDetails);
  //             }

  //         }
  //     } catch (err) {
  //         console.log(err.response);
  //     }
  // }

  // useEffect(() => {
  //     if (userDetail) {
  //         // getSchoolData();
  //         // getQuizData();
  //         // getSessionDetails();
  //     }
  // }, [userDetail]);

  return (
    <>
      {localStorage.getItem("scUserDetails") ? (
        <div className="student_dashboard">
          <Notifications />
          {activeSection !== 2 && <hr />}
          <div className="dashboard_left_box">
            <div className="left_logo">
              <img src={rl_logo_img} alt="logo icon" className="logo_icon" />
            </div>
            <div className="left_content">
              <div className="left_item">
                <img
                  src={
                    activeSection === 0 ? dashboard_icon_hover : dashboard_icon
                  }
                  alt="logo icon"
                  className="logo_icon"
                  onClick={() => handleDashboardItem(0)}
                />
                <p
                  className={
                    activeSection === 0
                      ? "icon_text icon_text_hover"
                      : "icon_text"
                  }
                >
                  Dashboard
                </p>
              </div>
              <div className="left_item">
                <img
                  src={activeSection === 1 ? grade_icon_hover : grade_icon}
                  alt="logo icon"
                  className="logo_icon"
                  onClick={() => handleDashboardItem(1)}
                />
                <p
                  className={
                    activeSection === 1
                      ? "icon_text icon_text_hover"
                      : "icon_text"
                  }
                >
                  Grades
                </p>
              </div>
              <div className="left_item">
                <img
                  src={activeSection === 2 ? profile_icon_hover : profile_icon}
                  alt="logo icon"
                  className="logo_icon"
                  onClick={() => handleDashboardItem(2)}
                />
                <p
                  className={
                    activeSection === 2
                      ? "icon_text icon_text_hover"
                      : "icon_text"
                  }
                >
                  My Website
                </p>
              </div>
              <div className="left_item">
                <img
                  src={activeSection === 3 ? support_icon_hover : support_icon}
                  alt="logo icon"
                  className="logo_img"
                  onClick={() => handleDashboardItem(3)}
                />
                <p
                  className={
                    activeSection === 3
                      ? "icon_text icon_text_hover"
                      : "icon_text"
                  }
                >
                  Help & Support
                </p>
              </div>
            </div>
          </div>
          <div className="dashboard_right_box">
            <div
              className={
                activeSection !== 2
                  ? "right_box_header"
                  : "right_box_header student_profile_header"
              }
            >
              <div className="school_box">
                <h1 className="school_name">
                  {studentProfileData && studentProfileData.school}
                </h1>
              </div>
              {activeSection !== 2 ? (
                <div className="logout_box">
                  <button className="logout_button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="student_header_btns">
                  <button className="btn_share_website">Share Website</button>
                  <button className="btn_visitors">Visitors: 301</button>
                </div>
              )}
            </div>
            <div className="right_main_box">
              <ToggleDashboardSectionComponent
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                expand1={expand1}
                expand2={expand2}
                expand3={expand3}
                expand4={expand4}
                setExpand1={setExpand1}
                setExpand2={setExpand2}
                setExpand3={setExpand3}
                setExpand4={setExpand4}
                todaysDate={todaysDate}
                // navigate={navigate}
                userDetail={userDetail}
                studentProfilePic={studentProfilePic}
                setStudentProfilePic={setStudentProfilePic}
                isEditAbout={isEditAbout}
                setIsEditAbout={setIsEditAbout}
                studentProfileData={studentProfileData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                projectLinks={projectLinks}
                setProjectLinks={setProjectLinks}
                setInputLink={setInputLink}
                inputLink={inputLink}
                beginnerSkill={beginnerSkill}
                intermediateSkill={intermediateSkill}
                advancedSkill={advancedSkill}
                softSkills={softSkills}
                setBeginnerSkill={setBeginnerSkill}
                setIntermediateSkill={setIntermediateSkill}
                setAdvancedSkill={setAdvancedSkill}
                setSoftSkills={setSoftSkills}
                isSkill={isSkill}
                setIsSkill={setIsSkill}
                setStudentProfileData={setStudentProfileData}
                skillType={skillType}
                setSkillType={setSkillType}
                projects={projects}
                setProjects={setProjects}
                scheduleData={scheduleData}
                quizData={quizData}
                loading={loading}
                session1Lock={session1Lock}
                setSession1Lock={setSession1Lock}
                quiz1Lock={quiz1Lock}
                setQuiz1Lock={setQuiz1Lock}
                feedback1Lock={feedback1Lock}
                setFeedback1Lock={setFeedback1Lock}
                resources1Lock={resources1Lock}
                setResources1Lock={setResources1Lock}
                projectId={projectId}
                setProjectId={setProjectId}
                saveLoading={saveLoading}
                setSaveLoading={setSaveLoading}
              />
            </div>
          </div>
        </div>
      ) : (
        <h1>No Access</h1>
      )}
    </>
  );
}

export default StudentDashboard;
