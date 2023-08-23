import React from 'react';
import './component.css';

import brochure from './brochure.png';
import { useHistory } from 'react-router-dom';



const Component = (props) => {

    const history = useHistory();

    const handleApplyNow = () => {
        history.push("/summercamp2022-brochure");
    };

    return <div>
        <div className="container text-center my-5 py-5 d-none d-lg-flex">
            <div className="brochure-box m-5 py-5">
                <div className="row ">
                    <div className="col-12 col-lg-6 y-center">
                        <div className="text" style={{ fontSize: 33 }}>
                            For complete information
                            <button onClick={handleApplyNow} type="button" class="mt-5 px-5 py-3 btn cta-button cta-button-white">Download Brochure</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 my-5">
                        <img src={brochure} alt="" style={{ width: '60%' }} />
                    </div>
                </div>
            </div>
        </div>

        <div className=" text-center my-5 py-5 d-flex d-lg-none">
            <div className="container-fluid brochure-box my-5 py-5">
                <div className="row ">
                    <div className="col-12 col-lg-6 y-center">
                        <div className="text" style={{ fontSize: 33 }}>
                            For complete information
                            <button onClick={handleApplyNow} type="button" class="mt-5 px-5 py-3 btn cta-button cta-button-white">Download Brochure</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 my-5">
                        <img src={brochure} alt="" style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Component;