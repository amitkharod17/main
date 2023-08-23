import React from 'react'
import './AllStudentsComponent.css';

import asc_profile_pic_1 from '../Assets/asc_profile_pic_1.png';
import asc_profile_pic_2 from '../Assets/asc_profile_pic_2.png';

import projects_img from '../Assets/projects_img.png';
import recog_project_img from "../Assets/recog_project_img.png";
import traffic_project_img from "../Assets/traffic_project_img.png";

function AllStudentsComponent() {
    return (
        <div className="all_students_component">
            <div className="all_sc_content">
                <div className="asc_content_item">
                    <div className="asc_item_top">
                        <img src={asc_profile_pic_2} className="asc_profile_pic_2" alt="Profile pic" />
                        <div className="asc_item_top_right">
                            <h1 className="asc_item_tr_text">Air Bender</h1>
                            <p className="asc_item_tr_project_text">25 projects</p>
                        </div>
                    </div>
                    <div className="asc_item_projects">
                        <div className="asc_item_projects_cover">
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={projects_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>Speech Recognition</p>
                                </div>
                            </div>
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={traffic_project_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>Traffic controller</p>
                                </div>
                            </div>
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={projects_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>LED Blinking Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="asc_content_item">
                    <div className="asc_item_top">
                        <img src={asc_profile_pic_1} className="asc_profile_pic_2" alt="Profile pic" />
                        <div className="asc_item_top_right">
                            <h1 className="asc_item_tr_text">Water Bender</h1>
                            <p className="asc_item_tr_project_text">215 projects</p>
                        </div>
                    </div>
                    <div className="asc_item_projects">
                        <div className="asc_item_projects_cover">
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={projects_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>Speech Recognition</p>
                                </div>
                            </div>
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={traffic_project_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>Traffic controller</p>
                                </div>
                            </div>
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={projects_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>LED Blinking Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="asc_content_item">
                    <div className="asc_item_top">
                        <img src={asc_profile_pic_2} className="asc_profile_pic_2" alt="Profile pic" />
                        <div className="asc_item_top_right">
                            <h1 className="asc_item_tr_text">Air Bender</h1>
                            <p className="asc_item_tr_project_text">25 projects</p>
                        </div>
                    </div>
                    <div className="asc_item_projects">
                        <div className="asc_item_projects_cover">
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={projects_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>Speech Recognition</p>
                                </div>
                            </div>
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={traffic_project_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>Traffic controller</p>
                                </div>
                            </div>
                            <div className="card asc_item_projects_card position-relative">
                                <img className="card-img-top" src={projects_img} alt="School Thumbnail" />
                                <div className="card-body">
                                    <p className='project_title'>LED Blinking Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllStudentsComponent
