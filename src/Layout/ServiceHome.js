import './ServiceHome.css';
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Monitor, PenTool, Palette, Video, Camera } from "lucide-react";
import compo_laptop_Portfolio from "../Images/compo_laptop_Portfolio3.png";
import compo_uxdesign from "../Images/compo_uxdesign3.jpg";
import compo_sergio from "../Images/compo_sergio4.png";
import compo_photographie from "../Images/compo_photographie5.png";
import compo_branding from "../Images/compo_branding1.png";


function ServiceHome() {
    const { t } = useTranslation();

    const services = [
        {
            id: "web",
            icon: Monitor,
            title: t("ServiceHomeExplore.Webdesign.Title"),
            subtitle: t("ServiceHomeExplore.Webdesign.SubtitleLine1"),
            description: t("ServiceHomeExplore.Webdesign.ContentLine1"),
            button: t("ServiceHomeExplore.Webdesign.CAT"),
            link: "/Webdesign",
            image: compo_laptop_Portfolio
        },
        {
            id: "UX/UX-Design",
            icon: PenTool,
            title: t("ServiceHomeExplore.UxDesign.Title"),
            subtitle: t("ServiceHomeExplore.UxDesign.SubtitleLine1"),
            description: t("ServiceHomeExplore.UxDesign.ContentLine1"),
            button: t("ServiceHomeExplore.UxDesign.CAT"),
            link: "/UxDesign",
            image: compo_uxdesign
        },
        {
            id: "branding",
            icon: Palette,
            title: t("ServiceHomeExplore.Branding.Title"),
            subtitle: t("ServiceHomeExplore.Branding.SubtitleLine1"),
            description: t("ServiceHomeExplore.Branding.ContentLine1"),
            button: t("ServiceHomeExplore.Branding.CAT"),
            link: "/BrandIdentity",
            image: compo_branding
        },
        {
            id: "audiovisual",
            icon: Video,
            title: t("ServiceHomeExplore.Audiovisual.Title"),
            subtitle: t("ServiceHomeExplore.Audiovisual.SubtitleLine1"),
            description: t("ServiceHomeExplore.Audiovisual.ContentLine1"),
            button: t("ServiceHomeExplore.Audiovisual.CAT"),
            link: "/AudioVisual",
            image: compo_sergio
        },
        {
            id: "photography",
            icon: Camera,
            title: t("ServiceHomeExplore.Photography.Title"),
            subtitle: t("ServiceHomeExplore.Photography.SubtitleLine1"),
            description: t("ServiceHomeExplore.Photography.ContentLine1"),
            button: t("ServiceHomeExplore.Photography.CAT"),
            link: "/Photography",
            image: compo_photographie
        }
    ];

    return (
        <section className="service-home" id="Container-ServiceHome">
            <div className="service-home__header">
                <h1 className="service-home__title">
                    {t("ServiceHomeExplore.BigTitleLine1")}
                    <br />
                    {t("ServiceHomeExplore.BigTitleLine2")}
                </h1>

                <h1 className="service-home__title-mobile">
                    {t("ServiceHomeExplore.BigTitleMobile")}
                </h1>
            </div>

            <div className="service-home__grid">
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <div className="service-card" key={service.id}>
                            <div className="service-card__content">
                                <div className="service-card__icon">
                                    <Icon size={36} strokeWidth={1.8} />
                                </div>

                                <h3 className="service-card__title">
                                    {service.title}
                                </h3>

                                <h4 className="service-card__subtitle">
                                    {service.subtitle}
                                </h4>

                                <p className="service-card__description">
                                    {service.description}
                                </p>

                                <NavLink
                                    to={service.link}
                                    className="service-card__button"
                                >
                                    {service.button}
                                </NavLink>
                            </div>

                            <div className="service-card__media">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-card__image"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ServiceHome;