import "./App.css";
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
        flexDirection: "column",
      }}
    >
      <Header />
    </div>
  );
}

export default App;
