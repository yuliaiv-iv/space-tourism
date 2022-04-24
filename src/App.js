import Wrapper from "./components/Wrapper/Wrapper";
import DestinationPage from "./pages/DestinationPage/DestinationPage";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/destination" element={<DestinationPage />} />
    </Routes>
  );
}

export default App;
