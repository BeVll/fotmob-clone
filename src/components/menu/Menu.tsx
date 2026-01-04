import Link from "../ui/Link";

export default function Menu() {
  const menuItems = ["News", "Advertise", "About us"];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {menuItems.map((item, index) => {
        return (
          <Link key={index} url="https://lucide.dev/icons/search" text={item} />
        );
      })}
    </div>
  );
}
