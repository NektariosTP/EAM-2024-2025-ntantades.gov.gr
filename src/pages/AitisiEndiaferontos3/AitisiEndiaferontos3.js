import "./AitisiEndiaferontos3.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IdiwtikoSymfwnhtikoProgressBar from "./IdiwtikoSymfwnhtikoProgressBar";
import AitisiTemp from "./AitisiTemp";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";


export default function AitisiEndiaferontos3() {
  return (
    <div className="AitisiEndiaferontos3">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <IdiwtikoSymfwnhtikoProgressBar/>
      <AitisiTemp/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}