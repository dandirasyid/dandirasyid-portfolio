import React from "react";
import "./Header.css";

function Header() {
    const toggleMobileMenu = () => {
        const nav = document.querySelector(".nav-links");
        const btn = document.querySelector(".menu-btn");

        nav.classList.toggle("mobile-active");

        const expanded = btn.getAttribute("aria-expanded") === "true" || false;
        btn.setAttribute("aria-expanded", !expanded);
    };

    return (
        <header>
            <div
                className="navbar container"
                role="navigation"
                aria-label="Main Navigation"
            >
                <div className="brand">
                    <a href="#home">
                        Dandi<span>Rasyid</span>
                    </a>
                </div>
                <nav className="nav-links" aria-label="Primary">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#experience">Experience</a>
                    <a href="#tech-stack">Stack</a>
                    <a href="#certificates">Certificates</a>
                    <a href="#contact" className="cta">
                        Contact
                    </a>
                </nav>
                <button
                    className="menu-btn"
                    aria-expanded="false"
                    aria-label="Open menu"
                    onClick={toggleMobileMenu}
                >
                    ☰
                </button>
            </div>
        </header>
    );
}

export default Header;
