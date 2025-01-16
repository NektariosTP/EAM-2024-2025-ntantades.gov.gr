import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoNtantasRantevouAkyrwmenaContainer from "./IstorikoNtantas_Rantevou_Akyrwmena_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoNtantas_Rantevou_Akyrwmena() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoNtantasRantevouAkyrwmenaContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}