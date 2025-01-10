import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import MainPage from "./pages/MainPage/MainPage";
import Search1 from "./pages/Search1/Search1";
import Search2 from "./pages/Search2/Search2";
import Search3 from "./pages/Search3/Search3";
import NannyEligibility from "./pages/NannyEligibility/NannyEligibility";
import NannyRegistration1 from "./pages/NannyRegistration1/NannyRegistration1";
import NannyRegistration2 from "./pages/NannyRegistration2/NannyRegistration2";
import NannyRegistration3 from "./pages/NannyRegistration3/NannyRegistration3";
import NannyRegistration4 from "./pages/NannyRegistration4/NannyRegistration4";
import NannyRegistration5 from "./pages/NannyRegistration5/NannyRegistration5";
import NannyRegistration6 from "./pages/NannyRegistration6/NannyRegistration6";
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
          <Route path="/Goneis/Aggelies/Profile" element={<Search3 />} />
          <Route path="/Ntantades" element={<NannyEligibility />} />
          <Route path="/Ntantades/Eggrafi" element={<NannyRegistration1 />} />
          <Route path="/Ntantades/Eggrafi/2" element={<NannyRegistration2 />} />
          <Route path="/Ntantades/Eggrafi/3" element={<NannyRegistration3 />} />
          <Route path="/Ntantades/Eggrafi/4" element={<NannyRegistration4 />} />
          <Route path="/Ntantades/Eggrafi/5" element={<NannyRegistration5 />} />
          <Route path="/Ntantades/Eggrafi/Epitixia_Eggrafis" element={<NannyRegistration6 />} />
          <Route path="/Plirofories" element={<Plirofories />} />
          <Route path="/Epikoinonia" element={<Epikoinonia />} />
        </Routes>
      </div>
    </Router>
  );
}
