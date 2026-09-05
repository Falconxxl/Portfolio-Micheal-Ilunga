import './Phase.css';
import React from "react";
import { useTranslation } from "react-i18next";

/* ---------------------------------------------------------------------- */
/* Icons — small inline SVGs, no external icon library required            */
/* ---------------------------------------------------------------------- */

const IconSearch = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const IconClipboard = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="12" height="17" rx="2" />
        <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
);

const IconCompass = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polygon points="15 9 13.5 13.5 9 15 10.5 10.5 15 9" />
    </svg>
);

const IconTool = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 105 5l-3.1-3.1M9.3 17.7a4 4 0 01-5-5l3.1 3.1M6.5 6.5l4 4M13.5 13.5l4 4" />
    </svg>
);

const IconBuild = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l6-6M14.5 5.5a2.1 2.1 0 013 3L9 17l-4 1 1-4z" />
    </svg>
);

const IconRefresh = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-3-6.7" />
        <polyline points="21 3 21 9 15 9" />
    </svg>
);

const IconTarget = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
    </svg>
);

const IconLayers = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
        <polyline points="2 15.5 12 22 22 15.5" />
        <polyline points="2 12 12 18.5 22 12" />
    </svg>
);

const IconGrid = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
);

const IconWireframe = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="9" x2="8" y2="20" />
    </svg>
);

const IconPalette = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.3A4.2 4.2 0 0021 11c0-5-4.5-9-9-9z" />
        <circle cx="7.5" cy="10.5" r="1.2" />
        <circle cx="11.5" cy="7.5" r="1.2" />
        <circle cx="15.5" cy="10.5" r="1.2" />
    </svg>
);

const IconCheck = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

/* ---------------------------------------------------------------------- */
/* Structural data — icons, colours, list counts. Nothing here is text,   */
/* so nothing here needs translating: all copy comes from t() below.      */
/* ---------------------------------------------------------------------- */

const PHASES = [
    { key: 1, icon: IconSearch, listCount: 3 },
    { key: 2, icon: IconClipboard, listCount: 0 },
    { key: 3, icon: IconCompass, listCount: 0 },
    { key: 4, icon: IconTool, listCount: 0 },
    { key: 5, icon: IconBuild, listCount: 0 },
    { key: 6, icon: IconRefresh, listCount: 0 },
];

// nameEn is the universal Garrett term — it stays in English across every
// locale (the same way "MoSCoW" or "Desk Research" aren't translated either).
const PLANES = [
    { key: 1, icon: IconTarget, nameEn: "Strategy Plane" },
    { key: 2, icon: IconLayers, nameEn: "Scope Plane" },
    { key: 3, icon: IconGrid, nameEn: "Structure Plane" },
    { key: 4, icon: IconWireframe, nameEn: "Skeleton Plane" },
    { key: 5, icon: IconPalette, nameEn: "Surface Plane" },
];

const METHODS = [
    { key: 1, dot: "p6" },
    { key: 2, dot: "verhoeven" },
    { key: 3, dot: "garrett" },
];

const TECHNIQUES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PRINCIPLES = [1, 2, 3, 4];

/* ---------------------------------------------------------------------- */
/* Reusable sub-components                                                */
/* ---------------------------------------------------------------------- */

function PhaseCard({ index, phase, t }) {
    const base = `Phase.Phases.Phase${phase.key}`;
    return (
        <div className="phase-card">
            <span className="phase-card__index">{String(index + 1).padStart(2, "0")}</span>
            <div>
                <h3 className="phase-card__title">{t(`${base}.Title`)}</h3>
                <p className="phase-card__text">{t(`${base}.Text`)}</p>
                {phase.listCount > 0 && (
                    <ul className="phase-card__list">
                        {Array.from({ length: phase.listCount }, (_, n) => n + 1).map((n) => (
                            <li key={n}>{t(`${base}.List${n}`)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

function PlaneCard({ index, plane, t }) {
    const Icon = plane.icon;
    const base = `Phase.Planes.Plane${plane.key}`;
    return (
        <div className="plane-card">
            <div className="plane-card__step">{index + 1}</div>
            <div className="plane-card__icon">
                <Icon />
            </div>
            <p className="plane-card__name-fr">{t(`${base}.NameLocal`)}</p>
            <h3 className="plane-card__name-en">{plane.nameEn}</h3>
            <p className="plane-card__text">{t(`${base}.Text`)}</p>
        </div>
    );
}

function MethodCard({ method, t }) {
    const base = `Phase.Methods.Method${method.key}`;
    return (
        <div className="method-card">
            <div className="method-card__head">
                <span className={`method-card__dot method-card__dot--${method.dot}`} />
                <h3 className="method-card__title">{t(`${base}.Title`)}</h3>
            </div>
            <p className="method-card__text">{t(`${base}.Text`)}</p>
        </div>
    );
}

function TechniqueCard({ techniqueKey, t }) {
    const base = `Phase.Techniques.Technique${techniqueKey}`;
    return (
        <div className="technique-card">
            <div className="technique-card__head">
        <span className="technique-card__check">
          <IconCheck />
        </span>
                <h3 className="technique-card__title">{t(`${base}.Title`)}</h3>
            </div>
            <p className="technique-card__text">{t(`${base}.Text`)}</p>
        </div>
    );
}

/* ---------------------------------------------------------------------- */
/* Main component                                                         */
/* ---------------------------------------------------------------------- */

function Phase() {
    const { t } = useTranslation();

    return (
        <div className="phase-page">
            {/* Page intro */}
            <section className="phase-section phase-intro">
                <div className="phase-section__inner phase-header">
                    <span className="phase-eyebrow">{t("Phase.Intro.Eyebrow")}</span>
                    <h1 className="phase-title">{t("Phase.Intro.Title")}</h1>
                    <p className="phase-subtitle">{t("Phase.Intro.Subtitle")}</p>
                </div>
            </section>

            {/* SECTION 1 — Phases du projet */}
            <section className="phase-section phase-section--dark">
                <div className="phase-section__inner">
                    <div className="phase-header">
                        <span className="phase-eyebrow"
                              style={{color:"#5baefd"}}>{t("Phase.Section1.Eyebrow")}</span>
                        <h2 className="phase-title">{t("Phase.Section1.Title")}</h2>
                        <p className="phase-subtitle">{t("Phase.Section1.Intro1")}</p>
                        <p className="phase-subtitle">{t("Phase.Section1.Intro2")}</p>
                    </div>

                    <div className="phase-timeline">
                        {PHASES.map((phase, i) => {
                            const Icon = phase.icon;
                            return (
                                <div className="phase-timeline__item" key={phase.key}>
                                    <div className="phase-timeline__bubble">
                                        <span className="phase-timeline__number">{i + 1}</span>
                                        <Icon />
                                    </div>
                                    <span className="phase-timeline__label">
                    {t(`Phase.Phases.Phase${phase.key}.Title`)}
                  </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="phase-grid">
                        {PHASES.map((phase, i) => (
                            <PhaseCard key={phase.key} index={i} phase={phase} t={t} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Phase de conception (Garrett) */}
            <section className="phase-section phase-planes">
                <div className="phase-section__inner">
                    <div className="phase-header">
                        <span className="phase-eyebrow">{t("Phase.Section2.Eyebrow")}</span>
                        <h2 className="phase-title">{t("Phase.Section2.Title")}</h2>
                        <p className="phase-subtitle">{t("Phase.Section2.Intro1")}</p>
                        <p className="phase-subtitle">{t("Phase.Section2.Intro2")}</p>
                    </div>

                    <div className="phase-planes__flow">
                        {PLANES.map((plane, i) => (
                            <PlaneCard key={plane.key} index={i} plane={plane} t={t} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3 — Méthodes utilisées */}
            <section className="phase-section phase-methods"
                     style={{backgroundColor:"black"}}>
                <div className="phase-section__inner">
                    <div className="phase-header">
                        <span className="phase-eyebrow">{t("Phase.Section3.Eyebrow")}</span>
                        <h2 className="phase-title"
                            style={{color:"white"}}>{t("Phase.Section3.Title")}</h2>
                        <p className="phase-subtitle"
                           style={{color:"white"}}>{t("Phase.Section3.Intro")}</p>
                    </div>

                    <div className="method-grid"
                         style={{color:"white"}}>
                        {METHODS.map((method) => (
                            <MethodCard key={method.key} method={method} t={t} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 — Techniques utilisées */}
            <section className="phase-section phase-techniques">
                <div className="phase-section__inner">
                    <div className="phase-header">
                        <span className="phase-eyebrow">{t("Phase.Section4.Eyebrow")}</span>
                        <h2 className="phase-title">{t("Phase.Section4.Title")}</h2>
                        <p className="phase-subtitle">{t("Phase.Section4.Intro")}</p>
                    </div>

                    <div className="technique-grid">
                        {TECHNIQUES.map((n) => (
                            <TechniqueCard key={n} techniqueKey={n} t={t} />
                        ))}
                    </div>

                    <div className="phase-principles">
                        <h3 className="phase-principles__title">{t("Phase.Principles.Title")}</h3>
                        <p className="phase-principles__subtitle">{t("Phase.Principles.Subtitle")}</p>
                        <div className="principle-grid">
                            {PRINCIPLES.map((n) => (
                                <div className="principle-card" key={n}>
                                    <h4 className="principle-card__title">
                                        {t(`Phase.Principles.Principle${n}.Title`)}
                                    </h4>
                                    <p className="principle-card__text">
                                        {t(`Phase.Principles.Principle${n}.Text`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Phase;