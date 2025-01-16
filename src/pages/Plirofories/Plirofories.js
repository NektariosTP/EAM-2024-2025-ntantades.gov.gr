import "./Plirofories.css";
import Header  from "../../shared_components/Header";
import HeaderGoneas  from "../../shared_components/HeaderGoneas";
import HeaderNtanta  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import Message from "./Message";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Plirofories() {
  const isParentLoggedIn = localStorage.getItem("isParentLoggedIn") === "true";
  const isNannyLoggedIn = localStorage.getItem("isNannyLoggedIn") === "true";

  return (
    <div className="Plirofories">
      {isParentLoggedIn ? (
        <HeaderGoneas />
      ) : isNannyLoggedIn ? (
        <HeaderNtanta />
      ) : (
        <Header />
      )}
      <NavBar/>
      <Breadcrumb/>
      <Message/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
