import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import FaqSection from './FaqSection/FaqSection';
import BookYourSeat from './BookYourSeat/BookYourSeat';
import Revolution from './RevolutionSection/Revolution';
import InnovatorsSection from './InnovatorsSection/InnovatorsSection';
import ThemeSection from './ThemeSection/ThemeSection';
import WonderingSection from './WonderingSection/WonderingSection';
import BatchSection from './BatchSection/BatchSection';
import AskSection from './AskSection/AskSection';
import BroughtSection from './BroughtSection/BroughtSection';
import BeforeYouAsk from './BeforeYouAsk/BeforeYouAsk';

function NewBootcamp() {
  return (
    <>
        <HeroSection />
        <ThemeSection />
        <WonderingSection />
        <BatchSection />
        {/* <AskSection /> */}
        <BeforeYouAsk />
        <BroughtSection />
        <InnovatorsSection />
        <Revolution />
        <BookYourSeat />
        <FaqSection /> 
    </>
  )
}

export default NewBootcamp;