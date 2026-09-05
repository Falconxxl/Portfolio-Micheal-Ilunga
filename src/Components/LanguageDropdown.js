import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import "../Components/LanguageDropdown.css";


const options = [
    { value: "nl", label: "Nederlands"},
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    // { value: "pt", label: "Português"},
];

function LanguageDropdown({ i18n }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(i18n.language);
    const dropdownRef = useRef(null);

    // Ferme le dropdown si clic en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value) => {
        setSelected(value);
        i18n.changeLanguage(value);
        setOpen(false);
    };

    return (

        <>

    <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-selected" onClick={() => setOpen(!open)}>
                {options.find((o) => o.value === selected)?.label}
            </div>
            {open && (
                <ul className="dropdown-options">
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            className={opt.value === selected ? "selected-option" : ""}
                            onClick={() => handleSelect(opt.value)}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>

        </>
    );
}

export default LanguageDropdown;
