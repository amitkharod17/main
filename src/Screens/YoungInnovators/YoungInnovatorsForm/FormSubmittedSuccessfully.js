import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../Asssets/sucessDone.json';
import '../css/FormSubmittedSuccessfully.css';

function FormSubmittedSuccessfully() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="success-container">
            <h1 className="heading">Young Innovators Program 2022 Application</h1>
            <div className="success-content">
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={120}
                        width={120}
                    />
                </div>
                <div>
                    <p className="submitted-text">Your application has been submitted successfully.</p>
                </div>
                <h3>What’s next?</h3>
                <div>
                    <p className="shortlisted-text">The shortlisted applications will receive a call for interview.</p>
                </div>
            </div>
        </div>
    );
}

export default FormSubmittedSuccessfully;
