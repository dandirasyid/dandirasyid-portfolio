import './Stack.css'
import stackData from '../utils/constants/stack';

function Stack() {
    return (
        <section id="tech-stack" className="section stack">
            <div className="container">
                <div className="stack-grid-professional">
                    <div className="stack-info-professional">
                        <span className="section-label">Toolkit</span>
                        <h2 className="section-title-premium-left">Technical <br />Architectures</h2>
                        <p className="stack-desc-professional">
                            I leverage a carefully selected set of tools to build high-performance
                            and maintainable web solutions.
                        </p>
                    </div>

                    <div className="stack-items-professional">
                        {stackData.map((item, index) => (
                            <div className="stack-logotype" key={index}>
                                <div className="stack-icon-wrap">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                                <span className="stack-label-text">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stack;
