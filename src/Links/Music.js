import { Helmet } from 'react-helmet-async';
import './Music.css';
import '../Layout/WhyUs2.css';

import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import desktop_banner_music from "../Images/background_banner_music7.jpg";
import mobile_banner from "../Images/background_Brenda_blue_mobile8ag.jpg";

import {Link} from "react-scroll";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

import TypeMusic from "../Layout/TypeMusic";
import OurWorkflow from "../Layout/OurWorkflow";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";
import Ads from "../Layout/Ads";
import Experience from "../Layout/Experience";

function Music() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    // ✅ ICON FIX (IDENTIQUE PARTOUT)
    const CheckIcon = () => (
        <span className="fa-stack" style={{ minWidth: "30px" }}>
            <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#7856f4" }}></i>
            <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
        </span>
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Music.title")}</title>
                <meta name="description" content={t("HelmetSEO.Music.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Music" />
            </Helmet>

            {loading && <PageLoader />}

            <div>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                <Navbar2/>

                {/*------banner---------------*/}

                <header className="hero-banner">
                    <img src={desktop_banner_music} alt="Banner desktop" className="hero-image desktop-image" />
                    <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />

                    <div className="hero-content">

                        <h1 style={{color:"black"}}>
                            {t("MusicPage.Banner.Title")}
                        </h1>

                        <p style={{color:"black"}}>
                            {t("MusicPage.Banner.ContentLine1")}<br/>
                            {t("MusicPage.Banner.ContentLine2")}<br/>
                        </p>

                        <a
                            href="https://www.falconbeat.nl"
                            className="cta-music-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("MusicPage.Banner.BtnLine")}
                        </a>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    <Link to="AudioVisual-Description" className="scroll-down-music"
                          offset={-90} duration={500} spy={true} smooth={true} >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </header>

                <Experience/>

                {/* DESCRIPTION */}

                <div className="AudioVisual-Description">

                    <div className="AudioVisual-Description-left">
                        <h1 style={{fontSize:"39px"}}>
                            {t("MusicPage.DescriptionMusic.Title")}
                        </h1>

                        <p style={{fontSize:"25px"}}>
                            {t("MusicPage.DescriptionMusic.Subtitle")}
                        </p>
                    </div>

                    <div className="AudioVisual-Description-Right" style={{height:"auto"}}>
                        <p style={{fontSize:"16px"}}>
                            {t("MusicPage.DescriptionMusic.Content")}
                        </p>
                    </div>

                </div>

                <TypeMusic/>
                <OurWorkflow/>
                <Ads/>

                {/* WHY CHOOSE */}

                <div className="Section-WhoAreWe" style={{backgroundColor:"black"}}>
                    <div className="WhoAreWe-left">
                        <h1>{t("MusicPage.WhyChoose.Title")}</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <div className="WhoAreWe-text">

                            {[1,2,3,4,5,6].map((i) => (
                                <div className="checklist-item" key={i}>
                                    <CheckIcon />
                                    <div>
                                        {t(`MusicPage.WhyChoose.ContentLine${i}`)}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <WhatsappFunction/>
                <Footer/>
            </div>
        </>
    );
}

export default Music;