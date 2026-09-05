import './CertificationMichael.css';
import React from "react";
import logo_the_hague from "../Images/logo_haagse1.png";
import logo_novi from "../Images/logo_novi.png";
import logo_sae from "../Images/logo_SAE.png";
import { useTranslation } from "react-i18next";


function CertificationMichael() {
    const { t } = useTranslation();


    return (

        <>

         <div className="Container-WhyUs" style={{backgroundColor:"white"}}>

            <div className="Container-WhyUs-left">
                <h1 style={{color:"black"}}>{t("Certification.BigTitle")}</h1>
            </div>

            <div className="Container-WhyUs-right">

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content" >
                    <div className="Container-WhyUs-right-title"
                         style={{color:"#1c6077",
                             display:"flex",
                             justifyContent:'center',
                             alignItems:"center"
                    }}>
                        {/*The Hague University (The Hague, The Netherlands)*/}
                        <img src={logo_the_hague} alt="Mike giving direction during a shoot"
                             className="logo_university" style={{width:"250px"}}/>
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text" >
                            {/*<i className="fa-solid fa-circle-check"></i>*/}
                            <p style={{color:"#9ea700", fontSize:"20px", fontWeight:"700"}}>
                                {t("Certification.Cmd.Title")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <p style={{color:"black"}}>
                                {t("Certification.Cmd.Content")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Cmd.ContentLine1a")}</strong>
                                {t("Certification.Cmd.ContentLine1b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Cmd.ContentLine2a")}</strong>
                                {t("Certification.Cmd.ContentLine2b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Cmd.ContentLine3a")}</strong>
                                {t("Certification.Cmd.ContentLine3b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Cmd.ContentLine4a")}</strong>
                                {t("Certification.Cmd.ContentLine4b")}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content" >
                    <div className="Container-WhyUs-right-title"
                         style={{color:"#1c6077",
                             display:"flex",
                             justifyContent:'center',
                             alignItems:"center"
                         }}>
                        {/*The Hague University (The Hague, The Netherlands)*/}
                        <img src={logo_novi} alt="Mike giving direction during a shoot"
                             className="logo_university" style={{width:"250px"}}/>
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text" >
                            {/*<i className="fa-solid fa-circle-check"></i>*/}
                            <p style={{color:"#d96a30", fontSize:"20px", fontWeight:"700"}}>
                                {t("Certification.Novi.Title")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <p style={{color:"black"}}>
                                {t("Certification.Novi.Content")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Novi.ContentLine1a")}</strong>
                                {t("Certification.Novi.ContentLine1b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Novi.ContentLine2a")}</strong>
                                {t("Certification.Novi.ContentLine2b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Novi.ContentLine3a")}</strong>
                                {t("Certification.Novi.ContentLine3b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Novi.ContentLine4a")}</strong>
                                {t("Certification.Novi.ContentLine4b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Novi.ContentLine5a")}</strong>
                                {t("Certification.Novi.ContentLine5b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Novi.ContentLine6a")}</strong>
                                {t("Certification.Novi.ContentLine6b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Novi.ContentLine7a")}</strong> :
                                {t("Certification.Novi.ContentLine7b")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content-x">
                    <div className="Container-WhyUs-right-title"
                         style={{color:"#1c6077",
                             display:"flex",
                             justifyContent:'center',
                             alignItems:"center"
                         }}>
                        {/*The Hague University (The Hague, The Netherlands)*/}
                        <img src={logo_sae} alt="Mike giving direction during a shoot"
                             className="logo_university" style={{width:"250px"}}/>
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text" >
                            {/*<i className="fa-solid fa-circle-check"></i>*/}
                            <p style={{color:"#034da5", fontSize:"20px", fontWeight:"700"}}>
                                {t("Certification.Sae.Title")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <p style={{color:"black"}}>
                                {t("Certification.Sae.Content")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong > {t("Certification.Sae.ContentLine1a")}</strong>
                                {t("Certification.Sae.ContentLine1b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Sae.ContentLine2a")}</strong>
                                {t("Certification.Sae.ContentLine2b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Sae.ContentLine3a")}</strong>
                                {t("Certification.Sae.ContentLine3b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Sae.ContentLine4a")}</strong>
                                {t("Certification.Sae.ContentLine4b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Sae.ContentLine5a")}e</strong>
                                {t("Certification.Sae.ContentLine5b")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p style={{color:"black"}}>
                                <strong >{t("Certification.Sae.ContentLine6a")}</strong>
                                {t("Certification.Sae.ContentLine6b")}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </>

    );
}

export default CertificationMichael;