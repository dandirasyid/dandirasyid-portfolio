import "./Certificate.css";
import certificates from "../utils/constants/certificate";
import { useState } from "react";

function Certificate() {
    const [visibleCount, setVisibleCount] = useState(3);

    return (
        <section id="certificates" className="section certificates">
            <div className="container">
                <div className="cert-header-premium">
                    <span className="section-label">Validation</span>
                    <h2 className="section-title-premium">Verified Skills</h2>
                </div>

                <div className="cert-list-premium">
                    {certificates.slice(0, visibleCount).map((cert) => (
                        <article className="cert-row-premium" key={cert.id}>
                            <div className="cert-info-main">
                                <h3 className="cert-title-premium">{cert.title}</h3>
                                <p className="cert-org-premium">{cert.desc.split(' from ')[1] || 'Accredited Institution'}</p>
                            </div>
                            <div className="cert-actions-premium">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-cert-view">
                                    Verify Receipt ↗
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="cert-footer-premium">
                    <button onClick={() => setVisibleCount(visibleCount === 3 ? certificates.length : 3)} className="btn-toggle-certs">
                        {visibleCount === 3 ? 'View all documents' : 'Show fewer'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Certificate;
