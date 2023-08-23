import React from 'react';
import './CertificateSection.css';
import sc22_certificate_img from './sc22_certificate_img.jpg';

function CertificateSection() {
  return (
    <div className="sc22_certificate_section" >
        <div className="sc22_cs_title">
            Certificate
        </div>
        <div className="sc22_cs_content">
            <img src={sc22_certificate_img} className="sc22_certificate_img" alt="Summer camp 2022 certificate" />
        </div>
    </div>
  )
}

export default CertificateSection