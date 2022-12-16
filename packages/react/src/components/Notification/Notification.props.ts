import { NotificationPlacement, NotificationTypes } from "../../types";

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

interface TimeStampProps {
  /**
   * Specify the human-readable time
   */
  human?: string;

  /**
   * Specify the UNIX timestamp
   */
  unix?: string;
}

export interface NotificationProps {
  /**
   * Specify an optional className to be added to your Notification component.
   */
  className?: string;

  /**
   * Specify the label for the close button
   */
  closelabel?: Required<string>;

  /**
   * Specify the copy
   */
  copy?: Required<string>;

  /**
   * Specify the settings for an option CTA
   */
  cta?: CTAProps;

  /**
   * Specify the headline
   */
  headline?: Required<string>;

  /**
   * Specify whether the notification is inline in the DOM or absolutely-positioned at a higher z-index
   */
  placement?: Required<NotificationPlacement>;

  /**
   * Specify an optional timestamp
   */
  timestamp?: TimeStampProps;

  /**
   * Specify the icon for the Notification
   */
  type?: NotificationTypes;
}
