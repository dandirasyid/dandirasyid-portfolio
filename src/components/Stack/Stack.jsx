import './Stack.css'
import stackData from '../utils/constants/stack';

function Stack() {
    return (
        <div>
            <section id="tech-stack" className="section stack">
                <div className="container">
                    <div className="section-head">
                        <div className="h-sub h-sub-color">
                            — Tech Stack & Tools —
                        </div>
                        <h2 className="h-title">Technologies I Work With</h2>
                    </div>

                   <div className="tech-grid">
                    {stackData.map((item, index) => (
                        <div className="tech-item" key={index}>
                            <img src={item.img} alt={item.alt} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </div>
    );
}

export default Stack;
