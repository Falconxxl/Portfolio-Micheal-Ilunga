import React, { useState } from 'react';
import './Contact.css';
// import RequestAQuote from '../Components/RequestAQuote';
// import RequestAQuoteModal from '../Components/Modal/RequestAQuoteModal';
// import Navbar2 from "../Layout/Navbar2";

import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";
import WhatsappFunction from "../Components/WhatsappFunction";
import {useTranslation} from "react-i18next";
import TopButton from "../Components/TopButton";

function Contact() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <>
            {/*<Navbar2/>*/}

            <NavbarMenu/>
            <NavbarMenuMobile/>

            <div className="contact-page">

                {/* ══════════════════════════════
                    HERO HEADER
                ══════════════════════════════ */}
                <div className="contact-hero">

                    <h1 className="contact-main-title">
                        {t("Contact.Banner.Title")}
                    </h1>

                </div>

                {/* ══════════════════════════════
                    MAIN CONTENT
                ══════════════════════════════ */}
                <div className="contact-wrapper">

                    {/* ── LEFT: info ── */}
                    <div className="contact-left">

                        {/* Intro text */}
                        <div className="contact-intro">

                            <h2 className="contact-intro-sub">
                                {t("Contact.Banner.LeftLine1")}
                            </h2>

                            {/*<p className="contact-intro-text">*/}
                            {/*    In mijn portfolio vindt u een selectie van projecten waarin*/}
                            {/*    ik UX/UI Design, Web Development en visuele creativiteit*/}
                            {/*    combineer. Elk project laat zien hoe ik problemen analyseer,*/}
                            {/*    ideeën vertaal naar digitale oplossingen en aandacht besteed*/}
                            {/*    aan zowel gebruikerservaring als resultaat.*/}
                            {/*</p>*/}

                        </div>

                        {/* Skills / Expertise */}
                        <div className="contact-details">

                            <div className="contact-detail-row">
                                <div className="contact-detail-icon">
                                    <i className="fa-solid fa-video"></i>
                                </div>

                                <div className="contact-detail-text">
                                    <span className="contact-detail-label">BEL MIJ</span>
                                    <span className="contact-detail-value">+31 6 855 33 24</span>
                                </div>
                            </div>

                            <div className="contact-detail-row">
                                <div className="contact-detail-icon">
                                    <i className="fa-solid fa-camera"></i>
                                </div>

                                <div className="contact-detail-text">
                                    <span className="contact-detail-label">E-MAIL ONS</span>
                                    <span className="contact-detail-value">michael.ict.info@gmail.com</span>
                                </div>
                            </div>

                        </div>

                        {/* Social media */}
                        <div className="contact-social-block">

                            <p className="contact-social-label">
                                {t("Contact.Banner.LeftLine2")}
                            </p>

                            <div className="contact-socials">

                                <a
                                    href="https://www.linkedin.com/in/micheal-ilunga-45b277288"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="Instagram"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a
                                    href="https://wa.me/3163733124"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="WhatsApp"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="Facebook"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="TikTok"
                                >
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>

                            </div>
                        </div>

                    </div>

                    {/* ── RIGHT: CTA card ── */}
                    <div className="contact-right">

                        <div className="contact-cta-card">

                            <div className="contact-cta-icon">
                                <i className="fa-solid fa-handshake"></i>
                            </div>

                            <h2 className="contact-cta-title">
                                <span className="contact-accent">{t("Contact.Banner.RightLine1")}</span>
                            </h2>

                            <p className="contact-cta-text">
                                {t("Contact.Banner.RightLine2")}
                            </p>

                            <ul className="contact-cta-list">
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    {t("Contact.Banner.RightLine3")}
                                </li>

                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    {t("Contact.Banner.RightLine4")}
                                </li>

                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    {t("Contact.Banner.RightLine5")}
                                </li>

                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    {t("Contact.Banner.RightLine6")}
                                </li>

                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    {t("Contact.Banner.RightLine7")}
                                </li>
                            </ul>

                            {/*<button*/}
                            {/*    className="contact-cta-btn"*/}
                            {/*    onClick={() => {*/}
                            {/*        document*/}
                            {/*            .getElementById('portfolio-projects')*/}
                            {/*            ?.scrollIntoView({*/}
                            {/*                behavior: 'smooth'*/}
                            {/*            });*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    Bekijk mijn portfolio*/}
                            {/*    <i className="fa-solid fa-arrow-right"></i>*/}
                            {/*</button>*/}

                        </div>

                    </div>

                </div>

            </div>

            {/* ══════════════════════════════
                MODAL
            ══════════════════════════════ */}
            {/*<RequestAQuoteModal*/}
            {/*    open={openQuote}*/}
            {/*    onClose={() => setOpenQuote(false)}*/}
            {/*>*/}
            {/*    <RequestAQuote onClose={() => setOpenQuote(false)} />*/}
            {/*</RequestAQuoteModal>*/}

            <WhatsappFunction/>
            <TopButton/>

            <Footer/>
        </>
    );
}

export default Contact;