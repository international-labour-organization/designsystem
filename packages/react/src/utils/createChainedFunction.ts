/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction<T extends (...args: unknown[]) => void>(
  ...funcs: (T | null | undefined)[]
): T | null {
  return funcs
    .filter((f): f is T => f != null)
    .reduce<T | null>((acc, f) => {
      if (typeof f !== "function") {
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      }

      if (acc === null) return f;

      return function chainedFunction(...args: Parameters<T>): void {
        //@ts-expect-error
        acc.apply(this, args);
        //@ts-expect-error
        f.apply(this, args);
      } as T;
    }, null);
}

export default createChainedFunction;
