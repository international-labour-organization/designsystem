import Richtext from "../src/components/richtext/richtext.twig";
import RichtextPatterns from "../src/components/richtext/richtext.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Richtext, RichtextPatterns);

const component = `
<p>A component that applies the Design System's typography and spacing to generic content, like the kind created with a WYSIWYG editor.</p>
<h2>Usage</h2>
<p>The ILO Design System doesn't include font styles and spacing in its base stylesheet. That's to make the Design System easier to integrate incrementally, so you can include our CSS without having to worry about it conflicting with your own font styles.</p>
<p>To use this component, simply pass a string of (valid) HTML to its \`content\` property. Default styles and spacing rules will be applied to all text and container elements.</p>
<h2>Blockquotes</h2>
<p>Blockquotes apply some of their own styling to children.</p>
<ul>
<li>The first child should be in \`<p>\` and includes the content of the quote.</li>
<li>The first child should be a \`<cite>\` and should attribute the quote to a source.</li>
</ul>
<h2>Embedded content</h2>
<p>The Richtext does not apply spacing directly to iframes. Instead, wrap iframes in an \`<article>\` tag to ensure they are spaced correctly.</p>
<p>If the embed is a video or some other piece of content with a 16:9 aspect ratio that you want to behave responsively, apply the \`.responsive-video-embed\` class to the iframe wrapper.</p>
<h2>Example</h2>
`;

const Meta = {
  title: "Components/Content/Rich Text",
  tags: ["autodocs"],
  ...story.meta,
  parameters: {
    docs: {
      description: {
        component,
      },
    },
  },
};

const [Default] = story.stories;

export default Meta;
export { Default };
