// import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import './RequestAQuote.css';
import TopButton from "./TopButton";
import Footer from "../Layout/Footer";
import WhatsappFunction from "./WhatsappFunction";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";


function RequestAQuote({ onClose }) {

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        company: '',
        email: '',
        phone: '',
        cityCountry: '',
        website: '',
        service: '',
        budget: '',
        projectDesc: '',
        deadline: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.role.trim()) newErrors.role = 'Role is required';

        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';

        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.cityCountry.trim()) newErrors.cityCountry = 'City / Country required';

        if (!formData.service) newErrors.service = 'Please choose a service type';
        if (!formData.budget) newErrors.budget = 'Please choose a budget range';
        if (!formData.projectDesc.trim()) newErrors.projectDesc = 'Project description required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            cityCountry: formData.cityCountry,
            website: formData.website,
            service: formData.service,
            budget: formData.budget,
            projectDesc: formData.projectDesc,
            deadline: formData.deadline,
        };

        emailjs.send(
            'service_230td4v',
            'template_57ai8cc',
            templateParams,
            '9muouI1nF6x1Do-Pe'
        )
            .then(() => {
                alert('✅ Your message has been sent successfully!');

                setFormData({
                    firstName: '',
                    lastName: '',
                    role: '',
                    company: '',
                    email: '',
                    phone: '',
                    cityCountry: '',
                    website: '',
                    service: '',
                    budget: '',
                    projectDesc: '',
                    deadline: ''
                });
            })
            .catch((error) => {
                console.error(error);
                alert('❌ An error occurred. Please try again.');
            });
    };



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (

        <>
            <div>
            <div className="Container-icon-RequestAQuote">
                <button
                    className="wrapper-icon-RequestAQuote"
                    onClick={onClose}
                >
                    {/*<i className="fa-solid fa-xmark fa-3x"></i>*/}
                </button>

            </div>
            <div className="Container-RequestAQuote">

                <h1 className="title-RequestAQuote">
                    <strong style={{color:"white"}}>
                        {t("RequestQuote.BigTitle1")}
                    </strong><br/>

                    <strong>
                        {t("RequestQuote.BigTitle1")}
                    </strong>
                </h1>

                <div className="request-container">

                    <div className="left-section">
                        <h1 className="left-section-title-Request">
                            {t("RequestQuote.SubtitleLeft1")} <strong style={{color:"#a7a3fc"}}>
                            {t("RequestQuote.SubtitleLeft2")} </strong>
                            <br/> {t("RequestQuote.SubtitleLeft3")}
                        </h1>

                        <div className="socials">
                            <div className="Container-Footer-SocialMedia">
                                <div className="Footer-SocialMedia">

                                    <a
                                        href="https://www.instagram.com/nexteclat.digital?igsh=dGlzeW1hMmEwbm5t&utm_source=qr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="Instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>

                                    <a
                                        href="https://youtube.com/@nexteclat?si=JwEO3lzG5odxCku"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="YouTube"
                                    >
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>

                                    <a
                                        href="https://www.tiktok.com/@nexteclat.digital?_r=1&_t=ZG-95SJ0Xoz2tk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="TikTok"
                                    >
                                        <i className="fa-brands fa-tiktok"></i>
                                    </a>

                                    <a
                                        href="https://www.behance.net/michealilunga"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="Behance"
                                    >
                                        <i className="fa-brands fa-square-behance"></i>
                                    </a>

                                    <a
                                        href="https://dribbble.com/nexteclat-info"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="Dribbble"
                                    >
                                        <i className="fa-brands fa-dribbble"></i>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/company/nexteclat/about/?viewAsMember=true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="LinkedIn"
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>

                                    <a
                                        href="https://open.spotify.com/user/31zx5mzrgc35qi44xl4weluuedqi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="Spotify"
                                    >
                                        <i className="fa-brands fa-spotify"></i>
                                    </a>

                                    <a
                                        href="https://x.com/nexteclat?s=21"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="Footer-SocialMedia-icon"
                                        aria-label="X (Twitter)"
                                    >
                                        <i className="fa-brands fa-square-x-twitter"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*--------------------form----------------------*/}

                    <form className="form-section" onSubmit={handleSubmit}>

                        <div className="line"></div>
                        <h2 className="request-form-title">{t("RequestQuote.SubtitleRight1")}</h2>

                        <div className="row">
                            <div className="field">
                                <label className="request-form-label"></label>
                                <input name="firstName"
                                       value={formData.firstName}
                                       onChange={handleChange}
                                       className="Input-hover"
                                       placeholder={t("RequestQuote.Form1")}
                                       style={{width:"100%", height:"50px", borderRadius:"14px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "white", background:"transparent"}}
                                />
                            </div>
                            {errors.firstName && <p className="error">{errors.firstName}</p>}

                            <div className="field">
                                <input name="lastName"
                                       className="Input-hover"
                                       value={formData.lastName}
                                       onChange={handleChange}
                                       placeholder={t("RequestQuote.Form2")}
                                       style={{width:"100%", height:"50px", borderRadius:"14px", marginLeft:"0px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "white", background:"transparent"}}/>
                            </div>
                            {errors.lastName && <p className="error">{errors.lastName}</p>}


                        </div>

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="role" value={formData.role} onChange={handleChange}
                                   placeholder={t("RequestQuote.Form3")}
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"14px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {/*{errors.role && <p className="error">{errors.role}</p>}*/}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="company" value={formData.company} onChange={handleChange}
                                   placeholder={t("RequestQuote.Form4")}
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"14px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="email" value={formData.email} onChange={handleChange}
                                   placeholder={t("RequestQuote.Form5")}
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"14px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {errors.email && <p className="error">{errors.email}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="phone" value={formData.phone} onChange={handleChange}
                                   placeholder={t("RequestQuote.Form6")}
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"14px"
                                       , paddingLeft:"10px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {/*{errors.phone && <p className="error">{errors.phone}</p>}*/}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="cityCountry" value={formData.cityCountry} onChange={handleChange}
                                   placeholder={t("RequestQuote.Form7")}
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"14px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {errors.cityCountry && <p className="error">{errors.cityCountry}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="website" value={formData.website} onChange={handleChange}
                                   placeholder={t("RequestQuote.Form8")}
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"14px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>

                        <div className="field-full">
                            <label className="request-form-label"></label>
                            <select name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="request-form-select"
                                    style={{ color: "darkgray", background:"transparent" }}

                            >
                                <option value="">{t("RequestQuote.FormServices.drop1")}</option>
                                <option>{t("RequestQuote.FormServices.drop2")}</option>
                                <option>{t("RequestQuote.FormServices.drop3")}</option>
                                <option>{t("RequestQuote.FormServices.drop4")}</option>
                                <option>{t("RequestQuote.FormServices.drop5")}</option>
                                <option>{t("RequestQuote.FormServices.drop6")}</option>
                                <option>{t("RequestQuote.FormServices.drop7")}</option>
                                <option>{t("RequestQuote.FormServices.drop8")}</option>
                            </select>
                        </div>

                        {errors.service && <p className="error">{errors.service}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <select name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="request-form-select"
                                    style={{color:"darkgray"}}
                            >
                                <option value="">{t("RequestQuote.FormBudget.drop1")}</option>
                                <option>{t("RequestQuote.FormBudget.drop2")}</option>
                                <option>{t("RequestQuote.FormBudget.drop3")}</option>
                                <option>{t("RequestQuote.FormBudget.drop4")}</option>
                                <option>{t("RequestQuote.FormBudget.drop5")}</option>
                                <option>{t("RequestQuote.FormBudget.drop6")}</option>
                                <option>{t("RequestQuote.FormBudget.drop7")}</option>
                            </select>
                        </div>
                        {errors.budget && <p className="error">{errors.budget}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <textarea name="projectDesc" value={formData.projectDesc}
                                      onChange={handleChange}
                                      className="Input-hover"
                                      placeholder={t("RequestQuote.Form11")}
                                      style={{width:"100%", height:"150px", borderRadius:"14px",
                                          padding:"14px",marginBottom:"10px", fontSize:"15px", fontFamily:"Poppins",
                                          color: "white", background:"transparent"}}>
                            </textarea>
                        </div>
                        {/*{errors.projectDesc && <p className="error">{errors.projectDesc}</p>}*/}

                        <div className="field full">
                            <label className="request-form-label">Deadline (optional): </label><br/>
                            <input type="date" name="deadline" value={formData.deadline}
                                   onChange={handleChange}
                                   placeholder={t("RequestQuote.Form12")}
                                   className="Input-hover"
                                   style={{padding:"15px",width:"17%", height:"50px",
                                       marginLeft:"20px",fontSize:"16px",borderRadius:"14px",
                                       color: "white", background:"transparent"}}
                            />
                        </div>

                        <button className="submit-btn-requestAQuote">{t("RequestQuote.ButtonSend")}</button>
                    </form>
                </div>

            </div>
            <WhatsappFunction/>
            <TopButton/>
            <Footer/>
        </div>
     </>
    );
}

export default RequestAQuote;

