import React, { useState, useEffect } from "react";
import "./ArchiveVideoReel.css";
import { useTranslation } from "react-i18next";

function ArchiveVideoReel() {
    // eslint-disable-next-line no-unused-vars
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const videos = [
        "https://www.youtube.com/embed/V9PLgs6V0cs",
        "https://www.youtube.com/embed/RiFuw1WFow8",
        "https://www.youtube.com/embed/WAm3H7h_u5k"
    ];

    return (
        <>
            <section className="video-session">
                <h1>{t("ArchiveVideoReel.Title")}</h1>
                <p>{t("ArchiveVideoReel.Content")}</p>

                <div className="Archive-video-grid">
                    {videos.map((src, index) => (
                        <div key={index} className="Archive-video-wrapper">
                            <iframe
                                src={src}
                                title={`Video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ArchiveVideoReel;