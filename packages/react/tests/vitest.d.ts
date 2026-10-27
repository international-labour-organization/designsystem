import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

// Vitest 5 types custom matchers through `Matchers<R, T>` but @testing-library/jest-dom still augments the pre-v5 `Assertion<T>`.
// https://github.com/testing-library/jest-dom/issues/738
// TODO: Remove once @testing-library/jest-dom fixes the types
declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
  interface Matchers<R, T> extends TestingLibraryMatchers<unknown, R> {}
}
