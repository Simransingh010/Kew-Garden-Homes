import React from 'react';
import OwnerDetails from '../components/contact/ownerDetails';
import StickyCallButton from '../components/common/StickyCallButton';
import PageLoader from '../components/common/PageLoader';
import PageTransition from '../components/common/PageTransition';

const Contact = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Page Content with Transition */}
      <PageTransition>
        <div>
          {/* Contact Details */}
          <OwnerDetails />

          {/* Sticky Mobile Buttons */}
          <StickyCallButton />
        </div>
      </PageTransition>
    </>
  );
};

export default Contact;
