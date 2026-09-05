import { Helmet } from 'react-helmet-async';
import './Webdesign.css';
import NavbarMenu from "../Layout/NavbarMenu";

// import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import desktop_banner_photograhy from "../Images/background_webdesign_portfolio2.jpg";
import mobile_banner from "../Images/background_portfolio3_webdesign_mobile7b.jpg";
import compo_webdesign_laptop1 from "../Images/compo_laptop_nexteclat.png";
import compo_webdesign_laptop2 from "../Images/compo_laptop_falcon.png";
import compo_webdesign_laptop3 from "../Images/compo_laptop_cyrus.png";
import compo_laptop_PashaBouw from "../Images/compo_laptop_PashaBouw.png";
import compo_laptop_JupiterSafe from "../Images/compo_laptop_JupiterSafe.png";
import compo_webdesign_portfolio from "../Images/compo_laptop_Portfolio2.png";


import { Link } from "react-scroll";
import OurWorkflow from "../Layout/OurWorkflow";
// import PricingWebdesign from "../Layout/PricingWebdesign";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";
import Experience from "../Layout/Experience";
import TopButton from "../Components/TopButton";

function Webdesign() {

    const { t } = useTranslation();
    // const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // Liste des projets affichés dans la grille.
    // Les 3 premiers utilisent les clés de traduction existantes.
    // Les 2 nouveaux (Pasha Bouw / Jupiter Safe Consulting) utilisent
    // pour l'instant le même texte que NextEclat en attendant le contenu définitif.
    const projects = [

        {
            image: compo_laptop_PashaBouw,
            title: "Pasha Bouw",
            desc: t("OurWebDesignProjects.project.contentLine4"),
            link: "https://6a6b1bf01322941cd02b843f--pashabouw.netlify.app"
        },
        {
            image: compo_laptop_JupiterSafe,
            title: "Jupiter Safe Consulting",
            desc: t("OurWebDesignProjects.project.contentLine5"),
            link: "https://6a6811375ba1e1f4b99c0e41--jupiter-safe-consulting.netlify.app/"
        },
        {
            image: compo_webdesign_laptop3,
            title: t("OurWebDesignProjects.project.title3"),
            desc: t("OurWebDesignProjects.project.contentLine3"),
            // link: "#"
        },

        {
            image: compo_webdesign_laptop1,
            title: t("OurWebDesignProjects.project.title1"),
            desc: t("OurWebDesignProjects.project.contentLine1"),
            link: "https://nexteclat.com"
        },
        {
            image: compo_webdesign_portfolio,
            title: t("OurWebDesignProjects.project.title6"),
            desc: t("OurWebDesignProjects.project.contentLine6"),
            link: "https://www.falconbeat.nl"
        },

        {
            image: compo_webdesign_laptop2,
            title: t("OurWebDesignProjects.project.title2"),
            desc: t("OurWebDesignProjects.project.contentLine2"),
            link: "https://www.falconbeat.nl"
        },
    ];

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Webdesign.title")}</title>
                <meta name="description" content={t("HelmetSEO.Webdesign.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Webdesign" />
            </Helmet>

            {loading && <PageLoader />}

            <div className={`webdesign-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<Navbar2/>*/}

                {/*---------------- Banner ----------------*/}
                <div className="Container-webdesign">
                    <img
                        src={desktop_banner_photograhy}
                        alt="Banner desktop"
                        className="Webdesign-banner desktop-image"
                    />

                    <img
                        src={mobile_banner}
                        alt="Banner mobile"
                        className="Webdesign-banner mobile-image"
                    />

                    <div className="hero-content-webdesign">
                        <h1>{t("PageWebdesign.BannerWebdesign.Title")}</h1>

                        <p className="webdesign-paragraphe-desktop">
                            {t("PageWebdesign.BannerWebdesign.Content1")}<br/>
                            {/*{t("PageWebdesign.BannerWebdesign.Content2")}*/}
                        </p>

                        <p className="webdesign-paragraphe-mobile">
                            {t("PageWebdesign.BannerWebdesign.Content1")}
                        </p>


                        <Link to="Section-Projects"
                              className="cta-btn-webdesign"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            {t("ContainerBanner2.CatBouton2")}
                        </Link>

                    </div>

                    <Link
                        to="Section-WhoAreWe"
                        className="scroll-down-webdesign"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </div>

                {/*---------------- Description ----------------*/}
                <div className="Section-WhoAreWe"
                     style={{backgroundColor:"#0b3f88"}}>
                    <div className="WhoAreWe-left">
                        <h1 className="web-text1"
                            // style={{color:"#8bc2fb"}}

                        >{t("PageWebdesign.WhatOurWebsite.BigTitle")}</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <p className="WhoAreWe-title"
                           style={{color:"white",fontFamily: "'Poppins', sans-serif"}}
                        >
                            {t("PageWebdesign.WhatOurWebsite.Title")}
                        </p>

                        <div className="WhoAreWe-text"
                             style={{color:"white"}}
                        >

                            <div className="checklist-item">
        <span className="icon-stack">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-check"></i>
        </span>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine1")}</div>
                            </div>

                            <div className="checklist-item">
        <span className="icon-stack">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-check"></i>
        </span>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine2")}</div>
                            </div>

                            <div className="checklist-item">
        <span className="icon-stack">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-check"></i>
        </span>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine3")}</div>
                            </div>

                            <div className="checklist-item">
        <span className="icon-stack">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-check"></i>
        </span>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine4")}</div>
                            </div>

                            <div className="checklist-item">
        <span className="icon-stack">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-check"></i>
        </span>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine5")}</div>
                            </div>

                            <div className="checklist-item">
        <span className="icon-stack">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-check"></i>
        </span>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine6")}</div>
                            </div>

                        </div>
                    </div>
                </div>

                {/*---------------- Projects ----------------*/}
                <div className="Section-Projects">

                    {/* En-tête de section */}
                    <div className="Projects-header">
                        <span className="Projects-eyebrow">{t("OurWebDesignProjects.title")}</span>
                        <h2 className="Projects-title">
                            {t("OurWebDesignProjects.subtitle")}
                        </h2>
                        <p className="Projects-intro">
                            {t("OurWebDesignProjects.contentTitle")}
                        </p>

                    </div>

                    {/* Grille des projets */}
                    <div className="Projects-grid">
                        {projects.map((project, index) => (
                            <div className="Project-card" key={index}>
                                <div className="Project-card-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="Project-img"
                                    />
                                </div>

                                <div className="Project-card-body">
                                    <h3 className="Project-card-title">
                                        {project.title}
                                    </h3>

                                    <p className="Project-card-desc">
                                        {project.desc}
                                    </p>

                                    <a href={project.link}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="cta-btn-webdesign Project-view-btn"
                                    >
                                        {t("OurWebDesignProjects.project.btn1")}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Experience/>

                {/*<PricingWebdesign/>*/}
                <OurWorkflow/>
                <WhatsappFunction/>
                <TopButton/>
                <Footer/>
            </div>
        </>
    );
}

export default Webdesign;