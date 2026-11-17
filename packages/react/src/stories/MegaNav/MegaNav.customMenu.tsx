import { StoryObj } from "@storybook/react-vite";
import { ReactNode } from "react";

import { Icon } from "../../components/Icon";
import { MegaNav } from "../../components/MegaNav";

import { MegaNavArgs } from "./MegaNav.args";

const styles = `
.app-header {
  background-color: var(--ilo-color-light-action-selected);
}

.app-header__inner {
  display: flex;
  align-items: stretch;
  gap: 24px;
  height: 64px;
  font-family: var(--ilo-fonts-display);
}

.app-header__brand {
  display: flex;
  flex: none;
  align-items: center;
}

.app-header__brand img {
  display: block;
  height: 38px;
}

.app-header__tools {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}

.app-menu {
  --ilo-mega-nav-menu-gap: 24px;
}

.app-menu__item {
  position: relative;
  align-items: stretch;
}

.app-menu__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  border: none;
  background: none;
  color: var(--ilo-color-light-text-inverse);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.35;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: inset 0 -4px 0 transparent;
  transition: box-shadow 120ms, background-color 120ms;
}

.app-menu__trigger:hover {
  box-shadow: inset 0 -4px 0 rgb(255 255 255 / 0.5);
}

.app-menu__trigger[aria-expanded="true"] {
  background-color: rgb(0 0 0 / 0.12);
  box-shadow: inset 0 -4px 0 var(--ilo-color-light-feedback-warning-default);
}

.app-menu__trigger:focus-visible,
.app-menu__links .ilo--mega-nav-links__link:focus-visible,
.app-header__brand:focus-visible {
  outline: 2px solid var(--ilo-color-light-feedback-warning-default);
  outline-offset: -2px;
}

.app-menu__trigger svg {
  flex: none;
}

/* Overpass sits high in its line box */
.app-menu__label {
  position: relative;
  top: 0.125em;
}

.app-menu__chevron {
  opacity: 0.8;
  transition: transform 120ms;
}

[aria-expanded="true"] > .app-menu__chevron {
  transform: rotate(180deg);
}

.app-header .app-menu__panel {
  display: block;
  inset-inline-start: 0;
  background: none;
  box-shadow: none;
  filter: drop-shadow(0 12px 24px rgb(30 45 190 / 0.18));
}

.app-header .app-menu__panel[hidden] {
  display: none;
}

.app-header .app-menu__sheet {
  min-width: 288px;
  padding: 20px 20px 32px;
  background: var(--ilo-color-light-container-bg-default);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%);
}

.app-menu__panel ul {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.app-menu__overview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--ilo-color-light-border-subtle);
  color: var(--ilo-color-light-text-brand);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  text-decoration: none;
}

.app-menu__overview:hover {
  color: var(--ilo-color-light-action-hover);
}

.app-menu__links .ilo--mega-nav-links__link {
  display: block;
  padding: 8px 12px;
  border-inline-start: 3px solid transparent;
  color: var(--ilo-color-light-text-brand);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.35;
  text-decoration: none;
  white-space: nowrap;
}

.app-menu__links .ilo--mega-nav-links__link:hover {
  border-inline-start-color: var(--ilo-color-light-feedback-warning-default);
  background-color: var(--ilo-color-light-container-bg-subtle);
  color: var(--ilo-color-light-action-hover);
}
`;

type AppItemProps = {
  label: string;
  href: string;
  icon: string;
  children: ReactNode;
};

const AppItem = ({ label, href, icon, children }: AppItemProps) => (
  <MegaNav.Item label={label} href={href} className="app-menu__item">
    <MegaNav.Trigger className="app-menu__trigger">
      <Icon name={icon} size={20} />
      <span className="app-menu__label">{label}</span>
      <Icon name="chevronDown" size={16} className="app-menu__chevron" />
    </MegaNav.Trigger>
    <MegaNav.Panel className="app-menu__panel">
      <div className="app-menu__sheet">
        <a href={href} className="app-menu__overview">
          <span className="app-menu__label">{label}</span>
          <Icon name="arrowRight" size={20} />
        </a>
        <MegaNav.Links className="app-menu__links">{children}</MegaNav.Links>
      </div>
    </MegaNav.Panel>
  </MegaNav.Item>
);

const CustomMenuStory: StoryObj<typeof MegaNav.Root> = {
  parameters: {
    docs: {
      description: {
        story:
          'A menu with markup of its own: a single blue header built with MegaNav.Container, and items written with MegaNav.Item, MegaNav.Trigger and MegaNav.Panel, with their own classes and icons. Trigger and Panel bring the behaviour (aria, hover, outside clicks, Escape with the focus back on the trigger, one open at a time with MegaNav.Search), and the MegaNav.Links inside each panel are collected, so "More" and the standard MegaNav.Drawer list the same items on smaller screens.',
      },
    },
  },
  render: () => (
    <MegaNav.Root {...MegaNavArgs} as="header" className="app-header">
      <style>{styles}</style>
      <MegaNav.Container className="app-header__inner">
        <a
          href="/"
          className="app-header__brand"
          aria-label="International Labour Organization"
        >
          <img src="/logo_en_horizontal_white.svg" alt="" />
        </a>
        <MegaNav.Menu className="app-menu">
          <AppItem label="About the ILO" href="#about" icon="home">
            <MegaNav.Link href="#mission" label="Mission and impact" />
            <MegaNav.Link href="#structure" label="How the ILO works" />
            <MegaNav.Link href="#dg" label="Director-General" />
          </AppItem>
          <AppItem label="Topics and sectors" href="#topics" icon="meeting">
            <MegaNav.Link href="#child-labour" label="Child Labour" />
            <MegaNav.Link href="#forced-labour" label="Forced labour" />
            <MegaNav.Link
              href="#freedom-of-association"
              label="Freedom of Association"
            />
            <MegaNav.Link
              href="#safety-and-health"
              label="Safety and Health at Work"
            />
          </AppItem>
          <AppItem label="Countries and regions" href="#countries" icon="globe">
            <MegaNav.Link href="#africa" label="Africa" />
            <MegaNav.Link href="#arab-states" label="Arab States" />
            <MegaNav.Link href="#asia-pacific" label="Asia and the Pacific" />
            <MegaNav.Link href="#europe" label="Europe and Central Asia" />
          </AppItem>
          <MegaNav.Item
            label="Data and statistics"
            href="#data"
            className="app-menu__item"
          >
            <a href="#data" className="app-menu__trigger">
              <Icon name="statistics" size={20} />
              <span className="app-menu__label">Data and statistics</span>
            </a>
          </MegaNav.Item>
        </MegaNav.Menu>
        <div className="app-header__tools">
          <MegaNav.Search />
          <MegaNav.Burger />
        </div>
      </MegaNav.Container>
      <MegaNav.Drawer />
    </MegaNav.Root>
  ),
};

export { CustomMenuStory };
