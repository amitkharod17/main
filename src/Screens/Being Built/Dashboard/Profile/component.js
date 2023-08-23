import React, { useState } from "react";
import banner from "./banner.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar/component";
import ProjectComponent from "../../../NewSummerCampDashboard/ProjectComponent/ProjectComponent";
import ScdTopComponent from "../../../NewSummerCampDashboard/ScdTopComponent/ScdTopComponent";
import { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import log from "../AboutMe/log.png";
import NavbarSecond from "../NavbarSecond/component";
import { Link } from "react-router-dom";

const Left = ({ profile, profileViews, params }) => {
  const [copied, setCopied] = useState(false);
  console.log("profile is: ", profile);
  useEffect(() => {
    if (copied) alert("Link copied!");
  }, [copied]);
  return (
    <div className="">
      <div className="pt-0">
        {/* <div className="my-4 ">
                <div className="school-text">{profile.school}</div>
            </div>
            <div className="mr-5" style={{ position: 'relative' }}>
                <div className="banner-text text-center">
                    <div className="d-flex m-auto">
                        ROBOTICS & CODING SUMMER CAMP
                    </div>
                </div>
                <img src={banner} alt="" className='w-100' />
            </div> */}
        {/* <ScdTopComponent views={profileViews} /> */}

        {/* <p>change left</p> */}

        {/* <div className="text-center profile-heading my-4">Profile</div> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="font-montserrat" style={{ fontSize: 25, margin: 20 }}>
            Profile
          </p>
          <img
            style={{
              width: "171px",
              height: "29px",
              alignSelf: "center",
              marginRight: "30px",
            }}
            src={log}
          />
        </div>
        <div
          style={{
            borderRadius: 20,
            background: "#2A365A",
            width: "85%",
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
                {profile.name}
              </h5>
            </div>
            <div
              style={{ marginTop: 20, color: "white" }}
              className="col-6 font-montserrat"
            >
              <p style={{ color: "white", fontFamily: "Montserrat" }}>Class</p>
              <h5 style={{ color: "white", fontFamily: "Montserrat" }}>
                {" "}
                {profile.class}
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
                {profile.school}
              </h5>
            </div>

            <div class="col-6"></div>
          </div>
        </div>

        <div className="shareInfoDiv">
          <div className="profile-key">Bio</div>
          <div className="profile-value">{profile.about}</div>
          <div className="profile-key">Skills</div>
          <div className="d-flex flex-wrap scd_skills_box">
            {profile.skills.length > 0 &&
              profile.skills.map((skill, index) => {
                return <div className="scd_sb_item">{skill}</div>;
              })}
          </div>
          {/* <div className="text-center profile-heading my-4">Projects</div> */}
          {/* <div className="">
            <ProjectComponent />
          </div> */}

          <div className="profile-key">Projects</div>
          <div>
            <div className="student_projects_row">
              {profile.projects.length > 0 ? (
                profile.projects.map((project, index) => {
                  // console.log(project.projects.photo);
                  return (
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
                        <Link
                          to={{
                            pathname: `/preview-project-${project._id}`,
                            state: project,
                          }}
                        >
                          {" "}
                          <p className="project_title">{project.name}</p>
                        </Link>
                        {/* <a href={projects[0]} class="btn btn-primary">LED Blinking Project</a> */}
                      </div>
                      {/* <div className='project_edit_box'>
                                <img src={edit_icon} onClick={() => openModal('project', 'default', 0)} className="project_edit_icon" alt="Edit Logo" />
                            </div> */}
                    </div>
                  );
                })
              ) : (
                <h3 className="scd_pc_no_project_text">
                  You haven't added any projects.
                </h3>
              )}
            </div>
          </div>

          <div className=" profile-heading my-4">Cerificates</div>
          <div className="" id="certificates"></div>
        </div>

        {/* <div className="profile-key">Name</div>
        <div className="profile-value">{profile.name}</div>
        <div className="profile-key">Grade</div>
        <div className="profile-value">
          {profile.class} <sup>th</sup>
        </div>
        <div className="profile-key">Profile URL</div>
        <div className="profile-value">
          <CopyToClipboard
            text={`https://rancholabs.com/sc-profile-${params.id}`}
            onCopy={() => setCopied(true)}
          >
            <button className="btn btn-primary">Share</button>
          </CopyToClipboard>
        </div>
        <div className="profile-key">Bio</div>
        <div className="profile-value">{profile.about}</div>
        <div className="profile-key">Skills</div>
        <div className="d-flex flex-wrap scd_skills_box">
          {profile.skills.length > 0 &&
            profile.skills.map((skill, index) => {
              return <div className="scd_sb_item">{skill}</div>;
            })}
        </div>
        <div className="text-center profile-heading my-4">Projects</div>
        <div className="">
          <ProjectComponent />
        </div>
        <div className="text-center profile-heading my-4">Cerificates</div>
        <div className="" id="certificates">
          test
        </div> */}
      </div>
    </div>
  );
};

const PublicProfile = () => {
  document.body.style.backgroundColor = "white";

  const params = useParams();
  const [profile, set_profile] = useState({});
  const [profileViews, setProfileViews] = useState(null);

  if (!profile._id)
    axios
      .get(`/api/summercampbootcamp2022/profile/${params.id}`)
      .then((res) => {
        console.log(res.data);
        set_profile(res.data);
        // setProfileViews(res.data.student.visitors);
      });

  async function updateVisitors() {
    const studentId = params.id;
    // console.log(studentId, profileViews);
    try {
      const response = await axios.patch(
        `/api/summercamp2022/student/update/${studentId}`,
        { views: profileViews + 1 }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
      // alert('Something went wrong!');
    }
  }

  useEffect(() => {
    if (profileViews !== null) {
      updateVisitors();
    }
  }, [profileViews]);

  return (
    <div className="font-montserrat container-fluid py-0 ">
      <div className="mt-0">
        <div className="row" style={{ minHeight: "100vh" }}>
          <div className="col-3">
            {/* <Navbar></Navbar> */}
            <NavbarSecond shareFlag={true}></NavbarSecond>
          </div>
          <div className="col-9">
            {!profile._id ? (
              <></>
            ) : (
              <Left
                profile={profile}
                profileViews={profileViews}
                params={params}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
