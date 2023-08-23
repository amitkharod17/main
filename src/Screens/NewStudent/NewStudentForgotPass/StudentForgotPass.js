import React, { useEffect } from 'react';
import "./StudentForgotPass.css";
import NewLogoSvg from "../img/logo.svg";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import Lottie from 'react-lottie';
import animationData from '../../../Asssets/sucessDone.json';
import queryString from 'query-string';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10',
  },
};

Modal.setAppElement('#root');

function StudentForgotPass() {

  const history = useHistory();
  const [resetError, setResetError] = React.useState(false);
  const [isSet, setIsSet] = React.useState(false);
  const [newPassord, setNewPassword] = React.useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [mode,setMode] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const data = {
      emailId: e.target.emailId.value
    }

    try {
      const response = await axios.patch(
        window.location.pathname.includes('/summercamp-password-reset') ?
        '/api/summercamp2022/login/reset': 
      '/api/bootcamp/password-reset', data);
      // console.log(response);
      if (response.status === 201) {
        // history.push("/studentlogin");
        setIsSet(true);
        setResetError(false);
        setNewPassword(response.data.password);
        openModal();
      }
    } catch (err) {
      console.log(err);
      setResetError(true);
      setIsSet(false);
    }

  }

  const onClickHandler = () => {
    history.push("/");
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const NoAccess = () => {
    const history = useHistory();
    history.push('/bootcamp-dashboard');
    return <></>
  }

  useEffect(() => {
    let queries = queryString.parse(window.location.search);
    setMode(queries.mode);
  },[]);

  return (
    <>
      {
        localStorage.getItem("userDetail") &&
          JSON.parse(localStorage.getItem("userDetail")).auth ?
          <NoAccess /> :
          <section className="new_student_login">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              overlayClassName={{
                opacity: '0.8'
              }}
            >
              <div className="modal_box">
                <button className="modal_close_btn" onClick={closeModal} >x</button>
                <div>
                  <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                  />
                </div>
                <div className="modal_text_box">
                  <p className="submitted_text">Your account password has been successfully reset.
                    Please find new credentials over email and log in.</p>
                </div>
                <div className="login_btn_box">
                  <a className="forgot_btn_login" href={ window.location.pathname.includes('/summercamp-password-reset') ?
                  '/summercamp2022-login' :
                   mode === 'olympiad' ? `/studentlogin?mode=${mode}` : '/studentlogin' }>Login</a>
                </div>
              </div>
            </Modal>

            <div className="new_logo">
              <img src={NewLogoSvg} alt="Rancho Labs Logo" onClick={onClickHandler} />
            </div>
            <div className="form_container">
              <div className="form_heading">
                <p>WELCOME BACK, RANCHO!</p>
                <h2>Write your email to receive a new password</h2>
              </div>
              <form method='POST' onSubmit={formSubmitHandler} >
                <div class="form-group">
                  <label for="exampleInputEmail1">Email Id</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="emailId"
                    autoComplete='off'
                    required
                  />
                  {resetError ? <span className={"coupon_error"} >*You are not registered yet. Please<a href='/studentsignup'> register now <i class="fas fa-arrow-right fa-xs"></i> </a> </span> :
                    isSet && <span className={"coupon_valid"} >*Please check your mail and <a href='/studentlogin'> Login <i class="fas fa-arrow-right fa-xs"></i> </a> </span>}
                </div>
                <button type="submit" class="btn btn-primary">RESET PASSWORD</button>
              </form>
            </div>
          </section>
      }
    </>
  )
}

export default StudentForgotPass;
