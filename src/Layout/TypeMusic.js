import './TypeMusic.css';
import { useTranslation } from "react-i18next";

function TypeMusic() {

    const { t } = useTranslation();

    // ✅ ICON FIX (UNIFORME SUR TOUT LE SITE)
    const CheckIcon = () => (
        <span className="fa-stack" style={{ minWidth: "30px" }}>
            <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#3f97fb" }}></i>
            <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
        </span>
    );

    return (
        <>
            <div className="Container-WhyUs">

                <div className="Container-WhyUs-left">
                    <h1>{t("MusicPage.TypeVideo.BigTitle")}</h1>
                </div>

                <div className="Container-WhyUs-right">

                    {/* ===== BLOC 1 ===== */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("MusicPage.TypeVideo.1ArtistsMusiciansPerformers.Title")}
                        </div>

                        <div className="Container-WhyUs-right-paragraf">

                            {[1,2,3,4].map((i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`MusicPage.TypeVideo.1ArtistsMusiciansPerformers.ContentLine${i}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* ===== BLOC 2 ===== */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("MusicPage.TypeVideo.2BusinessesEntrepreneurs.Title")}
                        </div>

                        <div className="Container-WhyUs-right-paragraf">

                            {[1,2,3,4].map((i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`MusicPage.TypeVideo.2BusinessesEntrepreneurs.ContentLine${i}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* ===== BLOC 3 ===== */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("MusicPage.TypeVideo.3ContentCreatorsInfluencers.Title")}
                        </div>

                        <div className="Container-WhyUs-right-paragraf">

                            {[1,2,3].map((i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`MusicPage.TypeVideo.3ContentCreatorsInfluencers.ContentLine${i}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* ===== BLOC 4 ===== */}
                    <div className="Container-WhyUs-right-content-x">
                        <div className="Container-WhyUs-right-title">
                            {t("MusicPage.TypeVideo.4ForFilmmakersCreators.Title")}
                        </div>

                        <div className="Container-WhyUs-right-paragraf">

                            {[1,2,3].map((i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`MusicPage.TypeVideo.4ForFilmmakersCreators.ContentLine${i}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default TypeMusic;