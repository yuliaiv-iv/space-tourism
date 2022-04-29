import DestinationPage from "./pages/DestinationPage/DestinationPage";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import CrewPage from "./pages/CrewPage/CrewPage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/destination" element={<DestinationPage />} />
      <Route exact path="/crew" element={<CrewPage />} />
      <Route exact path="/technology" element={<TechnologyPage />} />
    </Routes>
  );
}

export default App;
