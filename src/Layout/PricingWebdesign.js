import './PricingWebdesign.css';
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import { useTranslation } from "react-i18next";


function PricingWebdesign() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (

        <>

        <div className="Container-PricingVideo">

            <h1>{t("PricingWebdesign.BigTitle")}</h1>
            <div className="Container-PricingVideo-wrapper">

                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>{t("PricingWebdesign.StarterBasic.Title")}</h2>

                    <ul className="pricing-list">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.StarterBasic.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.StarterBasic.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.StarterBasic.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.StarterBasic.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.StarterBasic.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.StarterBasic.ContentLine6")}</span></li>
                        <li><span><p style={{color:"#ff609d"}}> {t("PricingWebdesign.StarterBasic.ContentLine7a")}</p>{t("PricingWebdesign.StarterBasic.ContentLine7b")}</span></li>
                    </ul>

                    <button
                        className="btn-cta-PricingVideo-x"
                        onClick={() => setOpenQuote(true)}
                    >
                        {t("ContainerBanner2.CatBouton")}
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                {/*----------Standard Package----------------*/}

                <div className="PricingVideo-details-standard">
                    <h2>{t("PricingWebdesign.BusinessStandard.Title")}</h2>

                    <ul className="pricing-list-standard">
                            <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.BusinessStandard.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.BusinessStandard.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.BusinessStandard.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.BusinessStandard.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.BusinessStandard.ContentLine5")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.BusinessStandard.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.BusinessStandard.ContentLine7")}</span></li>
                            <li><span><p style={{color:"#0095ff"}}>{t("PricingWebdesign.BusinessStandard.ContentLine8a")}</p>{t("PricingWebdesign.BusinessStandard.ContentLine8b")}.</span></li>
                    </ul>


                    <button className="btn-cta-PricingVideo-standard"
                        onClick={() => setOpenQuote(true)}
                    >
                        {t("ContainerBanner2.CatBouton")}
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                {/*----------Gold Package----------------*/}

                <div className="PricingVideo-details-Golg"
                     // style={{backgroundColor:"red", width:"80%"}}

                >
                    <h2 >{t("PricingWebdesign.PremiumDeluxe.Title")}</h2>

                    <ul className="pricing-list-Gold">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine7")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine8")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingWebdesign.PremiumDeluxe.ContentLine9")}</span></li>
                        <li><span><p style={{color:"#f3bb2f"}}>{t("PricingWebdesign.PremiumDeluxe.ContentLine9a")} </p>{t("PricingWebdesign.PremiumDeluxe.ContentLine9b")}</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-Gold"
                        onClick={() => setOpenQuote(true)}
                    >
                        {t("ContainerBanner2.CatBouton")}
                    </button>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

            </div>
        </div>
        </>
    );
}

export default PricingWebdesign;