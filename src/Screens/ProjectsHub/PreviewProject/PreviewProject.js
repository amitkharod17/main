import React, { useState, useEffect, createRef } from "react";
import { useParams } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import Editor, { useMonaco } from "@monaco-editor/react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { useLocation } from "react-router-dom";
import "./PreviewProject.css";

import table_heading_icon from "../assets/table_heading_icon.png";

import download_img_pp from "../assets/download_img_pp.png";
import { generateZip } from "./downloadZIP";

import Modal from "react-modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateCodesZip } from "./dowloadCodeZip";
import copyIcon from "./copyIcon.png";

const customStyles = {
  content: {
    width: window.innerWidth < 900 ? "98%" : "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px 5px rgba(0,0,0,0.5)",
    position: "absolute",
    background: "#c2cdf7",
  },
};

Modal.setAppElement("#root");

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 800 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 800, min: 600 },
    items: 1,
  },
  mobileSmall: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

function PreviewProject() {
  let [projectDetails, setProjectDetails] = useState({});
  const [projectSteps, setProjectSteps] = useState([]);
  const [projectDiagrams, setProjectDiagrams] = useState([]);
  const [projectComponents, setProjectComponents] = useState([]);
  const [projectViews, setProjectViews] = useState(null);
  const [projectLikes, setProjectLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [codes, setCodes] = useState([]);
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const [video, setVideo] = useState("null");
  const [currentContent, setCurrentContent] = useState(0);
  const [isSlideToc, setIsSlideToc] = useState(false);

  const params = useParams();
  const location = useLocation();
  const scrollDiv = createRef();

  const scrollDivv = createRef();

  const scrollDis = createRef();

  const scrollDivvv = createRef();

  const scrollDivvvv = createRef();
  console.log(location.state);
  const projectData = params.projectId;
  console.log(projectData);
  projectDetails = location.state;
  function openModal() {
    setIsOpen(true);
  }

  //   setCodes(projectData.code);
  function closeModal() {
    setIsOpen(false);
  }

  console.log("projectDetails is: ", projectDetails);

  const getProjectDetails = () => {
    try {
      console.log("sasasa");
      const response = axios.get(
        `/api/summercampbootcamp2022/get_projectById/${projectData}`
      );
      if (response.status === 200) {
        console.log(response.data, "Saasasas");
        setProjectDetails(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProjectSteps = async () => {
    try {
      const response = await axios.get(
        `/api/projects/step/${params.projectId}`
      );
      if (response.status === 200) {
        // console.log("Project Steps: ", response.data);
        setProjectSteps(response.data.stepsArray);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProjectDiagrams = async () => {
    try {
      const projectDiagrams = await axios.get(
        `/api/projects/diagram/${params.projectId}`
      );
      if (projectDiagrams.status === 200) {
        // console.log("Project Diagram: ", projectDiagrams.data);
        setProjectDiagrams(projectDiagrams.data.diagrams);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateProjectViews = async () => {
    try {
      const response = await axios.patch(
        `
            /api/projects/newproject/update-views/${params.projectId}`,
        {
          projectViews: projectViews + 1,
        }
      );
      if (response.status === 200) {
        // console.log('Project View', response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateProjectLikes = async (change) => {
    try {
      const response = await axios.patch(
        `
            /api/projects/newproject/update-likes/${params.projectId}`,
        {
          projectLikes: projectLikes + change,
        }
      );
      if (response.status === 200) {
        // console.log('Project View', response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnCart = (component) => {
    // console.log(component);
    window.open(component.componentData.componentCartLink, "_blank");
  };

  const handleOnVideo = (component) => {
    window.open(component.componentData.componentVideoLink, "_blank");
  };

  const handleLiked = () => {
    if (localStorage.getItem("projectLikes")) {
      let likedArray = JSON.parse(localStorage.getItem("projectLikes"));
      if (likedArray.includes(params.projectId)) {
        updateProjectLikes(-1);
        setProjectLikes((likes) => likes - 1);
        setIsLiked(false);
        let newLikedArray = likedArray.filter((id) => {
          if (id !== params.projectId) return id;
        });
        localStorage.setItem("projectLikes", JSON.stringify(newLikedArray));
      } else {
        updateProjectLikes(1);
        likedArray.push(params.projectId);
        localStorage.setItem("projectLikes", JSON.stringify(likedArray));
        setProjectLikes((likes) => likes + 1);
        setIsLiked(true);
      }
    } else {
      updateProjectLikes(1);
      localStorage.setItem("projectLikes", JSON.stringify([params.projectId]));
      setProjectLikes((likes) => likes + 1);
      setIsLiked(true);
    }
  };

  const handleShare = () => {
    window.scroll(0, 0);
    openModal();
  };

  const getAllProjects = async () => {};

  const handlePublishProject = async () => {
    try {
      setLoading(true);
      const publishedProject = await axios.patch(
        `/api/projects/newproject/publish/${params.projectId}`,
        { type: "published" }
      );
      if (publishedProject.status === 200) {
        // console.log(publishedProject.data);
        setLoading(false);
        alert("Project published successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnDownload = async () => {
    console.log("download zip...");
    generateZip(projectDiagrams);
  };

  const handleOnDownloadCodes = async () => {
    generateCodesZip(codes);
  };

  const handleSetContent = async (id) => {
    setCurrentContent(id);
  };

  useEffect(() => {
    getProjectDetails();

    setCode(projectDetails.code);
    setProjectComponents(projectDetails.components);
    setVideo(projectDetails.video);
  }, []);
  console.log("video is: ", video);

  return (
    <div className="preview_project">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="share_project_modal">
          <i className="fas fa-times sp_modal_close" onClick={closeModal}></i>
          <h2 className="sp_modal_heading">Share this project</h2>
          <p className="sp_modal_text">
            If you liked this project then share it with your friends.
          </p>
          <div className="sp_modal_copy_content">
            <i className="fas fa-link sp_modal_link_icon"></i>
            <div className="sp_modal_copy_text">{window.location.href}</div>
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => alert("Copied to clipboard!")}
            >
              <button className="sp_modal_copy">Copy</button>
            </CopyToClipboard>
          </div>
        </div>
      </Modal>

      <div className="preview_project_content">
        <div className="pp_content_left">
          {window.innerWidth < 900 && (
            <div className="pp_content_right">
              <div className="pp_table_content">
                <h2
                  className="table_content_heading cursor-pointer"
                  onClick={() => setIsSlideToc(!isSlideToc)}
                >
                  <img
                    src={table_heading_icon}
                    className="table_heading_icon"
                    alt="publish icon"
                  />
                  Table of Content
                </h2>
                <div
                  className={
                    isSlideToc ? "table_content slide_toc" : "table_content"
                  }
                >
                  <p className="table_content_item">
                    <a
                      onClick={() => handleSetContent(0)}
                      className={
                        currentContent === 0
                          ? "table_content_item_a current_content"
                          : "table_content_item_a"
                      }
                      href="#projectDescId"
                    >
                      Project Description
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {projectDetails && projectDetails.name ? (
            <h4 className="pp_title">{projectDetails.name}</h4>
          ) : (
            <Skeleton
              width={window.innerWidth > 768 ? "94%" : "100%"}
              height="40px"
            />
          )}

          <div className="pp_card" id="projectDescId">
            {projectDetails && projectDetails?.photos[0] ? (
              <img
                src={projectDetails && projectDetails?.photos[0]}
                className="project_thumbnail_img"
                alt="project thumbnail img"
                style={{ width: "732px", height: "460px" }}
              />
            ) : (
              <Skeleton
                width={window.innerWidth > 768 ? "94%" : "100%"}
                height="400px"
              />
            )}
            <br></br>

            {projectDetails && projectDetails.description ? (
              <div className="project_description_text_div" id="projectDescId">
                <p className="project_description_text">
                  {projectDetails && projectDetails.description}
                </p>
              </div>
            ) : (
              <Skeleton
                width={window.innerWidth > 768 ? "94%" : "100%"}
                height="30px"
                count={4}
              />
            )}
          </div>
          <div className="pp_components_required" ref={scrollDivvv}>
            <h2 className="components_required_text">Components Used</h2>
            {projectComponents.length > 0 ? (
              <div className="pp_components_list">
                {projectComponents.map((component, index) => {
                  return (
                    <div className="pp_components_list_item">
                      <div className="d-flex align-items-center">
                        <p className="pp_component_name">{component.label}</p>
                      </div>
                      <div className="pp_cl_item_right">
                        <p className="pp_clr_x">X</p>
                        <p className="pp_clr_qty">{component.qty}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Skeleton
                width={window.innerWidth > 768 ? "94%" : "100%"}
                height="80px"
                count={3}
                className="mb-3"
              />
            )}
          </div>
        </div>
        {window.innerWidth > 900 && (
          <div className="pp_content_right">
            {projectDetails.name ? (
              <></>
            ) : (
              <div className="pp_publish_btn_cover">
                <button
                  onClick={handlePublishProject}
                  className="pp_publish_btn"
                ></button>
              </div>
            )}
            <div className="pp_table_content">
              <h2 className="table_content_heading">
                <img
                  src={table_heading_icon}
                  className="table_heading_icon"
                  alt="publish icon"
                />
                Table of Content
              </h2>
              <div className="table_content">
                <p className="table_content_item">
                  <a
                    onClick={() => {
                      scrollDivvvv.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={
                      currentContent === 0
                        ? "table_content_item_a current_content"
                        : "table_content_item_a"
                    }
                  >
                    Project Description
                  </a>
                </p>
                <p className="table_content_item">
                  <a
                    onClick={() => {
                      scrollDivvv.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={
                      currentContent === 1
                        ? "table_content_item_a current_content"
                        : "table_content_item_a"
                    }
                  >
                    Components Used
                  </a>
                </p>
                {/* <p className="table_content_item">
                  <a
                    onClick={() => handleSetContent(2)}
                    className={
                      currentContent === 2
                        ? "table_content_item_a current_content"
                        : "table_content_item_a"
                    }
                    href="#kitId"
                  >
                    Project kit
                  </a>
                </p> */}
                <p
                  onClick={() => {
                    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#vid"
                  className="table_content_item"
                >
                  Project Video
                </p>
                {/* <p className="table_content_item">
                  <a
                    onClick={() => handleSetContent(3)}
                    className={
                      currentContent === 3
                        ? "table_content_item_a current_content"
                        : "table_content_item_a"
                    }
                    href="#stepsId"
                  >
                    Project Steps
                  </a>
                </p> */}
                <p className="table_content_item tc_item_flex">
                  <a
                    onClick={() => {
                      scrollDivv.current.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={
                      currentContent === 4
                        ? "table_content_item_a current_content"
                        : "table_content_item_a"
                    }
                  >
                    Code
                  </a>
                </p>
                <p className="table_content_item tc_item_flex">
                  <a
                    onClick={() => {
                      scrollDiv.current.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={
                      currentContent === 5
                        ? "table_content_item_a current_content"
                        : "table_content_item_a"
                    }
                  >
                    Schematics
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {window.innerWidth < 900 && <div className="mobil_tags_content"></div>}
      <div className="pp_content_steps_cover" id="stepsId">
        <div className="pp_content_steps" ref={scrollDis}>
          <div className="pp_cs_item_step_image_cover mt-4">
            <iframe
              // className='pp_cs_item_step_img'
              width="95%"
              height="500px"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="pp_content_diagram_cover mb-4" ref={scrollDivv}>
        <div className="pp_content_diagram">
          <h2 className="pp_cd_title">Code</h2>

          <CopyToClipboard
            text={code}
            onCopy={() => {
              window.alert("Profile link copied to clipboard");
            }}
          >
            <div className="copyIconDiv">
              <img src={copyIcon} alt="copy" />
            </div>
          </CopyToClipboard>

          {/* <Editor
            onChange={(value) => {
              console.log(value);
            }}
            readOnly={true}
            theme="vs-dark"
            height="40vh"
            defaultLanguage="C++"
            defaultValue={code}
          /> */}
        </div>
      </div>
      <div className="pp_content_diagram_cover" ref={scrollDiv}>
        {projectDetails.photos.length > 0 ? (
          <div className="pp_content_diagram">
            <h2 className="pp_cd_title">SCHEMATICS</h2>
            <div className="schematics_mobile">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                arrows={true}
                className="schematics_carousel"
              >
                {projectDetails.photos.map((diagram, index) => {
                  return (
                    <div className="pp_cd_item_cover">
                      <img
                        src={diagram}
                        alt="Diagram img"
                        className="pp_cd_item_img"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        ) : (
          <Skeleton height="600px" />
        )}
      </div>
    </div>
  );
}

export default PreviewProject;
