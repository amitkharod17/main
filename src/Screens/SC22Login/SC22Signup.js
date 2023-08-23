import React, { useState, useEffect } from "react";
import "../NewStudent/NewStudentSignup/StudentSignup.css";
import NewLogoSvg from "../NewStudent/img/logo.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import Loading from "../../Components/Loading";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
// import Modal from '../../Components/Modal/index';
function validateEmail(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email) === false) {
    return false;
  } else return true;
}

function SC22Signup() {
  const [nameError, setNameError] = useState("");
  const [emailIdError, setEmailIdError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [referralError, setrefferealError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailIdRef = useRef();
  const phoneNumberRef = useRef();
  const classRef = useRef();
  const schoolRef = useRef();
  const referralCodeRef = useRef();

  const history = useHistory();

  const formHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      emailId: emailIdRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      studentClass: classRef.current.value,
      school: schoolRef.current.value,
      referralCode: referralCodeRef.current.value,
    };

    if (
      formData.name !== "" &&
      formData.emailId !== "" &&
      formData.phoneNumber !== "" &&
      formData.phoneNumber.length >= 10 &&
      validateEmail(formData.emailId) &&
      formData.class !== "" &&
      formData.school !== "" &&
      formData.referralCode === "RLSUMMERCAMP22"
    ) {
      try {
        setLoading(true);
        const response = await axios.post(
          "/api/summercamp2022/register",
          formData
        );
        if (response.status === 200) {
          setLoading(false);
          localStorage.setItem(
            "scUserDetails",
            JSON.stringify({
              auth: response.data.auth,
              token: response.data.token,
              userId: response.data.userId,
            })
          );
          set_show_modal(true);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        alert("Something went wrong!");
      }
    } else {
      if (formData.name === "") {
        setNameError("*This field must not be empty.");
      } else {
        setNameError("");
      }
      if (formData.phoneNumber === "") {
        setPhoneNumberError("*This field must not be empty.");
      } else if (formData.phoneNumber.length < 10) {
        setPhoneNumberError("*Mobile number should contains 10 digits");
      } else {
        setPhoneNumberError("");
      }
      if (formData.emailId === "") {
        setEmailIdError("*This field must not be empty.");
      } else if (!validateEmail(formData.emailId)) {
        setEmailIdError("*Please enter a valid email address");
      } else {
        setEmailIdError("");
      }
      if (
        formData.referralCode === "" ||
        formData.referralCode !== "RLSUMMERCAMP22"
      ) {
        setrefferealError("Wrong Or Empty Registration Code");
      }
    }
  };
  const onClickHandler = () => {
    history.push("/");
  };

  const NoAccess = () => {
    const history = useHistory();
    if (!show_modal) history.push("/summercamp-dashboard");
    return <></>;
  };

  const close_modal = () => {
    set_show_modal(false);
    history.push("/summercamp-dashboard");
  };

  const [show_modal, set_show_modal] = useState(false);
  return (
    <>
      <div className="popup">
        <Modal
          show={show_modal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={close_modal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {/* {message.blue} */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            An E Mail has been sent to you. Please refer to it for further
            details.
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      {localStorage.getItem("scUserDetails") &&
      JSON.parse(localStorage.getItem("scUserDetails")).auth ? (
        <NoAccess />
      ) : (
        <section className="new_student_signup">
          <div className="new_logo">
            <img
              src={NewLogoSvg}
              alt="Rancho Labs Logo"
              onClick={onClickHandler}
            />
          </div>
          <div className="signup_form_container">
            <div className="signup_form_heading">
              <h2>Summer Camp 2022 Registration</h2>
            </div>
            <form method="POST" onSubmit={formHandler}>
              <div class="form-group">
                <label for="exampleInputName1">Name</label>
                <input
                  ref={nameRef}
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  name="name"
                  required
                  autoComplete="off"
                />
                {nameError !== "" && (
                  <span className="coupon_error">{nameError}</span>
                )}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email Id</label>
                <input
                  ref={emailIdRef}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email Id"
                  name="emailId"
                  required
                  autoComplete="off"
                />
                {emailIdError !== "" && (
                  <span className="coupon_error">{emailIdError}</span>
                )}
              </div>
              <div class="form-group">
                <label for="exampleInputPhoneNumber1">Phone Number</label>
                <input
                  ref={phoneNumberRef}
                  type="text"
                  className="form-control"
                  id="exampleInputPhoneNumer1"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  required
                  autoComplete="off"
                />
                {phoneNumberError !== "" && (
                  <span className="coupon_error">{phoneNumberError}</span>
                )}
              </div>
              <div class="form-group">
                <label for="exampleInputPhoneNumber1">School Name</label>
                <input
                  ref={schoolRef}
                  type="text"
                  className="form-control"
                  id="exampleInputSchoolName"
                  placeholder="School Name"
                  name="schoolName"
                  required
                  autoComplete="off"
                />
                {phoneNumberError !== "" && (
                  <span className="coupon_error">{phoneNumberError}</span>
                )}
              </div>
              <div class="form-group">
                <label for="exampleInputPhoneNumber1">Class</label>
                <input
                  ref={classRef}
                  type="text"
                  className="form-control"
                  id="exampleInputClass"
                  placeholder="Class"
                  name="class"
                  required
                  autoComplete="off"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPhoneNumber1">Registration Code</label>
                <input
                  ref={referralCodeRef}
                  type="text"
                  className="form-control"
                  id="exampleInputClass"
                  placeholder="Registration Code"
                  name="class"
                  required
                  autoComplete="off"
                />
                {referralError !== "" && (
                  <span className="coupon_error">{referralError}</span>
                )}
              </div>

              <button type="submit" className="btn_pay btn btn-primary">
                {isLoading ? (
                  <div className="d-flex justify-content-center">
                    <Loading
                      type="spin"
                      color="ffdd00"
                      width="28px"
                      height="28px"
                    />
                  </div>
                ) : (
                  "Sign up"
                )}
              </button>
              <div className="already_registered">
                <small>
                  Already registered?
                  <a href="/summercamp2022-login">
                    {" "}
                    Login <i class="fas fa-arrow-right fa-xs"></i>{" "}
                  </a>
                </small>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default SC22Signup;
