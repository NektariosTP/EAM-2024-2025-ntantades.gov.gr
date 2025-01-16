import React from "react";
import HeaderNtanta from "../../shared_components/HeaderNtanta";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import ApodoxhPlhrwmhsArxikhContainer from "./ApodoxhPlhrwmhs_Arxikh_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function ApodoxhPlhrwmhs_Arxikh() {
    return (
        <div className="ApodoxhPlhrwmhs_Arxikh">
            <HeaderNtanta />
            <NavBar />
            <Breadcrumb/>
            <ApodoxhPlhrwmhsArxikhContainer />
            <NavMenu />
            <Footer />
        </div>
    );
}
