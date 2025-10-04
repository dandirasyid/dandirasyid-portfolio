import "./About.css";

function About() {
    return (
        <div>
            <section id="about" className="section about-section">
                <div className="container about-inner">
                    <div className="about-left">
                        <p className="subtitle">— About Me</p>
                        <h2>Get to know me</h2>
                        <p className="desc">
                            I'm fresh graduate passionate about creating digital
                            experiences and analyzing data to help businesses
                            grow. I enjoy developing, and exploring innovative
                            solutions.
                        </p>
                        <a
                            href="mailto:dandirasyid2003@gmail.com"
                            className="email-link"
                        >
                            dandirasyid2003@gmail.com →
                        </a>
                    </div>

                    <div className="about-right">
                        <p className="quote">
                            "FOCUS, CONSISTENCY, INTEGRITY, ADAPTIVE"
                        </p>
                        <p className="desc">
                            I specialize in Web Development, UI/UX Design, and
                            Data Analyst. Eager to apply my skills in real-world
                            projects and continue learning in a fast-paced
                            digital environment.
                        </p>
                        <div className="stats">
                            <div className="stat">
                                <span className="number">10+</span>
                                <span className="label">
                                    Tech Stack & Tools
                                </span>
                            </div>
                            <div className="stat">
                                <span className="number">5+</span>
                                <span className="label">
                                    Certificates Earned
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
