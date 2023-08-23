import React from 'react';
import "./TopTeamGets.css"
import money_bag_img from '../img/money_bag_img.png';
import university_img from '../img/university_img.png';
import discussion_img from '../img/discussion_img.png';

function TopTeamGets() {
  return (
    <div className="olympiad_topteam">
        <h1 className="olympiad_topteam_title">Top 3 Team Gets</h1>
        <div className="topteam_gets">
            <div className="topteam_item">
                <img className="money_bag_img" src={money_bag_img} alt="money bag img" />
                <p className="topteam_item_text">Upto 1 lakh Cash Reward</p>
            </div>
            <div className="topteam_item">
                <img className="university_img" src={university_img} alt="university img" />
                <p className="topteam_item_text">Award Ceremony in IIT Delhi</p>
            </div>
            <div className="topteam_item">
                <img className="discussion_img" src={discussion_img} alt="discussion img" />
                <p className="topteam_item_text">Life Long mentorship by Rancho Labs Coommunity</p>
            </div>
        </div>
    </div>
  )
}

export default TopTeamGets;