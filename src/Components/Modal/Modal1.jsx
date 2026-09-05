import React, { useRef, useState, useEffect } from 'react';
import './Modal.css';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// 🎬 Import des deux vidéos
import videoSrcDesktop from "../../MyVideos/z_banner41a.mp4";
import videoSrcMobile from "../../MyVideos/z_banner41e.mp4";

const Modal1 = ({ open, onClose }) => {
    const videoRef = useRef(null);

    const CheckIcon = () => (
        <span className="icon-stack">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-check"></i>
        </span>
    );

    const [isPlaying, setIsPlaying] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(videoSrcDesktop);

    const { t } = useTranslation();

    // 🧠 Détecte la taille d'écran et change la source vidéo
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 748px)");

        const handleChange = (e) => {
            if (e.matches) {
                setCurrentSrc(videoSrcMobile);
            } else {
                setCurrentSrc(videoSrcDesktop);
            }
        };

        handleChange(mediaQuery);
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Recharger la vidéo à chaque changement de source
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.load();
            video.play().catch(() => setIsPlaying(false));
            setIsPlaying(true);
        }
    }, [currentSrc]);

    // 🔒 SCROLL LOCK + FIX MODAL SHIFT (IMPORTANT)
    useEffect(() => {
        if (open) {
            const scrollBarWidth =
                window.innerWidth - document.documentElement.clientWidth;

            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
        };
    }, [open]);

    if (!open) return null;

    const handlePlayPause = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <>
            <div className='overlay' onClick={onClose}>
                <div className='modalContainer' onClick={e => e.stopPropagation()}>

                    {/* Bouton fermer */}
                    <p className='closeBtn' onClick={onClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </p>

                    {/* Contenu principal */}
                    <div className="Container-Modal-Content">
                        <h1>{t("Modal1.Title")}</h1>

                        {/* === Zone Vidéo === */}
                        <div className="video-modal">
                            <div className="video-wrapper">

                                {!videoLoaded && (
                                    <div className="video-loading">
                                        <div className="spinner"></div>
                                    </div>
                                )}

                                <video
                                    ref={videoRef}
                                    loop
                                    autoPlay
                                    muted
                                    playsInline
                                    className="video-small-modal"
                                    onCanPlayThrough={() => setVideoLoaded(true)}
                                >
                                    <source src={currentSrc} type="video/mp4" />
                                    {t("Modal1.notification")}
                                </video>

                                <button className="playPauseBtn" onClick={handlePlayPause}>
                                    {isPlaying ? (
                                        <i className="fa-solid fa-circle-pause"></i>
                                    ) : (
                                        <i className="fa-solid fa-circle-play"></i>
                                    )}
                                </button>

                            </div>
                        </div>

                        {/* === Checklist === */}
                        <div className="checklist-section">
                            <ul className="checklist">
                                <li className="checklist-item">
                                    <CheckIcon />
                                    <span>{t("Modal1.ContentLine0")}</span>
                                </li>
                                <li className="checklist-item">
                                    <CheckIcon />
                                    <span>{t("Modal1.ContentLine1")}</span>
                                </li>
                                <li className="checklist-item">
                                    <CheckIcon />
                                    <span>{t("Modal1.ContentLine2")}</span>
                                </li>
                                <li className="checklist-item">
                                    <CheckIcon />
                                    <span>{t("Modal1.ContentLine3")}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* === Bouton d’action === */}
                    <div className="buttonWrapper">
                        <NavLink to="/AudioVisual" className="button-Modal-Content">
                            {t("Modal1.BtnLine")}
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Modal1;