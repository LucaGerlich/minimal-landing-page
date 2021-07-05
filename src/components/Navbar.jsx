import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <nav>
            <div className="Navbar-links">
                <Link to="/"> Project1</Link>
                <Link to="/"> Project2</Link>
            </div>
        </nav>
    );
}
