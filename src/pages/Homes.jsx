import React from 'react';
import DisplayHomes from '../components/homes/displayHomes';
import StickyCallButton from '../components/common/StickyCallButton';
import PageLoader from '../components/common/PageLoader';
import PageTransition from '../components/common/PageTransition';

const Homes = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Page Content with Transition */}
      <PageTransition>
        <div>
          {/* Main Content */}
          <DisplayHomes />

          {/* Sticky Mobile Buttons */}
          <StickyCallButton />
        </div>
      </PageTransition>
    </>
  );
};

export default Homes;
