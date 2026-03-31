import "./Hero.css";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-aura"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">Junior Web Developer & Designer</span>
                    <h1 className="hero-headline">
                        Designing for the <br />
                        <span className="text-professional">human experience.</span>
                    </h1>
                    <p className="hero-lead">
                        I'm Dandi Rasyid, a developer focused on building intuitive,
                        clean, and high-performance web applications that solve real problems.
                    </p>
                    <div className="hero-actions">
                        <a href="#portfolio" className="btn btn-primary">Recent Work</a>
                        <a href="#about" className="btn btn-outline">About Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
