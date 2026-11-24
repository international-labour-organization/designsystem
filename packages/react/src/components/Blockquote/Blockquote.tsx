import { forwardRef } from "react";

export interface BlockquoteProps {
  quote: string;
  cite: string;
}

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ quote, cite }, ref) => {
    return (
      <blockquote ref={ref} className={"ilo--blockquote"}>
        <p>{quote}</p>
        <cite>{cite}</cite>
      </blockquote>
    );
  }
);

export { Blockquote };
