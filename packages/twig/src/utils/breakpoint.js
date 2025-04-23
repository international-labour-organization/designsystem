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
    if (timeoutId) {
      window.cancelAnimationFrame(timeoutId);
    }

    timeoutId = window.requestAnimationFrame(() => {
      const newBreakpoint = getCurrentBreakpoint();

      if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        callback(newBreakpoint);
      }
    });
  }

  /**
   * Starts observing DOM changes
   */
  function start() {
    // Create a MutationObserver to watch for changes that might affect breakpoints
    observer = new MutationObserver((mutations) => {
      // Check if any mutation might affect the viewport width
      const hasRelevantChange = mutations.some((mutation) => {
        // Check if the mutation is in the body or affects styles
        return (
          mutation.target === document.body ||
          (mutation.type === "attributes" && mutation.attributeName === "style")
        );
      });

      if (hasRelevantChange) {
        checkBreakpoint();
      }
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["style"],
    });

    // Also observe window resize as a fallback
    window.addEventListener("resize", checkBreakpoint);

    // Initial callback with current breakpoint
    callback(currentBreakpoint);
  }

  /**
   * Stops observing DOM changes
   */
  function stop() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    window.removeEventListener("resize", checkBreakpoint);
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
