import React, { type ReactNode } from "react";
import { COLORS } from "../../theme/colors";

interface MatchHeaderInfoItemProps {
  icon: ReactNode;
  title: string;
}

export default function MatchHeaderInfoItem(props: MatchHeaderInfoItemProps) {
  return (
    <div
      style={{
        fontSize: "12px",
        color: COLORS.gray,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {props.icon}
      <span>{props.title}</span>
    </div>
  );
}
