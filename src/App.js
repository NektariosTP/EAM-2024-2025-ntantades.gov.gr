import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage/MainPage";
import Search1 from "./pages/Search1/Search1";
import Search2 from "./pages/Search2/Search2";
import Plirofories from "./pages/Plirofories/Plirofories";
import Epikoinonia from "./pages/Epikoinonia/Epikoinonia";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Goneis" element={<Search1 />} />
          <Route path="/Goneis/Aggelies" element={<Search2 />} />
          <Route path="/Plirofories" element={<Plirofories />} />
          <Route path="/Epikoinonia" element={<Epikoinonia />} />
        </Routes>
      </div>
    </Router>
  );
}
