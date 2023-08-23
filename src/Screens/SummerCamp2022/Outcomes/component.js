import React from 'react';
import './component.css';
import Outcome from './Outcome/component';
import management from './management.svg';
import strategy from './strategy.svg';
import energy from './energy.svg';
import rudder from './rudder.svg';
import sc22_lo_img from './sc22_lo_img.png';

import bgicon from './bgicon.svg';



const Component = (props) => {
    return <div>
        <img src={bgicon} alt="" className='bgicon' />

        <div className="container-fluid  my-5 py-5">
            <div className="heading my-5">
                Learning Outcomes
            </div>
            <div>
                <div className="row">
                    <div className="col-0 col-lg-1"></div>
                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <Outcome heading="21st Century Skills" text="Gain an early opportunity to hone the 21st century skills like Coding, Robotics and AI and become tech savvy" icon={management} id={0} />
                            <Outcome heading="Technology Consumer to Creator" text="The ability to code equips young minds to transform from a mere consumer to creator of technology" icon={sc22_lo_img} id={1} />
                            <Outcome heading="Presentation and Leadership Skills" text="Enhance your communication skills to present, express and lead through your ideas effectively" icon={strategy} id={2} />
                            <Outcome heading="Bring Ideas to Life" text="Turn your smart ideas into reality by building realtime projects that offers experiential learning" icon={energy} id={3} />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
}

export default Component;