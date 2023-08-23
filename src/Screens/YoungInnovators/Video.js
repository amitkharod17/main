import React from 'react'
import './css/Video.css'

export default function Video() {
    return (
        <div className="yi-video">
            <iframe 
            src="https://www.youtube.com/embed/tYxQrQxUjeo" 
            title="Young Innovators Program"
            allowFullScreen={true} />
            <p>Have you ever wondered what it is like to experience Rancho Labs’ Young Innovators Program? Take a glimpse into the YIP Cohort 1 brought to life by students, parents, and instructors and how our teaching style leads children to innovate </p>
        </div>
    )
}   
