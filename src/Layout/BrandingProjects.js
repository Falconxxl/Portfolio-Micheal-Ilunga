import './BrandingProjects.css';
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LucideBriefcaseBusiness, Video, Monitor } from "lucide-react";
import ProjectModal from "./ProjectModal";

import logo_nexteclat from "../Images/logo_nexteclat.png";
import logo_jupiter from "../Images/Logo_Jupiter.png";
import logo_huza from "../Images/logo_huza.png";
import logo_pasha_bouw from "../Images/logo_pasha_bouw.png";
import logo_cirus from "../Images/logo_cirus.png";
import logo_falconxxl from "../Images/logo_falconxxl.png";
import logo_falconBeat from "../Images/logo_falconBeat.png";
import logo_diamond from "../Images/logo_diamond_key.png";
import logo_fitness from "../Images/logo_fitnessfriend_black.png";
import logo_pixam from "../Images/logo_pixam.png";
import logo_ilunga_dream from "../Images/logo_ilunga_Dream.png";
import logo_ilunga_mas from "../Images/logo_ilunga_mass.png";

// Assets spécifiques à la modale "Ilunga - Dream Girl"
import logo_ilunga_dream_white from "../Images/logo_ilunga_Dream_white.png";
import ilunga_dream_video_desktop from "../Images/Dream Girl_ilunga12.mp4";
import ilunga_dream_video_mobile from "../Images/Dream_Girl_mobile.mp4";
import ilunga_dream_poster_desktop from "../Images/DISPONIBLE-CLIP11-ENGLISH5-desktop.png";
import ilunga_dream_poster_mobile from "../Images/DISPONIBLE-CLIP11-ENGLISH5.png";

function BrandingProjects() {
    const { t } = useTranslation();

    const projects = [
        {
            id: "pasha-bouw",
            type: "company",
            icon: LucideBriefcaseBusiness,
            title: "Pasha Bouw",
            subtitle: "Projet réalisé pour Pasha Bouw — Août 2026",
            description: "Site vitrine conçu pour une entreprise spécialisée dans la rénovation et les travaux sur mesure. J’ai développé une interface claire et responsive pour présenter ses services, ses réalisations et son savoir-faire.",
            button: "Découvrez le projet",
            image: logo_pasha_bouw,

            // ---- Données pour la modale ----
            logos: [
                { image: logo_pasha_bouw, background: "light", label: "Logo" },
            ],
            // websiteScreenshots: [{ image: ..., title: "Homepage" }], // TODO
            // colors: [{ name: "...", hex: "#..." }], // TODO
            // socialMedia: [{ image: ... }], // TODO
            // businessCards: [{ image: ..., background: "light" }], // TODO
            // stationery: [{ image: ..., name: "..." }], // TODO
            // clothing: [{ image: ..., name: "..." }], // TODO
        },
        {
            id: "pixam",
            type: "company",
            icon: LucideBriefcaseBusiness,
            title: "Pixam",
            subtitle: "Projet réalisé dans le cadre de ma formation Frontend Developer — Mai 2023",
            description: "Application web développée dans le cadre de ma formation Frontend Developer à la Novi Hogeschool. J’ai conçu une interface intuitive permettant aux utilisateurs de rechercher et télécharger facilement des illustrations Full HD gratuites.",
            button: "Découvrez le projet",
            image: logo_pixam,

            logos: [
                { image: logo_pixam, background: "light", label: "Logo" },
            ],
        },
        {
            id: "nexteclat",
            type: "company",
            icon: LucideBriefcaseBusiness,
            title: "NextEclat",
            subtitle: "Projet réalisé pour NextEclat — Mars 2026",
            description: "Site web conçu pour une agence digitale spécialisée dans le branding, le web design et la production audiovisuelle. J’ai développé une interface moderne en travaillant sur l’expérience utilisateur, l’identité visuelle et la structure du site.",
            button: "Découvrez le projet",
            image: logo_nexteclat,

            logos: [
                { image: logo_nexteclat, background: "light", label: "Logo" },
            ],
            // websiteScreenshots: [...], // TODO — visibles sur ta maquette (desktop/tablette/mobile)
            // colors: [...], // TODO — les 4 couleurs visibles sur ta maquette (#45c3fa, #000000, #785fd4, #918efb ?)
            // socialMedia: [...], // TODO
            // businessCards: [...], // TODO
            // clothing: [...], // TODO
        },
        {
            id: "jupiter-safe-consulting",
            type: "company",
            icon: LucideBriefcaseBusiness,
            title: "Jupiter Safe Consulting",
            subtitle: "Projet réalisé pour Jupiter Safe Consulting — Juillet 2026",
            description: "Site vitrine conçu pour une société spécialisée en QHSE. J’ai développé une interface claire et intuitive, mettant en valeur ses services, son expertise et son positionnement professionnel.",
            button: "Découvrez le projet",
            image: logo_jupiter,

            logos: [
                { image: logo_jupiter, background: "light", label: "Logo" },
            ],
        },
        {
            id: "cirus-fp",
            type: "company",
            icon: LucideBriefcaseBusiness,
            title: "Ciruss FP",
            subtitle: "Projet réalisé pour Cirus FP — Décembre 2024",
            description: "J’ai conçu le site web de Cyrus FP, une entreprise spécialisée dans le placement de drapeaux de différentes dimensions. Le site met en valeur leur expertise dans l’installation de drapeaux de grande taille et leurs solutions de communication visuelle.",
            button: "Découvrez le projet",
            image: logo_cirus,

            logos: [
                { image: logo_cirus, background: "light", label: "Logo" },
            ],
        },
        {
            id: "huza",
            type: "company",
            icon: Monitor,
            title: "Huza",
            subtitle: "Projet réalisé pour Huza — Septembre 2021",
            description: "Boutique en ligne dédiée à la vente de vêtements d’été inspirés de la mode africaine. J’ai conçu une interface moderne et responsive mettant en valeur les collections, les produits et l’identité visuelle de la marque.",
            button: "Découvrez le projet",
            image: logo_huza,

            logos: [
                { image: logo_huza, background: "light", label: "Logo" },
            ],
        },
        {
            id: "falconxxl",
            type: "company",
            icon: Monitor,
            title: "FalconXXL",
            subtitle: "Projet réalisé pour FalconXXL — Août 2026",
            description: "Site web conçu pour Falcon XXL, une agence spécialisée dans le digital, l’audiovisuel, le web design et le branding. J’ai développé une identité et une interface modernes pour renforcer sa visibilité et son impact.",
            button: "Découvrez le projet",
            image: logo_falconxxl,

            logos: [
                { image: logo_falconxxl, background: "light", label: "Logo" },
            ],
        },
        {
            id: "fitnessfriend",
            type: "company",
            icon: Monitor,
            title: "FitnessFriend",
            subtitle: "Projet réalisé dans le cadre de ma formation Communication Multimedia & Design — Février 2016",
            description: "Application mobile conçue pour permettre aux passionnés de fitness de trouver des partenaires d’entraînement et de participer à des séances de sport en groupe. Projet réalisé dans le cadre de ma formation Communication Multimédia & Design.",
            button: "Découvrez le projet",
            image: logo_fitness,

            logos: [
                { image: logo_fitness, background: "light", label: "Logo" },
            ],
        },
        {
            id: "falconbeat",
            type: "company",
            icon: Monitor,
            title: "FalconBeat",
            subtitle: "Projet réalisé pour FalconBeat — Avril 2025",
            description: "Plateforme musicale conçue pour permettre aux artistes et créateurs d’explorer, d’écouter et d’acheter des instrumentaux. J’ai développé une interface dynamique pour organiser et mettre en valeur un contenu musical riche. Projet réalisé pour Falcon Beats.",
            button: "Découvrez le projet",
            image: logo_falconBeat,

            logos: [
                { image: logo_falconBeat, background: "light", label: "Logo" },
            ],
        },
        {
            id: "diamond-key",
            type: "company",
            icon: LucideBriefcaseBusiness,
            title: "Diamond Key",
            subtitle: "Projet réalisé pour Diamond Key — Août 2010",
            description: "Logo conçu pour Diamond Key, une maison de production et label musical. J’ai créé une identité visuelle distinctive et élégante, reflétant l’univers et le positionnement du label.",
            button: "Découvrez le projet",
            image: logo_diamond,

            logos: [
                { image: logo_diamond, background: "light", label: "Logo" },
            ],
        },
        {
            id: "ilunga-dream-girl",
            type: "artist",
            icon: Video,
            name: "Ilunga",
            title: "Ilunga - Dream Girl",
            subtitle: "Projet réalisé pour l'artiste ILUNGA — Décembre 2015",
            description: "Identité visuelle créée pour le single « Dream Girl » de l’artiste Ilunga, destinée aux réseaux sociaux, au clip musical et à la pochette du single. Un univers graphique conçu pour renforcer l’identité artistique du projet.",
            button: "Découvrez le projet",
            image: logo_ilunga_dream,

            // ---- Données pour la modale ----
            video: {
                desktopSrc: ilunga_dream_video_desktop,
                mobileSrc: ilunga_dream_video_mobile,
                posterDesktop: ilunga_dream_poster_desktop,
                posterMobile: ilunga_dream_poster_mobile,
            },
            clipsButtonLabel: "Découvrez mes clips",
            clipsButtonUrl: "https://www.youtube.com/", // TODO: remplace par le vrai lien YouTube du clip
            // clipInfo: "...", // TODO: courte info descriptive à côté du logo/bouton, si tu en veux une
            artistLogo: { src: logo_ilunga_dream_white, alt: "Logo Ilunga - Dream Girl" },
            logos: [
                { image: logo_ilunga_dream_white, background: "light", label: "Logo" },
                // { image: ..., background: "dark", label: "Alternative Logo" }, // TODO
            ],
            // covers: [{ image: ..., title: "Cover du single" }], // TODO
            // socialMedia: [{ image: ... }, { image: ... }], // TODO — les bannières/posters visibles sur ta maquette
            // clothing: [{ image: ..., name: "T-Shirt" }, { image: ..., name: "Sweater" }], // TODO
            // colors: [{ name: "Rose", hex: "#..." }], // TODO
        },
        {
            id: "ilunga-my-african-sound",
            type: "artist",
            icon: Video,
            name: "Ilunga",
            title: "Ilunga - My African Sound",
            subtitle: "Projet réalisé pour l'artiste ILUNGA — Juin 2010",
            description: "Identité visuelle créée pour le single « My African Sound » de l’artiste Ilunga, destinée aux réseaux sociaux, au clip musical et à la pochette du single. Un univers graphique conçu pour renforcer l’identité artistique du projet.",
            button: "Découvrez le projet",
            image: logo_ilunga_mas,

            logos: [
                { image: logo_ilunga_mas, background: "light", label: "Logo" },
            ],
            // video: { desktopSrc: ..., mobileSrc: ..., posterDesktop: ..., posterMobile: ... }, // TODO
            // clipsButtonLabel: "Découvrez mes clips", // TODO
            // clipsButtonUrl: "...", // TODO
            // artistLogo: { src: ..., alt: "..." }, // TODO
            // covers: [...], // TODO
            // socialMedia: [...], // TODO
            // clothing: [...], // TODO
            // colors: [...], // TODO
        },
    ];

    const [activeProject, setActiveProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const closeTimeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    const handleOpenProject = (project) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setActiveProject(project);
        requestAnimationFrame(() => setModalOpen(true));
    };

    const handleCloseProject = () => {
        setModalOpen(false);
        closeTimeoutRef.current = setTimeout(() => {
            setActiveProject(null);
        }, 300);
    };

    return (
        <section className="service-home" id="Container-ServiceHome">
            <div className="service-home__header">
                <h1 className="service-home__title">
                    {t("ServiceHomeExplore.BigTitleLine1")}
                    <br />
                    {t("ServiceHomeExplore.BigTitleLine2")}
                </h1>
            </div>

            <div className="service-home__grid">
                {projects.map((project) => {
                    const Icon = project.icon;
                    return (
                        <div className="service-card" key={project.id}>
                            <div className="service-card__media">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="service-card__image"
                                />
                            </div>

                            <div className="service-card__content">
                                <div className="service-card__icon">
                                    <Icon size={36} strokeWidth={1.8} />
                                </div>

                                <h3 className="service-card__title">
                                    {project.title}
                                </h3>

                                <h4 className="service-card__subtitle">
                                    {project.subtitle}
                                </h4>

                                <p className="service-card__description">
                                    {project.description}
                                </p>

                                <button
                                    type="button"
                                    className="service-card__button"
                                    onClick={() => handleOpenProject(project)}
                                >
                                    {project.button}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {activeProject && (
                <ProjectModal
                    project={activeProject}
                    isOpen={modalOpen}
                    onClose={handleCloseProject}
                />
            )}
        </section>
    );
}

export default BrandingProjects;