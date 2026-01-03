import React from 'react';
import Process1 from '../components/process/process1';
import Process2 from '../components/process/process2';
import Process3 from '../components/process/process3';
import ProcessCardsSection from '../components/process/processCardsSection';
import StickyCallButton from '../components/common/StickyCallButton';
import PageLoader from '../components/common/PageLoader';
import PageTransition from '../components/common/PageTransition';

const Process = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Page Content with Transition */}
      <PageTransition>
        <div>
          {/* Process Sections */}
          <Process1 />
          <Process2 />
          <Process3 />
          {/* <ProcessCardsSection /> */}

          {/* Sticky Mobile Buttons */}
          <StickyCallButton />
        </div>
      </PageTransition>
    </>
  );
};

export default Process;
