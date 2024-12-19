// this is for the usecontext as a hook for clean code by oceeboi  use

import React from 'react';
import { ToasterContext, ToasterContextType } from '../../context/toast/ToasterContext';

export const useToaster = (): ToasterContextType => {
  const context = React.useContext(ToasterContext);

  // this error handling is for test only remeber to revist code
  if (!context) {
    throw new Error('useToaster must be used within a toasterprovider');
  }
  return context;
};
