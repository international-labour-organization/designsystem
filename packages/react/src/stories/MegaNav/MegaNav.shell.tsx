import { DetailCard } from "../../components/Cards";
import { MegaNav, MegaNavProps } from "../../components/MegaNav";

import { MegaNavArgs } from "./MegaNav.args";

const ShellArgs: Omit<MegaNavProps, "children"> = {
  ...MegaNavArgs,
  branding: {
    href: "#",
    label: "ILO Live",
    logo: {
      main: <img src="/ilo-live-logo-en-light.png" alt="" />,
      mobile: <img src="/ilo-live-logo-en-light.png" alt="" />,
      drawer: <img src="/ilo-live-logo-en-dark.png" alt="" />,
    },
    tag: {
      main: "Live events that shape the future of work",
      sub: "The official livestream platform of the ILO",
    },
  },
};

const ShellItems = (
  <>
    <MegaNav.Item label="Live now" href="#live" />

    <MegaNav.Item label="Upcoming events" href="#upcoming">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <MegaNav.Links title="By format">
            <MegaNav.Link href="#conferences" label="Conferences" />
            <MegaNav.Link href="#webinars" label="Webinars" />
            <MegaNav.Link href="#panels" label="Panel discussions" />
            <MegaNav.Link href="#press" label="Press briefings" />
          </MegaNav.Links>
        </MegaNav.Column>
        <MegaNav.Column>
          <DetailCard
            eyebrow="Next livestream"
            title="World Employment and Social Outlook: Trends"
            details="Geneva | 10:00 CET"
            image="/ilo-live-screenshot.jpg"
            link="#weso"
            size="narrow"
            isVideo
          />
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Past events" href="#past">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <MegaNav.Links title="Recordings">
            <MegaNav.Link href="#2026" label="2026" />
            <MegaNav.Link href="#2025" label="2025" />
            <MegaNav.Link href="#archive" label="Full archive" />
          </MegaNav.Links>
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Series" href="#series">
      <MegaNav.Trigger />
      <MegaNav.Panel>
        <MegaNav.Column>
          <MegaNav.Links>
            <MegaNav.Link href="#future-of-work" label="Future of work" />
            <MegaNav.Link
              href="#social-justice"
              label="Global Coalition for Social Justice"
            />
            <MegaNav.Link href="#innovation" label="Innovation Day" />
          </MegaNav.Links>
        </MegaNav.Column>
      </MegaNav.Panel>
    </MegaNav.Item>

    <MegaNav.Item label="Podcasts" href="#podcasts" />
    <MegaNav.Item label="About ILO Live" href="#about" />
  </>
);

export { ShellArgs, ShellItems };
