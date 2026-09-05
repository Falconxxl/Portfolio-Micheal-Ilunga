import "./SkillsDetail.css";
import React from "react";
import { useTranslation } from "react-i18next";

/* ---------------------------------------------------------------------- */
/* Reusable sub-components                                                */
/* ---------------------------------------------------------------------- */

function SkillBar({ name, pct }) {
    return (
        <div className="skill-bar-item">
            <div className="skill-bar-track">
                <div
                    className="skill-bar-fill"
                    style={{ width: `${pct}%` }}
                >
                    <span className="skill-bar-pct">{pct}%</span>
                </div>
            </div>

            <p className="skill-bar-name">{name}</p>
        </div>
    );
}

function SkillGroup({ title, skills }) {
    return (
        <div className="skill-group">
            {title && (
                <h3 className="skill-group__title">
                    {title}
                </h3>
            )}

            <div className="skill-grid">
                {skills.map((s) => (
                    <SkillBar
                        key={s.name}
                        name={s.name}
                        pct={s.pct}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillCategory({ title, groups }) {
    return (
        <div className="skill-category">
            <h2 className="skill-category__title">
                {title}
            </h2>

            {groups.map((g, i) => (
                <SkillGroup
                    key={g.title || i}
                    title={g.title}
                    skills={g.skills}
                />
            ))}
        </div>
    );
}

/* ---------------------------------------------------------------------- */
/* Education Row                                                          */
/* ---------------------------------------------------------------------- */

function EducationRow({
                          label,
                          title,
                          subtitle,
                          text,
                          t
                      }) {
    return (
        <div className="education-row">

            <span className="education-row__label">
                {label}
            </span>

            <div>

                <h3 className="education-row__title">
                    {t(title)}
                </h3>

                {subtitle && (
                    <p className="education-row__subtitle">
                        {t(subtitle)}
                    </p>
                )}

                <p className="education-row__text">
                    {t(text)}
                </p>

            </div>

        </div>
    );
}

/* ---------------------------------------------------------------------- */
/* Education & Training                                                   */
/* ---------------------------------------------------------------------- */

const EDUCATION = [
    {
        label: "01",
        title: "SkillsPage.EducationTraining.Title1",
        subtitle: "SkillsPage.EducationTraining.Subtitle1",
        text: "SkillsPage.EducationTraining.Paragraphe1",
    },

    {
        label: "02",
        title: "SkillsPage.EducationTraining.Title2",
        subtitle: "SkillsPage.EducationTraining.Subtitle2",
        text: "SkillsPage.EducationTraining.Paragraphe2",
    },

    {
        label: "03",
        title: "SkillsPage.EducationTraining.Title3",
        subtitle: "SkillsPage.EducationTraining.Subtitle3",
        text: "SkillsPage.EducationTraining.Paragraphe3",
    },

    {
        label: "04",
        title: "SkillsPage.EducationTraining.Title4",
        subtitle: "SkillsPage.EducationTraining.Subtitle4",
        text: "SkillsPage.EducationTraining.Paragraphe4",
    },
];

/* ---------------------------------------------------------------------- */
/* Skills Data                                                            */
/* ---------------------------------------------------------------------- */

const CATEGORIES = [
    {
        title: "01 — Front-end Development",
        groups: [
            {
                skills: [
                    { name: "HTML5", pct: 95 },
                    { name: "CSS3", pct: 95 },
                    { name: "JavaScript", pct: 90 },
                    { name: "React.js", pct: 90 },
                    { name: "React Hooks", pct: 90 },
                    { name: "React Router", pct: 90 },
                    { name: "Responsive Web Design", pct: 95 },
                    { name: "Component-Based Development", pct: 90 },
                    { name: "Interactive Web Development", pct: 90 },
                    { name: "API Integration", pct: 85 },
                    { name: "Axios", pct: 85 },
                    { name: "Debugging", pct: 85 },
                    { name: "Git", pct: 90 },
                    { name: "GitHub", pct: 95 },
                    { name: "Version Control", pct: 90 },
                    { name: "Web Deployment", pct: 95 },
                    { name: "Application Deployment", pct: 95 },
                ],
            },

            {
                title: "Backend — Fundamentals",
                skills: [
                    { name: "Java", pct: 50 },
                    { name: "Spring Boot", pct: 45 },
                    { name: "Maven", pct: 45 },
                    { name: "REST APIs", pct: 50 },
                    { name: "Postman", pct: 55 },
                    { name: "Backend Development", pct: 45 },
                ],
            },
        ],
    },

    {
        title: "02 — UX/UI & Web Design",
        groups: [
            {
                title: "UX/UI",
                skills: [
                    { name: "User Experience Design", pct: 95 },
                    { name: "User Research", pct: 90 },
                    { name: "User Personas", pct: 90 },
                    { name: "User Flows", pct: 95 },
                    { name: "Information Architecture", pct: 90 },
                    { name: "Design Thinking", pct: 95 },
                    { name: "Usability", pct: 95 },
                    { name: "Interaction Design", pct: 95 },
                    { name: "User-Centered Design", pct: 95 },
                    { name: "User Interface Design", pct: 95 },
                    { name: "Wireframing", pct: 95 },
                    { name: "Prototyping", pct: 95 },
                    { name: "Interactive Prototypes", pct: 90 },
                    { name: "Responsive Design", pct: 95 },
                    { name: "Visual Hierarchy", pct: 95 },
                    { name: "Design Systems", pct: 90 },
                    { name: "Mobile App Design", pct: 90 },
                    { name: "Web Interface Design", pct: 95 },
                ],
            },

            {
                title: "Design Tools",
                skills: [
                    { name: "Figma", pct: 90 },
                    { name: "Adobe Photoshop", pct: 90 },
                    { name: "Adobe Illustrator", pct: 70 },
                    { name: "Adobe InDesign", pct: 50 },
                ],
            },
        ],
    },

    {
        title: "03 — Branding & Graphic Design",
        groups: [
            {
                skills: [
                    { name: "Brand Identity", pct: 95 },
                    { name: "Visual Identity", pct: 95 },
                    { name: "Logo Design", pct: 95 },
                    { name: "Graphic Design", pct: 95 },
                    { name: "Art Direction", pct: 90 },
                    { name: "Creative Direction", pct: 95 },
                    { name: "Typography", pct: 90 },
                    { name: "Color Theory", pct: 95 },
                    { name: "Layout Design", pct: 95 },
                    { name: "Visual Communication", pct: 100 },
                    { name: "Brand Guidelines", pct: 90 },
                    { name: "Marketing Materials", pct: 95 },
                    { name: "Social Media Design", pct: 95 },
                    { name: "Digital Design", pct: 95 },
                    { name: "Creative Concept Development", pct: 95 },
                ],
            },
        ],
    },

    {
        title: "04 — Video & Film Production",
        groups: [
            {
                title: "Pre-production",
                skills: [
                    { name: "Creative Concept Development", pct: 95 },
                    { name: "Storyboarding", pct: 90 },
                    { name: "Shot Planning", pct: 95 },
                    { name: "Shot Lists", pct: 95 },
                    { name: "Visual Storytelling", pct: 100 },
                    { name: "Production Planning", pct: 90 },
                    { name: "Location Planning", pct: 90 },
                    { name: "Camera Planning", pct: 95 },
                    { name: "Video Concept Development", pct: 95 },
                ],
            },

            {
                title: "Filming",
                skills: [
                    { name: "Videography", pct: 95 },
                    { name: "Filmmaking", pct: 95 },
                    { name: "Cinematography", pct: 90 },
                    { name: "Camera Operation", pct: 95 },
                    { name: "Shot Composition", pct: 95 },
                    { name: "Framing", pct: 100 },
                    { name: "Camera Angles", pct: 95 },
                    { name: "Camera Movements", pct: 95 },
                    { name: "Handheld Shooting", pct: 95 },
                    { name: "Gimbal Shooting", pct: 95 },
                    { name: "Drone Videography", pct: 95 },
                    { name: "Mobile Videography", pct: 100 },
                    { name: "Commercial Shooting", pct: 95 },
                    { name: "Music Video Production", pct: 95 },
                ],
            },

            {
                title: "Types of Content",
                skills: [
                    { name: "Music Videos", pct: 95 },
                    { name: "Commercial / Advertising Videos", pct: 95 },
                    { name: "Social Media Content", pct: 95 },
                    { name: "Promotional Videos", pct: 95 },
                    { name: "Short-form Content", pct: 95 },
                    { name: "Corporate Videos", pct: 90 },
                ],
            },
        ],
    },

    {
        title: "05 — Video Post-Production",
        groups: [
            {
                skills: [
                    { name: "Video Editing", pct: 95 },
                    { name: "Post-production", pct: 95 },
                    { name: "Color Correction", pct: 90 },
                    { name: "Color Grading", pct: 90 },
                    { name: "Motion Graphics", pct: 80 },
                    { name: "Visual Effects", pct: 75 },
                    { name: "Transitions", pct: 95 },
                    { name: "Title Design", pct: 90 },
                    { name: "Audio Editing", pct: 90 },
                    { name: "Sound Design", pct: 90 },
                    { name: "Video Storytelling", pct: 100 },
                ],
            },

            {
                title: "Software",
                skills: [
                    { name: "Adobe Premiere Pro", pct: 100 },
                    { name: "Adobe After Effects", pct: 60 },
                    { name: "DaVinci Resolve", pct: 70 },
                ],
            },
        ],
    },

    {
        title: "06 — Photography & Visual Production",
        groups: [
            {
                skills: [
                    { name: "Photography", pct: 70 },
                    { name: "Portrait Photography", pct: 70 },
                    { name: "Product Photography", pct: 65 },
                    { name: "Event Photography", pct: 65 },
                    { name: "Creative Photography", pct: 70 },
                    { name: "Composition", pct: 80 },
                    { name: "Framing", pct: 90 },
                    { name: "Lighting Fundamentals", pct: 70 },
                    { name: "Camera Operation", pct: 90 },
                    { name: "Visual Storytelling", pct: 90 },
                    { name: "Image Editing", pct: 85 },
                    { name: "Photo Retouching", pct: 70 },
                    { name: "Color Correction", pct: 80 },
                ],
            },

            {
                title: "Creative Equipment",
                skills: [
                    { name: "Sony A7 III", pct: 100 },
                    { name: "DJI Mini 4 Pro", pct: 100 },
                    { name: "DJI RS 3 Mini", pct: 100 },
                    { name: "iPhone Videography", pct: 100 },
                    { name: "Camera Equipment", pct: 100 },
                    { name: "Gimbal Equipment", pct: 100 },
                    { name: "Drone Equipment", pct: 100 },
                ],
            },
        ],
    },

    {
        title: "07 — Music Production & Audio",
        groups: [
            {
                title: "Music Creation",
                skills: [
                    { name: "Electronic Music Production", pct: 90 },
                    { name: "Beatmaking", pct: 90 },
                    { name: "Beat Production", pct: 90 },
                    { name: "Songwriting", pct: 90 },
                    { name: "Music Composition", pct: 90 },
                    { name: "Music Arrangement", pct: 90 },
                    { name: "Sound Design", pct: 90 },
                    { name: "Sampling", pct: 90 },
                    { name: "MIDI", pct: 90 },
                    { name: "Synthesizers", pct: 90 },
                    { name: "Drum Programming", pct: 90 },
                ],
            },

            {
                title: "Recording",
                skills: [
                    { name: "Audio Recording", pct: 90 },
                    { name: "Vocal Recording", pct: 90 },
                    { name: "Microphone Techniques", pct: 90 },
                    { name: "Sound Recording", pct: 90 },
                    { name: "Audio Editing", pct: 90 },
                ],
            },

            {
                title: "Mixing & Mastering",
                skills: [
                    { name: "Mixing Fundamentals", pct: 50 },
                    { name: "Mastering Fundamentals", pct: 45 },
                    { name: "Audio Processing", pct: 70 },
                    { name: "Sound Editing", pct: 90 },
                ],
            },

            {
                title: "Music Distribution",
                skills: [
                    { name: "Music Release Preparation", pct: 90 },
                    { name: "Digital Music Distribution", pct: 90 },
                    { name: "Spotify Release Preparation", pct: 90 },
                ],
            },
        ],
    },

    {
        title: "08 — Artificial Intelligence",
        groups: [
            {
                title: "AI Tools",
                skills: [
                    { name: "ChatGPT", pct: 90 },
                    { name: "Claude", pct: 90 },
                    { name: "Google Gemini", pct: 90 },
                    { name: "Perplexity", pct: 90 },
                ],
            },

            {
                title: "AI Skills",
                skills: [
                    { name: "Generative AI", pct: 90 },
                    { name: "Prompt Engineering", pct: 90 },
                    { name: "AI-assisted Research", pct: 90 },
                    { name: "AI-assisted Ideation", pct: 90 },
                    { name: "AI-assisted Content Creation", pct: 90 },
                    { name: "AI-assisted Design", pct: 90 },
                    { name: "AI-assisted Problem Solving", pct: 90 },
                ],
            },
        ],
    },

    {
        title: "09 — Multimedia Communication",
        groups: [
            {
                skills: [
                    { name: "Multimedia Communication", pct: 100 },
                    { name: "Digital Communication", pct: 100 },
                    { name: "Visual Communication", pct: 100 },
                    { name: "Storytelling", pct: 100 },
                    { name: "Digital Storytelling", pct: 100 },
                    { name: "Content Creation", pct: 100 },
                    { name: "Communication Strategy", pct: 95 },
                    { name: "Creative Communication", pct: 100 },
                    { name: "Presentation", pct: 95 },
                    { name: "Audience Analysis", pct: 95 },
                    { name: "Concept Development", pct: 100 },
                    { name: "Visual Storytelling", pct: 100 },
                    { name: "Media Production", pct: 95 },
                ],
            },
        ],
    },

    {
        title: "10 — Research & Evaluation Methods",
        groups: [
            {
                skills: [
                    { name: "User Research", pct: 90 },
                    { name: "Target Audience Research", pct: 95 },
                    { name: "Benchmarking", pct: 90 },
                    { name: "Expert Review", pct: 90 },
                    { name: "Semi-structured Interviews", pct: 90 },
                    { name: "Surveys", pct: 90 },
                    { name: "Focus Groups", pct: 85 },
                    { name: "Usability Testing", pct: 95 },
                    { name: "User Testing", pct: 95 },
                    { name: "Evaluation Methods", pct: 90 },
                    { name: "Scenario-based Evaluation", pct: 90 },
                    { name: "MoSCoW Method", pct: 90 },
                ],
            },
        ],
    },

    {
        title: "11 — Project & Management Skills",
        groups: [
            {
                skills: [
                    { name: "Project Management", pct: 70 },
                    { name: "Project Planning", pct: 85 },
                    { name: "Creative Project Management", pct: 85 },
                    { name: "Teamwork", pct: 95 },
                    { name: "Collaboration", pct: 95 },
                    { name: "Client Communication", pct: 90 },
                    { name: "Presentation Skills", pct: 95 },
                    { name: "Problem Solving", pct: 95 },
                    { name: "Creative Problem Solving", pct: 100 },
                    { name: "Critical Thinking", pct: 90 },
                    { name: "Research", pct: 95 },
                    { name: "Ideation", pct: 100 },
                    { name: "Concept Development", pct: 100 },
                    { name: "Attention to Detail", pct: 95 },
                ],
            },
        ],
    },

    {
        title: "12 — Microsoft Office",
        groups: [
            {
                skills: [
                    { name: "Microsoft Word", pct: 90 },
                    { name: "Microsoft PowerPoint", pct: 90 },
                    { name: "Microsoft Excel", pct: 70 },
                    { name: "Microsoft Office", pct: 85 },
                ],
            },
        ],
    },

    {
        title: "13 — Languages",
        groups: [
            {
                skills: [
                    { name: "🇫🇷 French", pct: 90 },
                    { name: "🇳🇱 Dutch", pct: 80 },
                    { name: "🇬🇧 English", pct: 70 },
                    { name: "Swahili", pct: 50 },
                    { name: "Lingala", pct: 70 },
                ],
            },
        ],
    },
];

/* ---------------------------------------------------------------------- */
/* Main component                                                         */
/* ---------------------------------------------------------------------- */

function SkillsDetail() {

    const { t } = useTranslation();

    return (
        <div className="skills-page">

            {/* ==========================================================
                BANNER
            ========================================================== */}

            <section className="skills-banner">

                <div className="skills-banner__inner">

                    <div>

                        <h1 className="skills-banner__title">
                            {t("SkillsPage.Banner.Title")}
                        </h1>

                        <p className="skills-banner__text">
                            {t("SkillsPage.Banner.ContentLine")}
                        </p>

                    </div>

                </div>

            </section>


            {/* ==========================================================
                EDUCATION & TRAINING
            ========================================================== */}

            <section className="skills-section">

                <div className="skills-section__inner">

                    <p className="skills-education__intro">
                        {t("SkillsPage.Banner.ContentLine2")}
                    </p>

                    <h2 className="skills-education__heading">
                        {t("SkillsPage.EducationTraining.SectionTitle")}
                    </h2>

                    {EDUCATION.map((edu) => (

                        <EducationRow
                            key={edu.label}
                            label={edu.label}
                            title={edu.title}
                            subtitle={edu.subtitle}
                            text={edu.text}
                            t={t}
                        />

                    ))}

                </div>

            </section>


            {/* ==========================================================
                SKILLS BY FIELD
            ========================================================== */}

            <section className="skills-section skills-fields">

                <div className="skills-section__inner">

                    <div className="skills-fields__intro">

                        <h2 className="skills-education__heading">
                            {t("SkillsPage.SkillsByField.Title")}
                        </h2>

                        <p>
                            {t("SkillsPage.SkillsByField.Description")}
                        </p>

                        <span className="skills-fields__note">
                            {t("SkillsPage.SkillsByField.Note")}
                        </span>

                    </div>


                    {CATEGORIES.map((cat) => (

                        <SkillCategory
                            key={cat.title}
                            title={cat.title}
                            groups={cat.groups}
                        />

                    ))}

                </div>

            </section>

        </div>
    );
}

export default SkillsDetail;