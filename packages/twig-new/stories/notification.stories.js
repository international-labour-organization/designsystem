import Notification from "../src/components/notification/notification.twig";
import NotificationPatterns from "../src/components/notification/notification.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Notification, NotificationPatterns);

const Meta = {
  title: "Components/Feedback/Notification",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
