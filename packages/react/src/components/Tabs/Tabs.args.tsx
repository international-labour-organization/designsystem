import { RichText } from "../RichText";
import { Image } from "../Image";
import { TabsProps } from "./Tabs.props";

const tabs: TabsProps = {
  items: [
    {
      label:
        "Tab Label With A Really Really Lenghty Title Even Though We Do Not Recommend Such A Lengthy Title",
      content: (
        <Image
          alt="My alt text"
          caption="Women construction workers in Nepal build roads and bridges as part of a National Rural Transport Programme co-sponsored by the ILO."
          credit="© Marcel Crozet/ILO"
          url={[
            { breakpoint: 0, src: "/small.jpg" },
            { breakpoint: 800, src: "/medium.jpg" },
            { breakpoint: 1200, src: "/large.jpg" },
            { breakpoint: 1440, src: "/large.jpg" },
          ]}
        />
      ),
    },
    {
      label: "Tab Label 2",
      content: (
        <RichText content="<h2>International Labour Organization</h2> <p>The <b>International Labour Organization</b> (<b>ILO</b>) is a <a href='https://www.un.org'>United Nations</a> agency whose mandate is to advance social and economic justice by setting international labour standards. Founded in October 1919 under the League of Nations, it is the first and oldest specialised agency of the UN. The ILO has 187 member states: 186 out of 193 UN member states plus the Cook Islands.</p> <p>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</p> <figure><img alt='placeholder image' class='right' src='/ilo-headquarters.jpg'><figcaption>The ILO's headquarters in Geneva, Switzerland. ©Steiner SA</figcaption></figure> <h3>ILO Constitution</h3> <p>The driving forces for the ILO's creation arose from security, humanitarian, political and economic considerations.</p> <blockquote> <p>The fundamental ideas that forged the ILO one hundred and three years ago still underpin the global pledge to leave no one behind.</p> <cite>ILO Director-General Gilbert F. Houngbo</cite> </blockquote> Reflecting these ideas, the Preamble of the ILO Constitution states:</p> <ol> <li>Whereas universal and lasting peace can be established only if it is based upon social justice;</li> <li>And whereas conditions of labour exist involving such injustice, hardship and privation to large numbers of people as to produce unrest so great that the peace and harmony of the world are imperilled; and an improvement of those conditions is urgently required;</li> <li>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</li> </ol>" />
      ),
    },
  ],
};

const withIcon: TabsProps = {
  items: [
    {
      icon: {
        hidden: false,
        name: "info",
      },
      label:
        "Tab Label With A Really Really Lenghty Title Even Though We Do Not Recommend Such A Lengthy Title",
      content: (
        <Image
          alt="My alt text"
          caption="Women construction workers in Nepal build roads and bridges as part of a National Rural Transport Programme co-sponsored by the ILO."
          credit="© Marcel Crozet/ILO"
          url={[
            { breakpoint: 0, src: "/small.jpg" },
            { breakpoint: 800, src: "/medium.jpg" },
            { breakpoint: 1200, src: "/large.jpg" },
            { breakpoint: 1440, src: "/large.jpg" },
          ]}
        />
      ),
    },
    {
      icon: {
        hidden: false,
        name: "info",
      },
      label: "Tab Label 2",
      content: (
        <RichText content="<h2>International Labour Organization</h2> <p>The <b>International Labour Organization</b> (<b>ILO</b>) is a <a href='https://www.un.org'>United Nations</a> agency whose mandate is to advance social and economic justice by setting international labour standards. Founded in October 1919 under the League of Nations, it is the first and oldest specialised agency of the UN. The ILO has 187 member states: 186 out of 193 UN member states plus the Cook Islands.</p> <p>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</p> <figure><img alt='placeholder image' class='right' src='/ilo-headquarters.jpg'><figcaption>The ILO's headquarters in Geneva, Switzerland. ©Steiner SA</figcaption></figure> <h3>ILO Constitution</h3> <p>The driving forces for the ILO's creation arose from security, humanitarian, political and economic considerations.</p> <blockquote> <p>The fundamental ideas that forged the ILO one hundred and three years ago still underpin the global pledge to leave no one behind.</p> <cite>ILO Director-General Gilbert F. Houngbo</cite> </blockquote> Reflecting these ideas, the Preamble of the ILO Constitution states:</p> <ol> <li>Whereas universal and lasting peace can be established only if it is based upon social justice;</li> <li>And whereas conditions of labour exist involving such injustice, hardship and privation to large numbers of people as to produce unrest so great that the peace and harmony of the world are imperilled; and an improvement of those conditions is urgently required;</li> <li>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</li> </ol>" />
      ),
    },
  ],
};

const fiveItems: TabsProps = {
  items: [
    {
      label: "Tab One",
      content: (
        <RichText content="<h2>International Labour Organization</h2> <p>The <b>International Labour Organization</b> (<b>ILO</b>) is a <a href='https://www.un.org'>United Nations</a> agency whose mandate is to advance social and economic justice by setting international labour standards. Founded in October 1919 under the League of Nations, it is the first and oldest specialised agency of the UN. The ILO has 187 member states: 186 out of 193 UN member states plus the Cook Islands.</p> <p>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</p> <figure><img alt='placeholder image' class='right' src='/ilo-headquarters.jpg'><figcaption>The ILO's headquarters in Geneva, Switzerland. ©Steiner SA</figcaption></figure> <h3>ILO Constitution</h3> <p>The driving forces for the ILO's creation arose from security, humanitarian, political and economic considerations.</p> <blockquote> <p>The fundamental ideas that forged the ILO one hundred and three years ago still underpin the global pledge to leave no one behind.</p> <cite>ILO Director-General Gilbert F. Houngbo</cite> </blockquote> Reflecting these ideas, the Preamble of the ILO Constitution states:</p> <ol> <li>Whereas universal and lasting peace can be established only if it is based upon social justice;</li> <li>And whereas conditions of labour exist involving such injustice, hardship and privation to large numbers of people as to produce unrest so great that the peace and harmony of the world are imperilled; and an improvement of those conditions is urgently required;</li> <li>Whereas also the failure of any nation to adopt humane conditions of labour is an obstacle in the way of other nations which desire to improve the conditions in their own countries.</li> </ol>" />
      ),
    },
    {
      label: "Tab Two",
      content: (
        <Image
          alt="My alt text"
          caption="Women construction workers in Nepal build roads and bridges as part of a National Rural Transport Programme co-sponsored by the ILO."
          credit="© Marcel Crozet/ILO"
          url={[
            {
              breakpoint: 0,
              src: "https://place-hold.it/400x300?text=Tab Two Image",
            },
            {
              breakpoint: 800,
              src: "https://place-hold.it/800x600?text=Tab Two Image",
            },
            {
              breakpoint: 1200,
              src: "https://place-hold.it/1200x900?text=Tab Two Image",
            },
            {
              breakpoint: 1440,
              src: "https://place-hold.it/1600x1200?text=Tab Two Image",
            },
          ]}
        />
      ),
    },
    {
      label: "Tab Three",
      content: (
        <Image
          alt="My alt text"
          caption="Women construction workers in Nepal build roads and bridges as part of a National Rural Transport Programme co-sponsored by the ILO."
          credit="© Marcel Crozet/ILO"
          url={[
            {
              breakpoint: 0,
              src: "https://place-hold.it/400x300?text=Tab Three Image",
            },
            {
              breakpoint: 800,
              src: "https://place-hold.it/800x600?text=Tab Three Image",
            },
            {
              breakpoint: 1200,
              src: "https://place-hold.it/1200x900?text=Tab Three Image",
            },
            {
              breakpoint: 1440,
              src: "https://place-hold.it/1600x1200?text=Tab Three Image",
            },
          ]}
        />
      ),
    },
    {
      label: "Tab Four Has A Really Lenghthy Title Which Might Get Truncated",
      content: (
        <Image
          alt="My alt text"
          caption="Women construction workers in Nepal build roads and bridges as part of a National Rural Transport Programme co-sponsored by the ILO."
          credit="© Marcel Crozet/ILO"
          url={[
            {
              breakpoint: 0,
              src: "https://place-hold.it/400x300?text=Tab Four Image",
            },
            {
              breakpoint: 800,
              src: "https://place-hold.it/800x600?text=Tab Four Image",
            },
            {
              breakpoint: 1200,
              src: "https://place-hold.it/1200x900?text=Tab Four Image",
            },
            {
              breakpoint: 1440,
              src: "https://place-hold.it/1600x1200?text=Tab Four Image",
            },
          ]}
        />
      ),
    },
    {
      label: "Tab Five",
      content: (
        <Image
          alt="My alt text"
          caption="Women construction workers in Nepal build roads and bridges as part of a National Rural Transport Programme co-sponsored by the ILO."
          credit="© Marcel Crozet/ILO"
          url={[
            {
              breakpoint: 0,
              src: "https://place-hold.it/400x300?text=Tab Five Image",
            },
            {
              breakpoint: 800,
              src: "https://place-hold.it/800x600?text=Tab Five Image",
            },
            {
              breakpoint: 1200,
              src: "https://place-hold.it/1200x900?text=Tab Five Image",
            },
            {
              breakpoint: 1440,
              src: "https://place-hold.it/1600x1200?text=Tab Five Image",
            },
          ]}
        />
      ),
    },
  ],
};

/**
 * Sample prop definitions for Button's enumerable properties (imported in stories and tests).
 */
const TabsArgs = {
  tabs,
  withIcon,
  fiveItems,
};

export default TabsArgs;
