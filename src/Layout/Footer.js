import './Footer.css';
import logo_footer from '../Assets/logo - michael5.png';
// import React, { useState } from "react";

import {NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";

function Footer() {

    const { t } = useTranslation();



    return (

        <>

          <div className="Container-Footer">
            <div className="Container-Footer-content1">
                <div className="Container-Footer-logoSlogan">
                    <img src={logo_footer} alt="flaconXXL-logo" className="logo-falcon-Footer"/>

                    <h1>
                        {t("Footer.CatTitle")}
                    </h1>

                    <NavLink to='/Contact' className="button-menu-ContactUs">
                        {t("NavbarMenu.HireMe")}
                    </NavLink>

                    {/*<NavLink  to='/Contact' className="button-Menu" activeClassName="active-link"*/}
                    {/*style={{backgroundColor:"#3f97fb",*/}
                    {/*    borderRadius: 50, color:"white", padding: "clamp(7px, 0.9vw, 13px) clamp(15px, 1.6vw, 28px)",*/}
                    {/*}}*/}

                    {/*>*/}
                    {/*    {t("NavbarMenu.Contact")}*/}
                    {/*</NavLink>*/}

                </div >

                <div className="Container-Footer-links">

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">
                            {t("Footer.Services")}
                        </h>

                        <NavLink to='/Webdesign' className="Footer-links">
                            {t("NavbarMenu.Service.Webdesign")}
                        </NavLink>

                        <NavLink to='/UxDesign' className="Footer-links">
                            {t("NavbarMenu.Service.UxUiDesign")}
                        </NavLink>

                        <NavLink to='/BrandIdentity' className="Footer-links">
                            {t("NavbarMenu.Service.Branding")}
                        </NavLink>

                        <NavLink to='/AudioVisual' className="Footer-links">
                            {t("NavbarMenu.Service.Audiovisual")}
                        </NavLink>

                        <NavLink to='/Photography' className="Footer-links">
                            {t("NavbarMenu.Service.Photography")}
                        </NavLink>

                        {/*<NavLink to='/DigitalMarketing' className="Footer-links">*/}
                        {/*    {t("NavbarMenu.Service.Digital Marketing")}*/}
                        {/*</NavLink>*/}

                        {/*<NavLink to='/Music' className="Footer-links">*/}
                        {/*    {t("NavbarMenu.Service.Music Production")}*/}
                        {/*</NavLink>*/}
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">
                            Links
                        </h>

                        <NavLink to='/Projects' className="Footer-links">
                            {t("NavbarMenu.Skills")}
                        </NavLink>

                        <NavLink to='/About' className="Footer-links">
                            {t("NavbarMenu.Education")}
                        </NavLink>

                        {/*<NavLink to='/News' className="Footer-links">*/}
                        {/*    {t("NavbarMenu.News")}*/}
                        {/*</NavLink>*/}

                        {/*<NavLink to='/Prices' className="Footer-links">*/}
                        {/*    {t("NavbarMenu.Prices")}*/}
                        {/*</NavLink>*/}

                        <NavLink to='/Contact' className="Footer-links">
                            {t("NavbarMenu.Contact")}
                        </NavLink>

                        {/*<a*/}
                        {/*    href="https://www.falconbeat.nl"*/}
                        {/*    target="_blank"*/}
                        {/*    style={{color:"#a09dfb"}}*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*    className="Footer-links"*/}
                        {/*>*/}
                        {/*    Falcon Beat*/}
                        {/*</a>*/}
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">
                            {t("Footer.Extra")}
                        </h>

                        <NavLink to='/PrivacyPolicy' className="Footer-links">
                            {t("NavbarMenu.PrivacyPolicy")}
                        </NavLink>
                    </div>

                    <div className="Container-Footer-links-details-contact">
                        <h className="Footer-title">
                            {t("Footer.Contacts")}
                        </h>
                        <p className="Footer-title-details">
                            Tel:
                        </p>
                        <p className="Footer-title-details-small">
                            {t("Footer.Tel")}
                        </p>
                        {/*<p className="Footer-title-details-small">*/}
                        {/*    {t("Footer.Soon1")}*/}
                        {/*</p>*/}
                        {/*<p className="Footer-title-details-small">*/}
                        {/*    {t("Footer.Soon2")}*/}
                        {/*</p>*/}
                        {/*<p className="Footer-title-details-small">*/}
                        {/*    {t("Footer.Soon3")}*/}
                        {/*</p>*/}

                        <p className="Footer-title-details">
                            Email:
                        </p>
                        <p className="Footer-title-details-small">
                            michael.ict.info@gmail.com
                        </p>
                    </div>
                </div>

                <div className="Container-Footer-SocialMedia">
                    <h className="Footer-title">
                        {t("Footer.SocialMedia")}
                    </h>
                    <div className="Footer-SocialMedia">
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="YouTube"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="TikTok"
                        >
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Behance"
                        >
                            <i className="fa-brands fa-square-behance"></i>
                        </a>


                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Dribbble"
                        >
                            <i className="fa-brands fa-dribbble"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/micheal-ilunga-45b277288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>


                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Spotify"
                        >
                            <i className="fa-brands fa-spotify"></i>
                        </a>


                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="X (Twitter)"
                        >
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="Container-Footer-content2">
                <p>
                    {t("Footer.WebsiteDevelopedBy")} <strong>Micheal Ilunga</strong><br/>
                    <i className="fa-regular fa-copyright"></i>&nbsp;
                     2026 <strong></strong> | {t("Footer.AllRightsAreReserved")}
                </p>
            </div>
        </div>
      </>
    );
}

export default Footer;