import React from 'react';
import './component.css';
import kit from './kit.png';
import bgicon from './bgicon.svg';


const Component = (props) => {
    return <div>
        
        <div className="container my-5 py-5 text-center text-lg-left">
                
        <img src={bgicon} alt="" className='bgicon bgicon2'/>

            <div className="heading my-5">
                Summer Camp Kit
            </div>
            <div className="my-5">
                <div className="row my-4 flex-column-reverse flex-lg-row">
                    <div className="col-12 col-lg-6 y-center">
                        <div className='text'>
                            The summer camp requires the components like Arduino, Wires, Sensors, Wheel and Motors etc, please find the details about the kit below
                        </div>
                        <div>
                            {/* <button type="button" class="mt-5 px-5 py-3 btn cta-button">Kit Details</button> */}
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="my-5 mx-0 mx-lg-5">
                            <img src={kit} alt="" className='kit' />
                        </div>

                    </div>

                </div>
            </div>


        </div>

    </div>
}

export default Component;