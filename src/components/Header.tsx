import { COLORS } from "../theme/colors";
import logo from "../assets/icons/logo.svg";
import CustomInput from "./ui/CustomInput";
import { Search } from "lucide-react";
import Menu from "./menu/Menu";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: COLORS.container,
        width: "100%",
        maxWidth: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1220px",
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <img
            onClick={() => {
              navigate("/");
            }}
            src={logo}
            style={{ width: "130px" }}
          />
          <CustomInput
            icon={<Search color={COLORS.gray} size={20} />}
            placeholder="Search"
          />
        </div>

        <Menu />
      </div>
    </div>
  );
}
