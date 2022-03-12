import "./styles/global.scss";
import HomePage from "./pages/HomePage/HomePage";
import DestinationPage from "./pages/DestinationPage/DestinationPage";
import { Routes, Route } from "react-router-dom";
import CrewPage from "./pages/CrewPage/CrewPage";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DestinationPage />} />
      {/* <Route path="/crew" element={<CrewPage />} />
      <Route path="technology" element={<Technology />} /> */}
    </Routes>
  );
}

export default App;
