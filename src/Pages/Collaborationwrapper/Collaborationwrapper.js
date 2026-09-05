// 📁 src/pages/CollaborationWrapper/CollaborationWrapper.jsx
//
// This is the ROOT component you integrate into your existing React app.
// It manages the slide transition between Collaboration and CollaborationDetails.
//
// Usage in your App.js (or your routing file):
//   import CollaborationWrapper from "./pages/CollaborationWrapper/CollaborationWrapper";
//   ...
//   <CollaborationWrapper />
//
// If you use React Router, wrap it in a <Route> like:
//   <Route path="/collaborate" element={<CollaborationWrapper />} />

import { Helmet } from 'react-helmet-async';
import React, { useState, useRef } from "react";
import Collaboration from "../Collaboration/Collaboration";
import CollaborationDetails from "../CollaborationDetails/CollaborationDetails";
import "../Collaborationdetails/Collaborationwrapper.css";

// Transition states:
// "idle"       → normal, showing current page
// "exit-main"  → main sliding out to the left
// "enter-details" → details sliding in from the right
// "exit-details"  → details sliding out to the right
// "enter-main"    → main sliding in from the left

const CollaborationWrapper = () => {
    const [activePage, setActivePage] = useState("main"); // "main" | "details"
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [transitioning, setTransitioning] = useState(false);
    const [phase, setPhase] = useState("idle");

    const DURATION = 400; // ms – must match CSS transition duration
    const timerRef = useRef(null);

    const clearTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    // ── Main → Details ──
    const handleSelectCategory = (category) => {
        if (transitioning) return;
        setTransitioning(true);
        setPhase("exit-main"); // main slides left

        timerRef.current = setTimeout(() => {
            setSelectedCategory(category);
            setActivePage("details");
            setPhase("enter-details"); // details enters from right

            timerRef.current = setTimeout(() => {
                setPhase("idle");
                setTransitioning(false);
            }, DURATION);
        }, DURATION);
    };

    // ── Details → Main ──
    const handleBack = () => {
        if (transitioning) return;
        setTransitioning(true);
        setPhase("exit-details"); // details slides right

        timerRef.current = setTimeout(() => {
            setActivePage("main");
            setPhase("enter-main"); // main enters from left

            timerRef.current = setTimeout(() => {
                setPhase("idle");
                setTransitioning(false);
                setSelectedCategory(null);
            }, DURATION);
        }, DURATION);
    };

    return (
        <>
            <Helmet>
                <title>Falcon XXL — Studio Créatif | Audiovisuel, Photo, Web & Music</title>
                <meta name="description" content="Falcon XXL est un studio créatif basé aux Pays-Bas. Audiovisuel, photographie, webdesign, branding, marketing digital et production musicale. Disponible en Europe et Afrique francophone." />
                <link rel="canonical" href="https://www.falconxxl.com/" />
            </Helmet>

            <div className="collab-wrapper">
            <div className={`collab-wrapper__scene collab-wrapper__scene--${phase}`}>
                {activePage === "main" && (
                    <Collaboration onSelectCategory={handleSelectCategory} />
                )}
                {activePage === "details" && (
                    <CollaborationDetails
                        category={selectedCategory}
                        onBack={handleBack}
                    />
                )}
            </div>
        </div>

        </>

    );
};

export default CollaborationWrapper;