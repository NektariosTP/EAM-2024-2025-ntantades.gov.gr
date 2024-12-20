import "./App.css";
import Header  from "./Header";
import NavBar from "./NavBar";
import Buttons from "./Buttons";
import Guide from "./Guide";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Buttons/>
      <Guide/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
