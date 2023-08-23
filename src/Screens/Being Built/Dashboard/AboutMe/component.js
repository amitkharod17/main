import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import banner from "./banner.png";
import Modal from "react-modal";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../../../../Components/Loading";
import ScdTopComponent from "../../../NewSummerCampDashboard/ScdTopComponent/ScdTopComponent";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SideNav, Chevron, Icon } from "react-side-nav";
import NavbarSecond from "../NavbarSecond/component";
import log from "./log.png";
import crossButton from "./close-button.png";
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
const menuItems = [
  {
    id: 1,
    label: "Item 1",
    icon: "fas fa-battery-half",
    items: [
      { id: 11, label: "Item 1.1", icon: "fas fa-car", link: "/item11" },
      { id: 12, label: "Item 1.2", icon: "fas fa-bullhorn", link: "/item12" },
    ],
  },
];
const AboutMeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const [inputSkill, setInputSkill] = useState("");
  const [studentProfile, setStudentProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) alert("Link copied!");
  }, [copied]);

  const handleAddSkill = () => {
    console.log("handleAddSkill is clicked: ", skills);
    setSkills((prevSkills) => [...prevSkills, inputSkill]);
    setInputSkill("");
    closeModal();
  };

  const removeSkill = (skill, i) => {
    console.log("skill is: ", skill, i);
    const newSkills = skills.filter((x) => {
      return x !== skill;
    });
    console.log(newSkills);
    setSkills(newSkills);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSave = async () => {
    const studentId = JSON.parse(localStorage.getItem("scUserDetails")).userId;
    const newData = {
      name: studentProfile.name,
      photo: studentProfile.photo,
      studentClass: studentProfile.class,
      about: bio,
      skills: skills,
    };
    try {
      setLoading(true);
      const response = await axios.patch(
        `/api/summercamp2022/student/update/all/${studentId}`,
        newData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("scUserDetails")).token
            }`,
          },
        }
      );
      if (response.status === 200) {
        // console.log('Response', response.data);
        setLoading(false);
        alert("✅ Saved Successfully");
        getStudentProfile();
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      localStorage.removeItem("scUserDetails");
      window.location.reload();
    }
  };

  const getStudentProfile = async () => {
    const studentId = JSON.parse(localStorage.getItem("scUserDetails")).userId;
    try {
      const response = await axios.get(`/api/summercampbootcamp2022/profile`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("scUserDetails")).token
          }`,
        },
      });
      if (response.status === 200) {
        setStudentProfile(response.data);
        setSkills(response.data.skills);
        setBio(response.data.about);
        console.log(response.data, "satyy");
        setProjects(response.data.projects);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("scUserDetails")) {
      console.log("Api Calls");
      getStudentProfile();
    }
  }, []);
  var profile = studentProfile;

  const [activeTab, setActiveTab] = useState(1);
  var photos = [];

  return (
    <div>
      <div className="pt-0">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="font-montserrat" style={{ fontSize: 25, margin: 20 }}>
            Profile
          </p>
          <img
            style={{ width: "171px", height: "29px", alignSelf: "center" }}
            src={log}
          />
        </div>
        <div
          style={{
            borderRadius: 20,
            background: "#2A365A",
            width: "105%",
            minHeight: "200px",
          }}
        >
          <div style={{ margin: 10 }} className="row">
            <div
              style={{ marginTop: 20, color: "white" }}
              className="col-6 font-montserrat"
            >
              <p style={{ color: "white", fontFamily: "Montserrat" }}>Name</p>
              <h5 style={{ color: "white", fontFamily: "Montserrat" }}>
                {" "}
                {studentProfile && studentProfile.name}
              </h5>
            </div>
            <div
              style={{ marginTop: 20, color: "white" }}
              className="col-6 font-montserrat"
            >
              <p style={{ color: "white", fontFamily: "Montserrat" }}>Class</p>
              <h5 style={{ color: "white", fontFamily: "Montserrat" }}>
                {" "}
                {studentProfile && studentProfile.class}
              </h5>
            </div>
          </div>
          <div style={{ margin: 10 }} class="row">
            <div
              style={{ marginTop: 20, color: "white" }}
              className="col-6 font-montserrat"
            >
              <p style={{ color: "white", fontFamily: "Montserrat" }}>School</p>
              <h5 style={{ color: "white", fontFamily: "Montserrat" }}>
                {studentProfile && studentProfile.school}
              </h5>
            </div>
            <div class="col-6"></div>
          </div>
        </div>

        {/* <div className="profile-key">
            Profile URL
        </div>
        <div className="profile-value">
            <CopyToClipboard text={`https://rancholabs.com/sc-profile-${studentProfile && studentProfile._id}`}
                onCopy={() => setCopied(true)}>
                <button className="btn btn-primary">Share</button>
            </CopyToClipboard>
        </div> */}
        <br></br>
        <div className="profile-key">Bio</div>
        <div class="form-group profile-textarea">
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={{ width: "170%" }}
          >
            {studentProfile && studentProfile.about}
          </textarea>
        </div>

        <div className="profile-key">Skills</div>
        <div className="d-flex flex-wrap scd_skills_box">
          {skills.length > 0 &&
            skills.map((skill, index) => {
              return (
                <div className="scd_sb_item">
                  {skill}

                  <img
                    style={{
                      width: "15px",
                      height: "15px",
                      top: "25%",
                      right: "5%",
                    }}
                    className="cross-button"
                    src={crossButton}
                    alt="cross-button"
                    onClick={() => removeSkill(skill, index)}
                  />
                </div>
              );
            })}
          <div className="scd_sb_btn_cover">
            <button className="scd_sb_btn_add" onClick={openModal}>
              Add Skill
            </button>
          </div>

          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="scd_pc_modal_box">
              <div class="form-group mb-4">
                <label className="scd_pc_label" for="exampleInputEmail1">
                  Enter Your Skill
                </label>
                <input
                  value={inputSkill}
                  onChange={(e) => setInputSkill(e.target.value)}
                  type="text"
                  className="form-control scd_pc_input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Skill Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  className="scd_pc_btn_save"
                  onClick={handleAddSkill}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="scd_pc_btn_cancel"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* <div className='edit_project_modal'>
                    <div className='link_input_box text-center'>
                        <p className='add_link_text'>Enter your skill</p>
                        <input value={inputSkill} onChange={(e) => setInputSkill(e.target.value) } type="text" className='project_link_input scd_sb_input'/>
                    </div>
                    <div className='modal_btns'>
                        <button className='modal_save_btn' onClick={handleAddSkill} >Add</button>
                        <button className='modal_save_cancel' onClick={closeModal}>Cancel</button>
                    </div>
                </div> */}
          </Modal>
        </div>

        <button
          type="button"
          className="profile-button btn-info"
          disabled={skills.length === 0}
          onClick={handleSave}
        >
          {loading ? (
            <div className="d-flex justify-content-center">
              <Loading type="spin" color="#fff" width="28px" height="28px" />
            </div>
          ) : (
            "Save"
          )}
        </button>

        <div className="profile-key">Projects</div>
        <div>
          <div className="student_projects_row">
            {projects.length > 0 ? (
              projects.map((project, index) => {
                console.log("project is: ", project);
                return (
                  <Link
                    to={{
                      pathname: `/preview-project-${project._id}`,
                      state: project,
                    }}
                  >
                    <div
                      key={index}
                      className="card scd_projects_card projects_card position-relative"
                    >
                      <img
                        className="card-img-top scd_project_photo"
                        src={project.photos[0]}
                        alt="School Thumbnail"
                      />
                      <div className="card-body scd_card_body">
                        {" "}
                        <p className="project_title">{project.name}</p>
                        {/* <a href={projects[0]} class="btn btn-primary">LED Blinking Project</a> */}
                      </div>
                      {/* <div className='project_edit_box'>
                                <img src={edit_icon} onClick={() => openModal('project', 'default', 0)} className="project_edit_icon" alt="Edit Logo" />
                            </div> */}
                    </div>
                  </Link>
                );
              })
            ) : (
              <h3 className="scd_pc_no_project_text">
                You haven't added any projects.
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
