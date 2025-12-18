import Notification from "../src/components/notification/notification.twig";
import NotificationPatterns from "../src/components/notification/notification.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Notification, NotificationPatterns);

story.meta.parameters.githubLink = {
  url: "/notification/notification.twig",
};

const Meta = {
  title: "Components/Feedback/Notification",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
