import { useState, useEffect, useCallback } from 'react';

import { pick } from './pick';
import { Breakpoints } from '../types';

const Defaults: Readonly<{
  Breakpoints: Breakpoints;
}> = {
  Breakpoints: ['40em', '52em', '64em'],
};

const system = (breakpoints: Breakpoints) => (value: any) => {
  if (!Array.isArray(breakpoints)) {
    throw new Error('Breakpoints should be an array of media');
  }
  const getInitialData = useCallback((value) => {
    return pick(breakpoints)(value);
  }, []);

  const [data, setData] = useState(getInitialData(value));

  useEffect(() => {
    getInitialData(value);
  }, [getInitialData, value]);

  useEffect(() => {
    const handleResize = () => {
      const newData = pick(breakpoints)(value);
      setData(newData);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [value]);
  return data;
};

const systemWithDefaults = system(Defaults.Breakpoints);
export { systemWithDefaults, system };
