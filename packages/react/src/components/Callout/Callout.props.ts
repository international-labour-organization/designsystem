import { CalloutTypes } from "../../types";

interface CTAProps {
  /**
   * Specify the label of the CTA
   */
  label?: string;

  /**
   * Specify the url of the CTA
   */
  url?: string;
}

export interface CalloutProps {
  /**
   * Specify the settings for an option CTA
   */
  cta?: CTAProps;

  /**
   * Specify an optional className to be added to your RichText.
   */
  className?: string;

  /**
   * Specify the copy
   */
  copy?: Required<string>;

  /**
   * Specify if callout is collapsible
   */
  isCollapsible?: boolean;

  /**
   * Specify if callout is open (only important for collapsible items)
   */
  isOpen?: boolean;

  /**
   * Specify the callout headline
   */
  headline?: string;

  /**
   * Specify the open label
   */
  toggleOpenLabel?: string;

  /**
   * Specify the open label
   */
  toggleClosedLabel?: string;

  /**
   * Describe the type of callout
   */
  type?: CalloutTypes;
}
