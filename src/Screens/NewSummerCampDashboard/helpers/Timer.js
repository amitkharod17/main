import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp, type, handleSubmitQuiz, handleQuizLive, openModal, setIsTimeOver }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
        onExpire
    } = useTimer({ expiryTimestamp, onExpire: () => {
        if(type==='long') {
            console.log('Over!!');
            setIsTimeOver(true)
            openModal()
        } else {
            handleQuizLive()
        }
    } 
});


    return (
        <>
            {
                type === 'long' ?
                    <div style={{ textAlign: 'center' }}>
                        <div className='time_left_box text-center mt-5'>
                            <p className='time_left_text'>Time Left:</p>
                            <p className='running_time'>
                                <span>{hours < 10 ? '0' + hours : hours}</span>:
                                <span>{minutes < 10 ? '0' + minutes : minutes}</span>:
                                <span>{seconds < 10 ? '0' + seconds : seconds}</span></p>
                        </div>
                    </div>
                    : <span>
                    <span>{hours < 10 ? '0' + hours : hours}</span>:
                    <span>{minutes < 10 ? '0' + minutes : minutes}</span>:
                    <span>{seconds < 10 ? '0' + seconds : seconds}</span></span>
            }
        </>
    );
}