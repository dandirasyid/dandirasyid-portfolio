import "./Contact.css";
import Maskot from "../../assets/maskot-image.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Email from "../../assets/email.png";

function Contact() {
    return (
        <div>
            <section id="contact" className="section contact-gradient">
                <div className="container">
                    <div className="section-head">
                        <div className="h-sub h-sub-color">— Let's talk —</div>
                        <h2 className="h-title">Get in Touch</h2>
                    </div>

                    <div className="contact-wrap">
                        <div className="contact-meta">
                            <div className="mascot">
                                <img
                                    src={Maskot}
                                    alt="Cute cat mascot waving"
                                />
                            </div>

                            <div className="quick-info">
                                <div className="contact-item">
                                    <a
                                        href="mailto:dandirasyid2003@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={Email} alt="Email" />
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a
                                        href="https://www.linkedin.com/in/dandi-rasyid-969721228"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={Linkedin} alt="LinkedIn" />
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <a
                                        href="https://www.instagram.com/dndrasyid/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={Instagram} alt="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
