import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import add_project_icon from '../../../Asssets/add_icon.png';
import Loading from '../../../Components/Loading';
import remove_icon from '../assets/remove_component_img.png';

function TagsComponent() {

  const [loading, setLoading] = useState(false);
  const [savedTag, setSavedTag] = useState(false);
  const [tags, setTags] = useState([]);
  const tagNameRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const tagName = tagNameRef.current.value;

    try {
      setLoading(true);
      const response = await axios.post('/api/projects/tag/add', { tagName });
      if (response.status === 200) {
        // console.log(response.data);
        setLoading(false);
        setSavedTag(true);
        getTags();

        document.getElementById('tagNameId').value = '';
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getTags = async () => {
    try {
      setLoading(true);
      const tags = await axios.get('/api/projects/tag/all');
      if (tags.status === 200) {
        // console.log(tags);
        setLoading(false);
        setTags(tags.data.allTags);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteTag = async (tag) => {
    try {
      const response = await axios.post(`/api/projects/tag/delete/${tag._id}`);
      if(response.status === 200) {
        // console.log(response.data);
        getTags();
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setSavedTag(false);
    }, 5000);
  }, [savedTag])

  useEffect(() => {
    getTags();
  }, []);


  return (
    <div className='pa_right_content tags_section'>
      <div className='add_project_btn_cover'>
        <button className='add_project_btn'>
          <img src={add_project_icon} className="add_project_icon" alt='add project img' />
          Add Tag
        </button>
      </div>
      <div className='my-4' >
        <form method='POST' onSubmit={handleFormSubmit} >
          <div className="form-group">
            <label className='tags_label' for="exampleFormControlInput1">
              Tag Name<em style={{ color: '#FA1C1C' }}>*</em>
            </label>
            <input
              ref={tagNameRef}
              type="text"
              className="form-control tags_input"
              id="tagNameId"
              placeholder="" />
          </div>
          <div className='tags_save_cover text-center'>
            <button className='project_step_save_btn'>{
              loading ?
                <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                'Add Tag'
            }</button>
          </div>
          {savedTag && <div className='saved_message' >Tag saved successfully!</div>}
        </form>
      </div>
      <div className='project_steps_list'>
        List of Tags
      </div>
      <div className='projects_tag_list'>
        {
          loading ?
          <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
          tags.map((tag, index) => {
            return (
              <div className='project_tag_list_item'>
                <p className='tag_list_item_text'>{ tag.tagName }</p>
                <img src={remove_icon} onClick={() => handleDeleteTag(tag)} className='remove_tag_icon' alt='remove tag img' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TagsComponent;