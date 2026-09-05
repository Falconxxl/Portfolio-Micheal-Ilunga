import { Helmet } from 'react-helmet-async';
import './AudioVisual.css';

import video_boucle_banner from "../../src/MyVideos/z_banner40 (quality 28MB 2).mp4";
import video_boucle_banner_mobile from "../../src/MyVideos/Banner_Site_ boucle2 (Mobile 28MB).mp4";
import video_drone from "../../src/MyVideos/DRONE_SHOT_VIDEO_correct2.mp4";
import video_drone_mobile from "../../src/MyVideos/DRONE_SHOT_VIDEO (Mobile 32 MB).mp4";

import mike_direction_image from "../../src/Images/mike_direction_audiovisual1.jpg";

import { Link } from "react-scroll";
import NavbarMenu from "../Layout/NavbarMenu";
// import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import TypeVideos from "../Layout/TypeVideos";
import ArchiveVideoReel from "../Layout/ArchiveVideoReel";
import OurWorkflow from "../Layout/OurWorkflow";
// import PricingVideo from "../Layout/PricingVideo";

// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";
import Experience from "../Layout/Experience";
import TopButton from "../Components/TopButton";
import Videoclips from "../Layout/Videoclips";


function AudioVisual() {

    const { t } = useTranslation();

    // const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simule le chargement (vidéos lourdes)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.AudioVisual.title")}</title>
                <meta name="description" content={t("HelmetSEO.AudioVisual.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/AudioVisual" />
            </Helmet>

                {loading && <PageLoader />}

            <div className={`audiovisual-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<Navbar2/>*/}

                {/*----------banner audiovisuel--------------------------------------*/}
                <header className="AudioVisual-banner">
                    <video autoPlay muted loop playsInline className="AudioVisual-video desktop-video">
                        <source src={video_boucle_banner} type="video/mp4"/>
                    </video>

                    <video autoPlay muted loop playsInline className="AudioVisual-video mobile-video">
                        <source src={video_boucle_banner_mobile} type="video/mp4"/>
                    </video>

                    <div className="AudioVisual-content">
                        <Link to="ArchiveVideoReel"
                            className="cta-btn-AudioVisual"
                              offset={-90} duration={500} spy={true} smooth={true} >
                            {t("ContainerBanner2.CatBouton2")} <i className="fa-solid fa-arrow-right-long"></i>
                        </Link><br/>

                        <Link to="Videoclips"
                              className="cta-btn-AudioVisual"
                              style={{
                                  background:"transparent",
                                  border:"2px solid white"
                              }}
                              offset={-90} duration={500} spy={true} smooth={true} >
                            {t("AudiovisualPage.Description.CtaBtn")} <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>

                        {/*<RequestAQuoteModal*/}
                        {/*    open={openQuote}*/}
                        {/*    onClose={() => setOpenQuote(false)}*/}
                        {/*>*/}
                        {/*    <RequestAQuote />*/}
                        {/*</RequestAQuoteModal>*/}
                    </div>

                    <div className="cta-container">

                        <Link to="Container-ServiceHome" className="cta-btn2"
                              offset={-90} duration={500} spy={true} smooth={true} >
                            {t("ContainerBanner2.CatBouton2")}
                            {/*<i className="fa-solid fa-arrow-right-long"></i>*/}
                        </Link>

                    </div>



                    <Link
                        to="AudioVisual-Description"
                        className="AudioVisual-scroll-down"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </header>

                {/*---------------Description----------------*/}
                <div className="AudioVisual-Description">
                    <div className="AudioVisual-Description-left">
                        <h1>
                            {t("AudiovisualPage.Description.Title")}
                        </h1>

                        <p>
                            {t("AudiovisualPage.Description.Subtitle")}
                        </p>
                    </div>

                    <div className="AudioVisual-Description-Right">
                        <p>
                            {t("AudiovisualPage.Description.Content")}
                        </p>
                    </div>
                </div>

                <div className="TypeVideos1">
                    <TypeVideos/>
                </div>

                <div className="ArchiveVideoReel">
                    <ArchiveVideoReel/>
                </div>
                <Experience/>
                {/*<PricingVideo/>*/}

                {/*---------------Section-Drone-Video----------------*/}
                <div className="section-drone-video">
                    <div className="texte-drone">
                        <h1
                            // style={{LineHeight: 0.5}}
                        >
                            {t("DroneShot.Title")}
                        </h1>

                        <h2>{t("DroneShot.Subtitle")}</h2>
                        <p>
                            {t("DroneShot.Content")}
                        </p>
                        {/*<button className="Drone-quote-button"*/}
                        {/*        onClick={() => setOpenQuote(true)}>*/}
                        {/*    {t("ContainerBanner2.CatBouton")}*/}
                        {/*    <i className="fa-solid fa-arrow-right"></i>*/}
                        {/*</button>*/}

                        {/*<RequestAQuoteModal*/}
                        {/*    open={openQuote}*/}
                        {/*    onClose={() => setOpenQuote(false)}*/}
                        {/*>*/}
                        {/*    <RequestAQuote />*/}
                        {/*</RequestAQuoteModal>*/}

                    </div>

                    <div className="wrapper-drone-video">
                        <video className="drone-video-desktop" src={video_drone} autoPlay muted loop playsInline />
                        <video className="drone-video-mobile" src={video_drone_mobile} autoPlay muted loop playsInline />
                    </div>
                </div>

                {/*---------------Where Creativity Meets Direction----------------*/}
                <section className="audiovisual-direction-Mike"
                style={{backgroundColor:"#170c40"}}>
                    <div className="direction-Mike-inner">
                        <div className="audiovisual-direction-image">
                            <img src={mike_direction_image} alt="Mike giving direction during a shoot"/>
                        </div>
                        <div className="audiovisual-direction-text">
                            <h1>{t("WhereCreativityMeets.Title")}</h1>
                            <p>
                                {t("WhereCreativityMeets.Content")}
                            </p>
                        </div>
                    </div>
                </section>

                <div className="Videoclips">
                    <Videoclips/>
                </div>

                <OurWorkflow/>
                <WhatsappFunction/>
                <TopButton/>
                <Footer/>
            </div>
        </>
    );
}

export default AudioVisual;
