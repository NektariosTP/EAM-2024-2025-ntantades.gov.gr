import React from "react";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoGonewnRantevouOloklhrwmenaContainer from "./IstorikoGonewn_Rantevou_Oloklhrwmena_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoGonewn_Rantevou_Oloklhrwmena() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoGonewnRantevouOloklhrwmenaContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}