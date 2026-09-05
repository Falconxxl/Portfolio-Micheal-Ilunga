import './PricingVideo.css';
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";


function PricingPhotography() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (

        <>
        <div className="Container-PricingVideo">
            <h1>{t("PricingPhotography.BigTitle")}</h1>
            <div className="Container-PricingVideo-wrapper">


                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>{t("PricingPhotography.BasicPackage.Title")}</h2>

                    <ul className="pricing-list">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine7")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine8")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine9")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.BasicPackage.ContentLine10")}</span>
                        </li>
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
                    <h2>{t("PricingPhotography.StandardPackage.Title")}</h2>

                    <ul className="pricing-list-standard">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine7")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine8")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine9")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.StandardPackage.ContentLine10")}</span>
                        </li>
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
                    <h2>{t("PricingPhotography.GoldPackage.Title")}</h2>

                    <ul className="pricing-list-Gold">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine7")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine8")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingPhotography.GoldPackage.ContentLine9")}</span>
                        </li>
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

export default PricingPhotography;