import "./About.css";

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-grid-premium">
                    <div className="about-header-group">
                        <span className="about-kicker">Background</span>
                        <h2 className="about-headline">Solving problems with <span className="text-muted-professional">efficient solutions.</span></h2>
                    </div>

                    <div className="about-main-content">
                        <div className="about-text-professional">
                            <p>
                               I am a web developer focused on developing functional and efficient systems. I have experience in building web-based applications, managing databases, and ensuring system performance to support business needs.
                            </p>
                        </div>

                        <div className="about-expertise-list">
                            <div className="expertise-item">
                                <h3>Web Development</h3>
                                <p>Developing scalable web applications using Laravel, ReactJS, and modern web technologies.</p>
                            </div>
                            <div className="expertise-item">
                                <h3>System Development</h3>
                                <p>Building systems such as employee management, training, and internal information platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
