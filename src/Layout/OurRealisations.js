import './OurRealisations.css';
import {NavLink} from "react-router-dom";

import video_boucle_banner from "../../src/MyVideos/z2b.mp4"
import video_mobile_ourRealisation from "../../src/MyVideos/z2a.mp4"

import Iphone_image from "../Images/realisation_iphone_image";
import Ipad_image from "../Images/realisation_ipad_image";
import Laptop_image from "../Images/realisation_macbook_image";

import papeterie_branding_image from "../Images/image_papeterie_branding4";
import pub_branding_image from "../Images/image_support_pub2";
import branding_digital_image from "../Images/image_branding_digital3";

// import Cd_cover_image from "../Images/Cd-cover.png";
// import video_boucle_Dream_Girl from "../../src/MyVideos/dream_girl_NosRealisastions.mp4";

import React from "react";
import { useTranslation } from "react-i18next";



function OurRealisations() {

    const { t } = useTranslation();

    return (


        <>
            <div className="Container-OurRealisations">

            <h1>
                {t("OurRealisation.Title")}
            </h1>

            {/*---------------Audiovisual----------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>
                    {t("OurRealisation.Audiovisual.Title2")}
                </h2>

                <p>
                    {t("OurRealisation.Audiovisual.SubtitleLine1")}
                </p>

                <div className="Container-OurRealisations-audiovisual-videos">
                    <div className="OurRealisations-audiovisual-text">
                        <h1>
                            Caught Up
                        </h1>

                        <h2>
                            Seneca Feat. Ilunga
                        </h2>

                        <p>
                            {t("OurRealisation.Audiovisual.CaughtUp.ContentLine1")}
                        </p>

                    </div>

                    <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="OurRealisations-audiovisual-video"
                        >
                            <source src={video_boucle_banner} type="video/mp4" />
                        </video>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="OurRealisations-audiovisual-mobile"
                        >
                            <source src={video_mobile_ourRealisation} type="video/mp4" />
                        </video>

                    </div>

                </div>
            </div>

            <NavLink to='/AudioVisual' className="btn-OurRealisations-more">
                {t("OurRealisation.Audiovisual.Bouton")}
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

            {/*---------------Webdesign------------------------------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>
                    {t("OurRealisation.Webdesign.Title2")}
                </h2>

                <p>
                    {t("OurRealisation.Webdesign.SubtitleLine1")}
                </p>

                <div className="Container-OurRealisations-webdesign-image">

                    <div className="OurRealisations-webdesign-image">
                        <img src={Iphone_image} alt="iphone_image" className="image_realisation_iphone"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={Ipad_image} alt="iphone_image" className="image_realisation_ipad"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={Laptop_image} alt="iphone_image" className="image_realisation_laptop"/>
                    </div>

                </div>
            </div>

            <NavLink to='/Webdesign' className="btn-OurRealisations-more">
                {t("OurRealisation.Audiovisual.Bouton")}
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

            {/*---------------Branding------------------------------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>
                    {t("OurRealisation.Branding.Title2")}
                </h2>

                <p>
                    {t("OurRealisation.Branding.SubtitleLine1")}
                </p>

                <div className="Container-OurRealisations-webdesign-image">

                    <div className="OurRealisations-webdesign-image">
                        <img src={papeterie_branding_image} alt="iphone_image" className="image_realisation_branding"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={pub_branding_image} alt="iphone_image" className="image_realisation_branding"/>
                    </div>

                    <div className="OurRealisations-webdesign-image">
                        <img src={branding_digital_image} alt="iphone_image" className="image_realisation_branding"/>
                    </div>

                </div>
            </div>

            <NavLink to='/BrandIdentity' className="btn-OurRealisations-more">
                {t("OurRealisation.Audiovisual.Bouton2")}
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

            {/*---------------Music production------------------------------------*/}

            <div className="Container-OurRealisations-audiovisual">
                <h2>
                    {t("OurRealisation.Music.Title2")}
                </h2>

                <p style={{marginBottom:"0px"}}>
                    {t("OurRealisation.Music.SubtitleLine1")}
                </p>

                {/*<div className="Container-OurRealisations-music">*/}

                {/*    <div className="OurRealisations-music-CoverText">*/}
                {/*        <img src={Cd_cover_image} alt="Cd_cover_image" className="image_Cd_cover"/>*/}
                {/*        <h1>*/}
                {/*            Dream Girl*/}
                {/*        </h1>*/}

                {/*        <h2>*/}
                {/*            Ilunga*/}
                {/*        </h2>*/}

                {/*        <p>*/}
                {/*            {t("OurRealisation.Music.DreamGirl.ContentLine1")}*/}
                {/*            <br/><br/>*/}
                {/*            {t("OurRealisation.Music.DreamGirl.ContentLine2")}*/}
                {/*        </p>*/}

                {/*        <a*/}
                {/*            href="https://www.youtube.com/watch?v=ri8RdSNmzVM&list=RDri8RdSNmzVM&start_radio=1"*/}
                {/*            target="_blank"*/}
                {/*            style={{color:"#fcd552", fontsize:"50px", fontWeight:"600"}}*/}
                {/*            rel="noopener noreferrer"*/}
                {/*            className="Footer-links"*/}
                {/*        >*/}
                {/*            Dream Girl - ILUNGA (Music video)*/}
                {/*        </a>*/}
                {/*    </div>*/}

                {/*    <div className="OurRealisations-music-video">*/}
                {/*        <video*/}
                {/*            autoPlay*/}
                {/*            muted*/}
                {/*            loop*/}
                {/*            playsInline*/}
                {/*            className="OurRealisations-music-video-yes"*/}
                {/*        >*/}
                {/*            <source src={video_boucle_Dream_Girl} type="video/mp4" />*/}
                {/*        </video>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>

            <NavLink to='/Music' className="btn-OurRealisations-more">
                {t("OurRealisation.Audiovisual.Bouton2")}
                <i className="fa-solid fa-arrow-right"></i>
            </NavLink>


        </div>

       </>
    );
}

export default OurRealisations;
