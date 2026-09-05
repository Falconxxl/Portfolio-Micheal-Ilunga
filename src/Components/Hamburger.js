import './Hamburger.css';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cvDutch from "../Pdf/CV_Micheal_Ilunga_NL_2026_v3.pdf";
import cvEnglish from "../Pdf/CV_Micheal_Ilunga_EN_2026_v3.pdf";
import cvFrench from "../Pdf/CV_Micheal_Ilunga_FR_2026_v3.pdf";

function Hamburger({ menuOpen, setMenuOpen }) {
    const { t } = useTranslation();

    const [servicesOpen, setServicesOpen] = useState(false);
    const [cvOpen, setCvOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setServicesOpen(false);
        setCvOpen(false);
    };

    const downloadCV = (cv) => {
        const link = document.createElement("a");
        link.href = cv;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        closeMenu();
    };

    return (
        <div className="navbar-hamburger">

            <button
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {menuOpen && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>

                    {/* ================= PROJECTS ================= */}
                    <li>
                        <button
                            className="menu-button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            {t("NavbarMenu.Projects")}
                        </button>

                        <ul className={`submenu ${servicesOpen ? "open" : ""}`}>

                            <li>
                                <NavLink
                                    to="/Webdesign"
                                    className="Submenu-button-hamburger"
                                    onClick={closeMenu}
                                >
                                    {t("NavbarMenu.Service.Webdesign")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/UxDesign"
                                    className="Submenu-button-hamburger"
                                    onClick={closeMenu}
                                >
                                    {t("NavbarMenu.Service.UxUiDesign")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/BrandIdentity"
                                    className="Submenu-button-hamburger"
                                    onClick={closeMenu}
                                >
                                    {t("NavbarMenu.Service.Branding")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/AudioVisual"
                                    className="Submenu-button-hamburger"
                                    onClick={closeMenu}
                                >
                                    {t("NavbarMenu.Service.Audiovisual")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/Photography"
                                    className="Submenu-button-hamburger"
                                    onClick={closeMenu}
                                >
                                    {t("NavbarMenu.Service.Photography")}
                                </NavLink>
                            </li>

                        </ul>
                    </li>

                    {/* ================= SKILLS ================= */}
                    <li>
                        <NavLink
                            to="/Projects"
                            className="menu-button"
                            onClick={closeMenu}
                        >
                            {t("NavbarMenu.Skills")}
                        </NavLink>
                    </li>

                    {/* ================= EDUCATION ================= */}
                    <li>
                        <NavLink
                            to="/About"
                            className="menu-button"
                            onClick={closeMenu}
                        >
                            {t("NavbarMenu.Education")}
                        </NavLink>
                    </li>

                    {/* ================= CV / RESUME ================= */}
                    <li>
                        <button
                            className="menu-button"
                            onClick={() => setCvOpen(!cvOpen)}
                        >
                            {t("NavbarMenu.Prices")}
                        </button>

                        <ul className={`submenu ${cvOpen ? "open" : ""}`}>

                            <li>
                                <button
                                    className="Submenu-button-hamburger"
                                    onClick={() => downloadCV(cvDutch)}
                                >
                                    {t("NavbarMenu.Cv.Dutch")}
                                </button>
                            </li>

                            <li>
                                <button
                                    className="Submenu-button-hamburger"
                                    onClick={() => downloadCV(cvEnglish)}
                                >
                                    {t("NavbarMenu.Cv.English")}
                                </button>
                            </li>

                            <li>
                                <button
                                    className="Submenu-button-hamburger"
                                    onClick={() => downloadCV(cvFrench)}
                                >
                                    {t("NavbarMenu.Cv.French")}
                                </button>
                            </li>

                        </ul>
                    </li>

                    {/* ================= CONTACT ================= */}
                    <li>
                        <NavLink
                            to="/Contact"
                            className="menu-button"
                            onClick={closeMenu}
                        >
                            {t("NavbarMenu.Contact")}
                        </NavLink>
                    </li>

                    {/* ================= HIRE ME ================= */}
                    <li>
                        <NavLink
                            to="/Contact"
                            className="menu-button"
                            onClick={closeMenu}
                        >
                            {t("NavbarMenu.HireMe")}
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Hamburger;