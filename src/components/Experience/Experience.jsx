import "./Experience.css";

function Experience() {
    return (
        // Section 
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
                                <div className="exp-dot"></div>
                            </div>
                            <div className="exp-main">
                                <div className="exp-title-row">
                                    <div>
                                        <h3>Internship - Human Capital IT Support</h3>
                                        <span className="exp-year">Nov 2025 – Present</span>
                                    </div>
                                    <span className="exp-company-premium">Telkom Property</span>
                                </div>
                                <p className="exp-desc-premium">
                                    Developed a Human Capital web system to enhance internal operations, focusing on attendance tracking, training management, and efficient data handling using Laravel and ReactJS.
                                </p>
                            </div>
                        </div>

                        <div className="exp-item-premium">
                            <div className="exp-side">
                                <div className="exp-dot"></div>
                            </div>
                            <div className="exp-main">
                                <div className="exp-title-row">
                                    <div>
                                        <h3>Study Independent – Web Developer (MSIB)</h3>
                                        <span className="exp-year">Feb 2024 – Jun 2024</span>
                                    </div>
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
                                <div className="exp-dot"></div>
                            </div>
                            <div className="exp-main">
                                <div className="exp-title-row">
                                    <div>
                                        <h3>Study Independent – Web Development (MSIB)</h3>
                                        <span className="exp-year">Aug 2023 – Dec 2023</span>
                                    </div>
                                    <span className="exp-company-premium">Infinite Learning Indonesia</span>
                                </div>
                                <p className="exp-desc-premium">
                                    Developed user-centric interfaces and researched user behaviors for digital products.
                                    Strengthened foundation in React.js, Express.js, and modern UI/UX design principles.
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
