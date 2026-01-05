import Richtext from "../src/components/richtext/richtext.twig";
import RichtextPatterns from "../src/components/richtext/richtext.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Richtext, RichtextPatterns);

story.meta.parameters.githubLink = {
  url: "/richtext/richtext.twig",
};

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

const Arabic = {
  globals: {
    locale: "ar",
    dir: "rtl",
  },
  args: {
    content: `<h1>منظمة العمل الدولية</h1>
<p><b>منظمة العمل الدولية</b> (<b>ILO</b>) هي وكالة تابعة لـ <a href='https://www.un.org'>الأمم المتحدة</a>، وتتمثل ولايتها في تعزيز العدالة الاجتماعية والاقتصادية من خلال وضع معايير العمل الدولية. تأسست في أكتوبر 1919 بموجب عصبة الأمم، وهي أول وأقدم وكالة متخصصة تابعة للأمم المتحدة. تضم منظمة العمل الدولية 187 دولة عضوًا: 186 من أصل 193 دولة عضوًا في الأمم المتحدة بالإضافة إلى جزر كوك.</p>

<figure><img alt='placeholder image' class='right' src='/images/ilo-headquarters.jpg'><figcaption>المقر الرئيسي لمنظمة العمل الدولية في جنيف، سويسرا. ©Steiner SA</figcaption></figure>

<h2>التاريخ والمهمة</h2>
<p>تأسست منظمة العمل الدولية في أعقاب الحرب العالمية الأولى، إدراكًا بأن السلام الدائم لا يمكن تحقيقه إلا من خلال العدالة الاجتماعية. ومنذ ذلك الحين، كانت المنظمة رائدة في وضع معايير العمل الدولية، وتعزيز الحقوق في العمل، وتشجيع فرص العمل اللائق، وتعزيز الحماية الاجتماعية. وتجمع هيكلها الثلاثي بين الحكومات وأصحاب العمل والعمال من الدول الأعضاء لوضع السياسات والبرامج.</p>

<p>على مدى القرن الماضي، تكيفت منظمة العمل الدولية مع الاحتياجات المتغيرة للقوى العاملة العالمية، حيث واجهت تحديات مثل عمل الأطفال، والعمل الجبري، وعدم المساواة بين الجنسين. ومن خلال اتفاقياتها وتوصياتها، أصبحت المنظمة قوة محورية في تشكيل قوانين وممارسات العمل التي تحمي العمال حول العالم، وتدعم نموًا اقتصاديًا عادلاً وشاملاً.</p>

<hr>
<h3>محطات رئيسية في تاريخ منظمة العمل الدولية</h3>
<ol>
  <li>1919: تأسست منظمة العمل الدولية كجزء من معاهدة فرساي.</li>
  <li>1946: أصبحت منظمة العمل الدولية أول وكالة متخصصة تابعة للأمم المتحدة.</li>
  <li>1969: مُنحت منظمة العمل الدولية جائزة نوبل للسلام.</li>
  <li>2019: احتفلت منظمة العمل الدولية بمرور 100 عام على تأسيسها.</li>
</ol>

<h4>مهمة منظمة العمل الدولية</h4>
<ul>
  <li>تعزيز العدالة الاجتماعية وحقوق الإنسان والعمل المعترف بها دوليًا.</li>
  <li>تطوير معايير وسياسات العمل لتحسين ظروف العمل على مستوى العالم.</li>
  <li>ضمان فرص العمل والحماية الاجتماعية لجميع العمال.</li>
</ul>

<h2>شاهد: مهمة وعمل منظمة العمل الدولية</h2>
<p>يوفر هذا الفيديو نظرة بصرية عامة على مهمة منظمة العمل الدولية، وتأثيرها التاريخي، ومبادراتها المستمرة لتحسين ظروف العمل وتعزيز العدالة الاجتماعية في جميع أنحاء العالم.</p>

<article class='responsive-video-embed'>
<iframe src='https://www.youtube.com/embed/55xQTgUJqhQ?si=zhNOlGG5SXWkB2TW' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
</article>

<blockquote>
  <p>الأفكار الأساسية التي أسست منظمة العمل الدولية قبل مئة وثلاث سنوات لا تزال تشكل الأساس للوعد العالمي بعدم ترك أحد خلف الركب.</p>
  <cite>المدير العام لمنظمة العمل الدولية، جيلبرت ف. هونغبو</cite>
</blockquote>

<p>وتعكس هذه الأفكار ما ورد في ديباجة دستور منظمة العمل الدولية:</p>
<ol>
  <li>وحيث إن السلام العالمي والدائم لا يمكن تحقيقه إلا إذا بُني على أساس العدالة الاجتماعية؛</li>
  <li>وحيث إن أوضاع العمل السائدة تنطوي على ظلم ومعاناة وحرمان لعدد كبير من الناس بما يهدد السلام والانسجام في العالم.</li>
</ol>`,
  },
};

export default Meta;
export { Default, Arabic };
