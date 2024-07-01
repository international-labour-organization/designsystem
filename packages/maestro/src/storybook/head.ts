import { HEAD } from "./templates/head";

function head(previous: string) {
  return `
    ${previous}
    ${HEAD}
  `;
}

export { head };
