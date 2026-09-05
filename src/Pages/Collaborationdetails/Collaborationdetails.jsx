// 📁 src/pages/CollaborationDetails/CollaborationDetails.jsx
import { Helmet } from 'react-helmet-async';import React from "react";
import FunctionCard from "../../components/FunctionCard/FunctionCard";
import "./Collaborationdetails.css";

// Back-arrow SVG
const ArrowLeft = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
    >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);

/**
 * CollaborationDetails – detail page for a selected category
 *
 * Props:
 *  - category: { id, label, roles: [...] }
 *  - onBack: function() – called when user clicks "Go back"
 */
const CollaborationDetails = ({ category, onBack }) => {
    if (!category) return null;

    return (
        <>
            <Helmet>
                <title>Falcon XXL — Studio Créatif | Audiovisuel, Photo, Web & Music</title>
                <meta name="description" content="Falcon XXL est un studio créatif basé aux Pays-Bas. Audiovisuel, photographie, webdesign, branding, marketing digital et production musicale. Disponible en Europe et Afrique francophone." />
                <link rel="canonical" href="https://www.falconxxl.com/" />
            </Helmet>

            <div className="collab-details">
            {/* ── Header ── */}
            <div className="collab-details__header">
                <button className="collab-details__back-btn" onClick={onBack}>
                    <ArrowLeft />
                    Go back to the areas
                </button>
            </div>

            {/* ── Title ── */}
            <div className="collab-details__title-wrapper">
                <h2 className="collab-details__title">{category.label}</h2>
            </div>

            {/* ── Cards grid ── */}
            <div className="collab-details__grid">
                {category.roles.map((role) => (
                    <FunctionCard key={role.id} role={role} />
                ))}
            </div>
        </div>

      </>
    );
};

export default CollaborationDetails;