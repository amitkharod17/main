import React, { useState, useRef, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Modal from 'react-modal';
import axios from 'axios';

import './AddProject.css';
import ProjectComponents from './ProjectComponents';
import ProjectDetailsComponent from './ProjectDetailsComponent';
import ProjectSteps from './ProjectSteps';
import SchematicDiagram from './SchematicDiagram';
import Loading from '../../../Components/Loading';
import ProjectCode from './ProjectCode';


const customStyles = {
    content: {
        width: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        border: '2px solid #000',
        padding: '0px'
    },
};

Modal.setAppElement('#root');

const RenderProjectTab = ({
    currentTab,
    setCurrentTab,
}) => {
    switch (currentTab) {
        case 0: return <ProjectDetailsComponent />;
        case 1: return <ProjectComponents />;
        case 2: return <ProjectSteps />;
        case 3: return <ProjectCode />;
        case 4: return <SchematicDiagram />;
        default: return <></>;
    }
}

function AddProject() {

    const [currentTab, setCurrentTab] = useState(0);
    const [modalType, setModalType] = useState('');
    const [publishLoading, setPublishLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [draftLoading, setDraftLoading] = useState(false);
    const [projectStatus, setProjectStatus] = useState('');

    const params = useParams();
    const history = useHistory();

    const handleTab = (tabId) => {
        setCurrentTab(tabId);
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(type = '') {
        setModalType(type);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleModalYes = async (type) => {
        if (type === 'delete') {
            try {
                setDeleteLoading(true);
                const deletedProject = await axios.delete(`/api/projects/newproject/delete/${params.projectId}`);
                if (deletedProject.status === 200) {
                    setDeleteLoading(false);
                    // console.log(deletedProject);
                    closeModal();
                    history.push('/project-admin');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            history.push('/project-admin');
        }
    }

    const handlePreviewProject = () => {
        window.open(`https://rancholabs.com/preview-project-${params.projectId}`, '_blank');
    }

    const handleOnPublish = async (projectType) => {
        const pType = projectType === 'unpublished' || projectType === 'draft' ? 'published' : 'unpublished';
        try {
            setPublishLoading(true);
            const publishedProject = await axios.patch(`/api/projects/newproject/publish/${params.projectId}`, { type: pType });
            if (publishedProject.status === 200) {
                // console.log(publishedProject.data);
                setPublishLoading(false);
                openModal(pType);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleOnDraft = async (projectType) => {
        const pType = projectType === 'published' ? 'published':'draft';
        const modalType = projectType === 'published' ? 'Changes Saved':'draft';
        try {
            setDraftLoading(true);
            const publishedProject = await axios.patch(`/api/projects/newproject/publish/${params.projectId}`, { type: pType });
            if (publishedProject.status === 200) {
                // console.log(publishedProject.data);
                setDraftLoading(false);
                openModal(modalType);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleModalView = async (type) => {
        if (type !== 'delete' && type !== 'draft' && type !== 'unpublished') {
            try {
                const response = await axios.get(`/api/projects/newproject/single/${params.projectId}`);
                if (response.status === 200) {
                    window.open(`https://rancholabs.com/project-${response.data[0].projectName}-${params.projectId}`, '_blank');
                    closeModal();
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            closeModal();
        }
    }

    const NoAccess = () => {
        history.push('/');
        return <></>
    }

    const getProjectDetails = async (projectId) => {
        // console.log(projectId);
        try {
            const projectDetails = await axios.get(`/api/projects/newproject/${params.projectId}`);
            if(projectDetails.status === 200 && projectDetails.data.length > 0) {
                const project = projectDetails.data[0];
                setProjectStatus(project.projectType);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProjectDetails();
    },[]);

    return (
        <>
            {
                localStorage.getItem('projectAdmin') ?
                    <div className="add_project_section">
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                            overlayClassName='pd_modal_overlay'
                        >

                            <div className='projec_details_modal'>
                                <p className='pd_modal_text'>{
                                    modalType === 'delete' ? 'Are you sure you want to delete it?'
                                        : modalType === 'draft' ? 'Draft saved successfully'
                                        : modalType === 'Changes Saved' ? 'Changes saved successfuly'
                                            : modalType === 'published' ? 'Project published successfully'
                                            : 'Project unpublished successfully'
                                }</p>
                                <div>
                                    <button className='pd_modal_btn' onClick={() => handleModalYes(modalType)} >{
                                        modalType === 'delete' ? 'Yes'
                                            : 'Go to Projects'
                                    }</button>
                                    <button className='pd_modal_btn' onClick={() => handleModalView(modalType)} >{
                                        modalType === 'delete' ? 'No'
                                            : modalType === 'draft' ? 'Continue'
                                                : modalType === 'published' || modalType === 'Changes Saved' ? 'View Project'
                                                : 'Continue'
                                    }</button>
                                </div>
                            </div>

                        </Modal>
                        <div className="add_project_left">
                            <div className='add_pl_item'>
                                <button className={currentTab === 0 ? 'add_pl_item_tab selected_item_tab' : 'add_pl_item_tab'} onClick={() => handleTab(0)} >Project Details</button>
                            </div>
                            <div className='add_pl_item'>
                                <button className={currentTab === 1 ? 'add_pl_item_tab selected_item_tab' : 'add_pl_item_tab'} onClick={() => handleTab(1)} >Components</button>
                            </div>
                            <div className='add_pl_item'>
                                <button className={currentTab === 2 ? 'add_pl_item_tab selected_item_tab' : 'add_pl_item_tab'} onClick={() => handleTab(2)} >Project Steps</button>
                            </div>
                            <div className='add_pl_item'>
                                <button className={currentTab === 3 ? 'add_pl_item_tab selected_item_tab' : 'add_pl_item_tab'} onClick={() => handleTab(3)} >Code</button>
                            </div>
                            <div className='add_pl_item'>
                                <button className={currentTab === 4 ? 'add_pl_item_tab selected_item_tab' : 'add_pl_item_tab'} onClick={() => handleTab(4)} >Schematic Diagram</button>
                            </div>
                            <div className='add_pl_item my-4'>
                                <button className='add_pl_preview_btn' onClick={handlePreviewProject} >Preview Project</button>
                                <button className='add_pl_draft_btn' onClick={()=>handleOnDraft(projectStatus)} >{
                                        draftLoading ?
                                            <div style={{ width: "20%", margin: "0 auto" }}><Loading type="spin" color="#5a6bff" width="32px" height="32px" /></div> :
                                            projectStatus === 'published' ? 'Save Changes':'Save Draft'
                                    }</button>
                                <button className='add_pl_publish_btn' onClick={() => handleOnPublish(projectStatus)} >
                                    {
                                        publishLoading ?
                                            <div style={{ width: "20%", margin: "0 auto" }}><Loading type="spin" color="#5a6bff" width="32px" height="32px" /></div> :
                                            projectStatus === 'published' ? 'Unpublish' : 'Publish'
                                    }
                                </button>
                                <button className='add_pl_delete_btn' onClick={() => openModal('delete')} >
                                    {
                                        deleteLoading ?
                                        <div style={{ width: "20%", margin: "0 auto" }}><Loading type="spin" color="red" width="32px" height="32px" /></div> :
                                        "Delete Project"
                                    }
                                </button>
                            </div>
                        </div>
                        <div className="add_project_right">
                            <RenderProjectTab
                                currentTab={currentTab}
                                setCurrentTab={setCurrentTab}
                            />
                        </div>
                    </div>
                    : <NoAccess />
            }
        </>
    )
}

export default AddProject;