import React, { useEffect } from "react";
import "./css/index.css";

import Main from "./Main";
import Courses from "./Courses";
// import Learning from "./Learning";
// import Things from "./ThingsYouSee";
import Journey from "./Journey";
// import Signup from './Signup'
import StudentProjects from "./StudentProjects";
import { useDispatch } from "react-redux";
import { setDefaultHeader, updateHeader } from "../../Actions/Header";
import { setIsIpadMiniMobileView } from "../../Actions/App";
import Banner from "./FreeclassBanner";
import { updateFooter } from "../../Actions/Footer";
// import CreatorsSection from "./CreatorsSection";
import CreatorsSection from "./CreatorsSectionNew";
import HowItWorks from "./HowItWorks/HowItWorks";
import SuccessStories from "./SuccessStories/SuccessStories";
import GrowthSection from "./GrowthSection/GrowthSection";
import ThingsYouLook from "./ThingsYouLook/ThingsYouLook";
import BackedStartup from "./BackedStartup/BackedStartup";

function LandingPage({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateHeader({ backgroundColor: "transparent" }));
    dispatch(updateFooter({ footerDisplay: "block" }));
    return () => {
      dispatch(setDefaultHeader());
      dispatch(setIsIpadMiniMobileView(false));
    };
  }, []);

  return (
    <>
      <>
        <Main />
        <CreatorsSection />
        <Courses />
        {/* <Things /> */}
        <HowItWorks />
        <ThingsYouLook />
        {/* <Learning /> */}
        <Journey />
        <SuccessStories />
        {/* <StudentProjects /> */}
        {/* <Banner /> */}
        <BackedStartup />
        <GrowthSection />
      </>
    </>
  );
}

export default LandingPage;
