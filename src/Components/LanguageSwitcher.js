import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentLang = i18n.language.toUpperCase();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    };

    return (

        <>

            <div style={{ position: "relative", display: "inline-block" }}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                {currentLang}{" "}
                {open ? (
                    <FaChevronUp style={{ marginLeft: "8px" }} />
                ) : (
                    <FaChevronDown style={{ marginLeft: "8px" }} />
                )}
            </button>

            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        marginTop: "4px",
                        zIndex: 10
                    }}
                >
                    <div onClick={() => changeLanguage("en")} style={{ padding: "8px 12px", cursor: "pointer" }}>EN</div>
                    <div onClick={() => changeLanguage("fr")} style={{ padding: "8px 12px", cursor: "pointer" }}>FR</div>
                    <div onClick={() => changeLanguage("nl")} style={{ padding: "8px 12px", cursor: "pointer" }}>NL</div>
                    <div onClick={() => changeLanguage("pt")} style={{ padding: "8px 12px", cursor: "pointer" }}>PT</div>
                </div>
            )}
        </div>
       </>


    );
};

export default LanguageSwitcher;
