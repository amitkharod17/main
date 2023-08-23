import React from 'react';
import './BackedStartup.css';
import iit_delhi_icon from '../img/iit_delhi_icon.png';
import ihfc_icon from '../img/ihfc_icon.png';
import govt_dst_icon from '../img/govt_dst_icon.png';

function BackedStartup() {
  return (
    <div className="backed_startup_section">
        <h1 className="bss_title">Backed by Innovation Hub for Cobotics(IHFC), IIT Delhi &amp; Govt of India</h1>
        <div className="bss_content">
            <div className="bss_content_item">
                <img src={ihfc_icon} className='bss_content_img ihfc_icon' alt="" />
                <h2 className="bss_conten_item_text">IHFC</h2>
            </div>
            <div className="bss_content_item">
                <img src={iit_delhi_icon} className='bss_content_img iit_delhi_icon' alt="" />
                <h2 className="bss_conten_item_text">IIT Delhi</h2>
            </div>
            <div className="bss_content_item">
                <img src={govt_dst_icon} className='bss_content_img govt_dst_icon' alt="" />
            </div>
        </div>
    </div>
  )
}

export default BackedStartup