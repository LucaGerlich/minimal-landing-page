import React from "react";
import NavbarInAbout from "../../components/NavbarInAbout";
import "../../Style/about.css"

export default function abbout() {
    return (
        <div>
            <NavbarInAbout></NavbarInAbout>
            <div>
                <section className="about">
                <h1>
                Hi
                <br />
                i'm 
                <span className="highlight"> Luca Gerlich</span>
                <br />
                A 
                <span className="highlight"> developer</span>
                <br />
                based in
                <span className="hightlight-light"> Seligenstadt, Germany</span>
                .
                </h1>
            </section>
            </div>
        </div>
    );
}
