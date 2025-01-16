import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoNtantasRantevouProsexwsContainer from "./IstorikoNtantas_Rantevou_Prosexws_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoNtantas_Rantevou_Prosexws() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoNtantasRantevouProsexwsContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}