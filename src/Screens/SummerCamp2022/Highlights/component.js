import React from 'react';
import './component.css';

import Card from './card/component';

import medal from '../Highlights/medal.svg';
import speech from '../Highlights/speech.svg';
import solution from '../Highlights/solution.svg';
import graduation_cap from '../Highlights/graduation-cap.svg';

import bgicon from './bgicon.svg';
import bgicon2 from './bgicon2.svg';


const Component = (props) => {
    return <div>
        <img src={bgicon} alt="" className='bgicon'/>
            <img src={bgicon2} alt="" className='bgicon'/>
        <div className="container my-5 py-5">
            
            <div className="heading my-5">
                Program Highlights
            </div>
            <div className="row ">
                    <Card text="Receive certificate for the program as well as build a Digitally Verified Portfolio" icon={medal}/>
                    <Card text="Experience high-impact in-person offline classes at IIT Delhi" icon={speech}/>
                    <Card reverse text="Individual and group projects help students build leadership and presentation skills" icon={solution}/>
                    <Card reverse text="Learn from highly qualified and passionate instructors" icon={graduation_cap}/>
                </div>
        </div>

    </div>
}

export default Component;