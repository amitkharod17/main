import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import ProgramMethodology from './ProgramMethodology/ProgramMethodology';
import ProgramOverview from './ProgramOverview/ProgramOverview';
import ProgramStructure from './ProgramStructure/ProgramStructure';
import InnovatorsSection from './InnovatorsSection/InnovatorsSection';
import Highlights from './Highlights/component';
import Details from './Details/component';
import Kit from './Kit/component';
import Outcomes from './Outcomes/component';
import Certificate from './Certificate/component';
import Brochure from './Brochure/component';
import SummerCamp2022FAQ from './SummerCamp2022FAQ/SummerCamp2022FAQ';

function SummerCamp2022() {
  return (
    <div>
      <HeroSection />
      <ProgramOverview />
      <ProgramMethodology />
      <ProgramStructure />
      <Highlights/>
      <Details/>
      <Kit/>
      <Outcomes/>
      <Certificate/>
      <Brochure/>
      <InnovatorsSection />
      <SummerCamp2022FAQ />
    </div>
  )
}

export default SummerCamp2022