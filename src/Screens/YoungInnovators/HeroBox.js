import React from 'react'
import './css/HeroBox.css'
import { useHistory } from "react-router-dom";

export default function HeroBox() {

    const history = useHistory();

    function handleEvent() {
        history.push("/younginnovators-form");
    }

    return (
        <div className="herobox-container">
            <h1>YOUNG INNOVATORS PROGRAM '22</h1>
            <p>A 12-week experiential program conducted by IITians for grades 6 to 10, focusing on technology and innovation with a unique methodology to Learn, Build, and Innovate.</p>
            <button onClick={handleEvent}>Start your Application Now!</button>
        </div>
    )
}
