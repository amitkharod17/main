import React from 'react';
import './ProgramOverview.css';

import sc22_overview_img from '../img/sc22_overview_img.png';
import sc22_overview_bg_svg_1 from '../img/sc22_overview_bg_svg_1.svg';
import sc22_overview_bg_svg_2 from '../img/sc22_overview_bg_svg_2.svg';
import { useHistory } from 'react-router-dom';

function ProgramOverview() {

    const history = useHistory();

    const handleRedirect = () => {
        history.push('/summercamp2022-brochure')
    }

    return (
        <div className="sc22_program_overview_section">
            <div className="sc22_program_overview">
                <img src={sc22_overview_bg_svg_2} className="sc22_overview_bg_svg" alt="Overview Background img" />
                <img src={sc22_overview_bg_svg_1} className="sc22_overview_bg_svg_1" alt="" />
                <div className="sc22_po_left">
                    { window.innerWidth > 900 && <h1 className="sc22_po_left_title">Program Overview</h1> }
                    <p className="sc22_po_left_description">
                        <span className="po_left_desc_span">Coding and Robotics Summer Camp</span> is a
                        program for
                        grade 6th to 12th students
                        with a focus to cultivate
                        technological interests and innovation in school
                        students. The program will be conducted
                        from 19th June to 3rd June in batches of
                        size 30-45
                        students by Rancho Labs team
                        who are passionate about imparting
                        technological and innovative insights to
                        students.</p>
                    <button className="sc22_po_left_btn_dbrochure" onClick={handleRedirect} >Download Brochure</button>
                </div>
                <div className="sc22_po_right">
                    {window.innerWidth < 900 && <h1 className="sc22_po_left_title text-center">Program Overview</h1>}
                    <img src={sc22_overview_img} className="sc22_overview_img" alt="Overview img" />
                </div>
            </div>
        </div>
    )
}

export default ProgramOverview