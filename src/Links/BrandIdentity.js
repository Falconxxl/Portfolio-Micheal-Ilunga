import { Helmet } from 'react-helmet-async';
import './BrandIdentity.css';
import NavbarMenu from "../Layout/NavbarMenu";
// import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import desktop_banner_branding from "../Images/background_branding_portfolio2.png";
import mobile_banner from "../Images/background_mobile_branding_portfolio2.png";

import {Link} from "react-scroll";

import React, { useState, useEffect } from "react";

import PageLoader from "../Components/PageLoader";

import TypeBranding from "../Layout/TypeBranding";



import OurWorkflow from "../Layout/OurWorkflow";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";
import Experience from "../Layout/Experience";
// import Testimony from "../Layout/Testimony";
import TopButton from "../Components/TopButton";
// import BrandingProjects from "../Layout/BrandingProjects";

function BrandIdentity() {

    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // ✅ ICON PROPRE (comme WhyUs2)
    const CheckIcon = () => (
        <span className="fa-stack" style={{ minWidth: "28px" }}>
            <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#7856f4" }}></i>
            <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
        </span>
    );

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.BrandIdentity.title")}</title>
                <meta name="description" content={t("HelmetSEO.BrandIdentity.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/BrandIdentity" />
            </Helmet>

            {loading && <PageLoader />}

            <div>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<Navbar2/>*/}

                {/*------banner---------------*/}
                <header className="hero-banner">
                    <img src={desktop_banner_branding} alt="Banner desktop" className="hero-image desktop-image" />
                    <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />

                    <div className="hero-content">
                        <h1>{t("Branding.Banner.Title")}</h1>

                        <p>
                            {t("Branding.Banner.ContentLine1")}<br/>
                            {/*{t("Branding.Banner.ContentLine2")}<br/>*/}
                            {/*{t("Branding.Banner.ContentLine3")}*/}
                        </p>

                        <Link to="TypeBranding"
                              className="Fitness-quote-button-about hero-btn-primary"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            {t("Branding.Banner.buttonCta")}
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                    </div>

                    <Link to="AudioVisual-Description" className="scroll-down"
                          offset={-90} duration={500} spy={true} smooth={true} >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </header>

                {/*------------description--------------*/}
                {/*<div className="AudioVisual-Description">*/}

                {/*    <div className="AudioVisual-Description-left">*/}
                {/*        <h1 style={{fontSize:"50px"}}>*/}
                {/*            {t("Branding.Descsription.Title")}*/}
                {/*        </h1>*/}

                {/*        <p style={{fontSize:"25px"}}>*/}
                {/*            {t("Branding.Descsription.Subtitle")}*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    <div className="AudioVisual-Description-Right">*/}
                {/*        <p style={{fontSize:"16px"}}>*/}
                {/*            {t("Branding.Descsription.ContentLine1")}{" "}*/}
                {/*            <strong style={{color:"#7357eb"}}>{t("Branding.Descsription.ContentLineBold1")}</strong>{" "}*/}
                {/*            {t("Branding.Descsription.ContentLine2")}{" "}*/}
                {/*            <strong style={{color:"#7357eb"}}>{t("Branding.Descsription.ContentLineBold2")}</strong>{" "}*/}
                {/*            {t("Branding.Descsription.ContentLine3")}*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<BrandingProjects/>*/}

                <div className="TypeBranding">
                    <TypeBranding/>
                </div>

                <Experience/>

                {/*------------NOS POLES BRANDING (UPDATED ICONS)----------------*/}

                {/*<div className="Container-OurWorkflow" style={{backgroundColor:"white"}}>*/}
                {/*    <h1 style={{color:"black"}}>*/}
                {/*        {t("Branding.OurBrandingDivisions.BigTitle")}*/}
                {/*    </h1>*/}

                {/*    <div className="OurWorkflow-wrapper">*/}

                {/*        /!* CARD 1 *!/*/}
                {/*        <div className="Container-OurWorkflow-content"*/}
                {/*             style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image1} alt="branding"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{width:"100%"}}/>*/}

                {/*            <h2 style={{color:"white"}}>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.Title")}</h2>*/}

                {/*            <ul className="checklist" style={{color:"white"}}>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine1")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine2")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine3")}</span></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*        /!* CARD 2 *!/*/}
                {/*        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image2} alt="branding"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{width:"100%"}}/>*/}

                {/*            <h2 style={{color:"white"}}>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.Title")}</h2>*/}

                {/*            <ul className="checklist"*/}
                {/*                style={{color:"white"}}>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.ContentLine1")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.ContentLine2")}</span></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*        /!* CARD 3 *!/*/}
                {/*        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image3} alt="branding"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{width:"100%"}}/>*/}

                {/*            <h2 style={{color:"white"}}>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.Title")}</h2>*/}

                {/*            <ul className="checklist" style={{color:"white"}}>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine1")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine2")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine3")}</span></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*        /!* CARD 4 *!/*/}
                {/*        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>*/}
                {/*            <img src={branding_image4} alt="branding"*/}
                {/*                 className="icon_home_workflow"*/}
                {/*                 style={{width:"100%"}}/>*/}

                {/*            <h2 style={{color:"white"}}>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.Title")}</h2>*/}

                {/*            <ul className="checklist" style={{color:"white"}}>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine1")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine2")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine3")}</span></li>*/}
                {/*                <li><CheckIcon /><span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine4")}</span></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

                <OurWorkflow/>

                {/* WHY US */}
                <div className="Section-WhoAreWe" style={{background:"black"}}>
                    <div className="WhoAreWe-left">
                        <h1>{t("Branding.WhyOurBranding.Title")}</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <div className="WhoAreWe-text">

                            {/* ICON PROPRE (comme WhyUs2) */}


                            {[1,2,3,4,5,6,7].map((i) => (
                                <div className="checklist-item" key={i}>
                                    <CheckIcon />

                                    <div>
                                        <strong style={{color:"#75deff"}}>
                                            {t(`Branding.WhyOurBranding.ContentLine${i}a`)}
                                        </strong>
                                        {t(`Branding.WhyOurBranding.ContentLine${i}b`)}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/*<Testimony/>*/}

                <WhatsappFunction/>
                <TopButton/>
                <Footer/>
            </div>
        </>
    );
}

export default BrandIdentity;