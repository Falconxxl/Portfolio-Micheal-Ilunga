import './PricingBranding.css';
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import { useTranslation } from "react-i18next";


function PricingDigitalMarketing() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (

        <>

          <div className="Container-PricingVideo">
            <h1>
                {t("DigitalMarketing.PricingDigitalMarketing.BigTitle")}
            </h1>
            <div className="Container-PricingVideo-wrapper">


                {/*----------Basic Package----------------*/}

                <div className="PricingVideo-details-x">
                    <h2>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.Title")}</h2>

                    <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.ContentLine4")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.ContentLine6")}</span></li>
                        <li><span>{t("DigitalMarketing.PricingDigitalMarketing.BasicPackage.ContentLine7")}</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-x" style ={{marginTop:"50px"}}
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
                    <h2>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.Title")}</h2>

                    <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.ContentLine3")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.ContentLine6")}</span></li>
                        <li><span>{t("DigitalMarketing.PricingDigitalMarketing.StandardPackage.ContentLine7")}</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-standard" style ={{marginTop:"30px"}}
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
                    <h2>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.Title")}</h2>

                    <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine1")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine2")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine3")}</span>
                        </li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine4")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine5")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine6")}</span></li>
                        <li><i className="fa-solid fa-check"></i><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine7")}</span></li>
                        <li><span>{t("DigitalMarketing.PricingDigitalMarketing.GoldPackage.ContentLine8")}</span></li>
                    </ul>

                    <button className="btn-cta-PricingVideo-Gold" style ={{marginTop:"-10px"}}
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

export default PricingDigitalMarketing;