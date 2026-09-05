import React from "react";
import ReactDOM from "react-dom";
import "./RequestAQuoteModal.css";

const RequestAQuoteModal = ({ open, onClose, children }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 999999,
                background: "#0e0e0e",
                overflowY: "auto",
                overflowX: "hidden"
            }}
        >
            {/* Bouton fermer FIXE */}
            <button
                className="icon-close-RequestAQuoteModal"
                onClick={onClose}
            >
                <i className="fa-solid fa-xmark fa-4x"></i>
            </button>

            {/* CONTENU SCROLLABLE */}
            <div style={{ minHeight: "100vh" }}>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default RequestAQuoteModal;