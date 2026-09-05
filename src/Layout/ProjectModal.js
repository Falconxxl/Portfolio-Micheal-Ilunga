import "./ProjectModal.css";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

function useIsMobileViewport(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
}

function hasItems(list) {
    return Array.isArray(list) && list.length > 0;
}

/* ---- Wrapper de section générique (carte bleu ciel + titre) ---- */

function ModalSection({ title, subtitle, className = "", children }) {
    return (
        <div className={`project-modal__section ${className}`.trim()}>
            <h3 className="project-modal__section-title">{title}</h3>
            {subtitle && (
                <p className="project-modal__section-subtitle">{subtitle}</p>
            )}
            {children}
        </div>
    );
}

/* ---- Grille média générique : bannières, covers, captures, vêtements ---- */

function MediaGrid({ items, showCaption = false, itemClassName = "" }) {
    if (!hasItems(items)) return null;

    return (
        <div className="project-modal__grid">
            {items.map((item, index) => (
                <div
                    className={`project-modal__grid-item ${itemClassName}`.trim()}
                    key={index}
                >
                    <img
                        src={item.image}
                        alt={item.alt || item.title || item.name || `visuel ${index + 1}`}
                    />
                    {showCaption && (item.title || item.name) && (
                        <span className="project-modal__grid-caption">
                            {item.title || item.name}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ---- Logos : chaque item affiché sur le fond clair/sombre déclaré ---- */

function LogoShowcase({ items }) {
    if (!hasItems(items)) return null;

    return (
        <div className="project-modal__logo-showcase">
            {items.map((logo, index) => (
                <div
                    className={`project-modal__logo-box project-modal__logo-box--${
                        logo.background === "dark" ? "dark" : "light"
                    }`}
                    key={index}
                >
                    <img src={logo.image} alt={logo.label || "Logo"} />
                    {logo.label && (
                        <span className="project-modal__logo-label">
                            {logo.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ---- Cartes de visite : fond auto-contrasté selon la couleur de la carte ---- */

function BusinessCardShowcase({ items }) {
    if (!hasItems(items)) return null;

    return (
        <div className="project-modal__logo-showcase">
            {items.map((card, index) => (
                <div
                    className={`project-modal__logo-box project-modal__logo-box--${
                        card.background === "dark" ? "light" : "dark"
                    }`}
                    key={index}
                >
                    <img src={card.image} alt={card.label || "Carte de visite"} />
                    {card.label && (
                        <span className="project-modal__logo-label">
                            {card.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ---- Palette de couleurs ---- */

function ColorPalette({ items }) {
    if (!hasItems(items)) return null;

    return (
        <div className="project-modal__palette">
            {items.map((color, index) => (
                <div className="project-modal__color-card" key={index}>
                    <div
                        className="project-modal__color-swatch"
                        style={{ backgroundColor: color.hex }}
                    />
                    <div className="project-modal__color-meta">
                        <span className="project-modal__color-name">
                            {color.name}
                        </span>
                        <span className="project-modal__color-hex">
                            {color.hex}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ---- Hero artiste : extrait du clip + logo/bouton optionnels ---- */

function ClipHero({ video, artistLogo, buttonLabel, buttonUrl, info, isMobile }) {
    if (!video) return null;

    const src = isMobile ? video.mobileSrc || video.desktopSrc : video.desktopSrc;
    const poster = isMobile
        ? video.posterMobile || video.posterDesktop
        : video.posterDesktop;

    return (
        <ModalSection title="Extrait du clip">
            <div className="project-modal__hero-video-frame">
                <video
                    className="project-modal__hero-video"
                    src={src}
                    poster={poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                />
            </div>

            {(info || artistLogo || (buttonLabel && buttonUrl)) && (
                <div className="project-modal__hero-footer">
                    {artistLogo && (
                        <img
                            className="project-modal__hero-logo"
                            src={artistLogo.src}
                            alt={artistLogo.alt || "Logo artiste"}
                        />
                    )}

                    {info && (
                        <p className="project-modal__hero-info">{info}</p>
                    )}

                    {buttonLabel && buttonUrl && (

                        <a

                        href={buttonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal__hero-button"
                        >
                    {buttonLabel}
                        </a>
                        )}
                </div>
            )}
</ModalSection>
);
}

/* ---- Corps du modal : artiste ---- */

function ArtistModalBody({ project, isMobile }) {
    const showDuo = hasItems(project.logos) || hasItems(project.covers);

    return (
        <>
            <ClipHero
                video={project.video}
                artistLogo={project.artistLogo}
                buttonLabel={project.clipsButtonLabel}
                buttonUrl={project.clipsButtonUrl}
                info={project.clipInfo}
                isMobile={isMobile}
            />

            {showDuo && (
                <div className="project-modal__section project-modal__duo">
                    {hasItems(project.logos) && (
                        <div className="project-modal__duo-column">
                            <h3 className="project-modal__section-title">
                                Logo & Typographies
                            </h3>
                            <LogoShowcase items={project.logos} />
                        </div>
                    )}

                    {hasItems(project.covers) && (
                        <div className="project-modal__duo-column">
                            <h3 className="project-modal__section-title">
                                Cover Design & Artwork
                            </h3>
                            <MediaGrid
                                items={project.covers}
                                showCaption
                                itemClassName="project-modal__grid-item--framed"
                            />
                        </div>
                    )}
                </div>
            )}

            {hasItems(project.socialMedia) && (
                <ModalSection title="Réseaux sociaux (Banner, posters & flyers)">
                    <MediaGrid items={project.socialMedia} />
                </ModalSection>
            )}

            {hasItems(project.clothing) && (
                <ModalSection title="Ligne de vêtements">
                    <MediaGrid items={project.clothing} showCaption />
                </ModalSection>
            )}

            {hasItems(project.colors) && (
                <ModalSection title="Charte graphique & palette de couleurs">
                    <ColorPalette items={project.colors} />
                </ModalSection>
            )}
        </>
    );
}

/* ---- Corps du modal : entreprise ---- */

function CompanyModalBody({ project }) {
    return (
        <>
            {hasItems(project.websiteScreenshots) && (
                <ModalSection title="Site web">
                    <MediaGrid
                        items={project.websiteScreenshots}
                        showCaption
                        itemClassName="project-modal__grid-item--device"
                    />
                </ModalSection>
            )}

            {hasItems(project.logos) && (
                <ModalSection title="Logo">
                    <LogoShowcase items={project.logos} />
                </ModalSection>
            )}

            {hasItems(project.socialMedia) && (
                <ModalSection title="Réseaux sociaux (Banner, posters & flyers)">
                    <MediaGrid items={project.socialMedia} />
                </ModalSection>
            )}

            {hasItems(project.clothing) && (
                <ModalSection title="Ligne de vêtements">
                    <MediaGrid items={project.clothing} showCaption />
                </ModalSection>
            )}

            {hasItems(project.businessCards) && (
                <ModalSection title="Business Card">
                    <BusinessCardShowcase items={project.businessCards} />
                </ModalSection>
            )}

            {hasItems(project.colors) && (
                <ModalSection title="Charte graphique & palette de couleurs">
                    <ColorPalette items={project.colors} />
                </ModalSection>
            )}

            {hasItems(project.stationery) && (
                <ModalSection title="Papeteries">
                    <MediaGrid items={project.stationery} showCaption />
                </ModalSection>
            )}
        </>
    );
}

function ProjectModal({ project, isOpen, onClose }) {
    const closeButtonRef = useRef(null);
    const isMobile = useIsMobileViewport(768);

    // Bloque le scroll de la page lorsque le modal est ouvert
    useEffect(() => {
        if (!isOpen) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    // Fermeture avec la touche Escape
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Focus sur le bouton de fermeture à l'ouverture
    useEffect(() => {
        if (isOpen && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [isOpen]);

    // Important : on ne coupe le rendu que si le projet est absent,
    // pas si isOpen === false, afin que la transition de fermeture
    // (gérée par BrandingProjects.js avec un léger délai) puisse jouer.
    if (!project) return null;

    const handleOverlayMouseDown = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    return createPortal(
        <div
            className={`project-modal-overlay${isOpen ? " project-modal-overlay--open" : ""}`}
            onMouseDown={handleOverlayMouseDown}
        >
            <div
                className={`project-modal${isOpen ? " project-modal--open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
            >
                <button
                    type="button"
                    className="project-modal__close"
                    aria-label="Fermer la fenêtre du projet"
                    onClick={onClose}
                    ref={closeButtonRef}
                >
                    <X size={26} strokeWidth={2} />
                </button>

                <div className="project-modal__scroll">
                    <div className="project-modal__header">
                        {project.name && (
                            <span className="project-modal__eyebrow">
                                {project.name}
                            </span>
                        )}
                        <h2 id="project-modal-title" className="project-modal__title">
                            {project.title || project.name}
                        </h2>
                        {project.description && (
                            <p className="project-modal__description">
                                {project.description}
                            </p>
                        )}
                        {project.descriptionExtra && (
                            <p className="project-modal__description">
                                {project.descriptionExtra}
                            </p>
                        )}
                    </div>

                    <div className="project-modal__body">
                        {project.type === "artist" ? (
                            <ArtistModalBody project={project} isMobile={isMobile} />
                        ) : (
                            <CompanyModalBody project={project} />
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ProjectModal;