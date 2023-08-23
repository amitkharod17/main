import React from 'react'
import './css/Trusted.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import schoolLogo_1 from './img/SchoolLogos/1.png'
import schoolLogo_2 from './img/SchoolLogos/2.png'
import schoolLogo_3 from './img/SchoolLogos/3.png'
import schoolLogo_4 from './img/SchoolLogos/4.png'
import schoolLogo_5 from './img/SchoolLogos/5.png'
import schoolLogo_6 from './img/SchoolLogos/6.png'
import schoolLogo_7 from './img/SchoolLogos/7.png'
import schoolLogo_8 from './img/SchoolLogos/8.png'

const schoolLogos = [
  schoolLogo_1,
  schoolLogo_2,
  schoolLogo_3,
  schoolLogo_4,
  schoolLogo_5,
  schoolLogo_6,
  schoolLogo_7,
  schoolLogo_8
]

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 4,
    },
    miniTablet: {
      breakpoint: { max: 650, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 374 },
      items: 2,
    },
    mobileSmall: {
      breakpoint: { max: 374, min: 0 },
      items: 1,
    },

  };

  const Trustees = (item) => {
      return(
          <div className="trust-card">
              <img src={item.item} alt="yip"/>
          </div>
      )
  }
export default function Trusted() {
    return (
        <div className="trusted-container">
            <h2><span>Trusted </span>by many</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        arrows={window.innerWidth > 600 ? false : true}
        className="video-testimonials-carousel trusted-carousel"
      >
        {schoolLogos.map((item,index)=>(
          <Trustees key={index} item={item} />
        ))}
      </Carousel>
        </div>
    )
}
