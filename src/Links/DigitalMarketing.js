import { Helmet } from "react-helmet-async";
import "./DigitalMarketing.css";
import "../Layout/WhyUs2.css";

import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import fitness1 from "../Images/fitness10.png";

import desktop_banner_photograhy from "../Images/background_UxDesign5_portfolio.jpg";
import mobile_banner from "../Images/background_portfolio_uxdesign5_mobile.jpg";

import OurWorkflow from "../Layout/OurWorkflow";
import WhatsappFunction from "../Components/WhatsappFunction";
import Phase from "../Layout/Phase";
import TopButton from "../Components/TopButton";


function DigitalMarketing() {

    const { t } = useTranslation();
    const location = useLocation();


    // ---------------------------------------------------------
    // SCROLL AUTOMATIQUE VERS FITNESS-FRIEND
    // ---------------------------------------------------------

    useEffect(() => {

        if (location.state?.scrollTo !== "fitness-section") {
            return;
        }

        const timer = setTimeout(() => {

            const section = document.getElementById("fitness-section");

            if (!section) {
                return;
            }

            const navbarHeight = 90;

            const sectionPosition =
                section.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth"
            });

        }, 150);

        return () => {
            clearTimeout(timer);
        };

    }, [location]);


    // ---------------------------------------------------------
    // ICON CHECK
    // ---------------------------------------------------------

    const CheckIcon = () => (
        <span
            className="fa-stack"
            style={{ minWidth: "30px" }}
        >
            <i
                className="fa-solid fa-circle fa-stack-2x"
                style={{ color: "#3f97fb" }}
            ></i>

            <i
                className="fa-solid fa-check fa-stack-1x"
                style={{
                    color: "white",
                    fontSize: "14px"
                }}
            ></i>
        </span>
    );


    // ---------------------------------------------------------
    // SERVICES
    // ---------------------------------------------------------

    const digitalPlatforms = [1, 2, 3, 4, 5, 6, 7, 8];

    const digitalProducts = [1, 2, 3, 4, 5, 6, 7, 8];

    const websitesExperiences = [1, 2, 3, 4, 5, 6, 7];

    const ecommerce = [1, 2, 3, 4, 5, 6];

    const otherServices = [1, 2, 3, 4, 5, 6];


    return (

        <>

            {/* =====================================================
                SEO
            ====================================================== */}

            <Helmet>

                <title>
                    {t("HelmetSEO.DigitalMarketing.title")}
                </title>

                <meta
                    name="description"
                    content={t("HelmetSEO.DigitalMarketing.description")}
                />

                <link
                    rel="canonical"
                    href="https://www.falconxxl.com/DigitalMarketing"
                />

            </Helmet>


            {/* =====================================================
                PAGE
            ====================================================== */}

            <div className="Container-DigitalMarketing">


                {/* =================================================
                    NAVIGATION
                ================================================= */}

                <NavbarMenu />

                <NavbarMenuMobile />


                {/* =================================================
                    HERO
                ================================================= */}

                <div className="Container-webdesign">


                    {/* Desktop banner */}

                    <img
                        src={desktop_banner_photograhy}
                        alt="Digital Marketing banner"
                        className="Webdesign-banner desktop-image"
                    />


                    {/* Mobile banner */}

                    <img
                        src={mobile_banner}
                        alt="Digital Marketing mobile banner"
                        className="Webdesign-banner mobile-image"
                    />


                    {/* Hero content */}

                    <div
                        className="hero-content-webdesign"
                        style={{ color: "#0b3f88" }}
                    >

                        <h1 style={{ color: "#0b3f88" }}>
                            {t("DigitalMarketing.Banner.Title")}
                        </h1>


                        {/* Desktop */}

                        <p
                            className="webdesign-paragraphe-desktop"
                            style={{
                                color: "#0a3e89",
                                width: "1000px"
                            }}
                        >
                            {t("DigitalMarketing.Banner.Content1")}
                        </p>


                        {/* Mobile */}

                        <p
                            className="webdesign-paragraphe-mobile"
                            style={{
                                color: "black",
                                fontSize: "17px"
                            }}
                        >
                            {t("DigitalMarketing.Banner.Content1")}
                        </p>


                        {/* CTA */}

                        <Link
                            to="fitness-section"
                            className="cta-btn-webdesign"
                            offset={-90}
                            duration={500}
                            spy={true}
                            smooth={true}
                        >
                            {t("ContainerBanner2.CatBouton2")} <i className="fa-solid fa-arrow-right-long"></i>

                        </Link>

                    </div>


                    {/* Scroll down */}

                    <Link
                        to="AudioVisual-Description"
                        className="scroll-down-webdesign"
                        style={{
                            border: "2px solid #918efb"
                        }}
                        offset={-90}
                        duration={500}
                        spy={true}
                        smooth={true}
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>

                </div>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <div
                    className="AudioVisual-Description"
                    style={{
                        backgroundColor: "black"
                    }}
                >

                    <div
                        className="AudioVisual-Description-left"
                        style={{
                            border: "2px solid #fc5385",
                            backgroundColor: "black"
                        }}
                    >

                        <p style={{ color: "white" }}>
                            {t("DigitalMarketing.Description.Title")}
                        </p>

                    </div>


                    <div
                        className="AudioVisual-Description-Right"
                        style={{
                            border: "2px solid #198bf9",
                            backgroundColor: "black"
                        }}
                    >

                        <p style={{ color: "white" }}>
                            {t("DigitalMarketing.Description.Content")}
                        </p>

                    </div>

                </div>


                {/* =================================================
                    FITNESS FRIEND
                ================================================= */}

                <section
                    className="Pixam-section"
                    id="fitness-section"
                >

                    <h1>
                        FitnessFriend
                    </h1>


                    <p className="text-intro-fitness">

                        {t(
                            "DigitalMarketing.FitnessFriend1.Content1"
                        )}

                    </p>


                    <NavLink
                        to="/PageFitnessFriend"
                        className="Pixam-element"
                    >


                        {/* Text */}

                        <div
                            className="container-info-Pixam"
                            id="container-info-fitness"
                        >

                            <div className="container-info-Pixam2">

                                <h2>
                                    FitnessFriend
                                </h2>


                                <p>
                                    {t(
                                        "DigitalMarketing.FitnessFriend1.Content2"
                                    )}
                                </p>


                                <span
                                    className="button-info-pixam"
                                    id="button-info-fitness"
                                >
                                    {t(
                                        "DigitalMarketing.FitnessFriend1.CtaView"
                                    )}
                                </span>

                            </div>

                        </div>


                        {/* Image */}

                        <div
                            className="container-image-Pixam"
                            id="container-image-fitness"
                        >

                            <img
                                src={fitness1}
                                alt="FitnessFriend project"
                                className="image-pixam1"
                            />

                        </div>

                    </NavLink>

                </section>


                {/* =================================================
                    PHASE
                ================================================= */}

                <Phase />


                {/* =================================================
                    SERVICES
                ================================================= */}

                <div
                    className="Container-WhyUs"
                    style={{ color: "#0b3f88" }}
                >


                    {/* LEFT */}

                    <div className="Container-WhyUs-left">

                        <h1>
                            {t(
                                "DigitalMarketing.TypeServicesDigitalMarketing.Title"
                            )}
                        </h1>

                    </div>


                    {/* RIGHT */}

                    <div className="Container-WhyUs-right">


                        {/* =========================================
                            DIGITAL PLATFORMS
                        ========================================== */}

                        <div className="Container-WhyUs-right-content">

                            <div className="Container-WhyUs-right-title">

                                {t(
                                    "DigitalMarketing.TypeServicesDigitalMarketing.DigitalPlatforms.Title"
                                )}

                            </div>


                            <div className="Container-WhyUs-right-paragraf">

                                {digitalPlatforms.map((i) => (

                                    <div
                                        className="icon-text"
                                        key={i}
                                    >

                                        <CheckIcon />

                                        <p>
                                            {t(
                                                `DigitalMarketing.TypeServicesDigitalMarketing.DigitalPlatforms.ContentLine${i}`
                                            )}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* =========================================
                            DIGITAL PRODUCTS
                        ========================================== */}

                        <div className="Container-WhyUs-right-content">

                            <div className="Container-WhyUs-right-title">

                                {t(
                                    "DigitalMarketing.TypeServicesDigitalMarketing.DigitalProducts.Title"
                                )}

                            </div>


                            <div className="Container-WhyUs-right-paragraf">

                                {digitalProducts.map((i) => (

                                    <div
                                        className="icon-text"
                                        key={i}
                                    >

                                        <CheckIcon />

                                        <p>
                                            {t(
                                                `DigitalMarketing.TypeServicesDigitalMarketing.DigitalProducts.ContentLine${i}`
                                            )}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* =========================================
                            WEBSITES & EXPERIENCES
                        ========================================== */}

                        <div className="Container-WhyUs-right-content">

                            <div className="Container-WhyUs-right-title">

                                {t(
                                    "DigitalMarketing.TypeServicesDigitalMarketing.WebsitesExperiences.Title"
                                )}

                            </div>


                            <div className="Container-WhyUs-right-paragraf">

                                {websitesExperiences.map((i) => (

                                    <div
                                        className="icon-text"
                                        key={i}
                                    >

                                        <CheckIcon />

                                        <p>
                                            {t(
                                                `DigitalMarketing.TypeServicesDigitalMarketing.WebsitesExperiences.ContentLine${i}`
                                            )}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* =========================================
                            ECOMMERCE
                        ========================================== */}

                        <div className="Container-WhyUs-right-content">

                            <div className="Container-WhyUs-right-title">

                                {t(
                                    "DigitalMarketing.TypeServicesDigitalMarketing.Ecommerce.Title"
                                )}

                            </div>


                            <div className="Container-WhyUs-right-paragraf">

                                {ecommerce.map((i) => (

                                    <div
                                        className="icon-text"
                                        key={i}
                                    >

                                        <CheckIcon />

                                        <p>
                                            {t(
                                                `DigitalMarketing.TypeServicesDigitalMarketing.Ecommerce.ContentLine${i}`
                                            )}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* =========================================
                            OTHER SERVICES
                        ========================================== */}

                        <div className="Container-WhyUs-right-content">

                            <div className="Container-WhyUs-right-title">

                                {t(
                                    "DigitalMarketing.TypeServicesDigitalMarketing.Other.Title"
                                )}

                            </div>


                            <div className="Container-WhyUs-right-paragraf">

                                {otherServices.map((i) => (

                                    <div
                                        className="icon-text"
                                        key={i}
                                    >

                                        <CheckIcon />

                                        <p>
                                            {t(
                                                `DigitalMarketing.TypeServicesDigitalMarketing.Other.ContentLine${i}`
                                            )}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    FOOTER / FLOATING COMPONENTS
                ================================================= */}

                <OurWorkflow />

                <WhatsappFunction />

                <TopButton />

                <Footer />

            </div>

        </>

    );
}


export default DigitalMarketing;