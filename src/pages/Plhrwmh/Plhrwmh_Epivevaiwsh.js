import React from "react";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import PlhrwmhEpivevaiwshProgressBar from "./Plhrwmh_Epivevaiwsh_ProgressBar";
import PlhrwmhEpivevaiwshContainer from "./Plhrwmh_Epivevaiwsh_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function PlhrwmhEpivevaiwsh() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb/>
            <PlhrwmhEpivevaiwshProgressBar/>
            <PlhrwmhEpivevaiwshContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}
