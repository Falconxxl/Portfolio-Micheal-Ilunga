import { Helmet } from 'react-helmet-async';
import './PrivacyPolicy.css';

import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import React from "react";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";
import TopButton from "../Components/TopButton";

function PrivacyPolicy() {

    const { t } = useTranslation();

    return (

        <>
            <Helmet>
                <title>{t("HelmetSEO.PrivacyPolicy.title")}</title>
                <meta name="description" content={t("HelmetSEO.PrivacyPolicy.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/PrivacyPolicy" />
            </Helmet>

    <div >
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            <div className="Container-Contact">
                <div className="Container-Contact-text">
                    <h1 style={{color:"white"}}>{t("PrivacyPolicy.Title")}</h1>
                </div>
            </div>

            <section className="privacy-policy">
                <div className="privacy-container">
                    <h1>{t("PrivacyPolicy.Title")}</h1>

                    <h2>{t("PrivacyPolicy.Subtitle1")}</h2>
                    <p>
                        {t("PrivacyPolicy.ContentLine1")}
                    </p>

                    <h2>{t("PrivacyPolicy.Subtitle2")}</h2>
                    <p>{t("PrivacyPolicy.ContentLine2")}</p>
                    <ul>
                        <li>{t("PrivacyPolicy.ContentLine3")}</li>
                        <li>{t("PrivacyPolicy.ContentLine4")}</li>
                        <li>{t("PrivacyPolicy.ContentLine5")}</li>
                        <li>{t("PrivacyPolicy.ContentLine6")}</li>
                    </ul>
                    <p>{t("PrivacyPolicy.ContentLine6a")}</p>

                    <h2>{t("PrivacyPolicy.Subtitle3")}</h2>

                    <p>{t("PrivacyPolicy.ContentLine7")}</p>
                    <ul>
                        <li>{t("PrivacyPolicy.ContentLine8")}</li>
                        <li>{t("PrivacyPolicy.ContentLine9")}</li>
                        <li>{t("PrivacyPolicy.ContentLine10")}</li>
                    </ul>
                    <p>
                        {t("PrivacyPolicy.ContentLine11")}
                    </p>

                    <h2>{t("PrivacyPolicy.Subtitle4")}</h2>
                    <p>
                        {t("PrivacyPolicy.ContentLine12")}
                    </p>

                    <h2>{t("PrivacyPolicy.Subtitle5")}</h2>
                    <p>
                        {t("PrivacyPolicy.ContentLine13")}
                    </p>

                    <h2>{t("PrivacyPolicy.Subtitle6")}</h2>
                    <p>
                        {t("PrivacyPolicy.ContentLine14")}
                    </p>
                    <ul>
                        <li>{t("PrivacyPolicy.ContentLine15")}</li>
                        <li>{t("PrivacyPolicy.ContentLine16")}</li>
                        <li>{t("PrivacyPolicy.ContentLine17")}</li>
                    </ul>
                    <p>
                        {t("PrivacyPolicy.ContentLine18")}
                        <br/>
                       <a href="mailto:contact@falconxxl.com">nexteclat.info@gmail.com</a>
                    </p>

                    <h2>{t("PrivacyPolicy.Subtitle7")}</h2>
                    <p>
                        {t("PrivacyPolicy.ContentLine19")}
                    </p>

                    <h2>{t("PrivacyPolicy.Subtitle8")}</h2>
                    <p>
                        {t("PrivacyPolicy.ContentLine20")}
                        <br/>
                        <a href="mailto:contact@falconxxl.com">nexteclat.info@gmail.com</a>
                    </p>

                </div>
            </section>


            <WhatsappFunction/>
        <TopButton/>
            <Footer/>
        </div>

        </>
    );
}

export default PrivacyPolicy;