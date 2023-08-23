import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import add_icon from '../../../Asssets/add_icon.png';
import remove_step from '../assets/delete_icon.png';
import remove_component_img from '../assets/remove_component_img.png';
import black_edit_icon from '../assets/black_edit_icon.png';
import Loading from '../../../Components/Loading';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '100%',
        height: '800px',
        padding: '1rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const styles = {
    editor: {
        border: '1px solid gray',
        minHeight: '6em',
        background: '#fff'
    }
};

Modal.setAppElement('#root');

function ProjectSteps() {

    const [stepName, setStepName] = useState('');
    const [stepDescription, setStepDescription] = useState('');
    const [stepImage, setStepImage] = useState('');
    const [stepVideo, setStepVideo] = useState('');
    const [editStepName, setEditStepName] = useState('');
    const [editStepDescription, setEditStepDescription] = useState('');
    const [editStepImage, setEditStepImage] = useState('');
    const [editStepVideo, setEditStepVideo] = useState('');
    const [editStepId, setEditStepId] = useState('');
    const [stepsArray, setStepsArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [message, setMessage] = useState('Step added successfully!');
    const [imageChanged, setImageChanged] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [stepsLoading, setStepsLoading] = useState(false);

    const params = useParams();

    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );

    const [editEditorState, setEditEditorState] = useState(
        EditorState.createEmpty()
    );

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
        setStepImage(base64);
    };

    const handleEditImageUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        // console.log(base64);
        setEditStepImage(base64);
        setImageChanged(true);
    }

    const handleSaveSteps = async (e) => {
        e.preventDefault();

        const data = {
            stepsArray: [
                {
                    stepName: stepName,
                    stepDescription: stepDescription,
                    stepImage: stepImage,
                    stepVideo: stepVideo
                }
            ],
            projectId: params.projectId
        }

        console.log(data);

        try {
            setLoading(true);
            const existingSteps = await axios.get(`/api/projects/step/${params.projectId}`);
            // console.log(existingSteps.data);
            if (existingSteps.status === 200 && existingSteps.data !== null) {
                let steps = existingSteps.data;
                steps.stepsArray.push({
                    stepName: stepName,
                    stepDescription: stepDescription,
                    stepImage: stepImage,
                    stepVideo: stepVideo
                });
                const newData = {
                    projectSteps: steps
                }

                const savedSteps = await axios.patch('/api/projects/step/update', newData);
                if (savedSteps.status === 200) {
                    getProjectSteps();
                    setLoading(false);
                    setSaved(true);
                    setMessage('Step added successfully!');
                }
            } else {
                const savedSteps = await axios.post(`/api/projects/step/add`, data);
                if (savedSteps.status === 200) {
                    getProjectSteps()
                    setLoading(false);
                    setSaved(true);
                    setMessage('Step added successfully!');
                }
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            setSaved(true);
            setMessage('Something went wrong!');
        }
    }

    const getProjectSteps = async () => {
        try {
            setStepsLoading(true);
            const response = await axios.get(`/api/projects/step/${params.projectId}`);
            if (response.status === 200) {
                // console.log(response.data);
                setStepsArray(response.data.stepsArray);
                setStepsLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleRemoveStep = async (step) => {
        try {
            const remove_step = await axios.patch(`/api/projects/step/update/${params.projectId}`, step);
            if (remove_step.status) {
                // console.log(remove_step.data);
                getProjectSteps();
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleEditStep = async (step) => {
        setEditStepId(step._id);
        setEditStepName(step.stepName);
        setEditStepVideo(step.stepVideo);
        setEditStepImage(step.stepImage);
        const blocksFromHtml = htmlToDraft(step.stepDescription);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        // setEditStepDescription(step);
        // console.log(contentState);
        setEditEditorState(EditorState.createWithContent(contentState))
        openModal();
    }

    const handleEditSteps = async (e) => {
        e.preventDefault();

        const data = {
            stepId: editStepId,
            stepName: editStepName,
            stepDescription: editStepDescription,
            stepImage: editStepImage,
            stepVideo: editStepVideo
        }

        // console.log(data);

        try {
            setLoading(true)
            const response = await axios.patch(`/api/projects/step/update-step/${params.projectId}`, data);
            if (response.status === 200) {
                // console.log('Updated step: ', response.data);
                setLoading(false);
                setSaved(true);
                setMessage('Project step updated successfully!');
                getProjectSteps();
                closeModal();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            setSaved(true);
            setMessage('Something went wrong!');
        }

    }

    useEffect(() => {
        let markup = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        // console.log(markup);
        setStepDescription(markup);
    }, [editorState]);

    useEffect(() => {
        let markup = draftToHtml(convertToRaw(editEditorState.getCurrentContent()));
        // console.log(markup);
        setEditStepDescription(markup);
    }, [editEditorState]);

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false);
            }, 3000);
        }
    }, [saved]);

    useEffect(() => {
        getProjectSteps();
    }, []);

    return (
        <div className='project_steps'>
            <div className='add_steps_cover'>
                <button className='add_steps_btn'>
                    <img src={add_icon} className="add_steps_icon" alt='add project img' />
                    Add Step
                </button>
            </div>
            <div className='project_step_cover'>
                <div className='project_step_remove'>
                    {/* <img src={remove_step} className='remove_step' alt='remove step img' /> */}
                </div>
                <form method='POST' onSubmit={handleSaveSteps} >
                    <div className="form-group">
                        <label className='project_details_label' for="exampleFormControlInput1">Step Name<em style={{ color: '#FA1C1C' }}>*</em></label>
                        <input
                            value={stepName}
                            onChange={(e) => setStepName(e.target.value)}
                            type="text"
                            className="form-control project_step_input"
                            id="exampleFormControlInput1"
                            placeholder=""
                            required
                            autoComplete='off' />
                    </div>
                    <div className="form-group">
                        <label className='project_details_label' for="exampleFormControlInput1">Step Description<em style={{ color: '#FA1C1C' }}>*</em></label>
                        <div className='project_step_description'>
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={editorState => setEditorState(editorState)}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='project_details_label' for="exampleFormControlInput1">Upload Image/Video</label>
                        <div className="form-row">
                            <div className="col-md-5">
                                <input
                                    onChange={handleImageUpload}
                                    className="p-0 form-control form-control-lg"
                                    id="formFileLg"
                                    type="file" />
                            </div>
                            <div className='d-flex justify-content-center align-items-center col-md-2 pb-3'>
                                <p className='project_step_or_text'>OR</p>
                            </div>
                            <div className="form-group col-md-5">
                                <input
                                    value={stepVideo}
                                    onChange={(e) => setStepVideo(e.target.value)}
                                    type="text"
                                    className="form-control project_step_input"
                                    id="inputPassword4"
                                    placeholder="Youtube Video Link" />
                            </div>
                        </div>
                    </div>
                    <div className='text-right'>
                        <button className='project_step_save_btn'>
                            {
                                loading ?
                                    <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                                    'Save'
                            }
                        </button>
                    </div>
                    {saved && <div className='saved_message' >{message}</div>}
                </form>
            </div>
            <div className='project_steps_list'>
                Steps
            </div>
            {
                stepsLoading ?
                    <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#5a6bff" width="32px" height="32px" /></div> :
                    <div className='project_steps_list_cover'>
                        {
                            stepsArray.map((step, index) => {
                                return (
                                    <div className='project_step_cover ps_list_item'>
                                        <div className='ps_li_top'>
                                            <p className='ps_top_step_name'>{step.stepName}</p>
                                            <div className='ps_top_btns'>
                                                <img onClick={() => handleEditStep(step)} src={black_edit_icon} className='step_edit_icon' alt='step edit pic' />
                                                <img onClick={() => handleRemoveStep(step)} src={remove_step} className='step_delete_icon' alt='step delete pic' />
                                            </div>
                                        </div>
                                        <div className='ps_li_middle'>
                                            <div className='ps_middle_step_description'>
                                                {
                                                    ReactHtmlParser(step.stepDescription)
                                                }
                                            </div>
                                        </div>
                                        <div className="ps_li_bottom">
                                            <div className='ps_bottom_step_img_cover'>
                                                {
                                                    step.stepImage !== '' ?
                                                        <img src={step.stepImage} className='ps_bottom_step_img' alt='step img' /> :
                                                        <p className='ps_bottom_video_link'>No Image</p>
                                                }
                                            </div>
                                            <p className='ps_bottom_or_text'>OR</p>
                                            <div className='ps_bottom_step_img_cover'>
                                                <p className='ps_bottom_video_link'>{step.stepVideo}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='project_step_cover'>
                    <div className='project_step_remove'>
                        <img onClick={closeModal} src={remove_component_img} className='remove_step' alt='remove step img' />
                    </div>
                    <form method='POST' onSubmit={handleEditSteps} >
                        <div className="form-group">
                            <label className='project_details_label' for="exampleFormControlInput1">Step Name<em style={{ color: '#FA1C1C' }}>*</em></label>
                            <input
                                value={editStepName}
                                onChange={(e) => setEditStepName(e.target.value)}
                                type="text"
                                className="form-control project_step_input"
                                id="exampleFormControlInput1"
                                placeholder=""
                                required
                                autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label className='project_details_label' for="exampleFormControlInput1">Step Description<em style={{ color: '#FA1C1C' }}>*</em></label>
                            <div className='project_step_description'>
                                <Editor
                                    editorState={editEditorState}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={editorState => setEditEditorState(editorState)}
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label className='project_details_label' for="exampleFormControlInput1">Upload Image/Video</label>
                            <div className="form-row">
                                <div className="col-md-5">
                                    <input
                                        onChange={handleEditImageUpload}
                                        className="p-0 form-control form-control-lg"
                                        id="formFileLg"
                                        type="file" />
                                    {/* {
                                        editStepImage !== '' &&
                                        !imageChanged &&
                                        <div className='ps_bottom_step_img_cover'>
                                            <img src={editStepImage} className='ps_bottom_step_img' alt='step img' />
                                        </div>
                                    } */}


                                </div>
                                <div className='d-flex justify-content-center align-items-center col-md-2 pb-3'>
                                    <p className='project_step_or_text'>OR</p>
                                </div>
                                <div className="form-group col-md-5">
                                    <input
                                        value={editStepVideo}
                                        onChange={(e) => setEditStepVideo(e.target.value)}
                                        type="text"
                                        className="form-control project_step_input"
                                        id="inputPassword4"
                                        placeholder="Youtube Video Link" />
                                </div>
                            </div>
                        </div>
                        <div className='text-right'>
                            <button className='project_step_save_btn'>
                                {
                                    loading ?
                                        <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                                        'Save'
                                }
                            </button>
                        </div>
                        {saved && <div className='saved_message' >{message}</div>}
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectSteps;