import './TypeBranding.css';
import './WhyUs2.css';
import { useTranslation } from "react-i18next";

function TypeBranding() {

    const { t } = useTranslation();

    // ✅ SAME ICON AS WhyUs2 (parfaitement équilibré)
    const CheckIcon = () => (
        <span className="icon-stack">
        <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#7856f4" }}></i>
        <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
    </span>
    );

    return (

        <>
            <div className="Container-WhyUs">

                <div className="Container-WhyUs-left">
                    <h1>{t("Branding.TypeBranding.BigTitle")}</h1>
                </div>

                <div className="Container-WhyUs-right">

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("Branding.TypeBranding.1ArtistsMusiciansPerformers.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">

                            {[...Array(10)].map((_, i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`Branding.TypeBranding.1ArtistsMusiciansPerformers.ContentLine${i+1}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Bloc 2 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("Branding.TypeBranding.2WeddingsLuxuryEvents.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">

                            {[...Array(11)].map((_, i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`Branding.TypeBranding.2WeddingsLuxuryEvents.ContentLine${i+1}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Bloc 3 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("Branding.TypeBranding.3LifestyleSportsContentCreators.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">

                            {[...Array(9)].map((_, i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`Branding.TypeBranding.3LifestyleSportsContentCreators.ContentLine${i+1}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Bloc 4 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("Branding.TypeBranding.4BeautyFashionStyleBrand.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">

                            {[...Array(10)].map((_, i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`Branding.TypeBranding.4BeautyFashionStyleBrand.ContentLine${i+1}`)}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Bloc 5 */}
                    <div className="Container-WhyUs-right-content-x">
                        <div className="Container-WhyUs-right-title">
                            {t("Branding.TypeBranding.5BusinessHospitalityRealEstate.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">

                            {[...Array(10)].map((_, i) => (
                                <div className="icon-text" key={i}>
                                    <CheckIcon />
                                    <p>
                                        {t(`Branding.TypeBranding.5BusinessHospitalityRealEstate.ContentLine${i+1}`)}
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

export default TypeBranding;