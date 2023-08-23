import React from 'react'
import './css/Program.css'
import pic1 from './img/pg1.png'
import pic2 from './img/pg2.png'
import pic3 from './img/pg3.png'
import pic4 from './img/pg4.png'
import pic5 from './img/pg5.png'
import pic6 from './img/pg6.png'

export default function Program() {
    return (
        <div className="whyThisPgm-container">
            <h2><span>Why</span> this Program?</h2>
            <div>
                <div>
                    <img src={pic1} alt="yip" />
                    <p>Understanding the technical know-hows to develop strong foundational concepts</p>
                </div>
                <div>
                    <img src={pic2} alt="yip" />
                    <p>Enhance your analytical, logical, critical and algorithmic thinking</p>
                </div>
                <div>
                    <img src={pic3} alt="yip" />
                    <p>Attain meaningful learning through playful classroom interactions</p>
                </div>
                <div>
                    <img src={pic4} alt="yip" />
                    <p>Build real-time projects like applications, games and even robots!</p>
                </div>
                <div>
                    <img src={pic5} alt="yip" />
                    <p>Develop problem-solving skills by resolving real-life difficulties</p>
                </div>
                <div>
                    <img src={pic6} alt="yip" />
                    <p>Boost your career advancement opportunities with Rancho Labs’ certification programs</p>
                </div>
            </div>
        </div>
    )
}
