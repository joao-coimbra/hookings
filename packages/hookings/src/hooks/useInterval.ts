import * as React from "react";
import { useBoolean } from "./useBoolean";

type Controls = "pause" | "resume";

type IntervalControls = Record<Controls, () => void>;

/**
 * Custom React hook that enables the execution of a specified function at regular intervals
 * while offering pause and resume functionalities.
 *
 * @param {Function} callback - The function to be executed at each interval.
 * @param {number} delay - The time interval in milliseconds between function calls.
 * @returns {IntervalControls} An object containing functions to pause and resume the interval execution.
 *
 * @example
 * function ComponentWithInterval(): JSX.Element {
 *     const [count, setCount] = useState<number>(0);
 *     const { pause, resume } = useInterval(() => {
 *         setCount((prev) => prev + 1);
 *     }, 1000);
 *
 *     return (
 *         <div>
 *             <div>Count: {count}</div>
 *             <button onClick={pause}>Pause</button>
 *             <button onClick={resume}>Resume</button>
 *         </div>
 *     );
 * }
 */
function useInterval(callback: () => void, delay: number): IntervalControls {
  // A boolean state to control the pause and resume functionality.
  const [isPaused, { on: proceed, off: suspend }] = useBoolean();

  React.useEffect(() => {
    // Function to execute the callback only if not paused.
    const tick = () => {
      if (!isPaused) callback();
    };

    // Initiate the interval execution.
    const intervalId = setInterval(tick, delay);

    // Clean up by clearing the interval when the component unmounts or the delay changes.
    return () => {
      clearInterval(intervalId);
    };
  }, [delay, isPaused]);

  // Functions to pause and resume the interval execution.
  const pause = () => proceed();
  const resume = () => suspend();

  return { pause, resume };
}

export { useInterval, type Controls, type IntervalControls };
