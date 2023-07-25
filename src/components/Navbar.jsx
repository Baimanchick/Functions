import React, { useEffect } from "react";
import "../css/navbar.css";
import { TfiSearch } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="tel:+996222549247" className="nav-link">
                +996 222 549247
              </a>
            </li>
          </ul>

          <a className=" nav-branding " href="/">
            Baimurat{" "}
          </a>

          <a href="/add" className="nav-branding">
            Add
          </a>

          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
