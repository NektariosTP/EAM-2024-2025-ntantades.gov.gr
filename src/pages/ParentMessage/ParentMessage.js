import "./ParentMessage.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentMessageContainer from "./ParentMessageContainer"

export default function ParentMessage() {
  return (
    <div className="ParentMessage">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentMessageContainer />
      <NavMenu/>
      <Footer/>
    </div>
  );
}