import './OurTeamAbout.css';
import React from "react";
import pic_anita from "../Images/pic_about_anita1.jpg";
import pic_antony from "../Images/pic_about_Pino1.jpg";
import pic_mike from "../Images/pic_about_mike1.jpg";
import pic_chloe from "../Images/pic_about_chloe1.jpg";
import { useTranslation } from "react-i18next";

function OurTeamAbout() {

    const { t } = useTranslation();

    return (

        <>

          <div className="Container-OurTeam">

            <h1>{t("OurTeam.Title")} </h1>

            <div className="Container-OurTeam-details">
                <div className="box-ourTeam">
                    <img src={pic_anita} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#8461f6"}}>
                        Anita Pouls
                    </p>
                    <p>{t("OurTeam.Fonction1")} </p>
                </div>
                <div className="box-ourTeam">
                    <img src={pic_antony} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#8461f6"}}>
                        Pino Mbutu
                    </p>
                    <p>{t("OurTeam.Fonction2")} </p>
                </div>
                <div className="box-ourTeam">
                    <img src={pic_mike} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#8461f6"}}>
                        Michael Ilunga
                    </p>
                    <p>{t("OurTeam.Fonction3")} </p>
                </div>
                <div className="box-ourTeam1">
                    <img src={pic_chloe} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"#8461f6"}}>
                        Chloé Le Bot
                    </p>
                    <p>{t("OurTeam.Fonction4")}</p>
                </div>
            </div>
        </div>

        </>

    );
}

export default OurTeamAbout;