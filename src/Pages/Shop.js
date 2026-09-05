import { Helmet } from 'react-helmet-async';
import './Shop.css';
import NavbarMenu from "../Layout/NavbarMenu";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import React from "react";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";
import TopButton from "../Components/TopButton";

function Shop() {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Shop.title")}</title>
                <meta name="description" content={t("HelmetSEO.Shop.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Shop" />
            </Helmet>

    <div >
            <NavbarMenu/>
            <NavbarMenuMobile/>
            {/*<Navbar2/>*/}

            <div className="Container-Contact">
                <div className="Container-Contact-text">
                    <h1>Page Update in Progress</h1>
                    <h2>This Page Will Be Available Soon</h2>
                    <p>
                        We’re currently updating this section to provide you with the most <br/>
                        accurate and useful information. Please check back soon, <br/>
                        the new content will be available shortly. in our communication. <br/>
                        Let us know what your preference is.
                    </p>
                </div>
            </div>

            <WhatsappFunction/>
        <TopButton/>
            <Footer/>
        </div>

        </>
    );
}

export default Shop;