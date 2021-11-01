import React from "react";
import { Link } from "gatsby";
import "../Style/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="Navbar-links">
        <Link
          className="Navbar-link"
          to="https://github.com/LucaGerlich/YamahaRX-VDesktopApp_Electron"
          activeStyle={{ color: "white" }}
          partiallyActive={true}
        >
          {" "}
          Yamaha Controller
        </Link>
        <Link
          className="Navbar-link"
          to="https://github.com/LucaGerlich/minimal-landing-page"
          activeStyle={{ color: "white" }}
          partiallyActive={true}
        >
          {" "}
          This Website
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
