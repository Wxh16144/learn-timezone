import React from 'react';

export const LOCAL_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const TZContext = React.createContext(__TIMEZONE__ ?? LOCAL_TIMEZONE);

export const useTZ = () => {
  return React.useContext(TZContext);
};

export const TZProvider = TZContext.Provider;