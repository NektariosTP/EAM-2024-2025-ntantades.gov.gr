import React from "react";
import Header  from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoNtantasRantevouEpivevaiwshContainer from "./IstorikoNtantas_Rantevou_Epivevaiwsh_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function IstorikoNtantas_Rantevou_Epivevaiwsh() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoNtantasRantevouEpivevaiwshContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}