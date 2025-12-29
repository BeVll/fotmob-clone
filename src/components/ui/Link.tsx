import React from "react";
import { COLORS } from "../../theme/colors";

interface LinkProps {
  url: string;
  text: string;
}

export default function Link(props: LinkProps) {
  return (
    <a href={props.url} style={{ color: COLORS.white, textDecoration: "none" }}>
      {props.text}
    </a>
  );
}
