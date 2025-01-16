import "./NannyEditMeeting.css";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import NannyEditMeetingForm from "./NannyEditMeetingForm";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function NannyEditMeeting() {
  return (
    <div className="NannyEditMeeting">
      <Header/>
      <NavBar/>
      <Breadcrumb/>
      <NannyEditMeetingForm/>
      <NavMenu/>
      <Footer/>
    </div>
  );
}