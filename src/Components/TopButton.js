import './TopButton.css';
import React, { useEffect, useState } from 'react';

function TopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Vérifie aussi la position au chargement
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!showButton) {
        return null;
    }

    return (
        <button
            className="TopButton"
            onClick={scrollToTop}
            aria-label="Retour en haut"
        >
            <i className="fa-solid fa-circle-up fa-3x"></i>
        </button>
    );
}

export default TopButton;