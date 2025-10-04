import "./Experience.css";
import AmanahKarya from "../../assets/pt-amanah-karya.png";
import InfiniteLearning from "../../assets/infinite-learning.jpg";

function Experience() {
    return (
        <div>
            <section id="experience" className="section experience">
                <div className="container">
                    <div className="section-head">
                        <div className="h-sub h-sub-color">— Experiences —</div>
                        <h2 className="h-title">Explore My Journey</h2>
                    </div>

                    <div className="experience-list">
                        <div className="exp-item">
                            <div className="exp-left">
                                <img
                                    src={AmanahKarya}
                                    alt="PT Amanah Karya"
                                    className="exp-logo"
                                />
                                <div className="exp-info">
                                    <h4>Web Developer</h4>
                                    <span className="exp-company">
                                        PT. Amanah Karya Indonesia
                                    </span>
                                    <span className="exp-date">
                                        Feb 2024 - Jun 2024
                                    </span>
                                    <span className="exp-location">
                                        Depok, Indonesia • Independent Study
                                        (Project Base)
                                    </span>
                                </div>
                            </div>
                            <div className="exp-center">
                                <p>
                                    Experienced in web development with HTML,
                                    CSS, JavaScript, PHP, Laravel, Bootstrap,
                                    and MySQL, skilled in mockups, flowcharts,
                                    ERD, UML, and strong in communication,
                                    problem solving, teamwork, and project
                                    management tools.
                                </p>
                            </div>
                            <div className="exp-right">
                                <div className="exp-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>PHP</span>
                                    <span>Bootstrap</span>
                                    <span>Laravel</span>
                                    <span>MySQL</span>
                                    <span>Communication </span>
                                    <span>Creative Thinking </span>
                                    <span>Project Management Tools</span>
                                </div>
                            </div>
                        </div>

                        <div className="exp-item">
                            <div className="exp-left">
                                <img
                                    src={InfiniteLearning}
                                    alt="Innovative Designs Logo"
                                    className="exp-logo"
                                />
                                <div className="exp-info">
                                    <h4>Web Development</h4>
                                    <span className="exp-company">
                                        Infinite Learning Indonesia
                                    </span>
                                    <span className="exp-date">
                                        Agu 2023 - Des 2023
                                    </span>
                                    <span className="exp-location">
                                        Batam, Indonesia • Independent Study
                                        (Project Base)
                                    </span>
                                </div>
                            </div>
                            <div className="exp-center">
                                <p>
                                    Experienced in web development with HTML,
                                    CSS, JavaScript, Bootstrap, React.js, and
                                    MySQL, with skills in Figma, system design,
                                    user research, and teamwork.
                                </p>
                            </div>
                            <div className="exp-right">
                                <div className="exp-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>PHP</span>
                                    <span>Bootstrap</span>
                                    <span>React JS</span>
                                    <span>MySQL</span>
                                    <span>UI/UX</span>
                                    <span>Communication </span>
                                    <span>Creative Thinking </span>
                                    <span>Branding</span>
                                    <span>Project Management Tools</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;
