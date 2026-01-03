import React from 'react';
import NDISHeader from '../components/ndis/ndisHeader';
import NdisCardsSection from '../components/ndis/ndisCardsSection';
import NdisTheoryContent from '../components/ndis/ndisTheoryContent';
import StickyCallButton from '../components/common/StickyCallButton';
import PageLoader from '../components/common/PageLoader';
import PageTransition from '../components/common/PageTransition';

const NDIS = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Page Content with Transition */}
      <PageTransition>
        <div>
          {/* NDIS Sections */}
          <NDISHeader />
          <NdisTheoryContent />
          <NdisCardsSection />

          {/* Sticky Mobile Buttons */}
          <StickyCallButton />
        </div>
      </PageTransition>
    </>
  );
};

export default NDIS;
