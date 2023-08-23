import React from 'react'
import './css/Bonus.css'
import pic1 from './img/bonus1.png'
import pic2 from './img/bonus2.png'
import pic3 from './img/bonus3.png'
import pic4 from './img/bonus4.png'
import pic5 from './img/bonus5.png'
import pic6 from './img/bonus6.png'


export default function Bonus() {
    return (
        <div className="bonus-container">
            <h2>A little <span>more</span> than what you'd expect</h2>
            <div>
                <div>
                    <h3>Bonus 1</h3>
                    <img src={pic1} alt="yip"/>
                    <p>Participate in Rancho Community and experience life outside the classroom</p>
                </div>
                <div>
                    <h3>Bonus 2</h3>
                    <img src={pic2} alt="yip" />
                    <p>Have more fun by involving in games, events, Webinars</p>
                </div>
                <div>
                    <h3>Bonus 3</h3>
                    <img src={pic3} alt="yip"/>
                    <p>Give your mind a workout and indulge in regular quizzes, brain teasers</p>
                </div>
                <div>
                    <h3>Bonus 4</h3>
                    <img src={pic4} alt="yip"/>
                    <p>Stay updated with the latest technological happenings around the world</p>
                </div>
                <div>
                    <h3>Bonus 5</h3>
                    <img src={pic5} alt="yip"/>
                    <p>Learn, unlearn and relearn in unique ways with your peers</p>
                </div>
                <div>
                    <h3>Bonus 6</h3>
                    <img src={pic6} alt="yip"/>
                    <p>Get inspired and generate ideas by taking part in IIT Clubs</p>
                </div>
            </div>
        </div>
    )
}
