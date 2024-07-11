export const template = `
  import <%= componentImport %> from "<%= pathToTwig %>";
  import <%= patternsImport %> from "<%= pathToPatterns %>";
  import { Maestro } from "@ilo-org/maestro";

  const story = Maestro.create(<%= componentImport %>, <%= patternsImport %>);

  const Meta = {
    title: "<%= storyTitle %>",
    tags: ["autodocs"],
    ...story.meta,
  };

  export default Meta;
`;
