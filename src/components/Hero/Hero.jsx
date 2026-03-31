import "./Hero.css";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-aura"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-roles-heading">
                        <span>-</span>
                        <span className="hero-subtitle">Junior Web Developer</span>
                        <span>-</span>
                    </div>
                    <h1 className="hero-headline">
                        Building scalable and<br />
                        <span className="text-professional"> efficient web.</span>
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
