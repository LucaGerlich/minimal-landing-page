import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Style/Style.css";

export default function Home() {
    return (
        <div>
            <section>
                <Navbar></Navbar>
                <h1 className="Main-Header">Luca Gerlich</h1>
                <Footer></Footer>
            </section>
        </div>
    );
}
