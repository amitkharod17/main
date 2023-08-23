import React, { useState } from 'react';
import './ProjectAdmin.css';
import add_project_icon from '../../../Asssets/add_icon.png';
import project_thumbnail from '../../../Asssets/project_thumbnail.png';
import ProjectsComponent from './ProjectsComponent';
import AuthorsComponent from './AuthorsComponent';
import AddComponents from './AddComponents';
import TagsComponent from './TagsComponent';
import { useHistory } from 'react-router-dom';

const RenderTabComponent = ({ currentTab }) => {
    switch (currentTab) {
        case 0: return <ProjectsComponent />;
        case 1: return <AuthorsComponent />;
        case 2: return <AddComponents />;
        case 3: return <TagsComponent />;
        default: return <></>;
    }
}

function ProjectAdmin() {

    const [currentTab, setCurrentTab] = useState(0);

    const history = useHistory();

    const handleTabClick = (tabId) => {
        setCurrentTab(tabId);
    }

    const handleLogout = () => {
        localStorage.removeItem("projectAdmin");
        history.push('/projects-admin-login');
    }

    const NoAccess = () => {
        history.push('/');
        return <></>
    }

    return (
        <>
            {
                localStorage.getItem('projectAdmin') ?
                    <div className="project_admin">
                        <div className="project_admin_left">
                            <div className='pa_left_item'>
                                <button className={currentTab === 0 ? 'pa_item_tab selected_item_tab' : 'pa_item_tab'} onClick={() => handleTabClick(0)} >Projects</button>
                            </div>
                            <div className='pa_left_item'>
                                <button className={currentTab === 1 ? 'pa_item_tab selected_item_tab' : 'pa_item_tab'} onClick={() => handleTabClick(1)} >Authors</button>
                            </div>
                            <div className='pa_left_item'>
                                <button className={currentTab === 2 ? 'pa_item_tab selected_item_tab' : 'pa_item_tab'} onClick={() => handleTabClick(2)} >Components</button>
                            </div>
                            <div className='pa_left_item'>
                                <button className={currentTab === 3 ? 'pa_item_tab selected_item_tab' : 'pa_item_tab'} onClick={() => handleTabClick(3)} >Tags</button>
                            </div>
                            {
                                localStorage.getItem('projectAdmin') &&
                                <div className='pa_left_item'>
                                    <button className='pa_item_tab pa_item_logout' onClick={handleLogout} >Logout</button>
                                </div>
                            }
                        </div>
                        <div className="project_admin_right">
                            <RenderTabComponent currentTab={currentTab} />
                        </div>
                    </div>
                    : <NoAccess />

            }
        </>
    )
}

export default ProjectAdmin