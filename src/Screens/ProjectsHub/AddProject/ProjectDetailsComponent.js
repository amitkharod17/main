import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import axios from 'axios';

import Loading from '../../../Components/Loading';
import calendar_img from '../assets/calendar_img.png';
import project_delete_icon from '../assets/delete_icon.png';
import circle_plus_icon from '../assets/circle_plus_icon.png';

function ProjectDetailsComponent() {

    const [loading, setLoading] = useState(false);
    const [savedMessage, setSavedMessage] = useState(false);
    const [message, setMessage] = useState('Project saved successfully!');
    const [projectCoverImage, setProjectCoverImage] = useState('');
    const [projectType, setProjectType] = useState('draft');
    const [authors, setAuthors] = useState([]);
    const [tags, setTags] = useState([]);
    const [projectTags, setProjectTags] = useState([]);

    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectMetaDescription, setProjectMetaDescription] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const [projectAuthor, setProjectAuthor] = useState('');

    const history = useHistory();
    const params = useParams();

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

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        // console.log(base64);
        setProjectCoverImage(base64);
    };

    const getAuthors = async () => {
        try {
            const authors = await axios.get('/api/projects/author/all');
            if (authors.status === 200) {
                // console.log(authors.data);
                setAuthors(authors.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getTags = async () => {
        try {
            const tags = await axios.get('/api/projects/tag/all');
            if (tags.status === 200) {
                // console.log(tags.data.allTags);
                setTags(tags.data.allTags);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleSelectTag = (tagName) => {
        if (projectTags.includes(tagName)) {
            let newTags = projectTags.filter((tag) => {
                if (tag !== tagName) return tag;
            })
            setProjectTags(newTags);
        } else {
            setProjectTags((prevTags) => [...prevTags, tagName]);
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        let dateString = projectDate;
        let year = `20${dateString.substring(6)}`;
        let month = parseInt(dateString.substring(3, 5)) < 10 ?
            '0' + (parseInt(dateString.substring(3, 5)) - 1) : parseInt(dateString.substring(3, 5)) - 1;
        let date = dateString.substring(0, 2);

        const createdDate = new Date(year, month, date);

        const data = {
            projectName: projectName,
            projectDescription: projectDescription,
            projectMetaDescription: projectMetaDescription,
            projectDate: createdDate,
            projectTags: projectTags,
            projectAuthor: projectAuthor,
            projectCoverImage: projectCoverImage,
            projectType: projectType,
        }
        // console.log(data);
        try {
            setLoading(true);
            let existingProject;
            // console.log(params);
            if (!window.location.pathname.includes('/add-project')) {
                existingProject = await axios.get(`/api/projects/newproject/single/${params.projectId}`);

                if (existingProject.status === 200 && existingProject.data !== null) {
                    const response = await axios.patch(`/api/projects/newproject/update-project/${params.projectId}`, data);
                    if (response.status === 200) {
                        // console.log(response.data);
                        setLoading(false);
                        setSavedMessage(true);
                        setMessage('Project saved successfully!');
                        // history.push('/project-admin');
                    }
                } else {
                    const response = await axios.post('/api/projects/newproject/add', data);
                    if (response.status === 200) {
                        // console.log(response.data);
                        setLoading(false);
                        // setSavedMessage(true);
                        // setMessage('Project saved successfully!');
                        history.push('/project-admin');
                    }
                }
            } else {
                const response = await axios.post('/api/projects/newproject/add', data);
                if (response.status === 200) {
                    // console.log(response.data);
                    setLoading(false);
                    // setSavedMessage(true);
                    // setMessage('Project saved successfully!');
                    history.push('/project-admin');
                }
            }

        } catch (err) {
            console.log(err);
            setMessage('Something went wrong!');
            setLoading(false);
            setSavedMessage(true);
        }
    }

    const getProjectDetails = async (projectId) => {
        // console.log(projectId);
        try {
            const projectDetails = await axios.get(`/api/projects/newproject/${params.projectId}`);
            if (projectDetails.status === 200 && projectDetails.data.length > 0) {
                // console.log("projectDetails", projectDetails.data);
                const project = projectDetails.data[0];
                setProjectName(project.projectName);
                setProjectDescription(project.projectDescription);
                setProjectMetaDescription(project.projectMetaDescription);
                setProjectCoverImage(project.projectCoverImage);
                setProjectTags(project.projectTags);
                let projDateString = new Date(project.projectDate);
                let dd = projDateString.getDate();
                let mm = projDateString.getMonth() + 1;
                let yy = projDateString.getFullYear();
                let projDate = `${(dd > 10 ? dd : '0' + dd)}/${mm > 10 ? mm : '0' + mm}/${yy.toString().substring(2)}`;
                setProjectDate(projDate);
                setProjectAuthor(project.projectAuthor._id);
            } else {
                const response = await axios.get(`/api/projects/newproject/single/${params.projectId}`);
                if (response.status === 200) {
                    // console.log("response", response.data);
                    const existProject = response.data[0];
                    setProjectName(existProject.projectName);
                    setProjectDescription(existProject.projectDescription);
                    setProjectMetaDescription(existProject.projectMetaDescription);
                    setProjectCoverImage(existProject.projectCoverImage);
                    setProjectTags(existProject.projectTags);
                    let projDateString = new Date(existProject.projectDate);
                    let dd = projDateString.getDate();
                    let mm = projDateString.getMonth() + 1;
                    let yy = projDateString.getFullYear();
                    let projDate = `${(dd > 10 ? dd : '0' + dd)}/${mm > 10 ? mm : '0' + mm}/${yy.toString().substring(2)}`;
                    setProjectDate(projDate);
                    setProjectAuthor(existProject.projectAuthor._id);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (savedMessage) {
            setTimeout(() => {
                setSavedMessage(false);
            }, 3000);
        }
    }, [savedMessage]);

    useEffect(() => {
        if (params.projectId) {
            getProjectDetails(params.projectId);
        }
    }, []);

    useEffect(() => {
        getAuthors();
        getTags();
    }, []);

    return (
        <div className='project_details'>
            <form method='POST' onSubmit={handleFormSubmit} >
                <div className="form-group">
                    <label className='project_details_label' for="exampleFormControlInput1">Project Name<em style={{ color: '#FA1C1C' }}>*</em></label>
                    <input
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        type="text"
                        className="form-control project_details_input"
                        id="exampleFormControlInput1"
                        placeholder=""
                        required
                        autoComplete='off' />
                </div>
                <div className="form-group">
                    <label className="project_details_label" for="exampleFormControlInput1">Project Description <small className='small_min_text' >(min 250 characters)</small><em style={{ color: '#FA1C1C' }}>*</em></label>
                    <textarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        className="form-control project_details_input"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label className="project_details_label" for="exampleFormControlTextarea1">Meta Description <small className='small_min_text' >(min 50 characters)</small><em style={{ color: '#FA1C1C' }}>*</em></label>
                    <textarea
                        value={projectMetaDescription}
                        onChange={(e) => setProjectMetaDescription(e.target.value)}
                        className="form-control project_details_input"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="project_details_label" for="inputEmail4">Date<em style={{ color: '#FA1C1C' }}>*</em></label>
                        <div className='d-flex' >
                            <img src={calendar_img} className='calendar_img' alt='calendar img' />
                            <input
                                value={projectDate}
                                onChange={(e) => setProjectDate(e.target.value)}
                                type="text"
                                className="form-control project_details_input pd_date_input"
                                id="inputEmail4"
                                placeholder="DD/MM/YY"
                                required
                                autoComplete='off'
                            />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="project_details_label" for="inputPassword4">Tags<em style={{ color: '#FA1C1C' }}>*</em></label>
                        <div className='pd_tags_box'>
                            {
                                tags.map((tag, index) => {
                                    return <button
                                        type='button'
                                        onClick={() => handleSelectTag(tag.tagName, index)}
                                        className={
                                            projectTags.includes(tag.tagName) ?
                                                'project_details_tags selected_tag' : 'project_details_tags'
                                        }
                                    >
                                        {tag.tagName}
                                    </button>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="project_details_label" for="exampleFormControlSelect1">Select Author<em style={{ color: '#FA1C1C' }}>*</em></label>
                        <select
                            value={projectAuthor}
                            onChange={(e) => setProjectAuthor(e.target.value)}
                            className="form-control project_details_select"
                            id="exampleFormControlSelect1">
                            <option>Select Author</option>
                            {
                                authors.map((author, index) => {
                                    return <option key={index} value={author._id} >{author.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group position-relative">
                    <label className="project_details_label" for="exampleFormControlSelect1">Upload Cover Image<em style={{ color: '#FA1C1C' }}>*</em></label>
                    <input
                        onChange={handleImageUpload}
                        className='form-control project_details_input pd_file_input'
                        type="file" />
                    <img src={projectCoverImage !== '' ? projectCoverImage : circle_plus_icon} className='circle_plus_icon' alt='circle plus icon' />
                    <img src={project_delete_icon} className='project_delete_icon' alt='delete icon' />
                    <p className='upload_image_text'>Upload Image</p>
                </div>
                <div className='text-center'>
                    <button type='submit' className='project_detils_save_btn'>
                        {
                            loading ?
                                <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                                'Save'
                        }
                    </button>
                </div>
                {savedMessage && <div className='saved_message' >{message}</div>}
            </form>
        </div>
    )
}

export default ProjectDetailsComponent