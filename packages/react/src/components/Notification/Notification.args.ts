import { NotificationProps } from "./Notification.props";

const hascta: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cta: {
    label: "Optional CTA",
    url: "http://www.google.com",
  },
  headline: "With CTA",
  placement: "inline",
  type: "info",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const nocta: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  headline: "Notification Info",
  placement: "inline",
  type: "info",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const error: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  headline: "Notification Error",
  placement: "inline",
  type: "error",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const success: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  headline: "Notification Success",
  placement: "inline",
  type: "success",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const warning: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  headline: "Notification Warning",
  placement: "inline",
  type: "warning",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const hasctadialog: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cta: {
    label: "Optional CTA",
    url: "http://www.google.com",
  },
  headline: "Notification With CTA",
  placement: "dialog",
  type: "info",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const infodialog: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  headline: "Notification Info",
  placement: "dialog",
  type: "info",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const errordialog: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  headline: "Notification Error",
  placement: "dialog",
  type: "error",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const successdialog: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  headline: "Notification Success",
  placement: "dialog",
  type: "success",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

const warningdialog: NotificationProps = {
  className: "storybook",
  closelabel: "Close",
  copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  headline: "Notification Warning",
  placement: "dialog",
  type: "warning",
  timestamp: {
    human: "Dec 7, 2022",
    unix: "1670389200",
  },
};

/**
 * Sample prop definitions for Notification's enumerable properties (imported in stories and test)
 */
const NotificationArgs = {
  error,
  errordialog,
  hascta,
  hasctadialog,
  infodialog,
  nocta,
  success,
  successdialog,
  warning,
  warningdialog,
};

export default NotificationArgs;
