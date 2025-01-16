import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoNtantasArxikhContainer from "./IstorikoNtantas_Arxikh_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoNtantas_Arxikh() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoNtantasArxikhContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}
