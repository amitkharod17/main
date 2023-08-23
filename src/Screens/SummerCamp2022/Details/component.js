import React from 'react';
import './component.css';
import bgicon from './bgicon.svg';
import { useHistory } from 'react-router-dom';



const Component = (props) => {

    const history = useHistory();

  const handleApplyNow = () => {
    history.push("/summercamp2022-apply-form");
  };

    return <div>
            <img src={bgicon} alt="" className='bgicon'/>

        <div className="container my-5 py-5">
            <div className="heading my-5">
            
                Program Details
            </div>
            
            <div className='d-none d-lg-flex'>
                <table class="text-center table table-striped table-borderless ">
                    <thead>
                        <tr className='details'>
                            <th scope="col">Category</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='details bg-light'>
                            <td scope="row">Junior</td>
                            <td>6th to 8th</td>
                            <td>19th June to 3rd July</td>
                            <td>9am to 12pm</td>
                        </tr>
                        <tr  className='details bg-white'>
                            <td scope="row">Senior</td>
                            <td>9th to 12th</td>
                            <td>19th June to 3rd July</td>
                            <td>3pm to 6pm</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className='d-flex d-lg-none'>
                <table class="text-center table table-striped table-borderless ">
                    <thead>
                        <tr className='details details-small'>
                            <th scope="col">Category</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='details details-small bg-light'>
                            <td scope="row">Junior</td>
                            <td>6th to 8th</td>
                            <td>19th June to 3rd July</td>
                            <td>9am to 12pm</td>
                        </tr>
                        <tr  className='details details-small bg-white'>
                            <td scope="row">Senior</td>
                            <td>9th to 12th</td>
                            <td>19th June to 3rd July</td>
                            <td>3pm to 6pm</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div>
                <div className="my-5 text-center">
                <button onClick={handleApplyNow} type="button" class="mt-4 px-5 py-3 btn cta-button">Apply Now</button>
                </div>
            </div>
        </div>

    </div>
}

export default Component;