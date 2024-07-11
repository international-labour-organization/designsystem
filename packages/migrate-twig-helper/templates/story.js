export const template = `
  import <%= componentTitle %> from "../components/<%= component %>/<%= component %>.twig";
  import <%- componentTitle + "Pattern" %> from "../components/<%= component %>/<%= component %>.twig";
`;
