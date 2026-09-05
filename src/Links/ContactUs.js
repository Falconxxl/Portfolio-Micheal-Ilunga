import { Helmet } from 'react-helmet-async';
import './ContactUs.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import { useTranslation } from "react-i18next";

function ContactUs() {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Faq.title")}</title>
                <meta name="description" content={t("HelmetSEO.Faq.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/ContactUs" />
            </Helmet>

            <div className="Container-ContactUs">
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>
            <p>Contact Us</p>
            <TopButton/>
            </div>

        </>
    );
}

export default ContactUs;