import React from 'react';
import './ScdTopComponent.css';
import sc22_visitors_img from '../Assets/sc22_visitors_img.png';
import sc22_share_img from '../Assets/sc22_share_img.png';
import { useEffect } from 'react';
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ScdTopComponent({ views }) {

  const [copied, setCopied] = useState(false);
  const [profileViews, setProfileViews] = useState(null);

  useEffect(() => {
    if(copied) alert('Link copied!');
  },[copied])
  // console.log(views);

  async function getStudentProfile() {
    const studentId = JSON.parse(localStorage.getItem("scUserDetails")).userId;
    try {
        const response = await axios.get(`/api/summercamp2022/student/${studentId}`,{
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("scUserDetails")).token}`
          }
        });
        if(response.status === 200) {
          setProfileViews(response.data.student.visitors);
        }
    } catch (err) { 
      console.log(err);
    }
  }
  const params = useParams();
  useEffect(() => {
    if(window.location.pathname.includes('/summercamp-dashboard')) {
      getStudentProfile();
    }
  },[profileViews]);
  return (
    <>
      <div className="scd_top_school_cover mb-3">
        <div className="scd_tc_sc_row">
          {/* <h2 className="scd_tc_school_text">Seth Anandram  Jaipuria School</h2> */}
          <div>
            <div className="scd_tc_visitors">
              <span className="scd_tc_visitors_text">Visitors</span>
              <img src={sc22_visitors_img} className="sc22_visitors_img" alt="Visitors img" />
              <span className="scd_tc_visitors_count">{views !== undefined ? views : profileViews}</span>
            </div>
          </div>
          <div>
            <CopyToClipboard text={`https://rancholabs.com/sc-profile-${ 
              window.location.pathname.includes("/summercamp-dashboard") ? 
              JSON.parse(localStorage.getItem("scUserDetails")).userId : 
              params.id}`}
              onCopy={() => setCopied(true)}>
              <img src={sc22_share_img} className="sc22_share_img" alt="Share img" />
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScdTopComponent