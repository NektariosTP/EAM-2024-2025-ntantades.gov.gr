import React from "react";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import IstorikoGonewnArxikhContainer from "./IstorikoGonewn_Arxikh_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";


export default function IstorikoGonewn_Arxikh() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb />
            <IstorikoGonewnArxikhContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}
