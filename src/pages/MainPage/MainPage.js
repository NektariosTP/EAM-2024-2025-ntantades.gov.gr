import "./MainPage.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import Buttons from "./Buttons";
import Guide from "./Guide";
import Carousel from "./Carousel"
import Announcements from "./Announcements";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function MainPage() {
  return (
    <div className="MainPage">
      <Header/>
      <NavBar/>
      <Buttons/>
      <Guide/>
      <Carousel/>
      <Announcements/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
