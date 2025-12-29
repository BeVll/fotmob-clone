import React, { type ReactNode } from "react";
import { COLORS } from "../../theme/colors";

interface CustomInputProps {
  icon?: ReactNode;
  placeholder?: string;
}

export default function CustomInput(props: CustomInputProps) {
  return (
    <div
      style={{
        backgroundColor: COLORS.dark,
        padding: "12px",
        borderRadius: "20px",
        color: COLORS.white,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "200px",
      }}
    >
      {props.icon}
      <input
        style={{
          backgroundColor: "transparent",
          border: 0,
          padding: 0,
          color: COLORS.white,
          boxShadow: "none",
          width: "100%",
        }}
        placeholder={props.placeholder}
      />
    </div>
  );
}
