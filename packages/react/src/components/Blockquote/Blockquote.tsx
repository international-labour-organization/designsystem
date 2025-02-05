import React from "react";
import { BlockquoteProps } from "./Blockquote.props";
import useGlobalSettings from "../../hooks/useGlobalSettings";

const Blockquote: React.FC<BlockquoteProps> = ({ quote, cite }) => {
  const { prefix } = useGlobalSettings();

  return (
    <blockquote className={`${prefix}--blockquote`}>
      <p>{quote}</p>
      <cite>{cite}</cite>
    </blockquote>
  );
};

export default Blockquote;
