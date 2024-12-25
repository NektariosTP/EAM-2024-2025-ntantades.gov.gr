import "./Information.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import Address from "./Address";
import Message from "./Message";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Information() {
  return (
    <div className="Information">
      <Header/>
      <NavBar/>
      <Address/>
      <Message/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
