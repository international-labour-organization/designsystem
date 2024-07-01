import { HEAD } from "./templates/drupal-global";

function head(previous: string) {
  return `
    ${previous}
    ${HEAD}
  `;
}

export { head };
