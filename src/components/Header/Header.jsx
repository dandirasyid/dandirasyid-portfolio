import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileActive, setMobileActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={scrolled ? "header-scrolled" : ""}>
            <div className="container header-wrap">
                <div className="logo">
                    <a href="#home">Dandi.</a>
                </div>

                <nav className={`nav-menu ${mobileActive ? "active" : ""}`}>
                    <a href="#about" onClick={() => setMobileActive(false)}>About</a>
                    <a href="#portfolio" onClick={() => setMobileActive(false)}>Work</a>
                    <a href="#experience" onClick={() => setMobileActive(false)}>Exp</a>
                    <a href="#contact" className="cta-link" onClick={() => setMobileActive(false)}>Get in touch</a>
                </nav>

                <button
                    className={`nav-toggle ${mobileActive ? "active" : ""}`}
                    onClick={() => setMobileActive(!mobileActive)}
                    aria-label="Toggle menu"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
