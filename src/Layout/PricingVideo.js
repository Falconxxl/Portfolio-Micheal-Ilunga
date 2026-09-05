import './PricingVideo.css';
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import { useTranslation } from "react-i18next";


function PricingVideo() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <>

          <div className="Container-PricingVideo">
            <h1>{t("PricingVideo.BigTitle")}</h1>
            <div className="Container-PricingVideo-wrapper">

                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>{t("PricingVideo.BasicPackage.Title")}</h2>

                    <ul className="pricing-list">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine7")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine8")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine9")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine10")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine11")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine12")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.BasicPackage.ContentLine13")}</span>
                        </li>
                    </ul>

                    <button className="btn-cta-PricingVideo-x"
                            onClick={() => setOpenQuote(true)}>
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
                    <h2>{t("PricingVideo.StandardPackage.Title")}</h2>

                    <ul className="pricing-list-standard">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine7")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine8")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine9")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine10")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine11")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine12")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.StandardPackage.ContentLine13")}</span>
                        </li>
                    </ul>

                    <button className="btn-cta-PricingVideo-standard"
                            onClick={() => setOpenQuote(true)}>
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
                    <h2>{t("PricingVideo.GoldPackage.Title")}</h2>

                    <ul className="pricing-list-Gold">
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine7")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine8")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine9")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine10")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine11")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine12")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("PricingVideo.GoldPackage.ContentLine13")}</span>
                        </li>
                    </ul>

                    <button className="btn-cta-PricingVideo-Gold"
                            onClick={() => setOpenQuote(true)}>
                        {t("ContainerBanner2.CatBouton")}
                    </button>
                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                {/*<div className="PricingVideo-details-x">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-x">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-basic">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-standard">*/}
                {/*</div>*/}

                {/*<div className="PricingVideo-details-gold">*/}
                {/*</div>*/}

            </div>
        </div>
      </>
    );
}

export default PricingVideo;