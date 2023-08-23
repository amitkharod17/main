import React, { useState } from 'react';
import './ProjectComponent.css';
import Modal from 'react-modal';
import axios from 'axios';

import projects_img from '../Assets/projects_img.png';
import recog_project_img from "../Assets/recog_project_img.png";
import edit_icon from "../Assets/edit_icon.png";
import traffic_project_img from "../Assets/traffic_project_img.png";
import { useRef } from 'react';
import Loading from '../../../Components/Loading';
import { useEffect } from 'react';
import ScdTopComponent from '../ScdTopComponent/ScdTopComponent';
import upload from './upload.svg';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: "16px",
        width: "800px"
    },
};

Modal.setAppElement('#root');

const Images = (props) => {
    return <div className="d-inline"  id="project_images">
        {props.srcs.map(function (src, idx) {
            console.log("meow", src);
            return <img src={src} alt="" key={idx} />
        })}
    </div>
}



function ProjectComponent(props) {
    const [srcs, set_srcs] = useState([]);

    useEffect(() => {
        console.log('Fruit', srcs);
    }, [srcs])

    const [isOpen, setIsOpen] = useState(false);
    const [projectImage, setProjectImage] = useState("");
    const projectNameRef = useRef("");
    const projectDescriptionRef = useRef("");
    const projectVideoRef = useRef("");

    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);
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


    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setProjectImage(base64);
    };

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const handleProjectUpload = async (e) => {
        e.preventDefault();

        const projectData = {
            name: projectNameRef.current.value,
            description: projectDescriptionRef.current.value,
            video: projectVideoRef.current.value,
            is_private: false,
            photos
        }
        const studentId = JSON.parse(localStorage.getItem("scUserDetails")).userId;
        try {
            setLoading(true);
            const response = await axios.post(`/api/summercampbootcamp2022/add_project/`, projectData, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("scUserDetails")).token}`
                }
            })
            if (response.status === 200) {
                setLoading(false);
                console.log(response);
                alert('Project Saved Successfully!!');
                getProjects();
                closeModal();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            alert('Something went wrong!!');
        }
    }

    async function getProjects() {
        const studentId = JSON.parse(localStorage.getItem("scUserDetails")).userId;
        try {
            const response = await axios.get(`/api/summercampbootcamp2022/get_project/${studentId}`);
            if (response.status === 200) {
                console.log(response.data);
                setProjects(response.data);
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong!!");
        }
    }

    useEffect(() => {
        if (localStorage.getItem("scUserDetails")) {
            getProjects();
        }
    }, []);
    function onClickHandler(ev) {
        var el = window._protected_reference = document.createElement("INPUT");
        el.type = "file";
        el.accept = "image/*";
        el.multiple = "multiple";
        el.addEventListener('change', function (ev2) {
            if (el.files.length) {
                var temp = srcs;
                // temp.push(URL.createObjectURL(el.files[0]));
                // set_srcs(temp);
                convertToBase64((el.files[0]));
                document.getElementById("project_images").innerHTML += `<img src=${URL.createObjectURL(el.files[0])} />`;
                console.log(srcs);
            }
            new Promise(function (resolve) {
                setTimeout(function () { console.log(el.files); resolve(); }, 1000);
            })
                .then(function () {
                    el = window._protected_reference = undefined;
                });

        });

        el.click();
    }

    return (
        <div className="main_left scd_project_top">
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='scd_pc_modal_box'>
                    <form method='post' onSubmit={handleProjectUpload} >
                        <div class="form-group mb-4">
                            <label className="scd_pc_label" for="exampleInputEmail1">Project Title</label>
                            <input ref={projectNameRef} type="text" className="form-control scd_pc_input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Project Name"
                                autoComplete='off' required />
                        </div>
                        <div class="form-group mb-4">
                            <label className="scd_pc_label" for="exampleInputEmail1">Project Description</label>
                            <input ref={projectDescriptionRef} type="text" className="form-control scd_pc_input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Project Description"
                                autoComplete='off' required />
                        </div>
                        <div class="form-group mb-4">
                            <label className="scd_pc_label" for="exampleInputEmail1">Add Video Link</label><br />
                            <input ref={projectVideoRef} type="text" className="form-control scd_pc_input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Video Link"
                                autoComplete='off' required />
                        </div>
                        <div class="form-group mb-4">
                            <label className="scd_pc_label" for="exampleFormControlFile1">Upload Project Image</label>
                            <div>
                                {<Images srcs={srcs} />}
                                <img src={upload} alt="" className='upload-button' onClick={onClickHandler} />

                            </div>
                            {/* <input onChange={handleFileUpload} type="file" className="form-control-file" id="exampleFormControlFile1" required /> */}
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="scd_pc_btn_save">
                                {
                                    loading ? (
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
                            <button type="button" className="scd_pc_btn_cancel" onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </Modal>
            {window.location.pathname.includes("/summercamp-dashboard") && <ScdTopComponent />}
            <div className='student_projects'>
                <div className='student_projects_top'>
                    <h1 className='student_projects_title' id="projects">My Projects</h1>
                    {
                        window.location.pathname.includes('/summercamp-dashboard') &&
                        <div>
                            <button className="student_projects_btn_add" data-toggle="modal" data-target="#exampleModal" onClick={openModal} >Add Project</button>
                        </div>
                    }
                </div>
                <div>
                    <div className="student_projects_row" >
                        {
                            projects.length > 0 ?
                                projects.map((project, index) => {
                                    // console.log(project.projects.photo);
                                    return (
                                        <div key={index} className="card scd_projects_card projects_card position-relative">
                                            <img className="card-img-top scd_project_photo" src={project.projects.photo} alt="School Thumbnail" />
                                            <div className="card-body scd_card_body">
                                                <p className='project_title'>{project.projects.name}</p>
                                                {/* <a href={projects[0]} class="btn btn-primary">LED Blinking Project</a> */}
                                            </div>
                                            {/* <div className='project_edit_box'>
                                <img src={edit_icon} onClick={() => openModal('project', 'default', 0)} className="project_edit_icon" alt="Edit Logo" />
                            </div> */}
                                        </div>
                                    )
                                }) :
                                <h3 className="scd_pc_no_project_text">You haven't added any projects.</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent;
