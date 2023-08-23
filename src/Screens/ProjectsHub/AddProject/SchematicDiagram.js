import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import add_icon from '../../../Asssets/add_icon.png';
import remove_image from '../assets/delete_icon.png';
import Loading from '../../../Components/Loading';

function SchematicDiagram() {

    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [message, setMessage] = useState('Step added successfully!');
    const [diagram, setDiagram] = useState('');
    const [diagrams, setDiagrams] = useState([]);
    const [deletedIndex, setDeletedIndex] = useState(-1);

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
        setDiagram(base64);
    };

    const params = useParams();

    const handleSaveDiagram = async (e) => {
        e.preventDefault();

        const data = {
            diagrams: [{
                diagramImage: diagram
            }],
            projectId: params.projectId
        }
        // console.log('data', data);
        try {
            setLoading(true);
            const existingDiagrams = await axios.get(`/api/projects/diagram/${params.projectId}`);
            if (existingDiagrams.status === 200 && existingDiagrams.data !== null) {
                let projectDiagrams = existingDiagrams.data;
                projectDiagrams.diagrams.push({
                    diagramImage: diagram
                });
                const newData = {
                    projectDiagrams: projectDiagrams
                }
                // console.log(newData);
                const savedDiagrams = await axios.patch('/api/projects/diagram/update', newData);
                if (savedDiagrams.status === 200) {
                    getProjectDiagrams();
                    setLoading(false);
                    setSaved(true);
                    setMessage('Diagram added successfully!');
                    // console.log(savedDiagrams);
                }
            } else {
                const savedDiagrams = await axios.post(`/api/projects/diagram/add`, data);
                if (savedDiagrams.status === 200) {
                    getProjectDiagrams();
                    setLoading(false);
                    setSaved(true);
                    setMessage('Diagram added successfully!');
                    // console.log(savedDiagrams);
                }
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            setSaved(true);
            setMessage('Something went wrong!');
        }
    }

    const getProjectDiagrams = async () => {
        try {
            const projectDiagrams = await axios.get(`/api/projects/diagram/${params.projectId}`);
            if (projectDiagrams.status === 200) {
                // console.log(projectDiagrams.data);
                setDiagrams(projectDiagrams.data.diagrams);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleRemoveDiagram = async (diagram,index) => {
        setDeletedIndex(index);
        try {
            setLoading(true);
            const remove_diagram = await axios.patch(`/api/projects/diagram/update/${params.projectId}`, diagram);
            if(remove_diagram.status) {
                // console.log(remove_diagram.data);
                setLoading(false);
                setSaved(true);
                setMessage('Deleted successfully!');
                getProjectDiagrams();
            }
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProjectDiagrams();
    }, []);

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false);
            }, 3000);
        }
    }, [saved]);

    return (
        <div className='schematic_diagram'>
            <div className='add_steps_cover'>
                <button className='add_steps_btn'>
                    <img src={add_icon} className="add_steps_icon" alt='add project img' />
                    Add Image
                </button>
            </div>
            <div className='project_step_cover'>
                <form method='POST' onSubmit={handleSaveDiagram} >
                    <div className="form-group">
                        <label className='project_details_label' for="exampleFormControlInput1">
                            Upload Image/Video
                        </label>
                        <div className='d-flex justify-content-between'>
                            <input
                                onChange={handleImageUpload}
                                className="p-0 form-control form-control-lg col-md-5"
                                id="formFileLg"
                                type="file" />
                            <img src={remove_image} alt='remove img' className='remove_image' />
                        </div>
                    </div>
                    <div className='text-left'>
                        <button className='project_step_save_btn' >
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
                Images Added
            </div>
            <div className='project_steps_list_cover d-flex flex-wrap'>
                {
                    diagrams.map((diagram, index) => {
                        return (
                            <div className='project_step_cover ps_steps_list_item'>
                                <div className='ps_item_top'>
                                    <p className='ps_item_image_text'>Image</p>
                                    {
                                        loading && deletedIndex === index ?
                                        <div className='ps_item_remove_image' ><Loading type="spin" color="red" width="32px" height="32px" /></div> :
                                        <img onClick={() => handleRemoveDiagram(diagram,index)} src={remove_image} alt='diagram remove img' className='ps_item_remove_image' />
                                    }
                                </div>
                                <div className='ps_item_middle'>
                                    <img src={diagram.diagramImage} alt='diagram img' className='ps_item_diagram_img' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SchematicDiagram;