import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoNtantasAithseisEndiaferontosEkkremothtaContainer from "./IstorikoNtantas_AithseisEndiaferontos_Ekkremothta_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoNtantas_AithseisEndiaferontos_Ekkremothta() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoNtantasAithseisEndiaferontosEkkremothtaContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}