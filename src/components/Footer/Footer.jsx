import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-premium">
            <div className="container footer-content-premium">
                <div className="footer-identity">
                    <span className="footer-name">Dandi Rasyid</span>
                    <span className="footer-copy">© {year} All rights reserved.</span>
                </div>
                    {/* <div className="footer-status">
                        <div className="status-dot"></div>
                        <span>Available for projects</span>
                    </div> */}
            </div>
        </footer>
    );
}

export default Footer;
