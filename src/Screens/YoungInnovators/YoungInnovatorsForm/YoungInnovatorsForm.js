import React, { useState, useRef } from "react";
import "../css/YoungInnovatorsForm.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const grades = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

function YoungInnovatorsForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const studentEmailIdRef = useRef();
  const parentEmailIdRef = useRef();
  const gradeRef = useRef();
  const schoolRef = useRef();
  const schoolCityRef = useRef();
  const stateRef = useRef();
  const phoneNumber1Ref = useRef();
  const phoneNumber2Ref = useRef();
  const whyShouldbeSelectedRef = useRef();
  const anyQueriesRef = useRef();
  const previousAchievementsRef = useRef();
  const parentsOccupationRef = useRef();
  const [errors, setErrors] = useState({ data: [] });

  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      studentEmailId: studentEmailIdRef.current.value,
      parentEmailId: parentEmailIdRef.current.value,
      grade: gradeRef.current.value,
      schoolName: schoolRef.current.value,
      schoolCity: schoolCityRef.current.value,
      state: stateRef.current.value,
      phoneNumber1: phoneNumber1Ref.current.value,
      phoneNumber2: phoneNumber2Ref.current.value,
      whyYouShouldBeSelected: whyShouldbeSelectedRef.current.value,
      anyQueries: anyQueriesRef.current.value,
      previousAchievements: previousAchievementsRef.current.value,
      parentsOccupation: parentsOccupationRef.current.value,
    };
    try {
      const response = await axios.post('/api/younginnovators/form', data);
      // console.log(response.data);

      if (response.data.success) {
        history.push('/younginnovators-form-submitted');
      }
    } catch (err) {
      setErrors({ data: err.response.data.errors });
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">
        Young Innovators Program 2022 Application
      </h1>
      <form method="POST" onSubmit={submitForm}>
        <div className="form-rows">
          <div className="form-group col">
            <label htmlFor="firstname">First Name *</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstname"
              ref={firstNameRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error) => {
                if (error.param === "firstName") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            }
          </div>
          <div className="form-group col">
            <label htmlFor="lastname">Last Name *</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastname"
              ref={lastNameRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error) => {
                if (error.param === "lastName") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            }
          </div>
        </div>
        <div className="form-rows">
          <div className="form-group col">
            <label htmlFor="grade">Grade</label>
            <select
              className="form-control"
              id="grade"
              name="grade"
              ref={gradeRef}
            >
              {grades.map((grade, idx) => (
                <option key={idx}>{grade}</option>
              ))}
            </select>
          </div>
          <div className="form-group col">
            <label htmlFor="schoolName">School Name *</label>
            <input
              type="text"
              name="schoolName"
              className="form-control"
              id="schoolName"
              ref={schoolRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error) => {
                if (error.param === "schoolName") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            }
          </div>
        </div>
        <div className="form-rows">
          <div className="form-group col">
            <label htmlFor="schoolCity">School City *</label>
            <input
              type="text"
              name="schoolCity"
              className="form-control"
              id="schoolCity"
              ref={schoolCityRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error) => {
                if (error.param === "schoolCity") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            }
          </div>
          <div className="form-group col">
            <label htmlFor="state">State *</label>
            <input
              type="text"
              name="state"
              className="form-control"
              id="state"
              ref={stateRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error) => {
                if (error.param === "state") {
                  return <span className="error">*{error.msg}</span>
                }
              })
            }
          </div>
        </div>
        <div className="form-rows">
          <div className="form-group col">
            <label htmlFor="phoneNumber1">
              Phone Number 1 (whatsapp preferrably) *
            </label>
            <input
              type="text"
              name="phoneNumber1"
              className="form-control"
              id="phoneNumber1"
              ref={phoneNumber1Ref}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error, index) => {
                if (error.param === "phoneNumber1") {
                  return <span className="error" key={index}>*{error.msg} </span>
                }
              })
            }
          </div>
          <div className="form-group col">
            <label htmlFor="phoneNumber2">Phone Number 2 *</label>
            <input
              type="text"
              name="phoneNumber2"
              className="form-control"
              id="phoneNumber2"
              ref={phoneNumber2Ref}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error, index) => {
                if (error.param === "phoneNumber2") {
                  return <span className="error" key={index}>*{error.msg} </span>
                }
              })
            }
          </div>
        </div>
        <div className="form-rows">
          <div className="form-group col">
            <label htmlFor="studentEmailId">Student Email Id *</label>
            <input
              type="email"
              name="studentEmailId"
              className="form-control"
              id="studentEmailId"
              ref={studentEmailIdRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error, index) => {
                if (error.param === "studentEmailId") {
                  return <span className="error" key={index}>*{error.msg}</span>
                }
              })
            }
          </div>
          <div className="form-group col">
            <label htmlFor="parentEmailId">Parent Email Id *</label>
            <input
              type="email"
              name="parentEmailId"
              className="form-control"
              id="ParentEmailId"
              ref={parentEmailIdRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error, index) => {
                if (error.param === "parentEmailId") {
                  return <span className="error" key={index}>*{error.msg}</span>
                }
              })
            }
          </div>
        </div>
        <div className="form-rows">
          <div className="form-group col-md-6">
            <label htmlFor="parentsOccupation">Parents Occupation *</label>
            <input
              type="text"
              name="parentsOccupation"
              className="form-control"
              id="parentsOccupation"
              ref={parentsOccupationRef}
              autoComplete="off"
              required
            />
            {
              errors.data.map((error, index) => {
                if (error.param === "parentsOccupation") {
                  return <span className="error" key={index}>*{error.msg}</span>
                }
              })
            }
          </div>
        </div>
        <div className="form-group textarea-group">
          <label htmlFor="inputAddress">
            Why you should be selected for Young Innovators Program 2022? *
          </label>
          <textarea
            className="form-control"
            name="whyYouShouldBeSelected"
            id="whyYouShouldBeSelected"
            ref={whyShouldbeSelectedRef}
            autoComplete="off"
            required
          ></textarea>
          {
            errors.data.map((error, index) => {
              if (error.param === "whyYouShouldBeSelected") {
                return <span className="error" key={index}>*{error.msg}</span>
              }
            })
          }
        </div>
        <div className="form-group textarea-group">
          <label htmlFor="inputAddress">
            Your previous achievements and grades? *
          </label>
          <textarea
            className="form-control"
            name="previousAchievements"
            id="previousAchievements"
            ref={previousAchievementsRef}
            autoComplete="off"
            required
          ></textarea>
          {
            errors.data.map((error, index) => {
              if (error.param === "previousAchievements") {
                return <span className="error" key={index}>*{error.msg}</span>
              }
            })
          }
        </div>
        <div className="form-group textarea-group">
          <label htmlFor="inputAddress">Any queries?</label>
          <textarea
            className="form-control"
            name="anyQueries"
            id="anyQueries"
            ref={anyQueriesRef}
            autoComplete="off"
          ></textarea>
        </div>
        <div className="btn-container text-center">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
}

export default YoungInnovatorsForm;
