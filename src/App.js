import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage/MainPage";
import Search1 from "./pages/Search1/Search1";
import Information from "./pages/Information/Information";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Goneis" element={<Search1 />} />
          <Route path="/Information" element={<Information />} />
        </Routes>
      </div>
    </Router>
  );
}
