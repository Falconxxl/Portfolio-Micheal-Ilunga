import './WhyUs2.css';
import { useTranslation } from "react-i18next";

function WhyUs2() {
    const { t } = useTranslation();

    const CheckIcon = () => (
        <span className="icon-stack">
        <i className="fa-solid fa-circle fa-stack-2x" style={{color: "#3f97fb"}}></i>
        <i className="fa-solid fa-check fa-stack-1x" style={{color: "white", fontSize: "16px"}}></i>
    </span>
    );

    return (
        <>
            <div className="Container-WhyUs2">
                <div className="Container-WhyUs2-left"
                     style={{fontFamily:"Poppins"}}
                >
                    <h1
                        style={{fontFamily:"Poppins"}}
                    >{t("WhyUs.Title")}

                    </h1>
                </div>

                <div className="Container-WhyUs2-right">

                    {/* Bloc 2 */}
                    <div className="Container-WhyUs2-right-content">
                        <div className="Container-WhyUs2-right-title">
                            {t("WhyUs.Webdesign.Subtitle")}
                        </div>
                        <div className="Container-WhyUs2-right-paragraf">
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine1")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine2")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine3")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine4")}</p></div>
                        </div>
                    </div>

                    {/* Bloc 2 */}
                    <div className="Container-WhyUs2-right-content">
                        <div className="Container-WhyUs2-right-title">
                            {t("WhyUs.UxDesign.Subtitle")}
                        </div>
                        <div className="Container-WhyUs2-right-paragraf">
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine1")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine2")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine3")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Webdesign.ContentLine4")}</p></div>
                        </div>
                    </div>

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs2-right-content"
                    >
                        <div className="Container-WhyUs2-right-title">
                            {t("WhyUs.Branding.Subtitle")}
                        </div>
                        <div className="Container-WhyUs2-right-paragraf">
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Branding.ContentLine1")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Branding.ContentLine2")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Branding.ContentLine3")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Branding.ContentLine4")}</p></div>
                        </div>
                    </div>

                    {/* Bloc 3 */}
                    <div className="Container-WhyUs2-right-content">
                        <div className="Container-WhyUs2-right-title">
                            {t("WhyUs.Audiovisual.Subtitle")}
                        </div>
                        <div className="Container-WhyUs2-right-paragraf">
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Audiovisual.ContentLine1")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Audiovisual.ContentLine2")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Audiovisual.ContentLine3")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Audiovisual.ContentLine4")}</p></div>
                        </div>
                    </div>

                    {/* Bloc 4 */}
                    <div className="Container-WhyUs2-right-content">
                        <div className="Container-WhyUs2-right-title">
                            {t("WhyUs.SocialMedia.Subtitle")}
                        </div>
                        <div className="Container-WhyUs2-right-paragraf">
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.SocialMedia.ContentLine1")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.SocialMedia.ContentLine2")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.SocialMedia.ContentLine3")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.SocialMedia.ContentLine4")}</p></div>
                        </div>
                    </div>

                    {/* Bloc 5 */}
                    {/*<div className="Container-WhyUs-right-content">*/}
                    {/*    <div className="Container-WhyUs-right-title">*/}
                    {/*        {t("WhyUs.DigitalMarketing.Subtitle")}*/}
                    {/*    </div>*/}
                    {/*    <div className="Container-WhyUs-right-paragraf">*/}
                    {/*        <div className="icon-text"><CheckIcon /><p>{t("WhyUs.DigitalMarketing.ContentLine1")}</p></div>*/}
                    {/*        <div className="icon-text"><CheckIcon /><p>{t("WhyUs.DigitalMarketing.ContentLine2")}</p></div>*/}
                    {/*        <div className="icon-text"><CheckIcon /><p>{t("WhyUs.DigitalMarketing.ContentLine3")}</p></div>*/}
                    {/*        <div className="icon-text"><CheckIcon /><p>{t("WhyUs.DigitalMarketing.ContentLine4")}</p></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Bloc 6 */}
                    <div className="Container-WhyUs2-right-content-x">
                        <div className="Container-WhyUs2-right-title">
                            {t("WhyUs.Music.Subtitle")}
                        </div>
                        <div className="Container-WhyUs2-right-paragraf">
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Music.ContentLine1")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Music.ContentLine2")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Music.ContentLine3")}</p></div>
                            <div className="icon-text"><CheckIcon /><p>{t("WhyUs.Music.ContentLine4")}</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default WhyUs2;