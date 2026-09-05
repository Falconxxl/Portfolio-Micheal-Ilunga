import { Helmet } from 'react-helmet-async';
import './Projects.css';
import NavbarMenu from "../Layout/NavbarMenu";
// import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";

// import video_boucle_banner from "../../src/MyVideos/z_banner40 (quality 24MB 2).mp4";
// import video_boucle_banner_mobile from "../../src/MyVideos/Banner_Site_ boucle (Mobile 28MB).mp4";

// import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";
//
// import video_drone from "../../src/MyVideos/DRONE_SHOT_VIDEO_correct2.mp4";
// import video_drone_mobile from "../../src/MyVideos/DRONE_SHOT_VIDEO (Mobile 32 MB).mp4";
//
// import compo_webdesign_laptop1 from "../Images/compo_laptop_nexteclat.png";
// import compo_webdesign_laptop2 from "../Images/compo_laptop_falcon.png";
// import compo_webdesign_laptop3 from "../Images/compo_laptop_cyrus.png";
// import compo_laptop_PashaBouw from "../Images/compo_laptop_PashaBouw.png";
// import compo_laptop_JupiterSafe from "../Images/compo_laptop_JupiterSafe.png";
//
// import ArchiveVideoReel from "../Layout/ArchiveVideoReel";
// import PhotographyGallery from "../Components/PhotographyGallery";
//
// import branding_image1 from "../Images/image_papeterie_branding4";
// import branding_image2 from "../Images/image_support_pub2";
// import branding_image3 from "../Images/image_branding_digital3";
// import branding_image4 from "../Images/image_branding_digital4";
//
// import compo_webdesign_laptop1 from "../Images/compo_laptop1a_webdesign.png";
// import compo_webdesign_laptop2 from "../Images/compo_laptop2a_webdesign.png";
// import compo_webdesign_laptop3 from "../Images/compo_laptop3a_webdesign.png";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";
import Experience from "../Layout/Experience";
import SkillsDetail from "../Layout/SkillsDetail";
import TopButton from "../Components/TopButton";
// import Testimony from "../Layout/Testimony";


function Projects() {

    const { t } = useTranslation();
    // const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // page lourde (vidéos / images)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    // Liste des projets affichés dans la grille.
    // const projects = [
    //     {
    //         image: compo_laptop_PashaBouw,
    //         title: "Pasha Bouw",
    //         desc: t("OurWebDesignProjects.project.contentLine4"),
    //         link: "https://6a6b1bf01322941cd02b843f--pashabouw.netlify.app"
    //     },
    //     {
    //         image: compo_laptop_JupiterSafe,
    //         title: "Jupiter Safe Consulting",
    //         desc: t("OurWebDesignProjects.project.contentLine5"),
    //         link: "https://6a6811375ba1e1f4b99c0e41--jupiter-safe-consulting.netlify.app/"
    //     },
    //     {
    //         image: compo_webdesign_laptop3,
    //         title: t("OurWebDesignProjects.project.title3"),
    //         desc: t("OurWebDesignProjects.project.contentLine3"),
    //         // link: "#"
    //     },
    //     {
    //         image: compo_webdesign_laptop1,
    //         title: t("OurWebDesignProjects.project.title1"),
    //         desc: t("OurWebDesignProjects.project.contentLine1"),
    //         link: "https://nexteclat.com"
    //     },
    //     {
    //         image: compo_webdesign_laptop2,
    //         title: t("OurWebDesignProjects.project.title2"),
    //         desc: t("OurWebDesignProjects.project.contentLine2"),
    //         link: "https://www.falconbeat.nl"
    //     },
    // ];

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Projects.title")}</title>
                <meta name="description" content={t("HelmetSEO.Projects.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Projects" />
            </Helmet>

            {loading && <PageLoader />}

            <div className={`projects-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                <SkillsDetail/>
                {/*<Navbar2/>*/}

                {/*----------banner--------------------------------------*/}
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
                {/*        to="#next-section"*/}
                {/*        className="AudioVisual-scroll-down"*/}
                {/*        offset={-90}*/}
                {/*        duration={500}*/}
                {/*        spy*/}
                {/*        smooth*/}
                {/*    >*/}
                {/*        <i className="fa-solid fa-angles-down"></i>*/}
                {/*    </Link>*/}
                {/*</header>*/}

                {/*---------------- Projects ----------------*/}
                {/*<div className="Section-Projects">*/}

                {/*    /!* En-tête de section *!/*/}
                {/*    <div className="Projects-header">*/}
                {/*        <span className="Projects-eyebrow">{t("OurWebDesignProjects.title")}</span>*/}
                {/*        <h2 className="Projects-title">*/}
                {/*            {t("OurWebDesignProjects.subtitle")}*/}
                {/*        </h2>*/}
                {/*        <p className="Projects-intro">*/}
                {/*            {t("OurWebDesignProjects.contentTitle")}*/}
                {/*        </p>*/}
                {/*        /!*<p className="Projects-tagline">*!/*/}
                {/*        /!*    Nous transformons les idées en expériences digitales puissantes.*!/*/}
                {/*        /!*</p>*!/*/}
                {/*        <button*/}
                {/*            className="cta-btn-webdesign Projects-cta"*/}
                {/*            onClick={() => setOpenQuote(true)}*/}
                {/*        >*/}
                {/*            {t("OurWebDesignProjects.btnRealisation")}*/}
                {/*        </button>*/}
                {/*        <RequestAQuoteModal*/}
                {/*            open={openQuote}*/}
                {/*            onClose={() => setOpenQuote(false)}*/}
                {/*        >*/}
                {/*            <RequestAQuote />*/}
                {/*        </RequestAQuoteModal>*/}
                {/*    </div>*/}

                {/*    /!* Grille des projets *!/*/}
                {/*    <div className="Projects-grid">*/}
                {/*        {projects.map((project, index) => (*/}
                {/*            <div className="Project-card" key={index}>*/}
                {/*                <div className="Project-card-image">*/}
                {/*                    <img*/}
                {/*                        src={project.image}*/}
                {/*                        alt={project.title}*/}
                {/*                        className="Project-img"*/}
                {/*                    />*/}
                {/*                </div>*/}

                {/*                <div className="Project-card-body">*/}
                {/*                    <h3 className="Project-card-title">*/}
                {/*                        {project.title}*/}
                {/*                    </h3>*/}

                {/*                    <p className="Project-card-desc">*/}
                {/*                        {project.desc}*/}
                {/*                    </p>*/}

                {/*                    <a href={project.link}*/}
                {/*                       target="_blank"*/}
                {/*                       rel="noopener noreferrer"*/}
                {/*                       className="cta-btn-webdesign Project-view-btn"*/}
                {/*                    >*/}
                {/*                        {t("OurWebDesignProjects.project.btn1")}*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*---------------Section Drone----------------*/}
                {/*<div className="section-drone-video">*/}
                {/*    <div className="texte-drone">*/}
                {/*        <h1> {t("DroneShot.Title")}</h1>*/}
                {/*        <h2>{t("DroneShot.Subtitle")}</h2>*/}
                {/*        <p>*/}
                {/*            {t("DroneShot.Content")}*/}
                {/*        </p>*/}
                {/*        <button className="Drone-quote-button"*/}
                {/*                onClick={() => setOpenQuote(true)}>*/}
                {/*            {t("ContainerBanner2.CatBouton")}*/}
                {/*            <i className="fa-solid fa-arrow-right"></i>*/}
                {/*        </button>*/}
                {/*        <RequestAQuoteModal*/}
                {/*            open={openQuote}*/}
                {/*            onClose={() => setOpenQuote(false)}*/}
                {/*        >*/}
                {/*            <RequestAQuote />*/}
                {/*        </RequestAQuoteModal>*/}

                {/*    </div>*/}

                {/*    <div className="wrapper-drone-video">*/}
                {/*        <video*/}
                {/*            className="drone-video-desktop"*/}
                {/*            src={video_drone}*/}
                {/*            autoPlay*/}
                {/*            muted*/}
                {/*            loop*/}
                {/*            playsInline*/}
                {/*        />*/}
                {/*        <video*/}
                {/*            className="drone-video-mobile"*/}
                {/*            src={video_drone_mobile}*/}
                {/*            autoPlay*/}
                {/*            muted*/}
                {/*            loop*/}
                {/*            playsInline*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<ArchiveVideoReel/>*/}
                {/*<PhotographyGallery/>*/}

                {/*------------Our Branding Divisions----------------*/}

                {/*<div className="Container-OurWorkflow" style={{backgroundColor:"white"}}>*/}
                {/*    <h1 style={{color:"#1c6077"}}>{t("Branding.OurBrandingDivisions.BigTitle")}</h1>*/}

                {/*    <div className="OurWorkflow-wrapper">*/}

                {/*        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image1} alt="wedding_home"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{textAlign:"center", width:"100%"}}/>*/}
                {/*            <h2>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.Title")}</h2>*/}
                {/*            <ul className="checklist">*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine1")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine2")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine3")}</span>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image2} alt="wedding_home"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{textAlign:"center", width:"100%"}}/>*/}
                {/*            <h2>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.Title")}</h2>*/}
                {/*            <ul className="checklist">*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.ContentLine1")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.ContentLine2")}</span>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image3} alt="wedding_home"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{textAlign:"center", width:"100%"}}/>*/}
                {/*            <h2>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.Title")}</h2>*/}
                {/*            <ul className="checklist">*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine1")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine2")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine3")}</span>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image4} alt="wedding_home"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{textAlign:"center", width:"100%"}}/>*/}
                {/*            <h2>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.Title")}</h2>*/}
                {/*            <ul className="checklist">*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine1")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine2")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine3")}</span>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <i className="fa-solid fa-circle-check fa-2x"></i>*/}
                {/*                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine4")}</span>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

                {/*----------------Webdesign Projects----------------*/}

                {/*<div className="Container-OurWorkflow">*/}
                {/*    <h1>{t("OurWebDesignProjects")}</h1>*/}

                {/*    <div className="OurWorkflow-wrapper">*/}
                {/*        <img src={compo_webdesign_laptop1} alt="" style={{ width: "400px" }} />*/}
                {/*        <img src={compo_webdesign_laptop2} alt="" style={{ width: "400px" }} />*/}
                {/*        <img src={compo_webdesign_laptop3} alt="" style={{ width: "400px" }} />*/}
                {/*    </div>*/}
                {/*</div>*/}

                <Experience/>

                {/*<Testimony/>*/}


                <WhatsappFunction/>
                <TopButton/>
                <Footer/>
            </div>
        </>
    );
}

export default Projects;