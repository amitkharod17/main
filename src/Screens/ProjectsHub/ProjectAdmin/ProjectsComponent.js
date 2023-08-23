import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import add_project_icon from '../../../Asssets/add_icon.png';
import project_thumbnail from '../../../Asssets/project_thumbnail.png';
import white_edit_icon from '../assets/white_edit_icon.png';
import Loading from '../../../Components/Loading';

function ProjectsComponent() {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchInput,setSearchInput] = useState('');

    const handleRedirect = () => {
        history.push('/add-project');
    }

    const getAllProjects = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/projects/newproject/all');
            if (response.status === 200) {
                // console.log(response.data.projects);
                setProjects(response.data.projects);
                setFilteredProjects(response.data.projects);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    const handleEditProject = (project) => {
        history.push(`/project-admin/project/${project._id}`);
    }

    const handleOnSearch = () => {
        const newProjects = projects.filter((project) => {
             if(project.projectName.toLowerCase().includes(searchInput.toLowerCase())) {
                return project;
             }              
        });

        if(searchInput === '') setFilteredProjects(projects);
        else setFilteredProjects(newProjects);
    }

    useEffect(() => {
        getAllProjects();
    }, []);

    return (
        <div className='pa_right_content'>
            <div className='d-flex justify-content-between add_project_btn_cover'>
                <button className='add_project_btn' onClick={handleRedirect}>
                    <img src={add_project_icon} className="add_project_icon" alt='add project img' />
                    Add Project
                </button>
                <div style={{
                    width: '60%',
                    textAlign: 'end',
                    marginRight: '5rem'
                }}>
                    <input 
                        value={searchInput} 
                        onChange={(e) => setSearchInput(e.target.value)} 
                        className='pa_search_project' 
                        type='text' 
                        placeholder='Search Project' 
                    />
                    <button onClick={handleOnSearch} className='pa_search_btn'>Search</button>
                </div>
            </div>
            <div className='projects_cover'>
                {
                    loading ?
                    <div className='p-5' >
                        <Loading color="#5a6bff" type="spin" width="48px" height="48px" /> 
                    </div>:
                    filteredProjects.map((project, index) => {
                        return (
                            <div className="card project_card" style={{ width: '20rem' }}>
                                <img className="card-img-top project_cover_image" src={project.projectCoverImage} alt="Card cap" />
                                <div class="card-body">
                                    <h5 class="card-title project_title">{project.projectName}</h5>
                                    <p className='project_view_likes'>
                                        <span className='likes_span'><i class="fas fa-heart view_icon"></i> {project.projectLikes}</span>
                                        <span className='view_span'><i class="fas fa-eye like_icon"></i> {project.projectViews}</span>
                                    </p>
                                </div>
                                <div className='pc_edit_cover'>
                                    <img src={white_edit_icon} onClick={() => handleEditProject(project)} className='white_edit_icon' alt='project edit img' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsComponent