import "./Certificate.css";
import certificates from "../utils/constants/certificate";
import { useState } from "react";

function Certificate() {
    const certificatesPerClick = 3;
    const [visibleCount, setVisibleCount] = useState(certificatesPerClick);

    const handleLoadMore = () => {
        if (visibleCount >= certificates.length) {
            setVisibleCount(certificatesPerClick);
        } else {
            setVisibleCount((prev) => prev + certificatesPerClick);
        }
    };

    return (
        <div>
            <section
                id="certificates"
                className="section certificate"
                aria-labelledby="certificates-title"
            >
                <div className="container">
                    <div className="section-head">
                        <div className="h-sub h-sub-color">
                            — Certificates —
                        </div>
                        <h2 id="certificates-title" className="h-title">
                            My Achievements
                        </h2>
                    </div>

                    <div className="certificates-grid">
                        {certificates.slice(0, visibleCount).map((cert) => (
                            <article className="certificate-item" key={cert.id}>
                                <div className="certificate-thumb-wrap">
                                    <img
                                        className="certificate-thumb"
                                        src={cert.img}
                                        alt={cert.title}
                                    />
                                    <a
                                        href={cert.link}
                                        className="certificate-link"
                                        target="__blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>↗</span>
                                    </a>
                                </div>
                                <div className="certificate-body">
                                    <h3>{cert.title}</h3>
                                    <p className="certificate-desc">
                                        {cert.desc}
                                    </p>
                                    <div className="certificate-tags">
                                        {cert.tags.map((tag, index) => (
                                            <span key={index}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {certificates.length > certificatesPerClick && (
                        <div className="certificate-actions">
                            <button
                                onClick={handleLoadMore}
                                className="btn-certificate-loadmore"
                            >
                                {visibleCount >= certificates.length
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

export default Certificate;
