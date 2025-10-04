import HeroImage from "../../assets/hero-image.jpg";
import "./Hero.css";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-inner container">
                <div className="hero-copy">
                    <p className="h-sub h-sub-color">
                        Hi, I build things on the web
                    </p>
                    <h1>
                        I'm
                        <strong> Dandi Rasyid</strong>
                        <br />
                        <span className="hero-job-title">
                            Junior Web Developer
                        </span>
                    </h1>
                    <p>
                        Building clean and modern web solutions with a focus on
                        user experience. Passionate about turning ideas into
                        functional, and scalable applications.
                    </p>

                    <div className="hero-actions">
                        <a className="btn-primary" href="#portfolio">
                            View Portfolio
                        </a>
                        <a className="btn-ghost" href="#contact">
                            Get in touch
                        </a>
                    </div>
                </div>

                <aside className="hero-card" aria-hidden="false">
                    <div className="hero-card-image">
                        <div className="hero-avatar" aria-hidden="true">
                            <img src={HeroImage} alt="Dandi Rasyid" />
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Hero;
