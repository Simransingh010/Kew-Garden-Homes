import React from 'react';
import CarouselComponent from '../components/landingPage/Carousel';
import WhyChooseUs from '../components/landingPage/numbers';
import GuaranteeSection from '../components/landingPage/GuaranteeSection';
import PortfolioTeaser from '../components/landingPage/PortfolioTeaser';
import ProcessSection from '../components/landingPage/ProcessSection';
import Testimonials from '../components/landingPage/Testimonials';
import LeadMagnetSection from '../components/landingPage/LeadMagnetSection';
import FAQSection from '../components/landingPage/FAQSection';
import StickyCallButton from '../components/common/StickyCallButton';
import PageLoader from '../components/common/PageLoader';
import PageTransition from '../components/common/PageTransition';

const LandingPage = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Page Content with Transition */}
      <PageTransition>
        <div>
          {/* Hero Section */}
          <CarouselComponent />

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Guarantee Section */}
          <GuaranteeSection />

          {/* Portfolio Teaser */}
          <PortfolioTeaser />

          {/* Process Section */}
          <ProcessSection />

          {/* Testimonials */}
          <Testimonials />

          {/* Lead Magnet (Email Capture) */}
          <div id="lead-magnet">
            <LeadMagnetSection />
          </div>

          {/* FAQ */}
          <FAQSection />

          {/* Sticky Mobile Buttons */}
          <StickyCallButton />
        </div>
      </PageTransition>
    </>
  );
};

export default LandingPage;
