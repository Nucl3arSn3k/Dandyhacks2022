import React from 'react';
import TopNavigation from '../../../../common/components/TopNavigation';

const ExternalRoute = ({ element }) => {
  return (
    <>
      <TopNavigation />
      {element}
    </>
  );
};

export default ExternalRoute;
