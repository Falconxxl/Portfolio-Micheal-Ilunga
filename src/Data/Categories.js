// 📁 src/data/categories.js
// Replace image imports with your actual image paths
// Replace contact@votresite.com and phone numbers with real ones

const WHATSAPP_NUMBER = "XXXXXXXXXXXX"; // ex: "32685533124"
const EMAIL = "contact@votresite.com";
const PHONE = "+XX XXX XXX XXX";
const PHONE_DISPLAY = "+XX XXX XXX XXX";
const LOCATION_NOTE = "📍 Belgique (Flandre / Bruxelles) & sud des Pays-Bas privilégiés";

export const categories = [
    {
        id: "dev-web",
        label: "Development Web",
        image: "/Images/dev-web.png", // ← remplace par ton image
        roles: [
            {
                id: "frontend-dev",
                title: "Front-end Developer",
                image: "/Images/roles/frontend-dev.jpg",
                description:
                    "Nous recherchons des profils front-end souhaitant collaborer, apprendre ou s'impliquer bénévolement sur des interfaces modernes et créatives. Vous travaillerez sur des sites et applications avec une attention particulière à l'expérience utilisateur.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "fullstack-dev",
                title: "Full Stack Developer",
                image: "/Images/roles/fullstack-dev.jpg",
                description:
                    "Nous recherchons des développeurs full stack ouverts à une collaboration, un partenariat ou une participation bénévole. Vous interviendrez sur l'ensemble du cycle de développement, dans un cadre flexible et formateur.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "devops",
                title: "DevOps / Cloud Engineer",
                image: "/images/roles/devops.jpg",
                description:
                    "Nous recherchons des profils DevOps souhaitant contribuer ou monter en compétences sur le déploiement, la sécurité et la gestion cloud des applications.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "ux-ui",
                title: "UX / UI Designer",
                image: "/images/roles/ux-ui.jpg",
                description:
                    "Nous recherchons des designers UX/UI intéressés par une collaboration, un partenariat ou une contribution bénévole. Vous participerez à la conception d'expériences intuitives et esthétiques tout en développant votre créativité.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "cms-builder",
                title: "CMS / Website Builder",
                image: "/images/roles/cms-builder.jpg",
                description:
                    "Nous recherchons des développeurs CMS (WordPress, Shopify, Wix, etc.) souhaitant collaborer ou apprendre sur des projets web rapides et concrets pour marques et entrepreneurs.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
    {
        id: "audiovisual",
        label: "Audiovisual / Video",
        image: "/images/categories/audiovisual.jpg",
        roles: [
            {
                id: "cameraman",
                title: "Caméraman / Cadreur",
                image: "/images/roles/cameraman.jpg",
                description:
                    "Nous recherchons des caméramans souhaitant devenir partenaires, collaborateurs ou bénévoles sur des projets vidéo professionnels et créatifs, tout en développant leur regard artistique. Idéal pour développer son expérience, son réseau et prendre du plaisir sur des projets concrets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "assistant-tournage",
                title: "Assistant de tournage",
                image: "/images/roles/assistant-tournage.jpg",
                description:
                    "Nous recherchons des personnes motivées souhaitant apprendre le fonctionnement d'un tournage en contribuant activement à nos projets audiovisuels. Présence physique requise, idéal pour découvrir le milieu audiovisuel et monter en compétences.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "assistant-lumiere",
                title: "Assistant lumière",
                image: "/images/roles/assistant-lumiere.jpg",
                description:
                    "Nous recherchons des profils souhaitant apprendre ou collaborer sur la mise en lumière de projets vidéo et artistiques. Présence sur le plateau requise, dans un cadre formateur et créatif.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "technicien-lumiere",
                title: "Technicien lumière",
                image: "/images/roles/technicien-lumiere.jpg",
                description:
                    "Nous recherchons des techniciens lumière souhaitant collaborer ou partager leur expertise dans un cadre créatif et évolutif. Présence physique nécessaire selon les tournages.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "realisateur",
                title: "Réalisateur / Réalisatrice",
                image: "/images/roles/realisateur.jpg",
                description:
                    "Nous recherchons des réalisateurs ouverts à une collaboration, un partenariat ou une contribution bénévole sur des projets narratifs et créatifs. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
    {
        id: "casting",
        label: "Casting & Talent",
        image: "/images/categories/casting.jpg",
        roles: [
            {
                id: "modeles-acteurs",
                title: "Modèles, Acteurs & Figurants",
                image: "/images/roles/modeles-acteurs.jpg",
                description:
                    "Nous recherchons des talents souhaitant apparaître dans des clips, spots ou projets créatifs, pour le plaisir ou pour développer leur expérience. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "danseurs",
                title: "Danseurs & Danseuses",
                image: "/images/roles/danseurs.jpg",
                description:
                    "Nous recherchons des danseurs souhaitant être filmés dans des conditions professionnelles et créatives. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "ecoles-danse",
                title: "Écoles de danse",
                image: "/images/roles/ecoles-danse.jpg",
                description:
                    "Nous collaborons avec des écoles souhaitant valoriser leurs performances à travers des images haut de gamme. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "performeurs",
                title: "Performeurs",
                image: "/images/roles/performeurs.jpg",
                description:
                    "Nous recherchons des performeurs de tous horizons souhaitant collaborer sur des projets artistiques. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
    {
        id: "beauty-fashion",
        label: "Beauty & Fashion",
        image: "/images/categories/beauty-fashion.jpg",
        roles: [
            {
                id: "modeles-beauty",
                title: "Modèles",
                image: "/images/roles/modeles-beauty.jpg",
                description:
                    "Nous recherchons des modèles souhaitant collaborer ou enrichir leur portfolio. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "coiffeurs-maquilleurs",
                title: "Coiffeurs & Maquilleurs",
                image: "/images/roles/coiffeurs-maquilleurs.jpg",
                description:
                    "Nous recherchons des professionnels ou passionnés souhaitant collaborer ou apprendre sur des projets visuels. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "influenceurs-beauty",
                title: "Influenceurs Beauty & Fashion",
                image: "/images/roles/influenceurs-beauty.jpg",
                description:
                    "Nous recherchons des créateurs souhaitant développer leur image avec du contenu professionnel. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
    {
        id: "administration",
        label: "Administration",
        image: "/images/categories/administration.jpg",
        roles: [
            {
                id: "assistant-admin",
                title: "Assistant administratif",
                image: "/images/roles/assistant-admin.jpg",
                description:
                    "Nous recherchons des profils souhaitant apprendre ou collaborer sur l'organisation et la gestion de projets dans un cadre créatif et dynamique.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "relations-clients",
                title: "Chargé·e de relations clients",
                image: "/images/roles/relations-clients.jpg",
                description:
                    "Nous recherchons des profils souhaitant développer leurs compétences relationnelles dans un cadre créatif. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "business-consultant",
                title: "Business Consultant / Account Manager",
                image: "/images/roles/business-consultant.jpg",
                description:
                    "Nous recherchons des profils stratégiques souhaitant collaborer ou partager leur expertise dans un cadre créatif et évolutif.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "ceo-strategie",
                title: "Profils CEO / Stratégie & Développement",
                image: "/images/roles/ceo-strategie.jpg",
                description:
                    "Nous recherchons des profils visionnaires ouverts à des partenariats ou collaborations long terme.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
    {
        id: "music-production",
        label: "Music Production",
        image: "/images/categories/music-production.jpg",
        roles: [
            {
                id: "beatmakers",
                title: "Beatmakers",
                image: "/images/roles/beatmakers.jpg",
                description:
                    "Nous recherchons des beatmakers souhaitant collaborer ou évoluer artistiquement à travers des projets musicaux concrets.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "ingenieur-son",
                title: "Ingénieur du son (Mix & Mastering)",
                image: "/images/roles/ingenieur-son.jpg",
                description:
                    "Nous recherchons des profils audio souhaitant collaborer ou perfectionner leurs compétences sur des productions musicales et audiovisuelles.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "sound-designer",
                title: "Sound Designer",
                image: "/images/roles/sound-designer.jpg",
                description:
                    "Nous recherchons des sound designers souhaitant apprendre ou contribuer à la création d'ambiances et d'identités sonores pour nos projets.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "compositeur",
                title: "Compositeur / Songwriter",
                image: "/images/roles/compositeur.jpg",
                description:
                    "Nous recherchons des compositeurs et auteurs souhaitant collaborer ou développer leur créativité musicale.",
                location: null,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
    {
        id: "photography",
        label: "Photography",
        image: "/images/categories/photography.jpg",
        roles: [
            {
                id: "photographe",
                title: "Photographe",
                image: "/images/roles/photographe.jpg",
                description:
                    "Nous recherchons des photographes souhaitant collaborer, apprendre ou contribuer à des shootings créatifs et professionnels. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "modeles-photo",
                title: "Modèles (Photo)",
                image: "/images/roles/modeles-photo.jpg",
                description:
                    "Nous recherchons des modèles souhaitant participer à des projets photo, gagner en expérience et créer du contenu de qualité. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
            {
                id: "influenceurs-content",
                title: "Influenceurs & Créateurs de contenu",
                image: "/images/roles/influenceurs-content.jpg",
                description:
                    "Nous recherchons des créateurs souhaitant collaborer ou apprendre à produire du contenu visuel professionnel pour leurs réseaux. La présence sur les tournages est requise selon les projets.",
                location: LOCATION_NOTE,
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
    {
        id: "collaborations",
        label: "Collaborations",
        image: "/images/categories/collaborations.jpg",
        roles: [
            {
                id: "agences-partenaires",
                title: "Agences, Freelances, Organisations, Studios, Créatifs & Marques",
                image: "/images/roles/agences-partenaires.jpg",
                description:
                    "Nous recherchons des partenaires, collaborateurs ou contributeurs souhaitant collaborer, co-créer ou soutenir des projets créatifs, qu'ils soient professionnels ou expérimentaux. La présence sur certains tournages peut être requise selon les projets.",
                location:
                    "📍 Belgique (Flandre / Bruxelles) et sud des Pays-Bas privilégiés (Rotterdam, La Haye)\n📍 Profils basés à Amsterdam acceptés selon les projets",
                whatsapp: WHATSAPP_NUMBER,
                email: EMAIL,
                phone: PHONE,
                phoneDisplay: PHONE_DISPLAY,
            },
        ],
    },
];

export default categories;