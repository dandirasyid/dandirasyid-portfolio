import "./About.css";

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-grid-premium">
                    <div className="about-header-group">
                        <span className="about-kicker">Background</span>
                        <h2 className="about-headline">Solving problems with <span className="text-muted-professional">clean solutions.</span></h2>
                    </div>

                    <div className="about-main-content">
                        <div className="about-text-professional">
                            <p>
                                I am a developer dedicated to technical excellence and user-centric design,
                                delivering high-performance applications that bridge functionality and aesthetics.
                            </p>
                        </div>

                        <div className="about-expertise-list">
                            <div className="expertise-item">
                                <h3>Web Development</h3>
                                <p>Building scalable and performant modern web applications.</p>
                            </div>
                            <div className="expertise-item">
                                <h3>UI/UX Design</h3>
                                <p>Creating intuitive and aesthetic user interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
