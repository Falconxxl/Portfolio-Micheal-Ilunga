import './TesstFxTranslate.css';
import NavbarMenu from "../Layout/NavbarMenu";
import { useTranslation } from "react-i18next";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";


function TesstFxTranslate() {

    const { t } = useTranslation();

    return (

        <>

         <div>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <div className="container-test"></div>

            <h1 className="text-try">
                {t("about")}
            </h1>

            <h1 className="text-try">
                {t("yes")}
            </h1>

            <p>
                {t("about")}
                We bring your vision to life through digital innovation and audiovisual storytelling,
                specializing in audiovisual production, web design, brand identity, and music.
            </p>

            <div className="text-try">
                {t("welcome").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}

                {t("about").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}

                {t("contact").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}

                {t("yes").split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>

        </>
    );
}

export default TesstFxTranslate;