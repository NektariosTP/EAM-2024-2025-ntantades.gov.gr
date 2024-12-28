import "./Search2.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import Filtered from "./Filtered";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Search2() {
  return (
    <div className="Search2">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <Filtered/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
