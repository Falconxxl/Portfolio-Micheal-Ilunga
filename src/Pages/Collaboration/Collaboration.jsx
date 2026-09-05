// 📁 src/pages/Collaboration/Collaboration.jsx

import { Helmet } from 'react-helmet-async';
import React from "react";
import ButtonCategory from "../../Components/ButtonCategory/Buttoncategory";
import Categories from "../../Data/Categories"; // Utilisation du default export corrigé
import heroBg from "../../Images/Background_news_correct1.png";
import "./Collaboration.css";

/**
 * Collaboration – main landing page
 *
 * Props:
 *  - onSelectCategory: function(category) – called when user clicks a category button
 */
const Collaboration = ({ onSelectCategory }) => {
    return (
        <>
            <Helmet>
                <title>Falcon XXL — Studio Créatif | Audiovisuel, Photo, Web & Music</title>
                <meta name="description" content="Falcon XXL est un studio créatif basé aux Pays-Bas. Audiovisuel, photographie, webdesign, branding, marketing digital et production musicale. Disponible en Europe et Afrique francophone." />
                <link rel="canonical" href="https://www.falconxxl.com/" />
            </Helmet>

            <div className="collab" style={{ backgroundImage: `url(${heroBg})` }}>
            {/* ── Hero / Text section ── */}
            <section className="collab__hero">
                <div className="collab__hero-content">
                    <h1 className="collab__title">Collaborate with FalconXXL</h1>
                    <p className="collab__subtitle">
                        FalconXXL is looking for partners, collaborators, and volunteers to
                        contribute to its projects and grow within a creative, collaborative,
                        and skills-driven environment.{" "}
                        <strong>Our areas of expertise:</strong>
                    </p>
                </div>
            </section>

            {/* ── Categories Grid ── */}
            <section className="collab__grid-section">
                <div className="collab__grid">
                    {Categories.map((category) => (
                        <ButtonCategory
                            key={category.id}
                            category={category}
                            onClick={onSelectCategory}
                            className="collab__button-category"
                        />
                    ))}
                </div>
            </section>
        </div>

        </>
    );
};

export default Collaboration;