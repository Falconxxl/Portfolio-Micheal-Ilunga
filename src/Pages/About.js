import { Helmet } from 'react-helmet-async';
import './About.css';
import NavbarMenu from "../Layout/NavbarMenu";

import { useTranslation } from "react-i18next";

import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import OurWorkflow from "../Layout/OurWorkflow";

import video_drone from "../../src/MyVideos/DRONE_SHOT_VIDEO_correct2.mp4";
import video_drone_mobile from "../../src/MyVideos/DRONE_SHOT_VIDEO (Mobile 32 MB).mp4";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";


import Michea_pic_about from "../Images/michael_pic1.jpg";
import pic_about_tel1 from "../Images/pic_about_tel2b.jpg";
import WhyUs2 from "../Layout/WhyUs2";
import CertificationMichael from "../Layout/CertificationMichael";
import OurTeamAbout from "../Layout/OurTeamAbout";
import WhatsappFunction from "../Components/WhatsappFunction";
import Experience from "../Layout/Experience";
import Testimony from "../Layout/Testimony";
import {Link} from "react-scroll";
import TopButton from "../Components/TopButton";

function About() {

    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();

    // ✅ ICON CHECK GLOBAL (BLANC + VIOLET)
    const CheckIcon = () => (
        <span className="fa-stack" style={{ minWidth: "30px" }}>
            <i className="fa-solid fa-circle fa-stack-2x" style={{ color: "#3f97fb" }}></i>
            <i className="fa-solid fa-check fa-stack-1x" style={{ color: "white", fontSize: "14px" }}></i>
        </span>
    );

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

                    <div className="container-top"></div>

                    {/* BANNER */}
                    <div className="section-drone-video" style={{ backgroundColor: "white" }}>
                        <div className="texte-drone" style={{ backgroundColor: "white" }}>

                            <h1 style={{ fontSize: "48px", lineHeight:1.1 , marginTop:"20px",
                                marginBottom:"20px",fontWeight:400, color:"#0b3f88"}}>
                                {t("About.Banner.Title")}
                            </h1>

                            <p style={{color:"black"}}>
                                {t("About.Banner.Content")}
                            </p>

                            <Link to="audiovisual-direction-Mike"
                                className="Drone-quote-button-about"
                                offset={-90} duration={500} spy={true} smooth={true}
                            >
                                {t("About.Banner.Button")}
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>


                        </div>

                        <div className="wrapper-drone-video" style={{border:"none"}}>
                            <video className="drone-video-desktop" src={video_drone} autoPlay muted loop playsInline />
                            <video className="drone-video-mobile" src={video_drone_mobile} autoPlay muted loop playsInline />
                        </div>
                    </div>

                    {/* WHO ARE WE */}
                    <div className="Section-WhoAreWe" style={{background:"#0b3f88"}}>
                        <div className="WhoAreWe-left">
                            <h1 >{t("About.WhoAreWe.Title")}</h1>
                        </div>

                        <div className="WhoAreWe-right">

                            <p className="WhoAreWe-title" style={{color:"white", fontSize:"18px", fontWeight:"400"}}>
                                <span style={{color:"white"}}> MICHEAL ILUNGA</span>
                                {t("About.WhoAreWe.Subtitle2")}
                            </p>

                            <div className="WhoAreWe-text">

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine1a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine1b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine2a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine2b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine3a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine3b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine4a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine4b")}
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <CheckIcon />
                                    <div style={{fontSize:"16px", fontWeight:"400"}}>
                                        <strong style={{color:"#75deff"}}>
                                            {t("About.WhoAreWe.ContentLine5a")}
                                        </strong>
                                        {t("About.WhoAreWe.ContentLine5b")}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RESTE DU CODE INCHANGÉ */}
                    <section className="audiovisual-direction-Mike" style={{
                        borderBottom: "0px solid",
                        borderImage: "linear-gradient(to right, #f9e054, #cb954d) 1",
                        paddingBottom:"0px",
                        backgroundColor:"white"
                    }}>
                        <div className="direction-Mike-inner"
                             style={{width:"100%", maxWidth:"1400px", borderBottom: "1px solid #5c3be8"}}>
                            <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>
                                <img src={Michea_pic_about} alt="Mike giving direction during a shoot"
                                     style={{width:"400px"}}/>
                            </div>

                            <div className="audiovisual-direction-text" style={{padding:"20px"}}>
                                <h1 style={{color:"#0079ff"}}>
                                    {t("FounderMichael.BigTitle")}
                                </h1>

                                <p style={{color:"black", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>
                                    {t("FounderMichael.Paragraphe1")}<br/><br/>
                                    {t("FounderMichael.Paragraphe2")}<br/><br/>
                                    {t("FounderMichael.Paragraphe3")}<br/><br/>
                                    {t("FounderMichael.Paragraphe4")}<br/><br/>
                                    {t("FounderMichael.Paragraphe5")}<br/><br/>
                                    {t("FounderMichael.Paragraphe6")}
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="CertificationMichael">
                        <CertificationMichael/>
                    </div>

                    <section className="audiovisual-direction-Mike" style={{backgroundColor:"#0b3f88"}}>
                        <div className="direction-Mike-inner" style={{width:"100%", maxWidth:"1400px"}}>

                            <div className="audiovisual-direction-text" style={{backgroundColor:"#0b3f88", padding:"20px"}}>
                                <h1 style={{color:"white", marginBottom:"30px"}}>
                                    {t("MissionVision.OurMission")}
                                </h1>

                                <h2 style={{color:"#a2cdfd", fontWeight:"400", fontSize:"21px", marginBottom:"20px"}}>
                                    {t("MissionVision.Subtitle1")}
                                </h2>

                                <p style={{color:"white", marginBottom:"30px"}}>
                                    {t("MissionVision.Content1")}
                                </p>

                                <h2 style={{color:"#a2cdfd", fontWeight:"400", fontSize:"21px", marginBottom:"20px"}}>
                                    {t("MissionVision.Subtitle2")}
                                </h2>

                                <p style={{color:"white"}}>
                                    {t("MissionVision.Content2")}
                                </p>

                                {/*<h1 style={{color:"white", marginBottom:"30px", marginTop:"30px"}}>*/}
                                {/*    {t("MissionVision.OurVision")}*/}
                                {/*</h1>*/}

                                {/*<h2 style={{color:"#a2cdfd", fontWeight:"400", fontSize:"21px", marginBottom:"30px"}}>*/}
                                {/*    {t("MissionVision.Subtitle3")}*/}
                                {/*</h2>*/}

                                {/*<p style={{color:"white", marginBottom:"30px"}}>*/}
                                {/*    {t("MissionVision.Content3")}*/}
                                {/*</p>*/}

                                {/*<h2 style={{color:"#a2cdfd", fontWeight:"400", fontSize:"21px", marginBottom:"30px"}}>*/}
                                {/*    {t("MissionVision.Subtitle4")}*/}
                                {/*</h2>*/}

                                {/*<p style={{color:"white", marginBottom:"30px"}}>*/}
                                {/*    {t("MissionVision.Content4")}*/}
                                {/*</p>*/}
                            </div>

                            <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>
                                <img src={pic_about_tel1} alt="Mike giving direction during a shoot"
                                     style={{width:"400px"}}/>
                            </div>

                        </div>
                    </section>

                    {/*<OurTeamAbout/>*/}
                    <WhyUs2/>
                    <Experience/>
                    <OurWorkflow/>
                    {/*<Testimony/>*/}
                    <WhatsappFunction/>
                    <TopButton/>
                    <Footer/>

                </div>
            </div>
        </>
    );
}

export default About;