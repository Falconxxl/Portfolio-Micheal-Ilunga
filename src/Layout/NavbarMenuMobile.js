import './NavbarMenuMobile.css';
import { NavLink } from "react-router-dom";
import logo from '../Assets/logo - michael5.png';
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../Components/LanguageDropdown";
import Hamburger from "../Components/Hamburger";
import { useState } from "react";

function NavbarMenu() {

    const { i18n } = useTranslation();

    // ✅ Le state du menu remonte ici pour être partagé
    const [menuOpen, setMenuOpen] = useState(false);


    return (

        <>

         <div className="Navbar-mobile">
            <div className="Container-NavbarMenuMobile">

                <div className="container-languages">
                    <LanguageDropdown i18n={i18n} />
                </div>

                {/* ✅ Clic sur le logo → ferme le menu et reset l'hamburger */}
                <NavLink
                    to='/'
                    className="logo-menu"
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={logo} alt="falconXXL-logo" className="logo-falcon-NavMenu2"/>
                </NavLink>

                <div className="Container-Hamburger">
                    {/* ✅ On passe le state et le setter en props */}
                    <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>

            </div>
        </div>

        </>
    );
}

export default NavbarMenu;