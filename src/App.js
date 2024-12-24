import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage/MainPage";
import Search1 from "./pages/Search1/Search1";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Goneis" element={<Search1 />} />
        </Routes>
      </div>
    </Router>
  );
}
