import React from "react";
import HeroBox from "./HeroBox";
import Methodology from "./Methodology";
import Quote from "./Quote";
import Video from "./Video";
import Program from "./Program";
import Creators from "./Creators";
import BeforeYouAsk from "./BeforeYouAsk";
import Bonus from "./Bonus";
import Who from "./Who";
import Classroom from "./Classroom";
import Innovations from "./Innovations";
import Testimonials from "./Testimonials";
import Process from "./Process";
import Trusted from "./Trusted";
import Faqs from "./Faqs";
import Structure from "./Structure";
import Why from "./Why";
import Join from "./Join";
import './css/index.css';
import WhyThisProgram from "./WhyThisProgram/Whythisprogram";
import {Helmet} from "react-helmet";

export default function index() {
  return (
    <div style={{overflowX:"hidden",fontFamily: "Poppins"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Young Innovators Program</title>
        <meta
          name="description"
          content="A 5-week experiential program for grades 6th to 10th focused on
          technology and innovation with a unique methodology of Learn, Build,
          and Innovate conducted by IITians."
        />
      </Helmet>
      <HeroBox />
      <Video />
      <div style={{ backgroundColor: "white" }}>
        {/* <Why />  */}
        <WhyThisProgram />
        <Quote />
        <Methodology />
        <Structure />
        <Program />
        <Bonus />
        <Who />
        <Innovations />
        <Testimonials />
        <Classroom />
        <Creators />
        <Process />
        <BeforeYouAsk />
        <Join />
        <Trusted />
        <Faqs />
      </div>
    </div>
  );
}
