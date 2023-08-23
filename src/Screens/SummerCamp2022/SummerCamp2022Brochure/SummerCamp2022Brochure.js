import React from 'react';
import './SummerCamp2022Brochure.css';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Loading from '../../../Components/Loading';

function SummerCamp2022Brochure() {

    const studentNameRef = useRef();
    const phoneNumberRef = useRef();
    const emailIdRef = useRef();
    const [isLoading, setLoading] = useState(false);

    const history = useHistory()

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = {
            studentName: studentNameRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            emailId: emailIdRef.current.value,
        }

        try {
            setLoading(true);
            const savedStudent = await axios.post('/api/summercamp2022/brochure', data);
            if (savedStudent.status === 200) {
                setLoading(false);
                history.push('/summercamp2022-success');
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
                <h1 className="sc22_apply_form_title">Application for Summer Camp 2022 Brochure</h1>
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

export default SummerCamp2022Brochure;