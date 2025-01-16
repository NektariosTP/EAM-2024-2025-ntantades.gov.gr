import React from "react";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoGonewnRantevouAkyrwmenaContainer from "./IstorikoGonewn_Rantevou_Akyrwmena_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoGonewn_Rantevou_Akyrwmena() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoGonewnRantevouAkyrwmenaContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}