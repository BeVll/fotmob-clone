import React, { type ReactNode } from "react";
import { COLORS } from "../../theme/colors";

interface CardContainerProps {
  title: string;
  children: ReactNode;
}

export default function CardContainer(props: CardContainerProps) {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: COLORS.card,
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "16px 24px 8px 24px",
          height: "32px",
          alignContent: "center",
        }}
      >
        <h3 style={{ fontSize: "14px", fontWeight: 500, lineHeight: "16px" }}>
          {props.title}
        </h3>
      </div>
      {props.children}
    </div>
  );
}
