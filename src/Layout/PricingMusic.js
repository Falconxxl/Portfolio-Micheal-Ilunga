import './PricingBranding.css';
import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import { useTranslation } from "react-i18next";


function PricingMusic() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <>

         <div>

            {/*-------------Beat packages-----------------------------------*/}

            <div className="Container-PricingVideo"
            >
                <h1>{t("MusicPage.MusicPackage.BigTitle")}</h1>

                <h2 style={{
                    fontSize:"30px",
                    fontFamily:"Poppins",
                    color:"white",
                    textAlign:"left",
                    width:"100%",
                    paddingLeft:"10%",
                    marginBottom:"50px"
                }}>
                    1. Beat
                </h2>

                <div className="Container-PricingVideo-wrapper"

                >

                    {/*----------Basic Package----------------*/}

                    <div className="PricingVideo-details-x">
                        <h2>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.Title")}</h2>

                        <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.ContentLine5")}</span></li>
                            <li><span><strong style={{color:"#fe609e"}}>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.ContentLine6")}</strong></span></li>
                            <li><span>{t("MusicPage.MusicPackage.Beat.ProfessionalLicense.ContentLine7")}</span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-x" style={{marginTop:"30px"}}
                            onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>


                    </div>

                    {/*----------Standard Package----------------*/}


                    <div className="PricingVideo-details-standard">
                        <h2>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.Title")}</h2>

                        <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine5")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine6")}</span></li>

                            <li><span><strong style={{color:"#0288fd"}}>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine7")}</strong></span></li>

                            <li><span>{t("MusicPage.MusicPackage.Beat.MonetizationStreaming.ContentLine8")}</span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-standard"
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    {/*----------Gold Package----------------*/}

                    <div className="PricingVideo-details-Golg">
                        <h2>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.Title")}</h2>

                        <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine5")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine6")}</span></li>
                            <li><span><strong style={{color:"#fcc12e"}}>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine7")}</strong></span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.Beat.EliteCreatorLicense.ContentLine8")}</span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-Gold" style={{marginTop:"35px"}}
                            onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    <a
                        href="https://www.falconbeat.nl"
                        className="cta-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ BackgroundColor:"white", color: "white", fontSize:"20px", padding:"20px 40px",
                            fontWeight:"600", borderRadius:"60px", border:"2px solid white", textDecoration: "none" }}
                    >
                        {t("MusicPage.Banner.BtnLine")}
                    </a>
                </div>
            </div>

            {/*-------------vocal packages-----------------------------------*/}

            <div className="Container-PricingVideo"
                 style={{paddingTop:"50px"}}
            >

                <h2 style={{
                    fontSize:"30px",
                    fontFamily:"Poppins",
                    color:"white",
                    textAlign:"left",
                    width:"100%",
                    paddingLeft:"10%",
                    marginBottom:"50px"
                }}>
                    {t("MusicPage.MusicPackage.VocalRecording.Title")}
                </h2>

                <div className="Container-PricingVideo-wrapper">

                    {/*----------Basic Package----------------*/}

                    <div className="PricingVideo-details-x">
                        <h2>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.Title")}</h2>

                        <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine5")} </span></li>
                            <li><span><strong style={{color:"#ff70bc"}}>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine6")} </strong><br/></span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine7")} </span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-x"
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    {/*----------Standard Package----------------*/}


                    <div className="PricingVideo-details-standard">
                        <h2>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.Title")}</h2>

                        <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.ContentLine5")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.ContentLine6")}</span></li>
                            <li><span><strong style={{color:"#2177fd"}}>{t("MusicPage.MusicPackage.VocalRecording.BasicPackageVocal.ContentLine6")} </strong><br/></span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.VocalRecording.StandardVocal.ContentLine8")}</span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-standard" style={{marginTop:"35px"}}
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    {/*----------Gold Package----------------*/}

                    <div className="PricingVideo-details-Golg">
                        <h2>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.Title")}</h2>

                        <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine2")}  </span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine3")}  </span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span> {t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine4")} </span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine5")}  </span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine6")}  </span></li>
                            <li><i className="fa-solid fa-check"></i><span> {t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine7")} </span></li>
                            <li><span><strong style={{color:"#d79a4c"}}> {t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine8")} </strong><br/></span></li>
                            <li><i className="fa-solid fa-check"></i><span> {t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine9")}  </span></li>
                        </ul>

                        <button className="btn-cta-PricingVideo-Gold" style={{marginTop:"35px"}}
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>
                    </div>
                </div>
            </div>

            {/*-------------Full Production Packages (Beat + Vocals + Mix & Master)-----------------------------------*/}

            <div className="Container-PricingVideo"
                 style={{paddingTop:"50px"}}>

                <h2 style={{
                    fontSize:"30px",
                    fontFamily:"Poppins",
                    color:"white",
                    textAlign:"left",
                    width:"100%",
                    paddingLeft:"10%",
                    marginBottom:"50px"
                }}>
                    {t("MusicPage.MusicPackage.FullProduction.Title")}
                </h2>

                <div className="Container-PricingVideo-wrapper">

                    {/*----------Basic Package----------------*/}

                    <div className="PricingVideo-details-x">
                        <h2>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.Title")}</h2>

                        <ul className="pricing-list" style ={{paddingBottom:"110px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.ContentLine5")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.ContentLine6")}</span></li>
                            <li><span><strong style={{color:"#fe609e"}}>{t("MusicPage.MusicPackage.VocalRecording.PremiumVocal.ContentLine7")} </strong><br/></span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.FullProduction1.ContentLine8")}</span></li>
                        </ul>


                        <button className="btn-cta-PricingVideo-x" style={{marginTop:"60px"}}
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    {/*----------Standard Package----------------*/}


                    <div className="PricingVideo-details-standard">
                        <h2>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.Title")}</h2>

                        <ul className="pricing-list-standard" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine2")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine3")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine5")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine6")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ProfessionalPackage.ContentLine7")} </span></li>
                            <li><span><strong style={{color:"#2177fd"}}>{t("MusicPage.MusicPackage.VocalRecording.PremiumVocal.ContentLine7")} </strong><br/></span></li>

                        </ul>

                        <button className="btn-cta-PricingVideo-standard" style={{marginTop:"150px"}}
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    {/*----------Gold Package----------------*/}

                    <div className="PricingVideo-details-Golg">
                        <h2>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.Title")}</h2>

                        <ul className="pricing-list-Gold" style ={{paddingBottom:"50px"}}>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine1")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine2")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine3")}</span>
                            </li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine4")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine5")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine6")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine7")}</span></li>
                            <li><i className="fa-solid fa-check"></i><span>{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine8")}</span></li>
                            {/*<li><i className="fa-solid fa-check"></i><span><strong style={{color:"#d79a4c"}}>{t("MusicPage.MusicPackage.VocalRecording.ElitePackage.ContentLine9")}</strong><br/></span></li>*/}
                            <li><span><strong style={{color:"#d79a4c"}}>{t("MusicPage.MusicPackage.VocalRecording.PremiumVocal.ContentLine7")} </strong><br/></span></li>
                            <li><i className="fa-solid fa-check"></i><span >{t("MusicPage.MusicPackage.FullProduction.ElitePackage.ContentLine10")}</span></li>

                        </ul>

                        <button className="btn-cta-PricingVideo-Gold"
                                onClick={() => setOpenQuote(true)}
                        >
                            Request a free quote
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>
                    </div>
                </div>
            </div>

        </div>

        </>
    );
}

export default PricingMusic;