import { Helmet } from 'react-helmet-async';
import './PageFitnessFriend.css';
import NavbarMenu from "../Layout/NavbarMenu";

import { useTranslation } from "react-i18next";

import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import OurWorkflow from "../Layout/OurWorkflow";
import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";


import Michea_pic_about from "../Images/fitness_dames1.jpg";
import fitness_hand1 from "../Images/fitness_hand2.jpg";
import logo_fitnessfriend_white from "../Images/logo_fitnessfriend_white.png";
import typography_foto from "../Images/typography_foto.png";
import pic_fontansome2 from "../Images/pic_fontansome2.png";
import wireframe_test from "../Images/wireframe_test3.png";
import mockup_test from "../Images/Mockups_test2.png";
// import WhyUs2 from "../Layout/WhyUs2";
import WhatsappFunction from "../Components/WhatsappFunction";
import Experience from "../Layout/Experience";
import {Link} from "react-scroll";
import NavbarPageUxDesign from "../Layout/NavbarPageUxDesign";
import TopButton from "../Components/TopButton";
import fitness2 from "../Images/Pic_fitnessfriend2.png";
import fitness_hero_mobile from "../Images/Pic_fitnessfriend2_mobile.png";
import CarrouselFitness from "../Layout/CarrouselFitness";

// import {NavLink} from "react-router-dom";

function PageFitnessFriend() {

    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();

    // ✅ ICON CHECK GLOBAL (BLANC + VIOLET)
    const CheckIcon = () => (
        <span className="fa-stack" style={{ minWidth: "30px" }}>
            <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#3f97fb" }}></i>
            <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
        </span>
    );

    // ✅ Liste des points du plan d'action
    const actionPlanItems = [
        t("PageFitnessFriend.ActionPlan.Line1"),
        t("PageFitnessFriend.ActionPlan.Line2"),
        t("PageFitnessFriend.ActionPlan.Line3"),
        t("PageFitnessFriend.ActionPlan.Line4"),
        t("PageFitnessFriend.ActionPlan.Line5"),
        t("PageFitnessFriend.ActionPlan.Line6")
    ];

    // ✅ Méthodes utilisées (bleu / rouge / jaune)
    const methods = [
        {
            color: "#3f97fb",
            title: t("PageFitnessFriend.UsedMethod.Subtitle1"),
            text: t("PageFitnessFriend.UsedMethod.Content1")
        },
        {
            color: "#e6194b",
            title: t("PageFitnessFriend.UsedMethod.Subtitle2"),
            text: t("PageFitnessFriend.UsedMethod.Content2")
        },
        {
            color: "#f6a01a",
            title: t("PageFitnessFriend.UsedMethod.Subtitle3"),
            text: t("PageFitnessFriend.UsedMethod.Content3")
        }
    ];

    // ✅ Techniques utilisées
    const techniques = [
        {
            title: t("PageFitnessFriend.UsedTechnic.Subtitle1"),
            text: t("PageFitnessFriend.UsedTechnic.Content1")
        },
        {
            title: t("PageFitnessFriend.UsedTechnic.Subtitle2"),
            text: t("PageFitnessFriend.UsedTechnic.Content2")
        },
        {
            title: t("PageFitnessFriend.UsedTechnic.Subtitle3"),
            text: t("PageFitnessFriend.UsedTechnic.Content3")
        },
        {
            title: t("PageFitnessFriend.UsedTechnic.Subtitle4"),
            text: t("PageFitnessFriend.UsedTechnic.Content4")
        },
        {
            title: t("PageFitnessFriend.UsedTechnic.Subtitle5"),
            text: t("PageFitnessFriend.UsedTechnic.Content5")
        },
        {
            title: t("PageFitnessFriend.UsedTechnic.Subtitle6"),
            text: t("PageFitnessFriend.UsedTechnic.Content6")
        }
    ];

    // ✅ Éléments du travail de Design visuel
    const visualDesignItems = [
        t("PageFitnessFriend.VisualDeisgn.Line1"),
        t("PageFitnessFriend.VisualDeisgn.Line2"),
        t("PageFitnessFriend.VisualDeisgn.Line3"),
        t("PageFitnessFriend.VisualDeisgn.Line4"),
        t("PageFitnessFriend.VisualDeisgn.Line5"),
        t("PageFitnessFriend.VisualDeisgn.Line6"),
        t("PageFitnessFriend.VisualDeisgn.Line7")
    ];

    // ✅ Color Scheme
    const colorScheme = [
        {
            name: t("PageFitnessFriend.ColorScheme.Color1"),
            hex: "#0074c1"
        },
        {
            name: t("PageFitnessFriend.ColorScheme.Color2"),
            hex: "#85d5ff"
        },
        {
            name: t("PageFitnessFriend.ColorScheme.Color3"),
            hex: "#fd0200"
        },
        {
            name: t("PageFitnessFriend.ColorScheme.Color4"),
            hex: "#007c38"
        },
        {
            name: t("PageFitnessFriend.ColorScheme.Color5"),
            hex: "#FFFFFF"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.About.title")}</title>
                <meta name="description" content={t("HelmetSEO.About.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/About" />
            </Helmet>

            <div>
                {loading && <PageLoader />}

                <div className={`about-wrapper ${loading ? "hidden" : "visible"}`}>

                    <NavbarMenu/>
                    <NavbarMenuMobile/>
                    <NavbarPageUxDesign/>

                    <div className="container-top"></div>

                    {/* BANNER / HERO */}
                    <section className="fitnessfriend-hero">
                        <div className="fitnessfriend-hero-content">

                            <div className="fitnessfriend-hero-text">

                                <h1 className="fitnessfriend-hero-title">
                                    {t("PageFitnessFriend.Banner.title")}
                                </h1>

                                <p className="fitnessfriend-hero-paragraph">
                                    {t("PageFitnessFriend.Banner.Content")}
                                </p>

                                <div className="fitnessfriend-hero-buttons">
                                    <Link to="audiovisual-direction-Mike"
                                          className="Fitness-quote-button-about hero-btn-primary"
                                          offset={-90} duration={500} spy={true} smooth={true}
                                    >
                                        {t("PageFitnessFriend.Banner.Btn1")}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>

                                    <Link to="CarrouselFitness"
                                          className="hero-btn-secondary"
                                          offset={-90} duration={500} spy={true} smooth={true}
                                    >
                                        {t("PageFitnessFriend.Banner.Btn1")}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="fitnessfriend-hero-image">
                                <img
                                    src={fitness2}
                                    className="fitness-image-desktop"
                                    alt="FitnessFriend mobile application"
                                />
                                <img
                                    src={fitness_hero_mobile}
                                    className="fitness-image-mobile"
                                    alt="FitnessFriend mobile application - vue mobile"
                                />
                            </div>

                        </div>
                    </section>

                    {/*------------Description------------------------------------------*/}

                    {/* WHO ARE WE */}
                    <div className="Section-WhoAreWe"
                         id="Fitnessfriend-Description"
                         style={{background:"#ebf3fb"}}>
                        <div className="WhoAreWe-left">
                            <h1 style={{color:"#0b3f88"}}>{t("PageFitnessFriend.Description.title")}</h1>
                        </div>

                        <div className="WhoAreWe-right">

                            <p className="WhoAreWe-title" style={{color:"black", fontSize:"18px", fontWeight:"350"}}>
                                <strong style={{color:"#3f97fb"}}>FitnessFriend</strong> {t("PageFitnessFriend.Description.paragraphe1")}<br/><br/>

                                {t("PageFitnessFriend.Description.paragraphe2")}<br/><br/>

                                {t("PageFitnessFriend.Description.paragraphe3")}
                            </p>
                        </div>
                    </div>

                    {/*----------------Conception---------------------------------*/}

                    {/* RESTE DU CODE INCHANGÉ */}
                    <section className="audiovisual-direction-Mike" id="Fitnessfriend-Conception"
                             style={{
                        borderBottom: "0px solid",
                        borderImage: "linear-gradient(to right, #f9e054, #cb954d) 1",
                        paddingBottom:"100px",
                        backgroundColor:"white"
                    }}>
                        <div className="direction-Mike-inner"
                             style={{width:"100%", maxWidth:"1400px"}}>
                            <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>
                                <img src={Michea_pic_about} alt="Mike giving direction during a shoot"
                                     style={{width:"400px"}}/>
                            </div>

                            <div className="audiovisual-direction-text" style={{padding:"20px"}}>
                                <h1 style={{color:"#0b3f88", fontWeight:400}}>
                                    {t("PageFitnessFriend.Conception.title")}
                                </h1>

                                <h2 style={{color:"#3f97fb", marginBottom:"20px"}}>
                                    {t("PageFitnessFriend.Conception.Subtitle")}
                                </h2>

                                <p style={{color:"black", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>
                                    {t("PageFitnessFriend.Conception.paragraphe1")}<br/><br/>

                                    {t("PageFitnessFriend.Conception.paragraphe2")}<br/><br/>

                                    {t("PageFitnessFriend.Conception.paragraphe3")}<br/><br/>

                                    {t("PageFitnessFriend.Conception.paragraphe4")}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/*-------------------Plan d'action----------------------------------------------*/}

                    <section className="action-plan-section" id="Fitnessfriend-Plan-action">
                        <div className="action-plan-content">
                            <div className="action-plan-text">
                                <h1 className="action-plan-title">{t("PageFitnessFriend.ActionPlan.Title")}</h1>
                                <p className="action-plan-intro">
                                    {t("PageFitnessFriend.ActionPlan.Content")}
                                </p>

                                <ul className="action-plan-list">
                                    {actionPlanItems.map((item, index) => (
                                        <li className="action-plan-list-item" key={index}>
                                            <CheckIcon/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="action-plan-image">
                                <img src={fitness_hand1} alt="Aperçu de l'application FitnessFriend sur mobile"/>
                            </div>
                        </div>
                    </section>

                    {/*-------------------Methodes utilisées---------------------------------------*/}

                    <section className="methods-section" id="Fitnessfriend-Methodes">
                        <h1 className="methods-title">{t("PageFitnessFriend.UsedMethod.Title")}</h1>

                        <div className="methods-grid">
                            {methods.map((method, index) => (
                                <div className="method-card" key={index}>
                                    <div className="method-header">
                                        <span className="method-dot" style={{ backgroundColor: method.color }}></span>
                                        <h2 className="method-title">{method.title}</h2>
                                    </div>
                                    <p className="method-description">{method.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/*-------------------Techniques utilisées-------------------------------------*/}

                    <section className="techniques-section" id="Fitnessfriend-Techniques">
                        <h1 className="techniques-title">{t("PageFitnessFriend.UsedTechnic.Title")}</h1>

                        <div className="techniques-grid">
                            {techniques.map((technique, index) => (
                                <div className="technique-item" key={index}>
                                    <div className="technique-header">
                                        <CheckIcon/>
                                        <h2 className="technique-title">{technique.title}</h2>
                                    </div>
                                    <p className="technique-description">{technique.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/*------------------Exigences de l'application------------------------------*/}

                    <section className="application-requirements-section" id="Fitnessfriend-specifications">
                        <div className="application-requirements-content">
                            <div className="application-requirements-inner">
                                <h2 className="application-requirements-title">{t("PageFitnessFriend.SystemRequirements.Title")}</h2>

                                <p className="application-requirements-text">
                                    {t("PageFitnessFriend.SystemRequirements.Paragraph1")}
                                </p>

                                <p className="application-requirements-text">
                                    {t("PageFitnessFriend.SystemRequirements.Paragraph2")}
                                </p>

                                <p className="application-requirements-text">
                                    {t("PageFitnessFriend.SystemRequirements.Paragraph3")}
                                </p>

                                <p className="application-requirements-text">
                                    {t("PageFitnessFriend.SystemRequirements.Paragraph4")}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/*------------------Design visuel------------------------------*/}

                    <section className="visual-design-section" id="Fitnessfriend-visual" >
                        <div className="visual-design-content">
                            <div className="visual-design-inner">
                                <h2 className="visual-design-title">{t("PageFitnessFriend.VisualDeisgn.Title")}</h2>

                                <p className="visual-design-text">
                                    {t("PageFitnessFriend.VisualDeisgn.Paragraph1")}
                                </p>

                                <ul className="action-plan-list visual-design-list">
                                    {visualDesignItems.map((item, index) => (
                                        <li className="action-plan-list-item" key={index}>
                                            <CheckIcon/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="visual-design-text">
                                    {t("PageFitnessFriend.VisualDeisgn.Paragraph2")}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/*------------------Color scheme------------------------------*/}

                    <section className="color-scheme-section">
                        <h2 className="color-scheme-title">{t("PageFitnessFriend.ColorScheme.Title")}</h2>
                        <p className="color-scheme-intro">
                            {t("PageFitnessFriend.ColorScheme.Paragraph")}
                        </p>

                        <div className="color-scheme-grid">
                            {colorScheme.map((color, index) => (
                                <div className="color-item" key={index}>
                                    <div className="color-box" style={{ backgroundColor: color.hex }}></div>
                                    <h3>{color.name.toUpperCase()}</h3>
                                    <p>{color.hex}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/*------------------Logo FitnessFriend------------------------------*/}

                    <section className="logo-fitnessfriend-section">
                        <div className="logo-fitnessfriend-text">
                            <h2 className="logo-fitnessfriend-title">{t("PageFitnessFriend.Logo.Title")}</h2>
                            <p className="logo-fitnessfriend-description">
                                {t("PageFitnessFriend.Logo.Content")}
                            </p>
                        </div>

                        <div className="logo-fitnessfriend-image">
                            <img src={logo_fitnessfriend_white} alt="Logo FitnessFriend"/>
                        </div>
                    </section>

                    {/*------------------Typography------------------------------*/}

                    <section className="typography-section">
                        <div className="typography-inner">
                            <div className="typography-image">
                                <img src={typography_foto} alt="Typographie utilisée dans FitnessFriend"/>
                            </div>

                            <div className="typography-text">
                                <h2 className="typography-title">{t("PageFitnessFriend.Typography.Title")}</h2>
                                <p className="typography-description">
                                    {t("PageFitnessFriend.Typography.Content")}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/*------------------Icones------------------------------*/}

                    <section className="icons-section">
                        <h2 className="icons-title">{t("PageFitnessFriend.Icons.Title")}</h2>
                        <p className="icons-description">
                            {t("PageFitnessFriend.Icons.ContentLine1")}{" "}
                            <a
                                href="https://fontawesome.com/start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icons-external-link"
                            >
                                Font Awesome
                            </a>. {t("PageFitnessFriend.Icons.ContentLine2")}
                        </p>

                        <div className="icons-image">
                            <img src={pic_fontansome2} alt="Icônes Font Awesome utilisées dans FitnessFriend"/>
                        </div>
                    </section>

                    {/*------------------Wireframes------------------------------*/}

                    <section className="wireframes-section" id="Fitnessfriend-Wireframes">
                        <div className="wireframes-inner">
                            <div className="wireframes-image">
                                <img src={wireframe_test} alt="Wireframe de l'application FitnessFriend"/>
                            </div>

                            <div className="wireframes-text">
                                <h2 className="wireframes-title">{t("PageFitnessFriend.Wireframes.Title")}</h2>
                                <p className="wireframes-description">
                                    {t("PageFitnessFriend.Wireframes.Content")}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/*------------------Mockups------------------------------*/}

                    <section className="mockups-section">
                        <div className="mockups-inner">
                            <div className="mockups-text">
                                <h2 className="mockups-title">{t("PageFitnessFriend.Mockups.Title")}</h2>
                                <p className="mockups-description">
                                    {t("PageFitnessFriend.Mockups.Content")}
                                </p>
                            </div>

                            <div className="mockups-image">
                                <img src={mockup_test} alt="Maquette de l'application FitnessFriend"/>
                            </div>
                        </div>
                    </section>

                    {/* Ancre temporaire — future section "résultat" */}
                    <div id="Fitnessfriend-Result"></div>

                    {/*<WhyUs2/>*/}
                    <div className="CarrouselFitness">
                        <CarrouselFitness/>
                    </div>
                    <Experience/>
                    <OurWorkflow/>
                    <WhatsappFunction/>
                    <TopButton/>
                    <Footer/>

                </div>
            </div>
        </>
    );
}

export default PageFitnessFriend;