import { PromoCard } from "../../components/Cards";
import { Dropdown } from "../../components/Dropdown";
import { MegaNav } from "../../components/MegaNav";

const topics = [
  "Child Labour",
  "Collective Bargaining and Labour Relations",
  "Forced labour",
  "Freedom of Association",
  "Safety and Health at Work",
];

const regions = [
  "Africa",
  "Latin America and the Caribbean",
  "Arab States",
  "Asia and the Pacific",
  "Europe and Central Asia",
];

const toHref = (label: string) =>
  `#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const promo = (
  <PromoCard
    eyebrow="Eyebrow"
    title="This is a title promoting a key page of this menu item"
    intro="We advance social justice and promote decent work by setting labour standards, developing policies and devising programmes."
    link="#promo"
  />
);

const MegaNavItems = (
  <>
    <MegaNav.Item label="About the ILO" href="#about">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <PromoCard
            image={{ url: "/ilo-headquarters.jpg", alt: "" }}
            title="About the ILO"
            intro="The ILO brings together governments, employers and workers of 187 Member States."
            link="#about"
            cta={{ label: "Learn more about the ILO", url: "#about" }}
          />
        </MegaNav.Column>
        <MegaNav.Column>
          <MegaNav.Links>
            <MegaNav.Link href="#mission" label="Mission and impact" />
            <MegaNav.Link href="#structure" label="How the ILO works" />
            <MegaNav.Link href="#dg" label="Director-General" />
          </MegaNav.Links>
        </MegaNav.Column>
        <MegaNav.Column>{promo}</MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Topics and sectors" href="#topics">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <PromoCard
            title="Topics and sectors"
            intro="The ILO brings together governments, employers and workers of 187 Member States."
            link="#topics"
            cta={{ label: "View all topics and sectors", url: "#topics" }}
          />
        </MegaNav.Column>
        <MegaNav.Column>
          <Dropdown
            label="Search topic or sector"
            name="topic"
            options={topics.map((label) => ({ label, value: label }))}
          />
          <MegaNav.Links title="Browse by key topics">
            {topics.map((label) => (
              <MegaNav.Link key={label} href={toHref(label)} label={label} />
            ))}
          </MegaNav.Links>
        </MegaNav.Column>
        <MegaNav.Column>{promo}</MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Countries and regions" href="#countries">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <PromoCard
            title="Countries and regions"
            intro="The ILO works in more than 100 countries."
            link="#countries"
            cta={{ label: "View all countries and regions", url: "#countries" }}
          />
        </MegaNav.Column>
        <MegaNav.Column>
          <Dropdown
            label="Search country"
            name="country"
            options={regions.map((label) => ({ label, value: label }))}
          />
          <MegaNav.Links title="Browse by region">
            {regions.map((label) => (
              <MegaNav.Link key={label} href={toHref(label)} label={label} />
            ))}
          </MegaNav.Links>
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Research and publications" href="#research">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <MegaNav.Links>
            <MegaNav.Link href="#flagship" label="Flagship reports" />
            <MegaNav.Link href="#publications" label="All publications" />
            <MegaNav.Link href="#journal" label="International Labour Review" />
          </MegaNav.Links>
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Data and statistics" href="#data" />

    <MegaNav.Item label="Labour standards" href="#standards">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <MegaNav.Links>
            <MegaNav.Link
              href="#normlex"
              label="NORMLEX - Information System on International Labour Standards"
            />
            <MegaNav.Link
              href="#cfa"
              label="Committee on Freedom of Association"
            />
            <MegaNav.Link href="#mlc" label="Maritime Labour Conference" />
          </MegaNav.Links>
        </MegaNav.Column>
        <MegaNav.Column>
          <PromoCard
            title="Labour standards"
            intro="International labour standards are legal instruments drawn up by the ILO's constituents."
            link="#standards"
            cta={{ label: "Browse labour standards", url: "#standards" }}
          />
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Partnerships" href="#partnerships">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <MegaNav.Links>
            <MegaNav.Link
              href="#dashboard"
              label="Development cooperation dashboard"
            />
            <MegaNav.Link
              href="#multilateral"
              label="ILO and the multilateral system"
            />
            <MegaNav.Link href="#funding" label="Funding partners" />
            <MegaNav.Link href="#south-south" label="South-South partnership" />
          </MegaNav.Links>
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="News and events" href="#news">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <MegaNav.Links>
            <MegaNav.Link href="#newsroom" label="Newsroom" />
            <MegaNav.Link href="#gb" label="Governing Body" />
            <MegaNav.Link href="#ilc" label="International Labour Conference" />
            <MegaNav.Link href="#events" label="Events" />
          </MegaNav.Links>
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>
  </>
);

export { MegaNavItems };
