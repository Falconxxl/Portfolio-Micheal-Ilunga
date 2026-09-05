import React, { useState, useEffect } from "react";
import "./PhotographyGallery.css";

import photography_nahile from "../../src/Images/photography_nahile1.jpg";
import photography_brenda1 from "../../src/Images/photography_brenda1a.jpg";
import photography_falconxxl_background from "../../src/Images/photography_falconxxl_background.png";
import mikeElenore2 from "../../src/Images/photography_mikeElenore3.jpg";

import photography_fashion1 from "../../src/Images/photography_fashion1b.jpg";
import photography_fashion2 from "../../src/Images/photography_fashion3a.jpg";
import photography_fashion3 from "../../src/Images/photography_fashion3";
import photography_fashion4 from "../../src/Images/photography_fashion5.jpg";

import photography_wedding1 from "../../src/Images/photography_wedding1a.jpg";
import photography_wedding2 from "../../src/Images/photography_wedding2a.jpg";
import photography_wedding3 from "../../src/Images/photography_wedding3a.jpg";
import photography_wedding4 from "../../src/Images/photography_wedding4a.jpg";

import senecaElenore from "../../src/Images/photography_seneca_elenore4.png";
import mikeElenore1 from "../../src/Images/photography_mike_elenore1a.jpg";
import mikeSergio from "../../src/Images/photography_mike_sergio";
import mikeSergio2 from "../../src/Images/photography_mike_sergio2";

import { useTranslation } from "react-i18next";

// ─────────────────────────────────────────────
// Hook : renvoie true si l'écran correspond à la query
// ─────────────────────────────────────────────
function useMediaQuery(query) {
    const [matches, setMatches] = useState(
        () => window.matchMedia(query).matches
    );

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handler = (event) => setMatches(event.matches);

        mediaQueryList.addEventListener("change", handler);
        return () => mediaQueryList.removeEventListener("change", handler);
    }, [query]);

    return matches;
}

// ─────────────────────────────────────────────
// Composant principal
// ─────────────────────────────────────────────
function PhotographyGallery() {

    const { t } = useTranslation();

    // true  → desktop (> 768px) → photos cliquables
    // false → mobile (≤ 768px) → photos non cliquables
    const isDesktop = useMediaQuery("(min-width: 769px)");

    const sections = [
        {
            id: "lifestyle",
            title: t("PhotographyGallery.Lifestyle.Title"),
            subtitle: t("PhotographyGallery.Lifestyle.Content"),
            images: [
                photography_nahile,
                photography_brenda1,
                photography_falconxxl_background,
                mikeElenore2,
            ],
        },
        {
            id: "fashion",
            title: t("PhotographyGallery.Fashion.Title"),
            subtitle: t("PhotographyGallery.Fashion.Content"),
            images: [
                photography_fashion1,
                photography_fashion2,
                photography_fashion3,
                photography_fashion4,
            ],
        },
        {
            id: "wedding",
            title: t("PhotographyGallery.Wedding.Title"),
            subtitle: t("PhotographyGallery.Wedding.Content"),
            images: [
                photography_wedding1,
                photography_wedding2,
                photography_wedding3,
                photography_wedding4,
            ],
        },
        {
            id: "music",
            title: t("PhotographyGallery.Music.Title"),
            subtitle: t("PhotographyGallery.Music.Content"),
            images: [
                senecaElenore,
                mikeSergio2,
                mikeSergio,
                mikeElenore1,
            ],
        },
        // {
        //     id: "emotivePortraits",
        //     title: t("PhotographyGallery.EmotivePortraits.Title"),
        //     subtitle: t("PhotographyGallery.EmotivePortraits.Content"),
        //     images: [
        //         photography_emotive1,
        //         photography_emotive5,
        //         photography_emotive2,
        //         photography_emotive3,
        //     ],
        // },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const openModal = (sectionIndex, imageIndex) => {
        // Sécurité supplémentaire : on ne fait rien si mobile
        if (!isDesktop) return;
        setActiveSectionIndex(sectionIndex);
        setActiveImageIndex(imageIndex);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    const showPrev = () => {
        const images = sections[activeSectionIndex].images;
        setActiveImageIndex((i) => (i - 1 + images.length) % images.length);
    };

    const showNext = () => {
        const images = sections[activeSectionIndex].images;
        setActiveImageIndex((i) => (i + 1) % images.length);
    };

    return (

        <>

          <div className="photography-container">
            <header className="photography-header">
                <h1>{t("PhotographyGallery.BigTitle")}</h1>
            </header>

            <main>
                {sections.map((section, sIdx) => (
                    <section key={section.id} className="photography-section">
                        <div className="section-header">
                            <div>
                                <h2>{section.title}</h2>
                                <p>{section.subtitle}</p>
                            </div>
                        </div>

                        <div className="gallery-grid">
                            {section.images.map((src, i) => (
                                <div
                                    key={src + i}
                                    className="gallery-item"
                                    // onClick uniquement sur desktop
                                    onClick={isDesktop ? () => openModal(sIdx, i) : undefined}
                                    // cursor géré via style inline selon device
                                    style={{ cursor: isDesktop ? "pointer" : "default" }}
                                >
                                    <img src={src} alt={`${section.title} ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {/* Modal uniquement disponible sur desktop */}
            {isDesktop && isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeModal}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                        <button className="nav-btn left" onClick={showPrev}>
                            <i className="fa-solid fa-circle-chevron-left"></i>
                        </button>
                        <img
                            src={sections[activeSectionIndex].images[activeImageIndex]}
                            alt="Expanded"
                        />
                        <button className="nav-btn right" onClick={showNext}>
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </button>

                        <div className="thumbnails">
                            {sections[activeSectionIndex].images.map((thumb, idx) => (
                                <img
                                    key={thumb + idx}
                                    src={thumb}
                                    alt={`Thumb ${idx + 1}`}
                                    className={idx === activeImageIndex ? "active" : ""}
                                    onClick={() => setActiveImageIndex(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>

        </>
    );
}

export default PhotographyGallery;