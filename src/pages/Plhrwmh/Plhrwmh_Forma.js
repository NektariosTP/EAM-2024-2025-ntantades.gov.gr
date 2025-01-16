import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import PlhrwmhFormaProgressBar from "./Plhrwmh_Forma_ProgressBar"
import PlhrwmhFormaContainer from "./Plhrwmh_Forma_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function PlhrwmhForma() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb/>
            <PlhrwmhFormaProgressBar/>
            <PlhrwmhFormaContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}
