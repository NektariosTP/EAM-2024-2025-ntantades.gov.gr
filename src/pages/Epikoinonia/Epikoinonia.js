import "./Epikoinonia.css";
import Header  from "../../shared_components/Header";
import HeaderGoneas  from "../../shared_components/HeaderGoneas";
import HeaderNtanta  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import Address from "./Address";
import Message from "./Message";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Epikoinonia() {
  const isParentLoggedIn = localStorage.getItem("isParentLoggedIn") === "true";
  const isNannyLoggedIn = localStorage.getItem("isNannyLoggedIn") === "true";
  return (
    <div className="Epikoinonia">
      {isParentLoggedIn ? (
        <HeaderGoneas />
      ) : isNannyLoggedIn ? (
        <HeaderNtanta />
      ) : (
        <Header />
      )}
      <NavBar/>
      <Breadcrumb/>
      <Address/>
      <Message/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
