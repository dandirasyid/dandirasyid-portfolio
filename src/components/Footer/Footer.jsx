import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="wrapper">
                        <div className="footer-title">
                            © <span id="year"></span> Dandi Rasyid
                        </div>
                        <div className="footer-desc">
                            Designed and built with 💖 & ☕
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
