import React from 'react'
import './css/Who.css'
import pic1 from './img/who1.png'
import pic2 from './img/who2.png'
import pic3 from './img/who3.png'
import pic4 from './img/who4.png'

export default function Who() {
    return (
        <div className="who-container">
            <h2><span>Who </span> is this Program for?</h2>
            <p>{window.innerWidth > 500 ? "Whether you want to discover your interests in technology from the scratch or hone the already existing techie within you, the Young Innovators Program opens doors to all inquisitive minds that are on the lookout to become technically sound. The YIP has proven to be beneficial for people with heterogeneous background interests as it future-proofs your career in the following ways:" : "Young Innovators Program opens doors to all inquisitive minds that are on the lookout to become technically sound. It has proven to be beneficial for people with heterogeneous background interests"}</p>
            
            <div>
                <div>
                    <img src={pic1} alt="yip" />
                    <div>
                        <p>Future Engineers</p>
                        <p>become technically competent in AI/coding in sciences/analytics</p>
                    </div>
                </div>
                <div>
                    <img src={pic2} alt="yip" />
                    <div>
                        <p>Always Intrigued</p>
                        <p>Who keep meddling with electrical components at home</p>
                    </div>
                </div>
                <div>
                    <img src={pic3} alt="yip" />
                    <div>
                        <p>The Artsy</p>
                        <p>Who wish to showcase portfolios by developing and publishing designs</p>
                    </div>
                </div>
                <div>
                    <img src={pic4} alt="yip" />
                    <div>
                        <p>The Medics</p>
                        <p>Medical aspirants can learn about AI and bio-informatics</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
