import "./NannyMessage.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyMessageContainer from "./NannyMessageContainer"

export default function NannyMessage() {
  return (
    <div className="NannyMessage">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyMessageContainer />
      <NavMenu/>
      <Footer/>
    </div>
  );
}