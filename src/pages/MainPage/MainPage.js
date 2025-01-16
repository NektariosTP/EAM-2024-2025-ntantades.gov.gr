import "./MainPage.css";
import Header  from "../../shared_components/Header";
import HeaderGoneas  from "../../shared_components/HeaderGoneas";
import HeaderNtanta  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Buttons from "./Buttons";
import Guide from "./Guide";
import Carousel from "./Carousel"
import Announcements from "./Announcements";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function MainPage() {
  const isParentLoggedIn = localStorage.getItem("isParentLoggedIn") === "true";
  const isNannyLoggedIn = localStorage.getItem("isNannyLoggedIn") === "true";

  return (
    <div className="MainPage">
      {isParentLoggedIn ? (
        <HeaderGoneas />
      ) : isNannyLoggedIn ? (
        <HeaderNtanta />
      ) : (
        <Header />
      )}
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
