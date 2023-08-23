import React from 'react'
import './css/Methodology.css'
import pic1 from './img/why1.png'
import pic2 from './img/why2.png'
import pic3 from './img/why3.png'
import circle from './img/circle.png'

export default function Methodology() {
    return (
        <div className="methodology-container">
            <h2>Our <span>Unique</span> Methodology</h2>
            <p>We believe in providing the students a platform of exposure and practical knowledge. We want the students to understand and enjoy our courses. Let's have a glimpse of the thought process.</p>
            <div className="methodology-c"><img src={circle} alt="" className="methodology-circle" /></div>
            <div className="methodology-p first-method">
                <img src={pic1} alt="yip" />
                <div className="methodology-card">
                <div className="methodology-header">
                    <h3>Learn</h3>
                    <h1>1</h1>
                </div>
                <em className="rm-pm">“Every expert was once a beginner”.</em>
                <p className="rm-pm">Students learn via one on one live lectures taught by highly qualified teachers. Each class is designed based on the curiosity and interests of the student.</p>
                </div>
            </div>
            <div className="methodology-c"><img src={circle} alt="" className="methodology-circle" /></div>
            <div className="second-methodology methodology-p">
                <div className="methodology-card methodology-card-2">
                <div className="methodology-header">
                    <h3>Build</h3>
                    <h1>2</h1>
                </div>
                <em className="rm-pm">“Teach me and I may remember. Involve me and I learn”.</em>
                <p className="rm-pm">Each class is followed by a live project to maximize the student’s learning. Master the skills that you’ve learnt by building projects, the fun way.</p>
                </div>
                <img src={pic2} alt="yip" />
            </div>
            <div className="methodology-c"><img src={circle} alt="" className="methodology-circle" /></div>
            <div className="methodology-p">
                <img src={pic3} alt="yip" />
                <div className="methodology-card">
                <div className="methodology-header">
                    <h3>Innovate</h3>
                    <h1>3</h1>
                </div>
                <em className="rm-pm">“Innovation distinguishes between a leader and a follower”.</em>
                <p className="rm-pm">Do you have an idea? At Rancho Labs, students acquire the right skills and experiences by learning and building to solve a real-life problem.</p>
                </div>
            </div>
        </div>
    )
}
