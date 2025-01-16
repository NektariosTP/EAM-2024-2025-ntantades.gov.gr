import React from "react";
import HeaderNtanta from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ApodoxhPlhrwmhsEpivevaiwshContainer from "./ApodoxhPlhrwmhs_Epivevaiwsh_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function ApodoxhPlhrwmhs_Epivevaiwsh() {
    return (
        <div className="App">
            <HeaderNtanta />
            <NavBar />
            <Breadcrumb/>
            <ApodoxhPlhrwmhsEpivevaiwshContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}