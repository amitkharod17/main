import React, { useState, useEffect } from 'react';
import './WhatsApp.css';

function WhatsApp() {

    const [message, setMessage] = useState("Hi there, I have query");

    const handleClick = () => {
        if(window.location.href.toString().includes("/younginnovators")) {
            setMessage("Hi there, I have query regarding Young Innovators Program");
        } else {
            setMessage("Hi there, I have query");
        }
    }

    return (
        <div className='chatbot'>
            <a
                href={`https://wa.me/917427882787?text=${message}`}
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick()}
            >
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </div>
    )
}

export default WhatsApp;
