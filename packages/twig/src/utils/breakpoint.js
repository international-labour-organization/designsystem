/**
 * Breakpoint utility that monitors DOM changes and fires callbacks
 * when crossing breakpoint thresholds.
 */

// Define breakpoints matching the SCSS breakpoints
const BREAKPOINTS = {
  xs: 320,
  sm: 414,
  md: 610,
  lg: 1024,
  xl: 1140,
  xxl: 1168,
};

/**
 * Determines the current breakpoint based on window width
 * @returns {string} The current breakpoint name
 */
function getCurrentBreakpoint() {
  const width = window.innerWidth;

  if (width < BREAKPOINTS.xs) return "xs";
  if (width < BREAKPOINTS.sm) return "sm";
  if (width < BREAKPOINTS.md) return "md";
  if (width < BREAKPOINTS.lg) return "lg";
  if (width < BREAKPOINTS.xl) return "xl";
  return "xxl";
}

/**
 * Creates a breakpoint observer that fires callbacks when the window size
 * crosses breakpoint thresholds.
 *
 * @param {Function} callback - Function to call when breakpoint changes
 * @returns {Object} Object with methods to start and stop observing
 */
export function createBreakpointObserver(callback) {
  let currentBreakpoint = getCurrentBreakpoint();
  let timeoutId = null;
  let observer = null;

  /**
   * Checks if breakpoint has changed and fires callback if needed
   */
  function checkBreakpoint() {
    timeoutId = window.requestAnimationFrame(() => {
      const newBreakpoint = getCurrentBreakpoint();

      if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        callback(newBreakpoint);
      }
    });
  }

  /**
   * Starts observing viewport size changes
   */
  function start() {
    // Create a ResizeObserver to watch for viewport size changes
    observer = new ResizeObserver(() => {
      checkBreakpoint();
    });

    // Start observing the document body for size changes
    observer.observe(document.body);

    // Initial callback with current breakpoint
    callback(currentBreakpoint);
  }

  /**
   * Stops observing viewport size changes
   */
  function stop() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (timeoutId) {
      window.cancelAnimationFrame(timeoutId);
      timeoutId = null;
    }
  }

  return {
    start,
    stop,
    getCurrentBreakpoint: () => currentBreakpoint,
  };
}
