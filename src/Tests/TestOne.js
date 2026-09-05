import React from "react";
import { useTranslation } from "react-i18next";
import './TestOne.css';
import TopButton from "../Components/TopButton";

function TestOne() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // change la langue
    };

    return (
        <>

            <div style={{ padding: "20px" }}>
            <h2>{t("welcome")}</h2>

            <label htmlFor="lang">{t("language")}:</label>
            <select
                id="lang"
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue={i18n.language}
                style={{ marginLeft: "10px" }}
            >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="fr">Dutch</option>
            </select>
            <TopButton/>
        </div>

      </>
    );
}

export default TestOne;
