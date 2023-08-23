import React from 'react';
import './component.css';

const Component = (props) => {
    return <div className="col-12 col-lg-6">
        <div className="d-none d-lg-flex">
            <div className="mx-3 my-5">
                <div className="highlight  ">
                    <div className={"row" + (props.reverse ? " flex-row-reverse" : "")}>
                        <div className="col-4">
                            <img src={props.icon} alt="" className='highlight-card-icon' />
                        </div>
                        <div className="col-8 p-5 ">
                            {props.text}
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <div className="d-flex d-lg-none">
            <div className="mx-0 my-3">
                <div className="highlight highlight-mobile ">
                    <div className={"row" + (props.reverse ? " flex-row-reverse" : "")}>
                        <div className="col-4">
                            <img src={props.icon} alt="" className='highlight-card-icon' />
                        </div>
                        <div className="col-8 py-3 px-5 ">
                            {props.text}
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>

}

export default Component;