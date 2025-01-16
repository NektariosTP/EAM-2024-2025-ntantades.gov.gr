import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import PlhrwmhArxikhContainer from "./Plhrwmh_Arxikh_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function PlhrwmhArxikh() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <PlhrwmhArxikhContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}
