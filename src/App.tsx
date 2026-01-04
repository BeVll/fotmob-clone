import "./App.css";
import TopLeaguesCard from "./components/cards/TopLeaguesCard";
import Header from "./components/Header";
import { COLORS } from "./theme/colors";

function App() {
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
      <div
        style={{
          width: "100%",
          maxWidth: "1220px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "20px",
          marginTop: "1px",
        }}
      >
        <div className="leftContent" style={{ width: "100%" }}>
          <TopLeaguesCard />
        </div>
        <div className="middleContent" style={{ width: "100%" }}></div>
        <div className="rightContent" style={{ width: "100%" }}></div>
      </div>
    </div>
  );
}

export default App;
