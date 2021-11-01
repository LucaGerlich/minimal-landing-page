import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Style/Style.css";

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luca Gerlich</title>
      </Helmet>
      <section>
        <Navbar></Navbar>
        <h1 className="Main-Header">Luca Gerlich</h1>
        <Footer></Footer>
      </section>
    </div>
  );
}
