import "./styles/global.scss";
import HomePage from "./pages/HomePage/HomePage";
import DestinationPage from "./pages/DestinationPage/DestinationPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DestinationPage />} />
    </Routes>
  );
}

export default App;
