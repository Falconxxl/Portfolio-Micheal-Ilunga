import './Home.css';
import { Helmet } from 'react-helmet-async';
// import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import ContainerBanner2 from "../Layout/ContainerBanner2";
import ServiceHome from "../Layout/ServiceHome";
import OurWorkflow from "../Layout/OurWorkflow";
import WhyUs2 from "../Layout/WhyUs2";
// import OurRealisations from "../Layout/OurRealisations";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";

import React, { useEffect, useState } from "react";
import PageLoader from "../Components/PageLoader";
import Experience from "../Layout/Experience";
import TopButton from "../Components/TopButton";
// import Testimony from "../Layout/Testimony";
// import Ads from "../Layout/Ads";
// import video_boucle_banner from "../MyVideos/z_banner40 (quality 24MB 2).mp4";
// import video_boucle_banner_mobile from "../MyVideos/Banner_Site_ boucle (Mobile 28MB).mp4";
// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";
// import {Link} from "react-scroll";
// import Welcome from "../Layout/Welcome";
// import WelcomeMobile from "../Layout/WelcomeMobile";


function Home() {

    // const [openQuote, setOpenQuote] = useState(false);

    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simule le chargement (images, composants lourds)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700); // ajuste si besoin

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Home.title")}</title>
                <meta name="description" content={t("HelmetSEO.Home.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/" />
            </Helmet>

            {loading && <PageLoader />}

            <div className={`home-wrapper ${loading ? "hidden" : "visible"}`}>

                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<Navbar2/>*/}

                <ContainerBanner2/>

                {/*----------banner audiovisuel--------------------------------------*/}
                {/*<header className="AudioVisual-banner">*/}
                {/*    <video autoPlay muted loop playsInline className="AudioVisual-video desktop-video">*/}
                {/*        <source src={video_boucle_banner} type="video/mp4"/>*/}
                {/*    </video>*/}

                {/*    <video autoPlay muted loop playsInline className="AudioVisual-video mobile-video">*/}
                {/*        <source src={video_boucle_banner_mobile} type="video/mp4"/>*/}
                {/*    </video>*/}

                {/*    <div className="AudioVisual-content">*/}
                {/*        <button*/}
                {/*            className="cta-btn-AudioVisual"*/}
                {/*            onClick={() => setOpenQuote(true)}*/}
                {/*        >*/}
                {/*            {t("ContainerBanner2.CatBouton")}*/}
                {/*        </button>*/}

                {/*        <RequestAQuoteModal*/}
                {/*            open={openQuote}*/}
                {/*            onClose={() => setOpenQuote(false)}*/}
                {/*        >*/}
                {/*            <RequestAQuote />*/}
                {/*        </RequestAQuoteModal>*/}
                {/*    </div>*/}

                {/*    <Link*/}
                {/*        to="AudioVisual-Description"*/}
                {/*        className="AudioVisual-scroll-down"*/}
                {/*        offset={-90}*/}
                {/*        duration={500}*/}
                {/*        spy*/}
                {/*        smooth*/}
                {/*    >*/}
                {/*        <i className="fa-solid fa-angles-down"></i>*/}
                {/*    </Link>*/}
                {/*</header>*/}

                {/*---------------Description----------------*/}

                {/*<Welcome/>*/}

                {/*<WelcomeMobile/>*/}

                <ServiceHome/>

                <OurWorkflow/>

                <Experience/>

                {/*<Testimony/>*/}

                <WhyUs2/>

                {/*--------------------------------------------------------------------------*/}

                {/*<div className="Section-WhoAreWe"*/}
                {/*     style={{backgroundColor:"#100025"}}>*/}

                {/*    <div className="WhoAreWe-left">*/}
                {/*        <h1>*/}
                {/*            {t("HomeFalconXXL.Title")}*/}
                {/*        </h1>*/}
                {/*    </div>*/}

                {/*    <div className="WhoAreWe-right">*/}
                {/*        <p className="WhoAreWe-title">*/}
                {/*            {t("HomeFalconXXL.SubtitleLine1")}*/}
                {/*            <br/>*/}
                {/*            {t("HomeFalconXXL.SubtitleLine2")}*/}
                {/*        </p>*/}

                {/*        <div className="WhoAreWe-text">*/}
                {/*            <div className="checklist-item2">*/}
                {/*                <i className="fa-solid fa-circle-check checklist-icon"></i>*/}
                {/*                <div className="checklist-item3">*/}
                {/*                    <strong style={{fontWeight:"700"}}>*/}
                {/*                        {t("HomeFalconXXL.ContentLine1")}:*/}
                {/*                    </strong> {t("HomeFalconXXL.ContentLine1a")}*/}
                {/*                </div>*/}
                {/*            </div>*/}


                {/*            <div className="checklist-item2">*/}
                {/*                <i className="fa-solid fa-circle-check checklist-icon"></i>*/}
                {/*                <div className="checklist-item3">*/}
                {/*                    <strong style={{fontWeight:"700"}}>*/}
                {/*                        {t("HomeFalconXXL.ContentLine2")}:*/}
                {/*                    </strong> {t("HomeFalconXXL.ContentLine2a")}*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="checklist-item2">*/}
                {/*                <i className="fa-solid fa-circle-check checklist-icon"></i>*/}
                {/*                <div className="checklist-item3">*/}
                {/*                    <strong style={{ fontWeight:"700"}}>*/}
                {/*                        {t("HomeFalconXXL.ContentLine3")}:*/}
                {/*                    </strong> {t("HomeFalconXXL.ContentLine3a")}*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="checklist-item2">*/}
                {/*                <i className="fa-solid fa-circle-check checklist-icon"></i>*/}
                {/*                <div className="checklist-item3">*/}
                {/*                    <strong style={{fontWeight:"700"}}>*/}
                {/*                        {t("HomeFalconXXL.ContentLine4")}:*/}
                {/*                    </strong> {t("HomeFalconXXL.ContentLine4a")}*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="checklist-item2">*/}
                {/*                <i className="fa-solid fa-circle-check checklist-icon"></i>*/}
                {/*                <div className="checklist-item3">*/}
                {/*                    <strong style={{fontWeight:"700"}}>*/}
                {/*                        {t("HomeFalconXXL.ContentLine5")}:*/}
                {/*                    </strong> {t("HomeFalconXXL.ContentLine5a")}*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="checklist-item2">*/}
                {/*                <i className="fa-solid fa-circle-check checklist-icon"></i>*/}
                {/*                <div className="checklist-item3">*/}
                {/*                    <strong style={{fontWeight:"700"}}>*/}
                {/*                        {t("HomeFalconXXL.ContentLine6")}:*/}
                {/*                    </strong> {t("HomeFalconXXL.ContentLine6a")}*/}
                {/*                </div>*/}
                {/*            </div>*/}


                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}

                {/*<Ads/>*/}
                {/*<OurRealisations/>*/}


                {/*--------------------------------------------------------------------------*/}


                {/*--------------------------------------------------------------------------*/}

                <WhatsappFunction/>
                <TopButton/>
                <Footer/>

            </div>
        </>
    );
}

export default Home;