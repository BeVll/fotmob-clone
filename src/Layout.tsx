import React, { type ReactNode } from "react";
import { COLORS } from "./theme/colors";
import Header from "./components/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: COLORS.background,
        minHeight: "100vh",
        minWidth: "100vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      {children}
    </div>
  );
}
