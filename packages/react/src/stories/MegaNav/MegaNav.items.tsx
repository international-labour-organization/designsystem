import { ReactNode } from "react";

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

const SectionIntro = ({
  href,
  media,
  title,
  description,
  cta,
}: {
  href: string;
  media?: ReactNode;
  title: string;
  description: string;
  cta: string;
}) => (
  <a
    href={href}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--ilo-spacing-base)",
      color: "var(--ilo-color-light-text-default)",
      textDecoration: "none",
    }}
  >
    {media}
    <strong style={{ fontSize: "1.25rem", lineHeight: 1.3 }}>{title}</strong>
    <span style={{ fontSize: "0.875rem" }}>{description}</span>
    <span
      style={{
        alignSelf: "flex-start",
        marginTop: "calc(4 * var(--ilo-spacing-base))",
        padding: "var(--ilo-spacing-base) calc(3 * var(--ilo-spacing-base))",
        backgroundColor: "var(--ilo-color-light-feedback-warning-default)",
        color: "var(--ilo-color-light-text-brand)",
        fontWeight: 700,
        fontSize: "0.875rem",
      }}
    >
      {cta}
    </span>
  </a>
);

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
          <SectionIntro
            href="#about"
            media={
              <img
                src="/ilo-headquarters.jpg"
                alt=""
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "calc(6 * var(--ilo-spacing-base))",
                }}
              />
            }
            title="About the ILO"
            description="The ILO brings together governments, employers and workers of 187 Member States."
            cta="Learn more about the ILO"
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
          <SectionIntro
            href="#topics"
            title="Topics and sectors"
            description="The ILO brings together governments, employers and workers of 187 Member States."
            cta="View all topics and sectors"
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
          <SectionIntro
            href="#countries"
            title="Countries and regions"
            description="The ILO works in more than 100 countries."
            cta="View all countries and regions"
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
          <SectionIntro
            href="#standards"
            title="Labour standards"
            description="International labour standards are legal instruments drawn up by the ILO's constituents."
            cta="Browse labour standards"
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
