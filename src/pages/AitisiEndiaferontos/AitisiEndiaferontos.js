import "./AitisiEndiaferontos.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IdiwtikoSymfwnhtikoProgressBar from "./IdiwtikoSymfwnhtikoProgressBar";
import AitisiForm from "./AitisiForm";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function AitisiEndiaferontos() {
  return (
    <div className="AitisiEndiaferontos">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <IdiwtikoSymfwnhtikoProgressBar/>
      <AitisiForm/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
