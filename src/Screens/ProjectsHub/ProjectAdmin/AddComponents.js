import React, { useState, useRef, useEffect } from 'react';

import axios from 'axios';

import Loading from '../../../Components/Loading';
import add_project_icon from '../../../Asssets/add_icon.png';
import remove_image from '../assets/delete_icon.png';
import component_img from '../assets/component_img.png';
import shopping_cart_img from '../assets/shopping_cart_svg.svg';
import remove_tag_icon from '../assets/remove_component_img.png';

const ComponentItem = ({ component, setDeletedComponent }) => {
  const { 
    componentName,
    componentImage,
    componentCartLink,
    componentVideoLink
   } = component;

   const handleDeleteComponent = async () => {
     try {
        const deletedComponent = await axios.post(`/api/projects/component/delete/${component._id}`);
        if(deletedComponent.status === 200) {
          setDeletedComponent(true);
        }
     } catch (err) {
       console.log(err);
     }
   }

   const handleRedirect = (type) => {
     if(type === 'video') {
        window.open(componentVideoLink, "_blank");
     } else if(type === 'cart') {
        window.open(componentCartLink, "_blank");
     }
   }

  return (
    <div className='pc_list_item'>
      <div className='pc_list_item_left'>
        <img src={componentImage} alt='component img' className='pc_item_component_pic' />
        <p className='pc_item_text'>{ componentName }</p>
      </div>
      <div className='pc_list_item_right'>
        <img src={shopping_cart_img} onClick={() => handleRedirect('cart')} alt='component img' className='pc_item_img' />
        <p className='pc_item_text' onClick={() => handleRedirect('video')} >Video</p>
        <img src={remove_tag_icon} onClick={handleDeleteComponent} alt='component img' className='pc_item_img' />
      </div>
    </div>
  )
}

function AddComponents() {

  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedComponent, setSavedComponent] = useState(false);
  const [componentImageLink, setComponentImageLink] = useState([]);
  const [deletedComponent, setDeletedComponent] = useState(false);
  const componentNameRef = useRef();
  const componentCartLinkRef = useRef();
  const componentVideoLinkRef = useRef();

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
    setComponentImageLink(base64);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      componentName: componentNameRef.current.value,
      componentImage: componentImageLink,
      componentCartLink: componentCartLinkRef.current.value,
      componentVideoLink: componentVideoLinkRef.current.value
    }

    try {
      setLoading(true);
      const response = await axios.post('/api/projects/component/add', data);
      if (response.status === 200) {
        // console.log(response.data);
        setLoading(false);
        setSavedComponent(true);
        getComponents();

        document.getElementById('componentNameId').value = ''
        document.getElementById('componentVideoId').value = ''
        document.getElementById('componentCartId').value = ''
        handleImageFileReset();
      }
    } catch (err) {
      console.log(err);
    }

  }

  const getComponents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/projects/component/all');
      if (response.status === 200) {
        setComponents(response.data.components);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleImageFileReset = () => {
    document.getElementById('component_image_input_id').value = '';
    setComponentImageLink('');
  }

  useEffect(() => {
    if (savedComponent) {
      setTimeout(() => {
        setSavedComponent(false);
      }, 5000);
    }
  }, [savedComponent]);

  useEffect(() => {
    getComponents();
  }, []);

  useEffect(() => {
    if(deletedComponent) {
      getComponents();
      setDeletedComponent(false);
    }
  }, [deletedComponent]);

  return (
    <div className='pa_right_content tags_section'>
      <div className='add_project_btn_cover'>
        <button className='add_project_btn'>
          <img src={add_project_icon} className="add_project_icon" alt='add project img' />
          Add Component
        </button>
      </div>
      <div className='my-4' >
        <form method='POST' onSubmit={handleFormSubmit} >
          <div className="form-group">
            <label className='tags_label' for="exampleFormControlInput1">
              Component Name<em style={{ color: '#FA1C1C' }}>*</em>
            </label>
            <input
              ref={componentNameRef}
              type="text"
              className="form-control tags_input"
              id="componentNameId"
              placeholder=""
              required
              autoComplete='off' />
          </div>
          <div className="form-group">
            <label className='tags_label' for="exampleFormControlInput1">
              Upload Image<em style={{ color: '#FA1C1C' }}>*</em>
            </label>
            <div className='position-relative'>
              <input
                id='component_image_input_id'
                onChange={handleImageUpload}
                className="p-0 form-control form-control-lg col-md-5 component_file_input"
                type="file" />
              <img onClick={handleImageFileReset} src={remove_image} alt='remove img' className='remove_component_image' />
            </div>
          </div>
          <div className="form-group">
            <label className='tags_label' for="exampleFormControlInput1">
              Cart Link<em style={{ color: '#FA1C1C' }}>*</em>
            </label>
            <input
              ref={componentCartLinkRef}
              type="text"
              className="form-control tags_input"
              id="componentCartId"
              placeholder=""
              required
              autoComplete='off' />
          </div>
          <div className="form-group">
            <label className='tags_label' for="exampleFormControlInput1">
              Video Link<em style={{ color: '#FA1C1C' }}>*</em>
            </label>
            <input
              ref={componentVideoLinkRef}
              type="text"
              className="form-control tags_input"
              id="componentVideoId"
              placeholder=""
              required
              autoComplete='off' />
          </div>
          <div className='tags_save_cover text-center'>
            <button className='project_step_save_btn'>{
              loading ?
                <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                'Add Component'
            }</button>
          </div>
          {savedComponent && <div className='saved_message' >Component added successfully!</div>}
        </form>
      </div>
      <div className='project_steps_list'>
        List of Components
      </div>
      <div className='project_components_list'>
        {
            loading ?
            <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#5a6bff" width="32px" height="32px" /></div> :
            components.map((component,index) => {
              return <ComponentItem key={index} component={component} setDeletedComponent={setDeletedComponent} />
            })
        }
      </div>

    </div>
  )
}

export default AddComponents;