import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./CarrouselFitness.css";

// ------------------------------------------------------------------
// IMPORTS DES 28 CAPTURES D'ÉCRAN FITNESS FRIENDS
// Chemin réel confirmé : src/Images/
// Si ce fichier ne se trouve pas dans src/components/, ajuste le
// préfixe "../Images/" pour qu'il pointe correctement vers src/Images/
// depuis l'emplacement réel de CarrouselFitness.js.
// ------------------------------------------------------------------

import page1 from "../Images/page1_fitnessfriend.jpg";
import page2 from "../Images/page2_fitnessfriend.jpg";
import page3 from "../Images/page3_fitnessfriend.jpg";
import page4 from "../Images/page4_fitnessfriend.jpg";
import page5 from "../Images/page5_fitnessfriend.jpg";
import page6 from "../Images/page6_fitnessfriend.jpg";
import page7 from "../Images/page7_fitnessfriend.jpg";
import page8 from "../Images/page8_fitnessfriend.jpg";
import page9 from "../Images/page9_fitnessfriend.jpg";
import page10 from "../Images/page10_fitnessfriend.jpg";
import page11 from "../Images/page11_fitnessfriend.jpg";
import page12 from "../Images/page12_fitnessfriend.jpg";
import page13 from "../Images/page13_fitnessfriend.jpg";
import page14 from "../Images/page14_fitnessfriend.jpg";
import page15 from "../Images/page15_fitnessfriend.jpg";
import page16 from "../Images/page16_fitnessfriend.jpg";
import page17 from "../Images/page17_fitnessfriend.jpg";
import page18 from "../Images/page18_fitnessfriend.jpg";
import page19 from "../Images/page19_fitnessfriend.jpg";
import page20 from "../Images/page20_fitnessfriend.jpg";
import page21 from "../Images/page21_fitnessfriend.jpg";
import page22 from "../Images/page22_fitnessfriend.jpg";
import page23 from "../Images/page23_fitnessfriend.jpg";
import page24 from "../Images/page24_fitnessfriend.jpg";
import page25 from "../Images/page25_fitnessfriend.jpg";
import page26 from "../Images/page26_fitnessfriend.jpg";
import page27 from "../Images/page27_fitnessfriend.jpg";
import page28 from "../Images/page28_fitnessfriend.jpg";
import page29 from "../Images/page29_fitnessfriend.jpg";
import page30 from "../Images/page30_fitnessfriend.jpg";

// ------------------------------------------------------------------
// TABLEAU ORDONNÉ — l'ordre numérique (page1 → page30) est garanti
// puisqu'il est écrit explicitement ici, sans tri automatique.
// ------------------------------------------------------------------

const fitnessFriendPages = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16,
    page17,
    page18,
    page19,
    page20,
    page21,
    page22,
    page23,
    page24,
    page25,
    page26,
    page27,
    page28,
    page29,
    page30
];

function CarrouselFitness() {

    const { t } = useTranslation();

    const total = fitnessFriendPages.length;

    const [currentIndex, setCurrentIndex] = useState(0);

    const trackRef = useRef(null);
    const slideRefs = useRef([]);

    // Drag-to-scroll (souris / trackpad) — refs pour éviter les re-renders pendant le drag
    const isDraggingRef = useRef(false);
    const draggedRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);

    // --------------------------------------------------------------
    // SYNCHRONISATION DU SLIDE ACTIF (IntersectionObserver)
    // Fonctionne pour le swipe tactile, le trackpad et le drag souris,
    // puisqu'ils passent tous par le scroll natif du track (scroll-snap).
    // --------------------------------------------------------------

    useEffect(() => {

        const track = trackRef.current;

        if (!track) return;

        const observer = new IntersectionObserver(
            (entries) => {

                let bestEntry = null;

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        (!bestEntry ||
                            entry.intersectionRatio >
                            bestEntry.intersectionRatio)
                    ) {
                        bestEntry = entry;
                    }

                });

                if (bestEntry) {

                    const index = Number(
                        bestEntry.target.dataset.index
                    );

                    setCurrentIndex(index);
                }
            },
            {
                root: track,
                threshold: [
                    0.5,
                    0.6,
                    0.7,
                    0.8,
                    0.9,
                    1
                ]
            }
        );

        slideRefs.current.forEach((slide) => {

            if (slide) {
                observer.observe(slide);
            }

        });

        return () => observer.disconnect();

    }, []);

    // --------------------------------------------------------------
    // NAVIGATION BACKWARD / FORWARD
    // --------------------------------------------------------------

    const scrollToIndex = useCallback(
        (index) => {

            const clampedIndex = Math.max(
                0,
                Math.min(index, total - 1)
            );

            const target =
                slideRefs.current[clampedIndex];

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                    block: "nearest"
                });

            }

        },
        [total]
    );

    const goPrev = () =>
        scrollToIndex(currentIndex - 1);

    const goNext = () =>
        scrollToIndex(currentIndex + 1);

    const isFirstSlide =
        currentIndex === 0;

    const isLastSlide =
        currentIndex === total - 1;

    // --------------------------------------------------------------
    // DRAG À LA SOURIS (desktop)
    // Le swipe tactile et le scroll trackpad sont gérés nativement
    // par l'overflow-x du track, aucun JS n'est nécessaire pour ceux-ci.
    // --------------------------------------------------------------

    const handlePointerDown = (event) => {

        // Seulement pour la souris — le tactile utilise le scroll natif
        if (event.pointerType === "touch") return;

        const track = trackRef.current;

        if (!track) return;

        isDraggingRef.current = true;

        draggedRef.current = false;

        startXRef.current =
            event.clientX;

        startScrollLeftRef.current =
            track.scrollLeft;

        track.classList.add("is-dragging");
    };

    const handlePointerMove = (event) => {

        if (!isDraggingRef.current) return;

        const track = trackRef.current;

        if (!track) return;

        const delta =
            event.clientX -
            startXRef.current;

        if (Math.abs(delta) > 5) {

            draggedRef.current = true;

        }

        track.scrollLeft =
            startScrollLeftRef.current -
            delta;
    };

    const endDrag = () => {

        const track = trackRef.current;

        if (track) {

            track.classList.remove(
                "is-dragging"
            );

        }

        isDraggingRef.current = false;
    };

    return (

        <section
            className="CarrouselFitness"
            aria-label="FitnessFriend - Results"
        >

            <div className="CarrouselFitness-inner">

                <div className="CarrouselFitness-header">

                    <h2 className="CarrouselFitness-eyebrow">
                        {t("PageFitnessFriend.Result.Title")}
                    </h2>

                    <p className="CarrouselFitness-description">
                        {t("PageFitnessFriend.Result.Content")}
                    </p>

                </div>

                <div className="CarrouselFitness-carousel">

                    <div
                        className="CarrouselFitness-track"
                        ref={trackRef}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={endDrag}
                        onPointerLeave={endDrag}
                        onPointerCancel={endDrag}
                        style={{
                            touchAction: "pan-x pan-y"
                        }}
                        role="region"
                        aria-label="Carrousel des pages de l'application FitnessFriend"
                        tabIndex={0}
                    >

                        {fitnessFriendPages.map(
                            (image, index) => (

                                <div
                                    className="CarrouselFitness-slide"
                                    key={image}
                                    data-index={index}
                                    ref={(el) =>
                                        (slideRefs.current[index] = el)
                                    }
                                >

                                    <div className="CarrouselFitness-card">

                                        <div className="CarrouselFitness-imageWrapper">

                                            <img
                                                src={image}
                                                alt={`FitnessFriend — page ${index + 1}`}
                                                loading="lazy"
                                                draggable="false"
                                            />

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>

                <div className="CarrouselFitness-navigation">

                    <div
                        className="CarrouselFitness-counter"
                        aria-live="polite"
                    >
                        {currentIndex + 1} / {total}
                    </div>

                    <div className="CarrouselFitness-navButtons">

                        <button
                            type="button"
                            className="CarrouselFitness-navButton CarrouselFitness-navButton--prev"
                            onClick={goPrev}
                            disabled={isFirstSlide}
                            aria-label={t(
                                "PageFitnessFriend.Result.Previous"
                            )}
                        >

                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                aria-hidden="true"
                            >

                                <path
                                    d="M15.5 3.5 7 12l8.5 8.5 1.4-1.4L9.8 12l7.1-7.1z"
                                    fill="currentColor"
                                />

                            </svg>

                        </button>

                        <button
                            type="button"
                            className="CarrouselFitness-navButton CarrouselFitness-navButton--next"
                            onClick={goNext}
                            disabled={isLastSlide}
                            aria-label={t(
                                "PageFitnessFriend.Result.Next"
                            )}
                        >

                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                aria-hidden="true"
                            >

                                <path
                                    d="M8.5 3.5 17 12l-8.5 8.5-1.4-1.4L14.2 12 7.1 4.9z"
                                    fill="currentColor"
                                />

                            </svg>

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default CarrouselFitness;