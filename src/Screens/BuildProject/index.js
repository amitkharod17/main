import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultHeader, updateHeader } from "../../Actions/Header";
import { setDefaultFooter, updateFooter } from "../../Actions/Footer";
import LogoImg from "./img/logo 4@2x.png";
import "./index.css";
import { instructorUpdateBatchProject } from "../../Actions/Instructor";
import ReactHTMLparser from "react-html-parser";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

Modal.setAppElement("#root");

function ProjectBuild({ location }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const params = queryString.parse(location.search);
  const [singleProject, setSingleProject] = useState({});
  const [singleCourse, setSingleCourse] = useState([]);
  const [singlebatch, setSinglebatch] = useState({});
  const [batchSingleProject, setbatchSingleProject] = useState({});
  const [singleSubmissionUser, setsingleSubmissionUser] = useState({});
  const [submitLink, setSubmitLink] = useState("");
  const [existingsubmission, setexistingsubmission] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  console.log(singlebatch);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const token = userInfo ? JSON.parse(userInfo).token : "";
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    axios
      .get(`/api/course/project/single/${params.project}`, config)
      .then((res) => {
        console.log(res.data);
        setSingleProject(res.data[0]);
      });
  }, []);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const token = userInfo ? JSON.parse(userInfo).token : "";
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    axios.get(`/api/batch/${params.batch}`, config).then((res) => {
      console.log(res.data);
      setSinglebatch(res.data.batch);
    });
  }, []);

  useEffect(() => {
    if (singleProject._id && singlebatch._id) {
      let _batchSingleProject = singlebatch.projects.filter(
        (proj) => proj.projectId === singleProject._id
      );
      if (_batchSingleProject.length > 0) {
        _batchSingleProject = _batchSingleProject[0];
        if (_batchSingleProject.submission) {
          let _singleSubmissionUser = _batchSingleProject.submission.filter(
            (sub) => sub.userId === userInfo.userId
          );
          if (_singleSubmissionUser.length > 0) {
            _singleSubmissionUser = _singleSubmissionUser[0];
            setsingleSubmissionUser(_singleSubmissionUser);
            setSubmitLink(_singleSubmissionUser.link);
            setexistingsubmission(true);
          }
        }
        setbatchSingleProject(_batchSingleProject);
      }
    }
  }, [singleProject, singlebatch]);

  console.log(singleSubmissionUser);
  console.log(batchSingleProject);

  useEffect(() => {
    if (singleProject.courseId) {
      const userInfo = localStorage.getItem("userInfo");
      const token = userInfo ? JSON.parse(userInfo).token : "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      };
      axios.get(`/api/course/${singleProject.courseId}`, config).then((res) => {
        console.log(res.data);
        setSingleCourse(res.data);
      });
    }
  }, [singleProject]);
  console.log(singleProject);

  useEffect(() => {
    dispatch(updateHeader({ headerDisplay: "none" }));
    dispatch(updateFooter({ footerDisplay: "none" }));

    return () => {
      dispatch(setDefaultHeader());
      dispatch(setDefaultFooter());
    };
  }, []);

  console.log(userInfo);

  const addSubmission = () => {
    let singlePR = singlebatch.projects.filter(
      (pr) => pr.projectId === params.project
    );
    if (singlePR.length > 0) {
      let count = 0;
      singlePR = singlePR[0];
      singlePR.submission.forEach((subm) => {
        if (subm.userId === userInfo.userId) {
          subm.link = submitLink;
          count++;
        }
      });
      let submissions = [...singlePR.submission];
      console.log(submissions);
      if (count === 0) {
        submissions.push({
          userId: userInfo.userId,
          link: submitLink,
        });
      }
      dispatch(
        instructorUpdateBatchProject(
          { submission: submissions },
          params.batch,
          params.project
        )
      );
      alert("Submission Added!");
    }
  };

  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const backToDashboard = () => {
    history.push("/dashboard");
  };

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

  console.log(singleSubmissionUser.link);

  const handleSubmission = () => {
    if (singleSubmissionUser.link) {
      setIsModalOpen(true);
    } else {
      alert("No submissions yet...");
    }
  };

  return (
    <div className="buildProject">
      <div className="buildProject__header">
        <img
          style={{
            cursor: "pointer",
          }}
          onClick={goToHomePage}
          src={LogoImg}
        ></img>
        <button onClick={handleSubmission}>Your Submissions</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
        >
          <div className="submission">
            <IconButton onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <h3>Your Submission</h3>
          <ul>
            {/* {
              (sub = batchSingleProject?.submission.map((sb) => {
                <li>
                  <a href={sb.link}>{sb.link}</a>
                </li>;
              }))
            } */}
            <li>
              <a href={`${singleSubmissionUser.link}`}>
                {singleSubmissionUser.link}
              </a>
            </li>
          </ul>
        </Modal>
        <button onClick={backToDashboard}>Back To DashBoard</button>
      </div>
      <div className="buildProject__body">
        <div className="buildProject__bodyHeader">
          <h3 id="project_name">
            {"Project " + singleProject.no + ": " + singleProject.name}
          </h3>
          <h3 id="project_course_name">
            {singleCourse.courseGroup?.name + ": " + singleCourse.name}
          </h3>
        </div>
        <div className="buildProject__body__contentParent">
          <div className="buildProject__body__content">
            <div className="buildProject__body__contentSection">
              <h3>Project Description</h3>
              <h3>{ReactHTMLparser(singleProject.question)}</h3>
            </div>
            <div className="buildProject__body__contentSection__image">
              <h3>{"Deadline : " + params.deadline}</h3>
              <img src={singleProject.mainimage?.filePath}></img>
            </div>
          </div>
          <input
            placeholder="Add link with http/https"
            value={submitLink}
            onChange={(e) => setSubmitLink(e.target.value)}
          ></input>
          <button className="buildProject__submitBtn" onClick={addSubmission}>
            {setexistingsubmission ? "Update Submission" : "Add Submission"}
          </button>
        </div>
        <div className="buildProject__body__contentParent buildProject__instructor">
          <h3>
            Grade:{" "}
            {singleSubmissionUser.instructorGrade
              ? singleSubmissionUser.instructorGrade
              : "Not graded yet"}
          </h3>
          <h3>Teacher's Notes:</h3>
          <div>
            {singleSubmissionUser.instructorComment ? (
              <h3>{singleSubmissionUser.instructorComment}</h3>
            ) : (
              <h3>Teacher's feedback will appear here.</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBuild;
