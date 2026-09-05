import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../JSONTraductor/en.json";
import fr from "../JSONTraductor/fr.json";
import nl from "../JSONTraductor/nl.json";
// import pt from "../JSONTraductor/pt.json";


i18n.use(initReactI18next).init({
    resources: {
        nl: { translation: nl },
        en: { translation: en },
        fr: { translation: fr },
        // pt: { translation: pt }
    },
    lng: "nl", // langue par défaut
    fallbackLng: "nl",
    interpolation: { escapeValue: false }
});

export default i18n;
