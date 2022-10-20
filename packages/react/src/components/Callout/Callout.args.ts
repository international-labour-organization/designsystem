import { CalloutProps } from "./Callout.props";

const hascta: CalloutProps = {
  className: "storybook",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cta: {
    label: "Optional CTA",
    url: "http://www.google.com",
  },
  headline: "With CTA",
  isCollapsible: true,
  isOpen: false,
  toggleOpenLabel: "Open",
  toggleClosedLabel: "Closed",
  type: "info",
};

const infoCallout: CalloutProps = {
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  isCollapsible: false,
  headline: "Callout Title",
  type: "info",
};

const errorCallout: CalloutProps = {
  cta: {
    label: "Optional CTA",
    url: "http://www.google.com",
  },
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  isCollapsible: true,
  isOpen: false,
  headline: "Callout Title",
  toggleOpenLabel: "Open",
  toggleClosedLabel: "Closed",
  type: "error",
};

const successCallout: CalloutProps = {
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  isCollapsible: false,
  headline: "Callout Title",
  type: "success",
};

const warningCallout: CalloutProps = {
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  isCollapsible: false,
  headline: "Callout Title",
  type: "warning",
};

/**
 * Sample prop definitions for Callout's enumerable properties (imported in stories and tests).
 */
const CalloutArgs = {
  hascta,
  infoCallout,
  errorCallout,
  warningCallout,
  successCallout,
};

export default CalloutArgs;
