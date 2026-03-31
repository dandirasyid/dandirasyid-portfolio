import "./Experience.css";
import AmanahKarya from "../../assets/pt-amanah-karya.png";
import InfiniteLearning from "../../assets/infinite-learning.jpg";

function Experience() {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="exp-grid-premium">
                    <div className="exp-header-premium">
                        <span className="section-label">Timeline</span>
                        <h2 className="section-title-premium-left">Professional Journey</h2>
                    </div>

                    <div className="exp-list-premium">
                        <div className="exp-item-premium">
                            <div className="exp-side">
                                <span className="exp-year">2024</span>
                                <div className="exp-dot"></div>
                            </div>
                            <div className="exp-main">
                                <div className="exp-title-row">
                                    <h3>Web Developer</h3>
                                    <span className="exp-company-premium">PT. Amanah Karya Indonesia</span>
                                </div>
                                <p className="exp-desc-premium">
                                    Focused on building robust web solutions using Laravel and modern JavaScript tools.
                                    Collaborated in a project-based environment to deliver functional and scalable applications.
                                </p>
                            </div>
                        </div>

                        <div className="exp-item-premium">
                            <div className="exp-side">
                                <span className="exp-year">2023</span>
                                <div className="exp-dot"></div>
                            </div>
                            <div className="exp-main">
                                <div className="exp-title-row">
                                    <h3>Web Development</h3>
                                    <span className="exp-company-premium">Infinite Learning Indonesia</span>
                                </div>
                                <p className="exp-desc-premium">
                                    Developed user-centric interfaces and researched user behaviors for digital products.
                                    Strengthened foundation in React.js and modern UI/UX design principles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
