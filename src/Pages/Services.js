import { Helmet } from 'react-helmet-async';
import './Services.css';
import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";
import TopButton from "../Components/TopButton";
import React from "react";

function Services() {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Services.title")}</title>
                <meta name="description" content={t("HelmetSEO.Services.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Services" />
            </Helmet>

            <div className="Container-Services">
            <NavbarMenu/>
            {/*<Navbar2/>*/}
            <p>Services</p>
            <WhatsappFunction/>
                <TopButton/>
             </div>
        </>
    );
}

export default Services;