import React, { useState, useRef, useEffect } from 'react';

import axios from 'axios';
import Modal from 'react-modal';

import add_project_icon from '../../../Asssets/add_icon.png';
import project_delete_icon from '../assets/delete_icon.png';
import circle_plus_icon from '../assets/circle_plus_icon.png';
import Loading from '../../../Components/Loading';
import black_edit_icon from '../assets/black_edit_icon.png';
import delete_icon from '../assets/delete_icon.png';
import remove_component_img from '../assets/remove_component_img.png';

const customStyles = {
  content: {
    width: '70%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#d8e7ff'
  },
};

Modal.setAppElement('#root');

const ModalComponent = ({
  modalIsOpen,
  setIsOpen,
  editAuthorName,
  editAuthorAbout,
  editAuthorImage,
  setEditAuthorName,
  setEditAuthorAbout,
  setEditAuthorImage,
  authorId,
  handleEditImageUpload,
  loading,
  setLoading,
  saved,
  setSaved,
  getAuthors
}) => {

  function closeModal() {
    setIsOpen(false);
  }

  const handleImageFileReset = () => {
    document.getElementById('author_image_edit_input_id').value = '';
  }

  const handleOnEditFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      authorName: editAuthorName,
      authorAbout: editAuthorAbout,
      authorProfileImage: editAuthorImage,
    }

    // console.log(data);

    try {
      setLoading(true);
      const response = await axios.patch(`/api/projects/author/update/${authorId}`, data);
      if(response.status === 200) {
        setSaved(true);
        setLoading(false);
        getAuthors();
        closeModal();
        // console.log(response.data);
      }
    } catch(err) {
      setLoading(false);
      console.log(err);
      alert('Something went wrong!');
    }
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='author_edit_modal' >
          <h2 className='edit_author_form_title'>Edit Author</h2>
          <img src={remove_component_img} onClick={closeModal} alt='close modal' className='edit_close_author_modal' />
          <form method='POST' onSubmit={handleOnEditFormSubmit} >
            <div className="form-group">
              <label className='tags_label' htmlFor="exampleFormControlInput1">
                Author Name<em style={{ color: '#FA1C1C' }}>*</em>
              </label>
              <input
                value={editAuthorName}
                onChange={(e) => setEditAuthorName(e.target.value)}
                type="text"
                className="form-control tags_input edit_author_input"
                id="exampleFormControlInput1"
                placeholder=""
                required
                autoComplete='off' />
            </div>
            <div className="form-group">
              <label className='tags_label' htmlFor="exampleFormControlInput1">About Author<em style={{ color: '#FA1C1C' }}>*</em></label>
              <textarea
                value={editAuthorAbout}
                onChange={(e) => setEditAuthorAbout(e.target.value)}
                type="text"
                className="form-control tags_input edit_author_input"
                id="exampleFormControlInput1"
                placeholder=""
                required
                autoComplete='off' ></textarea>
            </div>
            <div className="form-group position-relative">
              <label className="tags_label" htmlFor="exampleFormControlSelect1">Upload Cover Image<em style={{ color: '#FA1C1C' }}>*</em></label>
              <input
                id='author_image_edit_input_id'
                onChange={handleEditImageUpload}
                className='form-control tags_input pd_file_input edit_author_file_input'
                type="file" />
              <img src={ editAuthorImage !== '' ? editAuthorImage : circle_plus_icon} className='author_circle_plus_icon edit_author_circle_plus' alt='circle plus icon' />
              {/* <img onClick={handleImageFileReset} src={project_delete_icon} className='author_delete_icon' alt='delete icon' /> */}
              <p className='author_upload_image_text edit_author_upload_image_text'>Upload Profile Picture</p>
            </div>
            <div className='tags_save_cover text-center edit_author_save_btn'>
              <button className='project_step_save_btn '>
                {
                  loading ?
                    <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                    'Save'
                }
              </button>
            </div>
            {saved && <div className='saved_message' >Author saved successfully!</div>}
          </form>
        </div>
      </Modal>
    </>
  )
}

const AuthorItemComponent = ({ 
  author, 
  setAuthorDeleted, 
  openModal, 
  setEditAuthorName,
  setEditAuthorAbout,
  setEditAuthorImage,
  setAuthorId,
  deletedLoading,
  setDeletedLoading
}) => {

  const {
    name,
    about,
    profileImageLink
  } = author;

  const handleAuthorDelete = async () => {
    try {
      setDeletedLoading(true);
      const deletedAuthor = await axios.post(`/api/projects/author/delete/${author._id}`);
      if (deletedAuthor.status === 200) {
        // console.log(deletedAuthor);
        setDeletedLoading(false);
        setAuthorDeleted(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleOnEdit = () => {
    setAuthorId(author._id);
    setEditAuthorName(author.name);
    setEditAuthorAbout(author.about);
    setEditAuthorImage(author.profileImageLink);
    openModal();
  }

  return (
    <div className='project_authors_item'>
      <div className='pa_item_left'>
        <p className='pa_item_heading'>Author Name</p>
        <p className='pa_item_name'>{name}</p>
        <div className='pa_author_pic_cover' >
          <img src={profileImageLink} className='pa_author_pic' alt='author pic' />
        </div>
      </div>
      <div className='pa_item_right'>
        <div className='d-flex justify-content-between align-items-center' >
          <p className='pa_item_heading'>About Author</p>
          <div className='d-flex align-items-center' >
            <img src={black_edit_icon} onClick={handleOnEdit} className='author_edit_icon' alt='edit img' />
            {
              deletedLoading ?
              <div style={{ width: '15%', margin: '0 auto' }} className='' ><Loading type="spin" color="#red" width="32px" height="32px" /></div> :
              <img src={delete_icon} onClick={handleAuthorDelete} className='author_remove_icon' alt='edit img' />
            }
          </div>
        </div>
        <p className='pa_item_about'>{about}</p>
      </div>
    </div>
  )
}

function AuthorsComponent() {

  const [authorImageLink, setAuthorImageLink] = useState('');
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [authorDeleted, setAuthorDeleted] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const authorNameRef = useRef();
  const authorAboutRef = useRef();

  const [editAuthorName, setEditAuthorName] = useState('');
  const [editAuthorAbout, setEditAuthorAbout] = useState('');
  const [editAuthorImage, setEditAuthorImage] = useState('');
  const [authorId, setAuthorId] = useState('');

  const [deletedLoading, setDeletedLoading] = useState(false);

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
    setAuthorImageLink(base64);
  };

  const handleEditImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    // console.log(base64);
    setEditAuthorImage(base64);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      authorName: authorNameRef.current.value,
      authorAbout: authorAboutRef.current.value,
      authorImageLink: authorImageLink
    }

    // console.log(data);

    try {
      setLoading(true);
      const savedAuthor = await axios.post('/api/projects/author/add', data);
      if (savedAuthor.status === 200) {
        setLoading(false);
        setSaved(true);
        getAuthors();
        // console.log(savedAuthor);
        document.getElementById('authorNameId').value = '';
        document.getElementById('authorAboutId').value = '';
        handleImageFileReset();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getAuthors = async () => {
    try {
      const response = await axios.get('/api/projects/author/all');
      if (response.status === 200) {
        setAuthors(response.data);
        // console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleImageFileReset = () => {
    document.getElementById('author_image_input_id').value = '';
    setAuthorImageLink('');
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setSaved(false);
    }, 5000);
  }, [saved]);

  useEffect(() => {
    getAuthors();
  }, []);

  useEffect(() => {
    if (authorDeleted) {
      getAuthors();
    }
  }, [authorDeleted]);

  return (
    <div className='pa_right_content tags_section'>
      <div className='add_project_btn_cover'>
        <button className='add_project_btn'>
          <img src={add_project_icon} className="add_project_icon" alt='add project img' />
          Add Author
        </button>
      </div>
      <div className='my-4' >
        <form method='POST' onSubmit={handleFormSubmit} >
          <div className="form-group">
            <label className='tags_label' htmlFor="exampleFormControlInput1">
              Author Name<em style={{ color: '#FA1C1C' }}>*</em>
            </label>
            <input
              ref={authorNameRef}
              type="text"
              className="form-control tags_input"
              id="authorNameId"
              placeholder=""
              required
              autoComplete='off' />
          </div>
          <div className="form-group">
            <label className='tags_label' htmlFor="exampleFormControlInput1">About Author<em style={{ color: '#FA1C1C' }}>*</em></label>
            <textarea
              ref={authorAboutRef}
              type="text"
              className="form-control tags_input"
              id="authorAboutId"
              placeholder=""
              required
              autoComplete='off'></textarea>
          </div>
          <div className="form-group position-relative">
            <label className="tags_label" htmlFor="exampleFormControlSelect1">Upload Cover Image<em style={{ color: '#FA1C1C' }}>*</em></label>
            <input
              id='author_image_input_id'
              onChange={handleImageUpload}
              className='form-control tags_input pd_file_input'
              type="file" />
            <img src={authorImageLink !== '' ? authorImageLink : circle_plus_icon} className='author_circle_plus_icon' alt='circle plus icon' />
            <img onClick={handleImageFileReset} src={project_delete_icon} className='author_delete_icon' alt='delete icon' />
            <p className='author_upload_image_text'>Upload Profile Picture</p>
          </div>
          <div className='tags_save_cover text-center'>
            <button className='project_step_save_btn'>
              {
                loading ?
                  <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                  'Save'
              }
            </button>
          </div>
          {saved && <div className='saved_message' >Author saved successfully!</div>}
        </form>
      </div>
      <div className='project_steps_list'>
        Authors
      </div>
      <div className='project_authors'>
        {
          loading ?
          <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#5a6bff" width="32px" height="32px" /></div> :
          authors.map((author, index) => {
            return <AuthorItemComponent 
              openModal={openModal} 
              key={index} 
              author={author} 
              setAuthorDeleted={setAuthorDeleted}
              editAuthorName={editAuthorName}
              setEditAuthorName={setEditAuthorName}
              editAuthorAbout={editAuthorAbout}
              setEditAuthorAbout={setEditAuthorAbout}
              editAuthorImage={editAuthorImage}
              setEditAuthorImage={setEditAuthorImage}
              setAuthorId={setAuthorId}
              deletedLoading={deletedLoading}
              setDeletedLoading={setDeletedLoading} />
          })
        }
      </div>
      <ModalComponent 
        modalIsOpen={modalIsOpen} 
        setIsOpen={setIsOpen}
        editAuthorName={editAuthorName}
        setEditAuthorName={setEditAuthorName}
        editAuthorAbout={editAuthorAbout}
        setEditAuthorAbout={setEditAuthorAbout}
        editAuthorImage={editAuthorImage}
        setEditAuthorImage={setEditAuthorImage}
        authorId={authorId}
        handleEditImageUpload={handleEditImageUpload}
        saved={saved}
        loading={loading}
        setLoading={setLoading}
        setSaved={setSaved}
        getAuthors={getAuthors} />
    </div>
  )
}

export default AuthorsComponent;