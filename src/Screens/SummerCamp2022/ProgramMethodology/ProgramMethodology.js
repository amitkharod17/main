import React from 'react';
import './ProgramMethodology.css';
import sc22_pm_learn from '../img/sc22_pm_learn_img.png';
import sc22_pm_build from '../img/sc22_pm_build_img.png';
import sc22_pm_innovate from '../img/sc22_pm_innovate_img.png';
import sc22_pm_bg_svg from '../img/sc22_pm_bg_svg.svg';
import sc22_pm_bg_svg_2 from '../img/sc22_pm_bg_svg_2.svg';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1200, min: 800 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 800, min: 600 },
        items: 1,
    },
    mobileSmall: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    }
};

function ProgramMethodology() {
    return (
        <div className="sc22_program_methodology">
            <img src={sc22_pm_bg_svg} className="sc22_pm_bg_svg" alt="Program Methodology Background icon" />
            <img src={sc22_pm_bg_svg_2} className="sc22_pm_bg_svg_2" alt="Program Methodology Background icon" />
            <div className="sc22_pm_bg_dot"></div>
            <h1 className="sc22_pm_title">Program Methodology</h1>
            {
                window.innerWidth < 900 ?
                    <>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2500}
                            arrows={true}
                            className="video-testimonials-carousel"
                        >
                            <div className="sc22_pmc_item">
                                <img src={sc22_pm_learn} className="sc22_pm_learn" alt="Learn img" />
                                <h2 className="sc22_pmc_item_title">Learn</h2>
                                <p className="sc22_pmc_item_text">Students learn via offline lectures taught
                                    by highly qualified mentors at IIT Delhi.
                                    The course is designed based on the
                                    curiosity and interests of the students.</p>
                            </div>
                            <div className="sc22_pmc_item">
                                <img src={sc22_pm_build} className="sc22_pm_learn" alt="Learn img" />
                                <h2 className="sc22_pmc_item_title">Build</h2>
                                <p className="sc22_pmc_item_text">Each class is followed by a live project to
                                    maximize the student’s learning. Students master their skills by building projects in a
                                    fun way.</p>
                            </div>
                            <div className="sc22_pmc_item">
                                <img src={sc22_pm_innovate} className="sc22_pm_learn" alt="Learn img" />
                                <h2 className="sc22_pmc_item_title">Innovate</h2>
                                <p className="sc22_pmc_item_text">The last sessions are for the innovation
                                    project. It helps students to follow their
                                    curious minds and build something
                                    innovative. </p>
                            </div>
                        </Carousel>
                    </> :
                    <div className="sc22_pm_content">
                        <div className="sc22_pmc_item">
                            <img src={sc22_pm_learn} className="sc22_pm_learn" alt="Learn img" />
                            <h2 className="sc22_pmc_item_title">Learn</h2>
                            <p className="sc22_pmc_item_text">Students learn via offline lectures taught
                                by highly qualified mentors at IIT Delhi.
                                The course is designed based on the
                                curiosity and interests of the students.</p>
                        </div>
                        <div className="sc22_pmc_item">
                            <img src={sc22_pm_build} className="sc22_pm_learn" alt="Learn img" />
                            <h2 className="sc22_pmc_item_title">Build</h2>
                            <p className="sc22_pmc_item_text">Each class is followed by a live project to
                                maximize the student’s learning. Students master their skills by building projects in a
                                fun way.</p>
                        </div>
                        <div className="sc22_pmc_item">
                            <img src={sc22_pm_innovate} className="sc22_pm_learn" alt="Learn img" />
                            <h2 className="sc22_pmc_item_title">Innovate</h2>
                            <p className="sc22_pmc_item_text">The last sessions are for the innovation
                                project. It helps students to follow their
                                curious minds and build something
                                innovative. </p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ProgramMethodology