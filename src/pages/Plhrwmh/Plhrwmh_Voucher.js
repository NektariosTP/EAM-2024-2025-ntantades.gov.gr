import React from "react";
import Header  from "../../shared_components/HeaderGoneas";
import NavBar from "../../shared_components/NavBar";
import Breadcrumb from "../../shared_components/Breadcrumb";
import PlhrwmhVoucherProgressBar from "./Plhrwmh_Voucher_ProgressBar";
import PlhrwmhVoucherContainer from "./Plhrwmh_Voucher_Container";
import NavMenu from "../../shared_components/NavMenu";
import Footer from "../../shared_components/Footer";

export default function PlhrwmhVoucher() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Breadcrumb/>
            <PlhrwmhVoucherProgressBar/>
            <PlhrwmhVoucherContainer/>
            <NavMenu />
            <Footer />
        </div>
    );
}