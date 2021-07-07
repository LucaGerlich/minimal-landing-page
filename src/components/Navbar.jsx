import React from "react";
import { Link } from "gatsby";
import "../Style/Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div className="Navbar-links">
                <Link
                    className="Navbar-link"
                    to="../pages/404"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                >
                    {" "}
                    Project1
                </Link>
                <Link
                    className="Navbar-link"
                    to="../pages/404"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                >
                    {" "}
                    Project2
                </Link>
                <Link
                    className="Navbar-link"
                    to="../about/about"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                >
                    {" "}
                    About
                </Link>
            </div>
        </nav>
    );
}
