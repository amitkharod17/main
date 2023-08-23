import React, { useRef } from "react";
import "./SessionComponent.css";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Modal from "react-modal";
// import Editor, { useMonaco } from "@monaco-editor/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { useEffect } from "react";
// import down_arrow_img from "../Assets/white_down_arrow_img.png";
import down_arrow_img from "../Assets/Vector_2.png";
import ScdTopComponent from "../ScdTopComponent/ScdTopComponent";
import { useState } from "react";
import axios from "axios";
import banner from "./banner.png";
import { margin } from "@mui/system";
import upload from "./upload.svg";
import Loading from "../../../Components/Loading";
import { Link } from "react-router-dom";

import user from "./User.svg";
import monitor from "./monitor.png";
import briefcase from "./briefcase.png";
import moment from "moment";

import crossButton from "./cross.png";

const CustonIcon = () => {
  return (
    <img src={down_arrow_img} className="down_arrow_img" alt="arrow img" />
  );
};
const Images = (props) => {
  return <div className="d-inline" id="project_images"></div>;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "-50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    width: "800px",
  },
};

const SessionFont = {
  fontWeight: "400",
  fontSize: "14px",

  height: "28px",
  width: "522px",
  paddingLeft: "20px",
  fontFamily: "Montserrat,sans-serif",
  color: "#fff",
};

const SessionFont2 = {
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "28px",
  height: "28px",
  width: "100%",
  paddingLeft: "20px",
  fontFamily: "Montserrat,sans-serif",
  color: "#fff",
};

const SessionFont3 = {
  fontWeight: "600",
  fontSize: "20px",
  height: "28px",
  width: "522px",
  paddingLeft: "20px",
  fontFamily: "Montserrat, sans-serif",
  color: "rgb(255, 255, 255)",
};

const sessionsData = [
  {
    title: "Session",
    date: "19 Jun (Sun)",
    onlyDate: "19",
    month: "June",
    day: "Sunday",
    topic: "Orientation",
    classroomProject: "",
  },
  {
    title: "Session",
    date: "20 Jun (Mon)",
    onlyDate: "20",
    month: "June",
    day: "Monday",
    topic: `Block Programming (LED)+Breadboard 
        What is
        a sensor?
         Ultrasonic 
        Sensor +
        Multimeter`,
    classroomProject: `LED Blink, Block Coding,
        Traffic Light Controller
        Temperature Sensor
        Social Distancing Project`,
    sessionLink:
      "https://www.canva.com/design/DAEZHTAGmLU/P6X_DnGMn71Wb1q3JfDyyA/view?utm_content=DAEZHTAGmLU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink:
      "https://docs.google.com/document/d/1wr73PAX40bpkK3r_dscoQONdz5iHvEnyVexMwQsKod8/edit?usp=sharing",
  },
  {
    title: "Session",
    date: "21 Jun (Tue)",
    onlyDate: "21",
    month: "June",
    day: "Tuesday",
    topic: `LED Blink, Block Coding,

        Traffic Light Controller
        
        Temperature Sensor
        
        Social Distancing Project`,
    classroomProject: `Door Bell Project

        Thief Detection
        
        Flex Sensor Project`,
    sessionLink:
      "https://www.canva.com/design/DAEZHTAGmLU/P6X_DnGMn71Wb1q3JfDyyA/view?utm_content=DAEZHTAGmLU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink:
      "https://docs.google.com/document/d/1KDk3NrS4ui_NLgOrWjrKkSNW7nsvpF0oPsvRZpqliDc/edit?usp=sharing",
  },
  {
    title: "Session",
    date: "22 Jun (Wed)",
    onlyDate: "22",
    month: "June",
    day: "Wednesday",
    topic: `Text Programming 
        Variable
        C++/C  
        Data Types + Operator
        If else Conditions
        `,
    classroomProject: `2 LED Blink
        Ultrasonic Distance
        Find the Greatest
        Number
        `,
    sessionLink:
      "https://www.canva.com/design/DAEe_dm9mLs/si_POvPapDcjLgw-2ybChA/view?utm_content=DAEe_dm9mLs&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink:
      "https://docs.google.com/document/d/1aAvus9Rc_LwSUuWfUnjeqJxKmmkqlk6iAIajnEO_Cy8/edit?usp=sharing",
  },
  {
    title: "Session",
    date: "23 Jun (Thu)",
    onlyDate: "23",
    month: "June",
    day: "Thursday",
    topic: `Loop for (Servo motor )
        Loop while
        Function`,
    classroomProject: `Servo motor project
        Smart dustbin project
        Simple robot using 
        button`,
    sessionLink:
      "https://www.canva.com/design/DAEgrj51rEs/UkiZ_YFijt1ap8WhaEKMWg/view?utm_content=DAEgrj51rEs&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink:
      "https://docs.google.com/document/d/12B10Q9tIpc0pjV5EkOcq_mqPSJUqobvfe-AznH7YIQ8/edit?usp=sharing",
  },
  {
    title: "Session",
    date: "24 Jun (Fri)",
    onlyDate: "24",
    month: "June",
    day: "Friday",
    topic: `Types of motor. Motor Driver
        driver L293D(Tinkercad)
        Creating first robot
        Interfacing`,
    classroomProject: `Motor movements
        L298/Connect motor 
        to motor Line following
        robot`,
    sessionLink:
      "https://www.canva.com/design/DAEe_ShAJwA/N-rMakFttKl3UNuy5QVTZA/view?utm_content=DAEe_ShAJwA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink:
      "https://docs.google.com/document/d/1Fne6CNUrM1Ag8cA_V7hPwQTZXz4MJ7UE2jRAHKi5RCc/edit?usp=sharing",
  },
  {
    title: "Session",
    date: "28 Jun (Tue)",
    onlyDate: "28",
    month: "June",
    day: "Tuesday",
    topic: `Creating first robot Coding
        Creating second robot
        Interfacing. Creating second 
        robot
        Coding`,
    classroomProject: `Line following robot
        Obstacle avoiding robot
        Obstacle avoiding robot`,
    sessionLink:
      "https://www.canva.com/design/DAEgrecyyac/gl7_rl077GuLxmv9uQ_1pg/view?utm_content=DAEgrecyyac&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink: "",
  },
  {
    title: "Session",
    date: "29 Jun (Wed)",
    onlyDate: "29",
    month: "June",
    day: "Wednesday",
    topic: `Innovation project finalization
                Innovation project documentation
                Innovation project development mentorship
        `,
    classroomProject: ``,
    sessionLink:
      "https://www.canva.com/design/DAEgrbHRZ3I/woIKEpA441TqfPhrZ98Eyw/view?utm_content=DAEgrbHRZ3I&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink: "",
  },
  {
    title: "Session",
    date: "30 Jun (Thu)",
    onlyDate: "30",
    month: "June",
    day: "Thursday",
    topic: `Innovation project development 
        mentorship & presentation
        Project development
        Final project development`,
    classroomProject: ``,
    sessionLink:
      "https://www.canva.com/design/DAEgrugwtx4/2EuG8M49BpklVNB5oWE1cA/view?utm_content=DAEgrugwtx4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink: "",
  },
  {
    title: "Session",
    date: "3 Jul (Sun)",
    onlyDate: "3",
    month: "July",
    day: "Sunday",
    topic: `Project Exhibition by students`,
    classroomProject: ``,
    sessionLink:
      "https://www.canva.com/design/DAEgrnuKnD0/11F92CRFVBMbi08dZdatnw/view?utm_content=DAEgrnuKnD0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    hwLink: "",
  },
];
function onClickHandler(ev) {
  var el = (window._protected_reference = document.createElement("INPUT"));
  el.type = "file";
  el.accept = "image/*";
  el.multiple = "multiple";
  el.addEventListener("change", function (ev2) {
    if (el.files.length) {
      convertToBase64(el.files[0]);
      document.getElementById(
        "project_images"
      ).innerHTML += `<img src=${URL.createObjectURL(el.files[0])} />`;
    }
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(function () {
      el = window._protected_reference = undefined;
    });
  });

  el.click();
}

function displayProjectImages(images) {
  console.log("images is: ", images);
  return images.map((image) => {
    console.log("under function image is: ", image);
    document.getElementById(
      "project_images"
    ).innerHTML += `<img src=${image} />`;
  });
}

var photos = [];
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      photos.push(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

function SessionComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [studentProfile, setStudentProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState("");
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
      }
    } catch (err) {
      alert("Something went wrong", err);
    }
  };

  let options = [
    { value: "1", label: "Arduino + Cable", qty: 1 },
    { value: "2", label: "Jumper wires (M-M)", qty: 1 },
    { value: "3", label: "Jumper wires (M-F)", qty: 1 },
    { value: "4", label: "Ultrasonic sensor", qty: 1 },
    { value: "5", label: "IR sensor", qty: 1 },
    { value: "7", label: "Smoke sensor", qty: 1 },
    { value: "6", label: "LEDs", qty: 1 },
    { value: "8", label: "DHT 11 sensor", qty: 1 },
    { value: "9", label: "Resistor box", qty: 1 },
    { value: "10", label: "Castor Wheel", qty: 1 },
    { value: "11", label: "Multimeter", qty: 1 },

    { value: "12", label: "Screw Driver", qty: 1 },

    { value: "13", label: "Wheel", qty: 1 },
    { value: "14", label: "BO motor", qty: 1 },

    { value: "15", label: "Servo motor", qty: 1 },
    { value: "16", label: "PIR Sensor", qty: 1 },

    { value: "17", label: "Breadboard Mini", qty: 1 },
    { value: "18", label: "Motor Driver Module (L298N)", qty: 1 },

    { value: "19", label: "Push button", qty: 1 },
    { value: "20", label: "Switch", qty: 1 },
    { value: "21", label: "Chassis (Acrylic chassis + motor + wheels", qty: 1 },
    { value: "22", label: "Potentiometer", qty: 1 },
    { value: "23", label: "Vanilla", qty: 1 },
  ];
  const [options2, setOptions2] = useState(options);
  const comps = [];

  const [componen, setComponen] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("scUserDetails")) {
      getStudentProfile();
    }
  }, []);
  var profile = studentProfile;

  const [activeExpand, setActiveExpand] = useState(-1);
  const toggleExpand = (index) => {
    if (activeExpand !== index) setActiveExpand(index);
    else setActiveExpand(-1);
  };
  const [projectImage, setProjectImage] = useState("");
  const [edittedProject, setSelectedProject] = useState({});
  const projectNameRef = useRef("");
  const projectDescriptionRef = useRef("");
  const projectVideoRef = useRef("");
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [comp, setComp] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectComponents, setProjectComponents] = useState([]);
  const [projectVideoLink, setProjectVideoLink] = useState("");
  const [projectImages, setProjectImges] = useState([]);
  const [projectFileName, setProjectFileName] = useState("");
  const [pid, setPid] = useState("");
  const [projectCode, setProjectCode] = useState(`#include <iostream>

  int main()
  {
    std::cout << "Hello World!";
  }`);

  const projectCodeRef = useRef("");
  const projectFileNameRef = useRef("");
  const [projects, setProjects] = useState([]);
  var submitted = false;
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        photos.push(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setProjectImage(base64);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(e) {
    setIsOpen(true);
    if (e === "edit") {
      console.log("edit");
      setEdit(true);
      setCreate(false);
    } else {
      console.log("create");
      setCreate(true);
      setEdit(false);
    }
  }

  const handleProjectUpload = async (e) => {
    e.preventDefault();

    const projectData = {
      name: projectNameRef.current.value,
      description: projectDescriptionRef.current.value,
      code: code,
      fileName: projectFileNameRef.current.value,
      video: projectVideoRef.current.value,
      is_private: false,
      photos,
      session: activeExpand + 1,
      components: comp,
    };

    if (create) {
      try {
        setLoading(true);
        const response = await axios.post(
          `/api/summercampbootcamp2022/add_project/`,
          projectData,
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
          setLoading(false);

          alert("Project Saved Successfully!!");

          closeModal();
          window.location.reload();
        }
        const studentId = JSON.parse(
          localStorage.getItem("scUserDetails")
        ).userId;
      } catch (err) {
        setLoading(false);
        alert("Something went wrong!!", err);
      }
    }

    if (edit) {
      try {
        const stu = JSON.parse(localStorage.getItem("scUserDetails")).userId;

        setLoading(true);

        const response = await axios.patch(
          `/api/summercampbootcamp2022/updateProject/${stu}/${pid}/`,
          {
            name: projectTitle,
            description: projectDescription,
            code: projectCode,
            fileName: projectFileName,
            video: projectVideoLink,
            is_private: false,
            photos: projectImages,

            components: projectComponents,
          },
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
          setLoading(false);

          alert("Project Saved Successfully!!");

          closeModal();
        }
        const studentId = JSON.parse(
          localStorage.getItem("scUserDetails")
        ).userId;
      } catch (err) {
        setLoading(false);
        alert("Something went wrong!!", err);
      }
    }
  };

  const getProjectDetails = (projectId) => {
    var selectedProject = {};
    studentProfile.projects.map((project) => {
      if (project._id === projectId) {
        selectedProject = project;
        setSelectedProject(selectedProject);
      }
    });

    const {
      code,
      description,
      fileName,
      name,
      photos,
      video,
      _id,
      components,
    } = selectedProject;

    setProjectTitle(name);
    setProjectDescription(description);
    // setProjectComponents()
    setProjectVideoLink(video);
    setProjectImges(photos);
    setProjectFileName(fileName);
    setProjectCode(code);
    setPid(_id);
    setProjectComponents(components);
  };

  const clearProjectDetails = () => {
    setProjectTitle("");
    setProjectDescription("");
    // setProjectComponents()
    setProjectVideoLink("");
    setProjectImges([]);
    setProjectFileName("");
    setProjectCode(`#include <iostream>

    int main()
    {
      std::cout << "Hello World!";
    }`);
  };

  const deleteComponent = (i) => {
    if (i.qty > 1) {
      comp.map((compo, index) => {
        if (compo.value === i.value) {
          let x = comp;
          x[index].qty = x[index].qty - 1;
          setComp([...x]);
        }
      });
    } else {
      comp.map((compo, index) => {
        if (compo.value === i.value) {
          let x = comp;
          x.splice(index, 1);
          setComp([...x]);
        }
      });
    }
  };

  return (
    <div style={{ paddingLeft: "50px" }}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="scd_pc_modal_box">
          <form method="post" onSubmit={handleProjectUpload}>
            <div class="form-group mb-4">
              <label className="scd_pc_label" for="exampleInputEmail1">
                Project Title
              </label>
              <input
                ref={projectNameRef}
                type="text"
                className="form-control scd_pc_input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Project Name"
                autoComplete="off"
                required
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </div>
            <div class="form-group mb-4">
              <label className="scd_pc_label" for="exampleInputEmail1">
                Project Description
              </label>
              <textarea
                ref={projectDescriptionRef}
                type="text"
                className="form-control scd_pc_input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Project Description"
                autoComplete="off"
                required
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>

            <div class="form-group mb-4">
              <label className="scd_pc_label">Add Components</label>
              <Select
                options={options2}
                onChange={(e) => {
                  if (comp.length > 0) {
                    let found = false;
                    for (let i = 0; i < comp.length; i++) {
                      if (comp[i].value === e.value) {
                        found = true;
                        const old = comp[i];
                        comp.splice(i, 1);
                        setComp((prev) => comp);
                        setComp((prev) => [
                          ...prev,
                          {
                            value: old.value,
                            label: old.label,
                            qty: old.qty + 1,
                          },
                        ]);
                      }
                    }
                    if (!found) {
                      setComp((prevComp) => [...prevComp, e]);
                    }
                  } else {
                    setComp((prevComp) => [...prevComp, e]);
                  }
                }}
              />
            </div>
            <div>
              {comp.map((component, index) => {
                return (
                  <div
                    className="row"
                    style={{
                      width: "439px",
                      height: "32px",
                      backgroundColor: "#2A365A",
                      display: "flex",
                      borderRadius: "5px",
                      marginBottom: "5px",
                      position: "relative",
                    }}
                  >
                    <div
                      className="col-9"
                      style={{ color: "white", alignSelf: "center" }}
                    >
                      {component.label}
                    </div>
                    <div
                      className="col-2"
                      style={{ color: "white", alignSelf: "center" }}
                    >
                      {component.qty}
                    </div>
                    <div
                      style={{ position: "absolute", top: "0", right: "0" }}
                      onClick={() => deleteComponent(component)}
                    >
                      <img
                        src={crossButton}
                        alt="cross_button"
                        style={{ width: "20px", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <label className="scd_pc_label" for="exampleInputEmail1">
                Add Video Link
              </label>
              <br />
              <input
                ref={projectVideoRef}
                type="text"
                className="form-control scd_pc_input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Video Link"
                autoComplete="off"
                required
                value={projectVideoLink}
                onChange={(e) => setProjectVideoLink(e.target.value)}
              />
            </div>
            <div class="form-group mb-4">
              <label className="scd_pc_label" for="exampleFormControlFile1">
                Upload Project Image
              </label>
              <div>
                {<Images />}
                <img
                  src={upload}
                  alt=""
                  className="upload-button"
                  onClick={onClickHandler}
                />
              </div>

              {/* <input onChange={handleFileUpload} type="file" className="form-control-file" id="exampleFormControlFile1" required /> */}
            </div>
            <div class="form-group mb-4">
              <label className="scd_pc_label" for="exampleInputEmail1">
                Code File Name
              </label>
              <br />
              <input
                ref={projectFileNameRef}
                type="text"
                className="form-control scd_pc_input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="File Name"
                autoComplete="off"
                required
                value={projectFileName}
                onChange={(e) => setProjectFileName(e.target.value)}
              />
            </div>
            <div class="form-group mb-4">
              <label className="scd_pc_label" for="exampleInputEmail1">
                Add Code{" "}
              </label>
              <br />
              {/* <Editor
                onChange={(value) => {
                  setCode(value);
                }}
                theme="vs-dark"
                height="40vh"
                defaultLanguage="C++"
                defaultValue={projectCode}
              /> */}
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="scd_pc_btn_save">
                {loading ? (
                  <div className="d-flex justify-content-center">
                    <Loading
                      type="spin"
                      color="#fff"
                      width="28px"
                      height="28px"
                    />
                  </div>
                ) : (
                  "Save"
                )}
              </button>
              <button
                type="button"
                className="scd_pc_btn_cancel"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: 40,
            fontFamily: "Montserrat",
            fontWeight: 600,
            color: "rgb(42 54 90)",
          }}
        >
          Welcome, {studentProfile.name}
        </h2>
        <p
          style={{
            marginRight: 30,
            fontSize: 20,
            fontFamily: "Montserrat",
            fontWeight: 600,
          }}
        >
          {moment().format("Do MMM YYYY")}
        </p>
      </div>
      <br></br>
      <div className="mr-5 py-4" style={{ position: "relative" }}>
        <div className="banner-text text-center">
          <div>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 27,
                marginTop: 30,
                fontWeight: 600,
                color: "#020122",
              }}
            >
              ROBOTICS & CODING SUMMER CAMP
            </p>
          </div>
        </div>
      </div>
      <div className="sc22d_session_component">
        {/* <ScdTopComponent /> */}

        <div className="sc22d_sc_content">
          {sessionsData.map((sessionDetails, index) => {
            if (index !== 0) {
              return (
                <>
                  <Accordion
                    style={
                      activeExpand !== index
                        ? {
                            borderRadius: "16px",
                            // background: "#2A365A",
                            boxShadow: "3px 12px 8px rgba(2, 1, 34, 0.25)",
                            margin: "12px 0px",
                          }
                        : {
                            borderRadius: "16px",
                            // background: "#020122",
                            boxShadow: "3px 12px 8px rgba(2, 1, 34, 0.25)",
                            margin: "12px 0px",
                          }
                    }
                  >
                    <AccordionSummary
                      expandIcon={<CustonIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={
                        activeExpand === index
                          ? "accordion_header  active"
                          : "accordion_header not_active"
                      }
                      onClick={() => toggleExpand(index)}
                      style={{
                        borderLeftColor: "transparent",
                        borderLeftWidth: "10px",
                        borderStyle: "solid",
                        borderRadius: "10px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      <div className="accordion_title">
                        <div className="sessionHeader">
                          <h5
                            className="sessionHeader5"
                            style={
                              window.innerWidth > 900
                                ? SessionFont3
                                : SessionFont2
                            }
                          >
                            Session {index} - {sessionDetails.topic}
                          </h5>
                        </div>
                        <div className="sessionParaDiv">
                          <p className="sessionPara" style={{ color: "white" }}>
                            {sessionDetails.date}
                          </p>
                        </div>
                      </div>

                      <div className="accordion_subtitle"></div>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderLeftColor: "transparent",
                      }}
                      className="details_box"
                    >
                      {/* <Typography> */}
                      <div className="content_box">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="navicon_dup mx-3 d-flex">
                            <div className="d-flex m-auto">
                              <img
                                style={{ height: 30, width: 30 }}
                                src={monitor}
                                alt=""
                                className="my-auto cursor-pointer"
                              />
                            </div>
                          </div>
                          <p style={{ fontStyle: "underline" }}>
                            <a
                              target="_blank"
                              className="dropdownLink"
                              href={sessionDetails.sessionLink}
                            >
                              Class<br></br> Slides
                            </a>
                          </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="navicon_dup mx-3 d-flex">
                            <div className="d-flex m-auto">
                              <img
                                style={{ height: 30, width: 30 }}
                                src={briefcase}
                                alt=""
                                className="my-auto cursor-pointer"
                              />
                            </div>
                          </div>
                          <p style={{ fontStyle: "underline" }}>
                            <a
                              target="_blank"
                              className="dropdownLink"
                              href={sessionDetails.hwLink}
                            >
                              HomeWork<br></br> Project
                            </a>
                          </p>
                        </div>
                        <div>
                          {studentProfile.projects &&
                            studentProfile.projects.map((project) => {
                              if (project["session"] - 0 === index + 1) {
                                submitted = true;
                                return (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Link
                                      to={{
                                        pathname: `/preview-project-${project._id}`,
                                        state: project,
                                      }}
                                    >
                                      <button className="scd_logout">
                                        View Project
                                      </button>
                                    </Link>
                                    <button
                                      className="scd_logout"
                                      onClick={() => {
                                        openModal("edit");
                                        getProjectDetails(project._id);
                                        displayProjectImages(projectImages);
                                      }}
                                    >
                                      Edit Project
                                    </button>
                                  </div>
                                );
                              } else return <></>;
                            })}
                          {!submitted && (
                            <button
                              className="scd_logout"
                              onClick={() => {
                                openModal("create");
                                clearProjectDetails();
                              }}
                            >
                              Submit H.W. Project
                            </button>
                          )}
                          {(submitted = false)}
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <br></br>
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default SessionComponent;
