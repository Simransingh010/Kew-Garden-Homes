import React from 'react';
import FounderStory from '../components/aboutUs/FounderStory';
import OurPillars from '../components/aboutUs/OurPillars';
import TeamSection from '../components/aboutUs/TeamSection';
import PageTransition from '../components/common/PageTransition';
import PageLoader from '../components/common/PageLoader';
import StickyCallButton from '../components/common/StickyCallButton';

const AboutUs = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Page Content with Transition */}
      <PageTransition>
        <div>
          {/* Founder Story / Our Mission */}
          <FounderStory />

          {/* Four Pillars */}
          <OurPillars />

          {/* Team Section */}
          <TeamSection />

          {/* Sticky Mobile Buttons */}
          <StickyCallButton />
        </div>
      </PageTransition>
    </>
  );
};

export default AboutUs;
