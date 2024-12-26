import "./Epikoinonia.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import Address from "./Address";
import Message from "./Message";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Epikoinonia() {
  return (
    <div className="Epikoinonia">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <Address/>
      <Message/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
