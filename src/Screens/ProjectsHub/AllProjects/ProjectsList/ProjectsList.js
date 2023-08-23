import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './ProjectsList.css';
import project_thumbnail from '../../../../Asssets/project_thumbnail.png';
import discord_icon from '../../assets/discord_icon.png';
import Loading from '../../../../Components/Loading';

function ProjectsList() {

    const [publishedProjects, setPublishedProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [checkedTags, setCheckedTags] = useState([]);
    const [checkedComponents, setCheckedComponents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [components, setComponents] = useState([]);
    const [onMore, setOnMore] = useState(false);

    const getPublishedProjects = async () => {
        try {
            setLoading(true);
            const projects = await axios.get(`/api/projects/newproject/all/published`);
            if (projects.status === 200) {
                // console.log(projects.data);
                setPublishedProjects(projects.data.projects);
                setFilteredProjects(projects.data.projects);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleOnSearch = (e) => {
        setSearchInput(e.target.value)
        const newProjects = publishedProjects.filter((project) => {
            if (project.projectName.toLowerCase().includes(e.target.value.toLowerCase())) {
                return project;
            }
        });

        if (searchInput === '') setFilteredProjects(publishedProjects);
        else setFilteredProjects(newProjects);
    }

    const handleOnTagsFilter = (e) => {
        const { value, checked } = e.target;
        // console.log(value, checked);
        if (checked) {
            if (value !== 'all') {
                setCheckedTags((prevList) => [...prevList, value]);
            } else {
                setCheckedTags(['all']);
            }
        } else {
            setCheckedTags((prevList) => prevList.filter((e) => e !== value));
        }
    }

    const handleOnComponentsFilter = (e) => {
        const { value, checked } = e.target;
        // console.log(value, checked);
        if (checked) {
            setCheckedComponents((prevList) => [...prevList, value]);
        } else {
            setCheckedComponents((prevList) => prevList.filter((e) => e !== value));
        }
    }

    const handleOpenProject = (project) => {
        window.open(`https://rancholabs.com/project-${project.projectName}-${project._id}`, '_blank');
    }

    const getAllComponents = async () => {
        try {
            const allComponents = await axios.get('/api/projects/component/all');
            if (allComponents.status === 200) {
                // console.log(allComponents.data);
                setComponents(allComponents.data.components);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    const handleOnMore = () => {
        setOnMore(true);
    }

    useEffect(() => {
        getPublishedProjects();
        getAllComponents();
    }, []);

    useEffect(() => {
        let newProjects = [];
        // publishedProjects.filter((project) => {
        //     console.log(checkedTags);
        //     checkedTags.map((tags) => {
        //         project.projectTags.map((itemTag) => {
        //             console.log("itemTag : ", checkedTags.includes(itemTag.toLowerCase()))
        //             if (checkedTags.includes(itemTag.toLowerCase())) {
        //                 newProjects.push(project);
        //             }
        //         });
        //     })
        // });

        checkedTags.map((tag) => {
            publishedProjects.filter((project) => {
                project.projectTags.map((itemTag) => {
                    // console.log("itemTag : ", checkedTags.includes(itemTag.toLowerCase()))
                    if (tag === itemTag.toLowerCase()) {
                        if(!newProjects.includes(project)) {
                            newProjects.push(project);
                        }
                    }
                });
            })
        });

        // console.log("Filter project by tags ", newProjects);
        if (checkedTags.length > 0 && checkedTags[0] !== 'all') setFilteredProjects(newProjects)
        else setFilteredProjects(publishedProjects);
    }, [checkedTags]);

    useEffect(() => {
        let newProjects = [];
        // filteredProjects.filter((project) => {
        //     checkedComponents.map(() => {
        //         project.projectComponents.map((component) => {
        //             if(checkedComponents.includes(component.componentId)) {
        //                 newProjects.push(project);
        //             }
        //         })
        //     })
        // });

        checkedComponents.map((componentId) => {
            (filteredProjects.length > 0 ? filteredProjects : publishedProjects ).filter((project) => {
                project.projectComponents.map((component) => {
                    // console.log("itemTag : ", checkedTags.includes(itemTag.toLowerCase()))
                    if (componentId === component.componentId) {
                        if(!newProjects.includes(project)) {
                            newProjects.push(project);
                        }
                    }
                });
            })
        });

        // console.log("Filter project by components ", newProjects);
        if(checkedComponents.length > 0) setFilteredProjects(newProjects)
        else setFilteredProjects(publishedProjects);
    },[checkedComponents]);


    return (
        <div className="project_list">
            <div className="projects_search">
                <h2 className="projects_filters_text">Filters</h2>
                <div className="project_search_box">
                    <div className='projects_search_icon'>
                        <i class="fa fa-search fa-xl" style={{ color: '#a3a3a3' }} aria-hidden="true"></i>
                    </div>
                    <div className='projects_search_input'>
                        <input value={searchInput} onChange={handleOnSearch} type="text" className='projects_search_input' placeholder='Search project' name='search_input' />
                    </div>
                </div>
            </div>
            <div className="projects_list_content">
                <div className="projects_lc_left">
                    <div className='projects_lc_left_item'>
                        <h2 className='lc_left_item_text'>Categories</h2>
                        <div className='lc_left_item_list'>
                            <div className='lc_list_item'>
                                <input type='checkbox' value="all" onChange={handleOnTagsFilter} className='lc_list_item_checkbox' />
                                <label className='lc_list_checkbox_label'>All</label>
                            </div>
                            <div className='lc_list_item'>
                                <input type='checkbox' value="robotics" onChange={handleOnTagsFilter} className='lc_list_item_checkbox' />
                                <label className='lc_list_checkbox_label'>Robotics</label>
                            </div>
                            <div className='lc_list_item'>
                                <input type='checkbox' value="ai" onChange={handleOnTagsFilter} className='lc_list_item_checkbox' />
                                <label className='lc_list_checkbox_label'>Artificial Intelligence</label>
                            </div>
                            <div className='lc_list_item'>
                                <input type='checkbox' value="iot" onChange={handleOnTagsFilter} className='lc_list_item_checkbox' />
                                <label className='lc_list_checkbox_label'>IoT</label>
                            </div>
                            <div className='lc_list_item'>
                                <input type='checkbox' value="arduino" onChange={handleOnTagsFilter} className='lc_list_item_checkbox' />
                                <label className='lc_list_checkbox_label'>Arduino</label>
                            </div>
                        </div>
                    </div>
                    <div className='projects_lc_left_item'>
                        <h2 className='lc_left_item_text'>Components</h2>
                        <div className='lc_left_item_list'>
                            {
                                components.map((component, index) => {
                                    if(index < 5) {
                                        return (
                                            <div className='lc_list_item' key={index}>
                                                <input type='checkbox' value={component._id} onChange={handleOnComponentsFilter} className='lc_list_item_checkbox' />
                                                <label className='lc_list_checkbox_label'>{ component.componentName }</label>
                                            </div>
                                        )
                                    }
                                })
                            }
                               { !onMore && components.length > 5 &&  <p onClick={handleOnMore} className='lc_list_more_text'>+ {components.length - 5} more</p> }
                            {
                                onMore && 
                                components.map((component, index) => {
                                    if(index >=5 ) {
                                        return (
                                            <div className='lc_list_item' key={index}>
                                                <input type='checkbox' value={component._id} onChange={handleOnComponentsFilter} className='lc_list_item_checkbox' />
                                                <label className='lc_list_checkbox_label'>{ component.componentName }</label>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className='projects_lc_left_item'>
                        <div className='lc_need_help_box'>
                            <div className='lc_need_help_cover'>
                                <h1 className='lc_need_help_text'>Need Help?</h1>
                                <h1 className='lc_need_help_text'>Join our Community</h1>
                            </div>
                            <div className='dicord_community_cover' >
                                <img src={discord_icon} className='lc_discord_icon' alt='discord img' />
                                <p className='lc_discord_community_text'>Discord Community</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects_lc_right">
                    <div className='projects_cover'>

                        {
                            loading ?
                                <div className='ps_item_remove_image' ><Loading type="spin" color="#5a6bff" width="32px" height="32px" /></div> :
                                filteredProjects.map((project, index) => {
                                    return (
                                        <div className="card project_card pc_margin" onClick={() => handleOpenProject(project)} style={{ width: '20rem' }}>
                                            <img className="card-img-top project_cover_image" src={project.projectCoverImage} alt="Card cap" />
                                            <div class="card-body">
                                                <h5 class="card-title project_title">{project.projectName}</h5>
                                                <p className='project_view_likes'>
                                                    <span className='likes_span'><i class="fas fa-heart view_icon"></i> {project.projectLikes}</span>
                                                    <span className='view_span'><i class="fas fa-eye like_icon"></i> {project.projectViews}</span>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList;