import React from 'react';
import StickyCallButton from '../components/common/StickyCallButton';
import PageLoader from '../components/common/PageLoader';
import PageTransition from '../components/common/PageTransition';

const Stories = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Page Content with Transition */}
      <PageTransition>
        <div>
          {/* Stories Content */}
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold text-customGreen">Stories Coming Soon</h1>
          </div>

          {/* Sticky Mobile Buttons */}
          <StickyCallButton />
        </div>
      </PageTransition>
    </>
  );
};

export default Stories;
