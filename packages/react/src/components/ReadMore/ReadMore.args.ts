import { ReadMoreProps } from "./ReadMore.props";

const fulltext = `<p>Underlying the ILO’s work is the importance of cooperation between governments and employers’ and workers’ organizations in fostering social and economic progress. The ILO aims to ensure that it serves the needs of working women and men by bringing together governments, employers and workers to set labour standards, develop policies and devise programmes.</p>

<p>The very structure of the ILO, where workers and employers together have an equal voice with governments in its deliberations, shows social dialogue in action. It ensures that the views of the social partners are closely reflected in ILO labour standards, policies and programmes.</p>

<p>The ILO encourages this tripartism within its constituents - employers , workers  and member States , by promoting a social dialogue between trade unions and employers in formulating, and where appropriate, implementing national policy on social, economic, and many other issues.</p>`;

const excerpt = fulltext.split("\n\n")[0];

const base: ReadMoreProps = {
  buttonlabel: {
    closed: "Read More",
    opened: "Close",
  },
  excerpt,
  fulltext,
  openatstart: false,
};

const open = { ...base, openatstart: true };

export default { base, open };
