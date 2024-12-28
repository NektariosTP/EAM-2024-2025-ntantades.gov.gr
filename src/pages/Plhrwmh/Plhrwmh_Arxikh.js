import React from "react";
import Header from "../HeaderGoneas";
import NavBar from "../NavBar";
import NavMenu from "../NavMenu";
import Footer from "../Footer";
import ButtonPisw from "../Button_Pisw";
import "./Plhrwmh_Arxikh.css"
import Plhrwmh_Arxikh_Container from "./Plhrwmh_Arxikh_Container";

export default function PlhrwmhArxikh() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <ButtonPisw />
            <Plhrwmh_Arxikh_Container/>
            <NavMenu />
            <Footer />
        </div>
    );
}
