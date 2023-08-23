import React from 'react';
import './SummerCamp2022Apply.css';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Loading from '../../../Components/Loading';

function SummerCamp2022Apply() {

    const studentNameRef = useRef();
    const phoneNumberRef = useRef();
    const emailIdRef = useRef();
    const nameOfSchoolRef = useRef();
    const schoolCityRef = useRef();
    const [chooseGrade, setChooseGrade] = useState('select your grade');
    const [isLoading, setLoading] = useState(false);

    const history = useHistory()

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = {
            studentName: studentNameRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            emailId: emailIdRef.current.value,
            nameOfSchool: nameOfSchoolRef.current.value,
            schoolCity: schoolCityRef.current.value,
            chooseGrade: chooseGrade
        }

        try {
            setLoading(true);
            const savedStudent = await axios.post('/api/summercamp2022/apply', data);
            if (savedStudent.status === 200) {
                setLoading(false);
                // console.log('Saved Student ', savedStudent.data);
                history.push('/summercamp2022-form-submitted');
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            alert('Something went wrong');
        }
    }

    return (
        <div className="sc22_apply_form_section">
            <div className="sc22_apply_form_box">
                <h1 className="sc22_apply_form_title">Application for Robotics & Coding Summer Camp</h1>
                <form method='post' onSubmit={handleFormSubmit} className="sc22_apply_form" >
                    <div class="form-group">
                        <label className="sc22_apply_form_label" htmlFor="exampleFormControlInput1">Student Name<span className="sc22_star"> *</span></label>
                        <input
                            ref={studentNameRef}
                            className="form-control sc22_apply_form_input"
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Name"
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div class="form-group">
                        <label className="sc22_apply_form_label" for="exampleFormControlInput1">Phone<span className="sc22_star"> *</span></label>
                        <input
                            ref={phoneNumberRef}
                            className="form-control sc22_apply_form_input"
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="0000000000"
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div class="form-group">
                        <label className="sc22_apply_form_label" for="exampleFormControlInput1">Email ID<span className="sc22_star"> *</span></label>
                        <input
                            ref={emailIdRef}
                            className="form-control sc22_apply_form_input"
                            type="email"
                            id="exampleFormControlInput1"
                            placeholder="example@gmail.com"
                            required
                            autoComplete='off' />
                    </div>
                    <div class="form-group">
                        <label className="sc22_apply_form_label" for="exampleFormControlInput1">Name of School<span className="sc22_star"> *</span></label>
                        <input
                            ref={nameOfSchoolRef}
                            className="form-control sc22_apply_form_input"
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="School Name"
                            required
                            autoComplete='off' />
                    </div>
                    <div class="form-group">
                        <label className="sc22_apply_form_label" for="exampleFormControlInput1">School City<span className="sc22_star"> *</span></label>
                        <input
                            ref={schoolCityRef}
                            className="form-control sc22_apply_form_input"
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="School City"
                            required
                            autoComplete='off' />
                    </div>
                    <div class="form-group">
                        <label className="sc22_apply_form_label" for="exampleFormControlSelect1">Choose Grade<span className="sc22_star"> *</span></label>
                        <select defaultValue={chooseGrade} onClick={(e) => setChooseGrade(e.target.value)} className="form-control sc22_apply_form_input" id="exampleFormControlSelect1">
                            <option value="select your grade" >Select your grade</option>
                            <option value="6th - 8th" >6th - 8th</option>
                            <option value="9th - 12th" >9th - 12th</option>
                        </select>
                    </div>
                    <div className="form-group text-center">
                        <button className="sc22_apply_btn_submit">
                            {
                                isLoading ?
                                <div className='text-center mb-2 mt-0' ><Loading type="spin" color="#f7c945" width="38px" height="38px"  /></div> :
                                "Submit"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SummerCamp2022Apply