import React from 'react';
import AboutOlympiad from './AboutOlympiad/AboutOlympiad';
import OlympiadHero from './OlympiadHero/OlympiadHero';
import TopTeamGets from './TopTeamGets/TopTeamGets';
import InnovatorsSection from './../NewBootcamp/InnovatorsSection/InnovatorsSection';
import Revolution from './../NewBootcamp/RevolutionSection/Revolution';
import BookYourSeat from './../NewBootcamp/BookYourSeat/BookYourSeat';
import FaqSection from './../NewBootcamp/FaqSection/FaqSection';
import HowToParticipate from './HowToParticipate/HowToParticipate';
import WhyParticipate from './WhyParticipate/WhyParticipate';
import Timeline from './Timeline/Timeline';

function InnovationOlympiad() {
  return (
    <>
        <OlympiadHero />
        <AboutOlympiad />
        <Timeline />
        <WhyParticipate />
        <HowToParticipate />
        <TopTeamGets />
        <InnovatorsSection />
        <Revolution />
        <BookYourSeat redirectLink="/team-registration" />
        <FaqSection />
    </>
  )
}

export default InnovationOlympiad;