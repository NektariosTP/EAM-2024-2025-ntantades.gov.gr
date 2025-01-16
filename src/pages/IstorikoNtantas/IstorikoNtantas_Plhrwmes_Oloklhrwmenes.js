import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoNtantasPlhrwmesOloklhrwmenesContainer from "./IstorikoNtantas_Plhrwmes_Oloklhrwmenes_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoNtantas_Plhrwmes_Oloklhrwmenes() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoNtantasPlhrwmesOloklhrwmenesContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}