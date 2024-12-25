import "./Search1.css";
import Header  from "../../shared_components/Header";
import NavBar from "../../shared_components/NavBar";
import Query from "./Query"
import Info from "./Info"
import Reviews from "./Reviews"
import Suggestions from "./Suggestions"
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function Search1() {
  return (
    <div className="Search1">
      <Header/>
      <NavBar/>
      <Query/>
      <Info/>
      <Reviews/>
      <Suggestions/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}
