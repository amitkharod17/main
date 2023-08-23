import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import component_img from '../assets/component_img.png';
import up_triangle_img from '../assets/up_triangle_img.png';
import remove_component_img from '../assets/remove_component_img.png';
import Loading from '../../../Components/Loading';

function ProjectComponents() {

    const [components, setComponents] = useState([]);
    const [selectedComponents, setSelectedComponents] = useState([]);
    const [listComponents, setListComponents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [message, setMessage] = useState('Component added successfully');
    const [projectDetails, setProjectDetails] = useState([]);

    const params = useParams();

    const getComponents = async () => {
        try {
            const componentsData = await axios.get('/api/projects/component/all');
            if (componentsData.status === 200) {
                // console.log(componentsData);
                setComponents(componentsData.data.components);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleSelectComponent = (e) => {
        let component = e.target.value;
        if (component !== "null") {
            setSelectedComponents((prevComponents) => [...prevComponents, {
                componentId: JSON.parse(component)._id,
                componentQty: 1
            }]);
            setListComponents((prevComponents) => [...prevComponents, {
                componentData: JSON.parse(component),
                componentQty: 1
            }]);
            document.getElementById('selectComponentInputId').value = "null";
        }
    }

    const handleRemoveComponent = (component) => {
        if(listComponents.includes(component)) {
            let newListComponents = listComponents.filter((componentItem) => {
                if(componentItem !== component) {
                    return componentItem;
                }
            });
            let newSelectedComponents = selectedComponents.filter((componentItem) => {
                if(componentItem.componentId !== component.componentData._id) {
                    return componentItem;
                }
            });
            setListComponents(newListComponents);
            setSelectedComponents(newSelectedComponents);
        }
    }

    const handleIncreaseQty = (component,index) => {
        let newListComponents = [...listComponents];
        let qty = newListComponents[index].componentQty;
        newListComponents[index].componentQty = qty + 1;
        // console.log(newListComponents[index]);
        setListComponents(newListComponents);
        let newSelectedComponents = selectedComponents;
        newSelectedComponents[index].componentQty = newListComponents[index].componentQty;
        setSelectedComponents(newSelectedComponents);
    }

    const handleDecreaseQty = (component,index) => {
        let newListComponents = [...listComponents];
        let qty = newListComponents[index].componentQty;
        if(qty > 1) newListComponents[index].componentQty = qty - 1;
        setListComponents(newListComponents); 
        let newSelectedComponents = selectedComponents;
        newSelectedComponents[index].componentQty = newListComponents[index].componentQty;
        setSelectedComponents(newSelectedComponents);
    }

    const handleSaveComponent = async () => {
        const projectId = params.projectId;

        const data = {
            projectComponents: selectedComponents
        }

        // console.log(data);

        try {
            setLoading(true);
            const response = await axios.patch(`/api/projects/newproject/update/${projectId}`, data);
            if(response.status === 200) {
                setLoading(false);
                setSaved(true);
                setMessage('Saved successfully!')
                // console.log(response.data);
            }
        } catch(err) {
            console.log(err);
            setLoading(false);
            setSaved(true);
            setMessage('Something went wrong!')
        }

    }

    const getProjectDetails = async (projectId) => {
        try {
            const projectDetails = await axios.get(`/api/projects/newproject/${projectId}`);
            if(projectDetails.status === 200) {
                setProjectDetails(projectDetails.data);
                let components = [];
                let selected_components = [];
                projectDetails.data.map((project,index) => {
                    components.push({
                        componentData: project.project_components,
                        componentQty: project.projectComponents[index].componentQty
                    });
                    selected_components.push({
                        componentId: project.project_components._id,
                        componentQty: project.projectComponents[index].componentQty
                    });
                });
                // console.log("select_components", selected_components)
                setListComponents(components);
                setSelectedComponents(selected_components);
            }
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(saved) {
            setTimeout(() => {
                setSaved(false);
            }, 3000);
        }
    },[saved]);

    useEffect(() => {
        getComponents();
        getProjectDetails(params.projectId);
    }, []);

    // useEffect(() => {
    //     console.log(listComponents);
    // }, [listComponents]);

    return (
        <div className='project_component'>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label className="project_details_label" for="exampleFormControlSelect1">Add Component<em style={{ color: '#FA1C1C' }}>*</em></label>
                    <select
                        onChange={handleSelectComponent}
                        className="form-control project_details_select"
                        id="selectComponentInputId"
                    >
                        <option value={"null"} >Select Component</option>
                        {
                            components.map((component, index) => {
                                return <option value={JSON.stringify(component)}>{component.componentName}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className='components_list'>
                {
                    listComponents.map((component, index) => {
                        return (
                            <div className='component_item' key={index}>
                                <div className="component_item_left">
                                    <img src={component.componentData.componentImage} className='component_img' alt='component img' />
                                    <p className='component_name'>{component.componentData.componentName}</p>
                                </div>
                                <div className="component_item_right">
                                    <p className='component_X'>X</p>
                                    <div className='component_ir_item'>
                                        <p className='component_qty'>{ component.componentQty }</p>
                                        <div className='component_qty_control' >
                                            <img src={up_triangle_img} onClick={() => handleIncreaseQty(component,index)} className='up_triangle_up' alt='up triangle img' />
                                            <img src={up_triangle_img} onClick={() => handleDecreaseQty(component, index)} className='up_triangle_up' alt='up triangle img' />
                                        </div>
                                    </div>
                                    <img src={remove_component_img} onClick={() => handleRemoveComponent(component)} className='remove_component_img' alt='remove component img' />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='component_save_btn_cover'>
                <button className='component_save_btn' onClick={handleSaveComponent} >
                {
                    loading ?
                        <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                        'Save'
                }
                </button>
            </div>
            {saved && <div className='saved_message' >{message}</div>}
        </div>
    )
}

export default ProjectComponents;