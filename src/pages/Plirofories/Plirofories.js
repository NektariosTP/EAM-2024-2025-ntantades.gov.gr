import "./Plirofories.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import Message from "./Message";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Plirofories() {
  return (
    <div className="Plirofories">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <Message/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
