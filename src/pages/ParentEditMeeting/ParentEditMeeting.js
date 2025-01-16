import "./ParentEditMeeting.css";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ParentEditMeetingForm from "./ParentEditMeetingForm";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function ParentEditMeeting() {
  return (
    <div className="ParentEditMeeting">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <ParentEditMeetingForm/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}