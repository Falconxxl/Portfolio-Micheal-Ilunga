import './ContainerBanner2.css';
import desktop_banner1 from "../../src/Images/background_Mike_visage3.png";

import mobile_banner from "../../src/Images/background_Mike_visage_Mobile.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import React, {useEffect, useState} from "react";
// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";
import PageLoader from "../Components/PageLoader";

function ContainerBanner2() {



    const { t } = useTranslation();

    // const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simule le chargement (vidéos lourdes)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    return (

        <>
            {loading && <PageLoader />}

        <header className="hero-banner">
            {/* Image desktop */}
            <img src={desktop_banner1} alt="Banner desktop" className="hero-image desktop-image" />

            {/* Image mobile */}
            <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />


            <div className="hero-content">

                <h1>
                    {t("ContainerBanner2.Title")}
                </h1>

                <p>
                    {t("ContainerBanner2.Subtitleline1")}
                </p>

                <div className="cta-container">

                    <Link to="Container-ServiceHome" className="cta-btn2"
                          offset={-90} duration={500} spy={true} smooth={true} >
                        {t("ContainerBanner2.CatBouton2")}
                          <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>

                </div>

            </div>

            <Link to="Container-ServiceHome" className="scroll-down"
                  offset={-90} duration={500} spy={true} smooth={true} >
                <i className="fa-solid fa-angles-down"></i>
            </Link>
        </header>

       </>
    );
}

export default ContainerBanner2;
