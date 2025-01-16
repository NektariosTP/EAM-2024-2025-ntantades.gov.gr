import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoNtantasIdiwtikaSymfwnhtikaEkkremothtaContainer from "./IstorikoNtantas_IdiwtikaSymfwnhtika_Ekkremothta_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoNtantas_IdiwtikaSymfwnhtika_Ekkremothta() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoNtantasIdiwtikaSymfwnhtikaEkkremothtaContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}