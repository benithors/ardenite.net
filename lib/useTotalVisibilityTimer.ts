import React from "react";

/**
 * Increment every second
 * @param {boolean} shouldIncrement only increment when true
 * @returns {boolean} The current timer value
 */
export function useTotalVisibilityTimer(shouldIncrement: boolean) {
  const [timerVal, setTimerVal] = React.useState(0);

  React.useEffect(() => {
    let intervalId: string | number | NodeJS.Timer | undefined;

    if (shouldIncrement) {
      intervalId = setInterval(() => {
        setTimerVal(timerVal + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [shouldIncrement, timerVal]);

  return timerVal;
}
