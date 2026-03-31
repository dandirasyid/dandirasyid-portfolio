import { useState } from "react";
import Portfolios from "../utils/constants/portfolio";
import "./Portfolio.css";

function Portfolio() {
    const portfoliosPerClick = 2;
    const [visibleCount, setVisibleCount] = useState(portfoliosPerClick);

    const handleLoadMore = () => {
        if (visibleCount >= Portfolios.length) {
            setVisibleCount(portfoliosPerClick);
        } else {
            setVisibleCount((prev) => prev + portfoliosPerClick);
        }
    };

    return (
        <section id="portfolio" className="section portfolio">
            <div className="container">
                <div className="section-head-premium">
                    <span className="section-label">Selected Projects</span>
                    <h2 className="section-title-premium">Featured Work</h2>
                </div>

                <div className="portfolio-grid-premium">
                    {Portfolios.slice(0, visibleCount).map((item) => (
                        <article className="portfolio-card-premium" key={item.id}>
                            <div className="portfolio-image-premium">
                                <img src={item.img} alt={item.title} />
                                <div className="portfolio-overlay-premium">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-visit">
                                        View Case Study
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-info-premium">
                                <div className="info-main">
                                    <h3 className="portfolio-item-title">{item.title}</h3>
                                    <p className="portfolio-item-year">{item.year}</p>
                                </div>
                                <p className="portfolio-item-desc">{item.desc}</p>
                                <div className="portfolio-item-tags">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="tag-premium">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {Portfolios.length > portfoliosPerClick && (
                    <div className="load-more-wrap">
                        <button onClick={handleLoadMore} className="btn-load-more">
                            {visibleCount >= Portfolios.length ? "View Less" : "Archive →"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;
