import { useState } from "react";
import Portfolios from "../utils/constants/portfolio";
import "./Portfolio.css";

function Portfolio() {
    const portfoliosPerClick = 3;
    const [visibleCount, setVisibleCount] = useState(portfoliosPerClick);

    const handleLoadMore = () => {
        if (visibleCount >= Portfolios.length) {
            setVisibleCount(portfoliosPerClick);
        } else {
            setVisibleCount((prev) => prev + portfoliosPerClick);
        }
    };

    return (
        <div>
            <section
                id="portfolio"
                className="section portfolio"
                aria-labelledby="portfolio-title"
            >
                <div className="container">
                    <div className="section-head">
                        <div className="h-sub h-sub-color">— Portfolio —</div>
                        <h2 id="portfolio-title" className="h-title">
                            Selected Projects
                        </h2>
                    </div>

                    <div className="portfolio-grid">
                        {Portfolios.slice(0, visibleCount).map((item) => (
                            <article className="portfolio-item" key={item.id}>
                                <div className="portfolio-thumb-wrap">
                                    <img
                                        className="portfolio-thumb"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="portfolio-link"
                                    >
                                        <span>↗</span>
                                    </a>
                                </div>
                                <div className="portfolio-body">
                                    <h3>{item.title}</h3>
                                    <p className="portfolio-desc">
                                        {item.desc}
                                    </p>
                                    <div className="tech-tags">
                                        {item.tags.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {Portfolios.length > portfoliosPerClick && (
                        <div className="portfolio-actions">
                            <button
                                onClick={handleLoadMore}
                                className="btn-loadmore"
                            >
                                {visibleCount >= Portfolios.length
                                    ? "Show Less"
                                    : "Load More"}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
