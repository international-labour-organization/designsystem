import { forwardRef } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";

export interface BlockquoteProps {
  quote: string;
  cite: string;
}

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ quote, cite }, ref) => {
    const { prefix } = useGlobalSettings();

    return (
      <blockquote ref={ref} className={`${prefix}--blockquote`}>
        <p>{quote}</p>
        <cite>{cite}</cite>
      </blockquote>
    );
  }
);

export { Blockquote };
