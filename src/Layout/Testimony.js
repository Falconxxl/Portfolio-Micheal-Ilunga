import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import './Testimony.css';

// ─── Data ─────────────────────────────────────────────────────────────
// Seul `name` reste statique (identique dans toutes les langues).
// city, project, review sont récupérés via i18next dans le composant.

const testimonials = [
    { id: 1, name: 'Pasha Bouw' },
    { id: 2, name: 'Falcon Beats' },
    { id: 3, name: 'Jupiter Safe Consulting' },
    { id: 4, name: 'Sergio Lopez' },
    { id: 5, name: 'Bouchard' },
    { id: 6, name: 'Kimbo' },
    { id: 7, name: 'K.Gabriel' },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(testimonials.length / CARDS_PER_PAGE);

// ─── Stars ────────────────────────────────────────────────────────────
function Stars() {
    return (
        <div className="ts-stars">
            {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="ts-star">★</span>
            ))}
        </div>
    );
}

// ─── Single card ──────────────────────────────────────────────────────
function TestimonyCard({ testimonial, t }) {
    return (
        <div className="ts-card">
            <div className="ts-quote" aria-hidden="true">"</div>
            <p className="ts-review">
                {t(`Testimony.items.id${testimonial.id}.review`)}
            </p>
            <Stars />
            <div className="ts-divider" />
            <div className="ts-author-block">
                <div className="ts-avatar">{testimonial.name.charAt(0)}</div>
                <div>
                    <p className="ts-author">{testimonial.name}</p>
                    <p className="ts-meta">
                        <span className="ts-city">
                            {t(`Testimony.items.id${testimonial.id}.city`)}
                        </span>
                        <span className="ts-sep">·</span>
                        <span className="ts-project">
                            {t(`Testimony.items.id${testimonial.id}.project`)}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────
function Testimony() {
    const { t } = useTranslation();
    const [page, setPage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState('next');

    // Touch swipe (mobile)
    const touchStartX = useRef(null);
    const SWIPE_THRESHOLD = 50;

    const changePage = (newPage, dir) => {
        if (animating || newPage === page) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setPage(newPage);
            setAnimating(false);
        }, 380);
    };

    const goNext = () => {
        if (page < TOTAL_PAGES - 1) changePage(page + 1, 'next');
    };

    const goPrev = () => {
        if (page > 0) changePage(page - 1, 'prev');
    };

    // Mobile swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            diff > 0 ? goNext() : goPrev();
        }
    };

    // Visible cards for current page
    const start = page * CARDS_PER_PAGE;
    const visibleCards = testimonials.slice(start, start + CARDS_PER_PAGE);

    const trackClass = [
        'ts-track',
        animating ? `ts-track--exit-${direction}` : 'ts-track--enter',
    ].join(' ');

    return (
        <section className="ts-section">

            {/* ── Header ── */}
            <div className="ts-header">
                <span className="ts-eyebrow">
                    {t("Testimony.eyebrow")}
                </span>

                <p className="ts-subtitle">
                    {t("Testimony.subtitle")}
                </p>
            </div>

            {/* ── Cards grid ── */}
            <div
                className="ts-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className={trackClass} key={page}>
                    {visibleCards.map((testimonial) => (
                        <TestimonyCard key={testimonial.id} testimonial={testimonial} t={t} />
                    ))}
                </div>
            </div>

            {/* ── Bottom bar: timeline + buttons ── */}
            <div className="ts-bottom">

                {/* Timeline progress */}
                <div className="ts-timeline">
                    <div
                        className="ts-timeline-fill"
                        style={{ width: `${((page + 1) / TOTAL_PAGES) * 100}%` }}
                    />
                </div>

                {/* Nav buttons — desktop only */}
                <div className="ts-nav-buttons">
                    <button
                        className={`ts-btn ${page === 0 ? 'ts-btn--disabled' : ''}`}
                        onClick={goPrev}
                        disabled={page === 0}
                        aria-label="Précédent"
                    >
                        ←
                    </button>
                    <button
                        className={`ts-btn ts-btn--primary ${page === TOTAL_PAGES - 1 ? 'ts-btn--disabled' : ''}`}
                        onClick={goNext}
                        disabled={page === TOTAL_PAGES - 1}
                        aria-label="Suivant"
                    >
                        →
                    </button>
                </div>

            </div>

        </section>
    );
}

export default Testimony;