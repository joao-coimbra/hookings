// hooks/useIsMobile.ts

import { useState, useEffect } from 'react';
import { useBoolean } from './useBoolean';
import { useWindowSize } from './useWindowSize';

type useIsMobileReturn = undefined | boolean;

/**
 * Custom React hook that returns whether the current device is considered mobile or not,
 * based on the specified breakpoint.
 *
 * @param {number} breakpoint - The breakpoint value at which the device is considered mobile.
 * @returns {boolean} Whether the device is considered mobile or not.
 *
 * @example
 * const MyComponent = () => {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       <p>{isMobile ? 'Mobile View' : 'Desktop View'}</p>
 *     </div>
 *   );
 * };
 */
function useIsMobile(breakpoint: number = 768): useIsMobileReturn {
  const [x] = useWindowSize();
  const [isMobile, setIsMobile] = useBoolean();

  useEffect(() => (x < breakpoint ? setIsMobile.on() : setIsMobile.off()), [x]);

  if (!x) return;

  return isMobile;
}

export { useIsMobile };
