import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./components/router/CustomRoutes";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <CustomRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
