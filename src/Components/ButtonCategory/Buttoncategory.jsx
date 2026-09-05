// 📁 src/components/ButtonCategory/ButtonCategory.jsx
import React from "react";
import "./Buttoncategory.css";

/**
 * ButtonCategory
 * Props:
 *  - category: { id, label, image }
 *  - onClick: function called on click
 */
const ButtonCategory = ({ category, onClick }) => {
    return (
        <>

        <button
            className="btn-category"
            onClick={() => onClick(category)}
            aria-label={`Voir ${category.label}`}
        >
            <img
                src={category.image}
                alt={category.label}
                className="btn-category__img"
                onError={(e) => {
                    // Fallback gradient if image not found
                    e.target.style.display = "none";
                    e.target.parentNode.classList.add("btn-category--no-img");
                }}
            />
            <div className="btn-category__overlay" />
            <span className="btn-category__label">{category.label}</span>
            <span className="btn-category__arrow">›</span>
        </button>
        </>

    );
};

export default ButtonCategory;