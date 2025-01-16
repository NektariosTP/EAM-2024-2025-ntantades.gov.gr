import React from "react";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoGonewnIdiwtikaSymfwnhtikaEkkremothtaContainer from "./IstorikoGonewn_IdiwtikaSymfwnhtika_Ekkremothta_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoGonewn_IdiwtikaSymfwnhtika_Ekkremothta() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoGonewnIdiwtikaSymfwnhtikaEkkremothtaContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}