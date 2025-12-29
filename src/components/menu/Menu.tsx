import React from "react";
import Link from "../ui/Link";

export default function Menu() {
  const menuItems = ["News", "Advertise", "About us"];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      {menuItems.map((item) => {
        return <Link url="https://lucide.dev/icons/search" text={item} />;
      })}
    </div>
  );
}
