// import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import "./Prices.css";

import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import PricingVideo from "../Layout/PricingVideo";
import PricingPhotography from "../Layout/PricingPhotography";
import PricingWebdesign from "../Layout/PricingWebdesign";
import PricingBranding from "../Layout/PricingBranding";
import PricingDigitalMarketing from "../Layout/PricingDigitalMarketing";


import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";
import PricingMusic from "../Layout/PricingMusic";
import { useTranslation } from "react-i18next";
import Experience from "../Layout/Experience";
import Testimony from "../Layout/Testimony";


function Prices() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    const [activeModal, setActiveModal] = useState(null);

    const services = [
        { id: "audiovisual", label: t("Prices.Button1"), component: <PricingVideo/> },
        { id: "photography", label: t("Prices.Button2"), component: <PricingPhotography/>},
        { id: "webdesign", label: t("Prices.Button3"), component: <PricingWebdesign/> },
        { id: "branding", label: t("Prices.Button4"), component: <PricingBranding/> },
        { id: "digitalmarketing", label: t("Prices.Button5"), component: <PricingDigitalMarketing/> },
        { id: "music", label: t("Prices.Button6"), component: <PricingMusic/> },
    ];

    return (

        <>
            <Helmet>
                <title>{t("HelmetSEO.Prices.title")}</title>
                <meta name="description" content={t("HelmetSEO.Prices.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Prices" />
            </Helmet>

    <div>
            <NavbarMenu />
            <NavbarMenuMobile />
            <Navbar2 />

            {/* ======== PAGE CONTENT ======== */}
            <div className="prices-page">
                <h1> {t("Prices.Title")}</h1>
                <p className="intro-text">
                    {t("Prices.Content")}
                </p>

                <div className="services-section">
                    <ul className="service-list">
                        {services.map((service) => (
                            <li
                                key={service.id}
                                className="service-item"
                                onClick={() => setActiveModal(service.id)}
                            >
                                <span className="fa-stack" style={{fontSize: "11px", marginRight: "10px"}}>
    <i className="fa-solid fa-circle fa-stack-2x" style={{color: "#3f97fb"}}></i>
    <i className="fa-solid fa-plus fa-stack-1x" style={{color: "white", fontSize: "20px"}}></i>
</span>
                                <span>{service.label}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="request-button"
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

                {/* ======== MODAL ======== */}
                {activeModal && (
                    <div className="modal-overlay" onClick={() => setActiveModal(null)}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="close-modal"
                                onClick={() => setActiveModal(null)}
                            >
                                ✕
                            </button>
                            {services.find((s) => s.id === activeModal)?.component}
                        </div>
                    </div>
                )}
            </div>
        <Experience/>
        <Testimony/>
            <WhatsappFunction/>
            <Footer />
        </div>

        </>
    );
}

export default Prices;
