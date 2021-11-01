import React from "react";
import NavbarInAbout from "../../components/NavbarInAbout";
import Footer from "../../components/Footer";
import "../../Style/about.css";

export default function abbout() {
  return (
    <div>
      <NavbarInAbout></NavbarInAbout>
      <div>
        <div className="text">
          <h1 className="heading">
            Hi,
            <br />
            i'm
            <span> Luca Gerlich.</span>
            <br />A<span> developer</span>
            <br />
            based in
            <span> Seligenstadt, Germany.</span>
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
