import React from 'react';
import './SummerCamp2022Success.css';
import sc22_success_img from '../img/sc22_success_img.png';
import axios from 'axios';
import { useEffect } from 'react';

function SummerCamp2022Success() {

  const updateSummerCampSheet = async () => {
    try {
      const response = await axios.get('/api/summercamp2022/entries');
      if (response.status === 200) {
        console.log('Updated !!');
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(window.location.pathname.includes('/summercamp2022-form-submitted'));
    if (window.location.pathname.includes('/summercamp2022-form-submitted')) {
      updateSummerCampSheet();
    }
  }, []);

  return (
    <div className="sc22_success_section">
      <div className="sc22_success_box">
        <img src={sc22_success_img} className="sc22_success_img" alt="success img" />
        {
          window.location.pathname.includes('/summercamp2022-form-submitted') ?
            <p className="sc22_success_text">Your application has been successfully submitted, our team will get in touch with you soon.</p> :
            <p className="sc22_success_text">Kindly check your mail for the brochure.</p>
        }
      </div>
    </div>
  )
}

export default SummerCamp2022Success;