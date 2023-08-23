import React from 'react';
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline_section">
        <h1 className="timeline_section_title">Structure & Timeline</h1>
        <div className="timeline_box">
            <div className="timeline_box_left">
                <div className="timeline_left_item">
                    <h2 className="timeline_item_title">Team Formation</h2>
                    <p className="timeline_item_subtitle">How to form a team? <a href='/olympiad' className="learn_more_text">Learn More</a></p>
                    <span className="timeline_item_deadline">Deadline: 1st July'22</span>
                </div>
                <div className="timeline_left_item">
                    <h2 className="timeline_item_title active_timeline">Idea Submission</h2>
                    <p className="timeline_item_subtitle">How to form a team? <a href='/olympiad' className="learn_more_text">Learn More</a></p>
                    <span className="timeline_item_deadline">Deadline: 1st July'22</span>
                </div>
                <div className="timeline_left_item">
                    <h2 className="timeline_item_title">Shortlist Release</h2>
                    <p className="timeline_item_subtitle">How to form a team? <a href='/olympiad' className="learn_more_text">Learn More</a></p>
                    <span className="timeline_item_deadline">Deadline: 1st July'22</span>
                </div>
                <div className="timeline_left_item">
                    <h2 className="timeline_item_title">Live Presentation</h2>
                    <p className="timeline_item_subtitle">How to form a team? <a href='/olympiad' className="learn_more_text">Learn More</a></p>
                    <span className="timeline_item_deadline">Deadline: 1st July'22</span>
                </div>
                <div className="timeline_left_item">
                    <h2 className="timeline_item_title">Results Announcement</h2>
                    <p className="timeline_item_subtitle">How to form a team? <a href='/olympiad' className="learn_more_text">Learn More</a></p>
                    <span className="timeline_item_deadline">Deadline: 1st July'22</span>
                </div>
            </div>
            <div className="timeline_box_right">
                <div className="timeline_right_item">
                    <h2 className="timeline_right_title">Idea Submission</h2>
                    <div className="timeline_right_content"></div>
                    <p className="timeline_right_deadline">Deadline: 1st July'22</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline