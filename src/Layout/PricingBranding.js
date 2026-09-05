import './PricingBranding.css';
import { useTranslation } from "react-i18next";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

function PricingBranding() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <>

        <div className="Container-PricingVideo">
            <h1>{t("Branding.PricingBranding.BigTitle")}</h1>
            <div className="Container-PricingVideo-wrapper">

                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>{t("Branding.PricingBranding.BasicPackage.Title")}</h2>

                    <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.BasicPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.BasicPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.BasicPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.BasicPackage.ContentLine4")}</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-x"
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
                    <h2>{t("Branding.PricingBranding.StandardPackage.Title")}</h2>

                    <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.StandardPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.StandardPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.StandardPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.StandardPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.StandardPackage.ContentLine5")}</span></li>
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

                <div className="PricingVideo-details-Golg">
                    <h2>{t("Branding.PricingBranding.GoldPackage.Title")}</h2>

                    <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.GoldPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.GoldPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.GoldPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.GoldPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.GoldPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("Branding.PricingBranding.GoldPackage.ContentLine6")}</span></li>
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

export default PricingBranding;