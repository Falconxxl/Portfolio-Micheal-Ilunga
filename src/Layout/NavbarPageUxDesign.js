
import './NavbarPageUxDesign.css';
import {NavLink} from "react-router-dom";
// import logo from '../Assets/logo - michael5.png';
import React from 'react';
// import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
// import LanguageDropdown from "../Components/LanguageDropdown"
// import { FaTimes, FaBars } from "react-icons/fa";
// import cvDutch from "../Pdf/CV - Micheal Ilunga (2026 Frontend).pdf";
// import cvEnglish from "../Pdf/Micheal Ilunga CV (ENG 2024).pdf";
// import cvFrench from "../Pdf/CV - ILUNGA (2025) (Français) R.pdf";
import {Link} from "react-scroll";


function NavbarPageUxDesign() {

    // const [click, setClick] = useState(false)
    // const closeMenu = () => setClick(false)

    // -----------------------------------------------------------------------------------

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // };

    // ------------------------languages selector--------------------------------------

    const { t } = useTranslation();

    // --------------------------------------------------------------

    // const downloadCV = (cv) => {
    //     const link = document.createElement("a");
    //     link.href = cv;
    //     link.download = "";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    return (

        <>

            <div className="Navbar1"
                 style={{
                     backgroundColor:"transparent",
                     // marginTop:"200px",
                     // zIndex: "1",
                     zIndex: "100",
                     // height:"100px"
                     // paddingTop:"100px"

                 }}
            >

                <div className="Container-NavbarMenu"
                     style={{
                         backgroundColor:"white",
                         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                         marginTop:"235px",
                         zIndex: "100",
                         // height:"100px"
                         // paddingTop:"100px"

                }}
                >

                    <div className="return-button">
                        <NavLink to="/" className="BackButton">
                            <i className="fa-solid fa-arrow-left"></i>
                            <span>{t("NavbarPageUxDesign.Btn1")}</span>
                        </NavLink>
                        <NavLink
                            to="/DigitalMarketing"
                            state={{ scrollTo: "fitness-section" }}
                            className="BackButton"
                            style={{ color: "#0b3f88" }}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            <span>{t("NavbarPageUxDesign.Btn2")}</span>
                        </NavLink>
                    </div>


                    <ul className='Container-buttons-NavbarMenu2'>

                        <li>
                            <Link to="Fitnessfriend-Description" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn3")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-Conception" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn4")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-Plan-action" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn5")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-Methodes" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn6")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-Techniques" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn7")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-specifications" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn8")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-Wireframes" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn9")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-visual" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn10")}
                            </Link>
                        </li>

                        <li>
                            <Link to="Fitnessfriend-Result" className="button-Menu" activeClassName="active-link"
                                  offset={-90} duration={500} spy={true} smooth={true} >
                                {t("NavbarPageUxDesign.Btn11")}
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>



        </>
    );
}

export default NavbarPageUxDesign;