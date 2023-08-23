import React from 'react'
import './css/Quote.css'
import pic from './img/quote.png'

export default function Quote() {
    return (
        <div className="quote-box">
            <img src={pic} alt="yip" />
            <div>
            <div style={{textAlign:"left"}}><i className="fas fa-quote-left"></i></div>
                <h3>5 - 10 years</h3>
                <p>This is the best age to begin with Programming courses</p>
                <div style={{textAlign:"right"}}><i className="fas fa-quote-right"></i></div>
            </div>
        </div>
    )
}
