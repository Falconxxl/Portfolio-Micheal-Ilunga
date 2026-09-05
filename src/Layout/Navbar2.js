import './Navbar2.css';
import {NavLink} from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

function Navbar2() {

    const { t } = useTranslation();

    return (

        <>

          <div className="Container-Navbar2">
            <ul className='Container-buttons-Navbar2'>

                <li>
                    <NavLink  to="/AudioVisual" className="Menu-button-navbar2" activeClassName="active-link">
                        {t("NavbarMenu.Service.Audiovisual")}
                    </NavLink>
                </li>

                <li>
                    <NavLink  to='/Webdesign' className="Menu-button-navbar2" activeClassName="active-link">
                        {t("NavbarMenu.Service.Webdesign")}
                    </NavLink>
                </li>

                <li>
                    <NavLink  to='/BrandIdentity' className="Menu-button-navbar2" activeClassName="active-link">
                        {t("NavbarMenu.Service.Branding")}
                    </NavLink>
                </li>

                <li>
                    <NavLink  to='/Music' className="Menu-button-navbar2" activeClassName="active-link">
                        {t("NavbarMenu.Service.Music")}
                    </NavLink>
                </li>

            </ul>
        </div>

     </>

);
}

export default Navbar2;