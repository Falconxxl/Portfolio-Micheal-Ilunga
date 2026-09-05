import React, { useState, useEffect } from "react";
import "./Videoclips.css";
import { useTranslation } from "react-i18next";

// ------------------------------------------------------------------
// 1. DONNÉES DES VIDEOCLIPS
// Ajoute simplement un nouvel objet ici pour ajouter un clip.
// Format d'URL accepté :
//   https://www.youtube.com/watch?v=XXXXXXXX
//   https://youtu.be/XXXXXXXX
// La miniature est générée automatiquement depuis l'ID YouTube.
// ------------------------------------------------------------------
const videoClips = [
    {
        id: 1,
        title: "WOMANIZA - You Pop Da Booty Fasta",
        youtubeUrl:
            "https://www.youtube.com/watch?v=aHRkqZlyabk&list=RDaHRkqZlyabk&start_radio=1"
    },
    {
        id: 2,
        title: "ILUNGA - Dream Girl",
        youtubeUrl:
            "https://www.youtube.com/watch?v=ri8RdSNmzVM&list=RDri8RdSNmzVM&start_radio=1"
    },
    {
        id: 3,
        title: "K. Gabriel - Reason To Be",
        youtubeUrl:
            "https://www.youtube.com/watch?v=8QdDTlY7WCM&list=RD8QdDTlY7WCM&start_radio=1"
    },
    {
        id: 4,
        title: "Seneca De Don - Caught Up Feat. Ilunga",
        youtubeUrl:
            "https://www.youtube.com/watch?v=HXJbwslsuNo&list=RDHXJbwslsuNo&start_radio=1"
    },
    {
        id: 5,
        title: "ILUNGA - My African Sounds",
        youtubeUrl:
            "https://www.youtube.com/watch?v=ESJlcZWTtHA&list=RDESJlcZWTtHA&start_radio=1"
    },
    {
        id: 6,
        title: "Maskara Negra (O Bandoleiro) - Gato Preto",
        youtubeUrl:
            "https://www.youtube.com/watch?v=h4jVCEAl1_8&list=RDh4jVCEAl1_8&start_radio=1"
    },
    {
        id: 7,
        title: "Street-Sounds - Liboma",
        youtubeUrl:
            "https://www.youtube.com/watch?v=KQ7XOU8SNXc&list=RDKQ7XOU8SNXc&start_radio=1"
    }
];

// ------------------------------------------------------------------
// Extrait l'ID YouTube depuis une URL classique ou une URL courte
// youtu.be
// ------------------------------------------------------------------
function getYouTubeId(url) {
    if (!url) return null;

    const patterns = [
        /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
        /(?:youtu\.be\/)([^?\s]+)/,
        /(?:youtube\.com\/embed\/)([^?\s]+)/
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);

        if (match && match[1]) {
            return match[1];
        }
    }

    return null;
}

// ------------------------------------------------------------------
// Génère automatiquement l'URL de la miniature YouTube
// ------------------------------------------------------------------
function getThumbnailUrl(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function Videoclips() {

    // ------------------------------------------------------------------
    // TRADUCTION
    // ------------------------------------------------------------------
    const { t } = useTranslation();

    const [selectedVideo, setSelectedVideo] = useState(null);

    // ------------------------------------------------------------------
    // Empêche le scroll de la page pendant que le modal est ouvert
    // ------------------------------------------------------------------
    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedVideo]);

    // ------------------------------------------------------------------
    // Fermeture du modal avec la touche Escape
    // ------------------------------------------------------------------
    useEffect(() => {
        if (!selectedVideo) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedVideo(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedVideo]);

    // ------------------------------------------------------------------
    // Fermeture du modal en cliquant sur l'overlay
    // ------------------------------------------------------------------
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            setSelectedVideo(null);
        }
    };

    // ------------------------------------------------------------------
    // ID YouTube de la vidéo sélectionnée
    // ------------------------------------------------------------------
    const selectedVideoId = selectedVideo
        ? getYouTubeId(selectedVideo.youtubeUrl)
        : null;

    return (
        <section
            className="Videoclips"
            id="videoclips"
            style={{ background: "white" }}
        >

            <div className="Videoclips-container">

                {/* ------------------------------------------------------
                    HEADER
                ------------------------------------------------------ */}
                <div className="Videoclips-header">

                    <h2 className="Videoclips-title">
                        {t("MusicVideos.Title")}
                    </h2>

                    <p className="Videoclips-description">
                        {t("MusicVideos.Content")}
                    </p>

                </div>


                {/* ------------------------------------------------------
                    LISTE DES VIDEOCLIPS
                ------------------------------------------------------ */}
                <div className="Videoclips-list">

                    {videoClips.map((video) => {

                        const videoId = getYouTubeId(video.youtubeUrl);

                        const thumbnail =
                            video.thumbnail || getThumbnailUrl(videoId);

                        return (
                            <article
                                key={video.id}
                                className="Videoclip-card"
                            >

                                {/* --------------------------------------------------
                                    MINIATURE + BOUTON PLAY
                                -------------------------------------------------- */}
                                <button
                                    type="button"
                                    className="Videoclip-thumbnail-button"
                                    onClick={() => setSelectedVideo(video)}
                                    aria-label={`${t(
                                        "PageFitnessFriend.MusicVideos.Play"
                                    )} ${video.title}`}
                                >

                                    <div className="Videoclip-thumbnail">

                                        <img
                                            src={thumbnail}
                                            alt={video.title}
                                            loading="lazy"
                                        />

                                        <div className="Videoclip-overlay">

                                            <span
                                                className="Videoclip-play"
                                                aria-hidden="true"
                                            >

                                                <svg
                                                    viewBox="0 0 24 24"
                                                    width="22"
                                                    height="22"
                                                >
                                                    <path
                                                        d="M8 5v14l11-7z"
                                                        fill="currentColor"
                                                    />
                                                </svg>

                                            </span>

                                        </div>

                                    </div>

                                </button>


                                {/* --------------------------------------------------
                                    TITRE DU VIDEOCLIP
                                -------------------------------------------------- */}
                                <h3 className="Videoclip-title">
                                    {video.title}
                                </h3>

                            </article>
                        );
                    })}

                </div>

            </div>


            {/* ----------------------------------------------------------
                MODAL VIDEO
            ---------------------------------------------------------- */}
            {selectedVideo && (

                <div
                    className="Videoclip-modal-overlay"
                    onClick={handleOverlayClick}
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedVideo.title}
                >

                    <div className="Videoclip-modal-content">

                        {/* --------------------------------------------------
                            BOUTON FERMER
                        -------------------------------------------------- */}
                        <button
                            type="button"
                            className="Videoclip-modal-close"
                            onClick={() => setSelectedVideo(null)}
                            aria-label={t(
                                "PageFitnessFriend.MusicVideos.Close"
                            )}
                        >

                            <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                            >
                                <path
                                    d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.88 18.3 9.17 12 2.88 5.71 4.3 4.29l6.29 6.3 6.3-6.3z"
                                    fill="currentColor"
                                />
                            </svg>

                        </button>


                        {/* --------------------------------------------------
                            TITRE DU VIDEO
                        -------------------------------------------------- */}
                        <h3 className="Videoclip-modal-title">
                            {selectedVideo.title}
                        </h3>


                        {/* --------------------------------------------------
                            VIDEO YOUTUBE
                        -------------------------------------------------- */}
                        <div className="Videoclip-modal-video">

                            {selectedVideoId && (

                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />

                            )}

                        </div>


                        {/* --------------------------------------------------
                            LIEN YOUTUBE
                        -------------------------------------------------- */}
                        <a
                            href={selectedVideo.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Videoclip-youtube-link"
                        >
                            {t(
                                "PageFitnessFriend.MusicVideos.WatchOnYouTube"
                            )}
                        </a>


                        {/* --------------------------------------------------
                            TITRE EN BAS DU MODAL
                        -------------------------------------------------- */}
                        <p className="Videoclip-modal-title Videoclip-modal-title--bottom">
                            {selectedVideo.title}
                        </p>

                    </div>

                </div>

            )}

        </section>
    );
}

export default Videoclips;