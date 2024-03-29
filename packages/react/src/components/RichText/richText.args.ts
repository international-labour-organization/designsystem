import { RichTextProps } from "./RichText.props";

const richtext: RichTextProps = {
  content: `<h2>International Labour Organization</h2>

    <p>The <b>International Labour Organization</b> (<b>ILO</b>) is a <a href='https://www.un.org'>United Nations</a> agency whose mandate is to advance social and economic justice by setting international labour standards. Founded in October 1919 under the League of Nations, it is the first and oldest specialised agency of the UN. The ILO has 187 member states: 186 out of 193 UN member states plus the Cook Islands.</p>

    <p>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</p>

    <figure><img alt='placeholder image' class='right' src='/ilo-headquarters.jpg'><figcaption>The ILO's headquarters in Geneva, Switzerland. ©Steiner SA</figcaption></figure>

    <h3>ILO Constitution</h3>

    <p>The driving forces for the ILO's creation arose from security, humanitarian, political and economic considerations.</p>

    <blockquote>
      <p>The fundamental ideas that forged the ILO one hundred and three years ago still underpin the global pledge to leave no one behind.</p>
      <cite>ILO Director-General Gilbert F. Houngbo</cite>
    </blockquote>

    Reflecting these ideas, the Preamble of the ILO Constitution states:</p>

    <ol>
      <li>Whereas universal and lasting peace can be established only if it is based upon social justice;</li>
      <li>And whereas conditions of labour exist involving such injustice, hardship and privation to large numbers of people as to produce unrest so great that the peace and harmony of the world are imperilled; and an improvement of those conditions is urgently required;</li>
      <li>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</li>
    </ol>
    `,
};

/**
 * Sample prop definitions for RichText's enumerable properties (imported in stories and tests).
 */
const richTextArgs = {
  richtext,
};

export default richTextArgs;
