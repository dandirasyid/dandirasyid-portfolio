import "./Contact.css";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Email from "../../assets/email.png";

function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-grid-premium">
                    <div className="contact-header-premium">
                        <span className="section-label">Collaboration</span>
                        <h2 className="section-title-premium-left">Have an idea? <br />Let's build it.</h2>
                        <p className="contact-lead-premium">
                            I am currently available for new projects and professional
                            opportunities. Reach out and let's discuss how I can help.
                        </p>
                    </div>

                    <div className="contact-actions-premium">
                        <a href="mailto:dandirasyid2003@gmail.com" className="contact-main-link">
                            dandirasyid2003@gmail.com <span>→</span>
                        </a>

                        <div className="social-links-premium">
                            <a href="https://linkedin.com/in/dandirasyid" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com/dandirasyid" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://instagram.com/dndrasyid" target="_blank" rel="noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
