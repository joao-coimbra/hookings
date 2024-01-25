import { useEffect, useState } from 'react';

function useWindowSize() {
  const [sizes, setSizes] = useState({ x: 0, y: 0, screenY: 0 });

  const handleResize = () => {
    setSizes({
      x: window.innerWidth,
      y: window.innerHeight,
      screenY: window.screen.height,
    });
  };

  useEffect(() => {
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [sizes.x, sizes.y, sizes.screenY];
}

export { useWindowSize };
