import "./NannyEligibility.css";
import Header  from "../../shared_components/Header";
import HeaderGoneas  from "../../shared_components/HeaderGoneas";
import HeaderNtanta  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import Criteria from "./Criteria"

export default function NannyEligibility() {
  const isParentLoggedIn = localStorage.getItem("isParentLoggedIn") === "true";
  const isNannyLoggedIn = localStorage.getItem("isNannyLoggedIn") === "true";

  return (
    <div className="NannyEligibility">
      {isParentLoggedIn ? (
        <HeaderGoneas />
      ) : isNannyLoggedIn ? (
        <HeaderNtanta />
      ) : (
        <Header />
      )}
      <NavBar/>
      <Breadcrumb/>
      <Criteria />
      <NavMenu/>
      <Footer/>
    </div>
  );
}