import React, { useState } from 'react';
import avtaar from '../avtaar.png';
import NavItem from './NavItems/component';
import user from './User.svg';
import editreport from './edit-report.svg';
import newreport from './new-report.svg';
import add from './Add.svg';
import bgicon from './bgicon.svg';
import changephoto from './change_photo.svg';
import { useHistory, useParams } from 'react-router-dom';


    

import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
const openPhotoModal = () => {

}

const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

const ModalComp = (props) => {
    const { handleShow, handleClose, show, set_profile, profile } = props;
    var image;
    const [changing, set_changing] = useState(false);
    return (
        <>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Profile Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <input type="file" id="file-input" onChange={(e) => { getBase64(e.target.files[0], (b64) => { image = b64 }) }} />
                    <Button onClick={(e) => {
                        axios.post('api/summercampbootcamp2022/set_profile_photo', { photo: image }).then((res) => {
                            profile.photo = res.data.url;
                            set_profile(profile);
                            handleClose();
                        });
                    }}>
                        {changing?"Uploading Photo":"Change Photo"}
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}

const NavbarComponent = () => {
    const [ activeTab, setActiveTab] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [profile, set_profile] = useState({});
    const params = useParams();
    console.log(profile);
    if (!profile._id) axios
        .get(`/api/summercampbootcamp2022/profile/${params.id}`)
        .then((res) => {
            set_profile(res.data);
        });
        const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("scUserDetails");
        history.push('/summercamp2022-login');
    }
    return <div className="row" style={{ height: '100%' }}>
        <ModalComp handleShow={handleShow} handleClose={handleClose} show={show} set_profile={set_profile} profile={profile} />
        <div className="col-10 dashboard-sidebar pt-0">
            <div className="bgicon">
                <img src={bgicon} alt="" style={{ width: 'calc(100% - 30px)', margin: '30px 15px' }} />
            </div>
            <div className="mx-auto text-center pt-2 pb-5 mb-5">
                <div className="div avtaar-border mx-auto my-5">
                    <img src={profile.photo || avtaar} alt="" className='fit-cover' />
                    {/* <img src={changephoto} alt="" className='change-photo' onClick={handleShow} /> */}

                </div>
                <div className="pt-3 mt-3 mx-4">
                    <NavItem active name="About Me" scroll="about" icon={user} tabId={0} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <NavItem name="My Projects" scroll="projects" icon={editreport} tabId={1} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <NavItem name="My Certificates" scroll="certificates" icon={newreport} tabId={2} activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                
            </div>
        </div>
    </div>
}

export default NavbarComponent