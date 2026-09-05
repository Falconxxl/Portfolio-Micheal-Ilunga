import React from "react";
import "./Newspartnership.css";
import banner_news from "../Images/background_News3.jpg";
/* Si l'image de la carte blanche est séparée du fond, importez-la ici :
   import partnership_img from "../Images/falconxxl-news-partnership.jpg"; */
import pic_news from "../Images/pic_news3.png";

import { useTranslation } from "react-i18next";

/* ============================================================
   NEWS PARTNERSHIP — Falcon XXL
   Maquette v2 :
   - Grand titre thin/light en haut à gauche
   - Paragraphe court, contacts, 2 boutons pill
   - Carte blanche arrondie en bas à droite (dans le bg)
   ------------------------------------------------------------
   Personnalisation :
   - Email    : CONTACT_EMAIL
   - Téléphone: CONTACT_PHONE
   - Lien WA  : LINK_WHATSAPP
   - Lien info: LINK_MORE_INFO
   ============================================================ */

const CONTACT_EMAIL  = "nexteclat.info@gmail.com";
const CONTACT_PHONE  = "+31 685 533 124";
const LINK_MORE_INFO = "/News";
const LINK_WHATSAPP  = "https://wa.me/31685533124?text=Bonjour%20FalconXXL,%20je%20souhaite%20en%20savoir%20plus."; /* ← votre numéro WA */


const NewsPartnership = () => {

    const { t } = useTranslation();

    return (

        <>

         <section
            className="np-section"
            style={{ backgroundImage: `url(${banner_news})` }}
        >
            <div className="np-layout">



                {/* ══════════════════════════════════════
            COLONNE GAUCHE — Contenu texte
        ══════════════════════════════════════ */}
                <div className="np-content">

                    {/* Grand titre thin — dominant toute la largeur gauche */}
                    <h1 className="np-title">
                        {t("Page-news.Newspartenair.Title")}
                    </h1>

                    <img
                        src={pic_news}
                        alt="pic news"
                        className="pic-news"
                    />

                    {/* Paragraphe court */}
                    <p className="np-body">
                        {t("Page-news.Newspartenair.ContentLine1")}
                    </p>

                    {/* Label contact */}
                    <p className="np-contact-label">{t("Page-news.Newspartenair.Contact")}</p>

                    {/* Email + Tel sur une ligne */}
                    <p className="np-contact-line">
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="np-contact-link">
                            {CONTACT_EMAIL}
                        </a>
                        {"/ "}
                        <strong>Tel:</strong>{" "}
                        <a
                            href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                            className="np-contact-link"
                        >
                            {CONTACT_PHONE}
                        </a>
                    </p>

                    {/* ── Boutons CTA ── */}
                    <div className="np-buttons">

                        {/* Bouton jaune-orange pill */}
                        <a href={LINK_MORE_INFO} className="np-btn np-btn-yellow">
                            {t("Page-news.Newspartenair.BtnInfo")}
                        </a>

                        {/* Bouton vert WhatsApp pill */}
                        <a
                            href={LINK_WHATSAPP}
                            className="np-btn np-btn-whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* Icône WhatsApp SVG */}
                            <svg
                                className="np-wa-icon"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>

                    </div>
                </div>

                {/* ══════════════════════════════════════
            COLONNE DROITE — Spacer
            La carte blanche arrondie avec l'homme
            est intégrée dans background_News2.jpg
            (en bas à droite de l'image)
        ══════════════════════════════════════ */}
                <div className="np-spacer" aria-hidden="true" />

            </div>
        </section>
        </>
    );
};

export default NewsPartnership;