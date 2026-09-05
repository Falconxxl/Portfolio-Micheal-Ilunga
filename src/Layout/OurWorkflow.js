import './OurWorkflow.css';
import icon_contact from "../Images/icon_contact7c1.png";
import icon_delivery from "../Images/icon_delivery6c1.png";
import icon_brief from "../Images/icon_brief5c2.png";
import icon_production from "../Images/icon_production4c1.png";
import React from "react";
import { useTranslation } from "react-i18next";

const ChecklistItem = ({ text }) => (
    <li className="checklist-item">
        <span className="icon">
            <span className="fa-stack fa-1x">
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-solid fa-check fa-stack-1x"></i>
            </span>
        </span>
        <span className="text">{text}</span>
    </li>
);

function OurWorkflow() {

    const { t } = useTranslation();

    return (
        <div className="Container-OurWorkflow">

            <h1>{t("OurWorkflow.BigTitle")}</h1>

            <div className="OurWorkflow-wrapper">

                {/* STEP 1 */}
                <div className="Container-OurWorkflow-content">
                    <img src={icon_contact} alt="" className="icon_home_workflow" />
                    <h2>{t("OurWorkflow.GettingInTouch.Title")}</h2>

                    <ul className="checklist">
                        <ChecklistItem text={t("OurWorkflow.GettingInTouch.ContentLine1")} />
                        <ChecklistItem text={t("OurWorkflow.GettingInTouch.ContentLine2")} />
                        <ChecklistItem text={t("OurWorkflow.GettingInTouch.ContentLine3")} />
                    </ul>
                </div>

                {/* STEP 2 */}
                <div className="Container-OurWorkflow-content">
                    <img src={icon_brief} alt="" className="icon_home_workflow" />
                    <h2>{t("OurWorkflow.Debriefing.Title")}</h2>

                    <ul className="checklist">
                        <ChecklistItem text={t("OurWorkflow.Debriefing.ContentLine1")} />
                        <ChecklistItem text={t("OurWorkflow.Debriefing.ContentLine2")} />
                        <ChecklistItem text={t("OurWorkflow.Debriefing.ContentLine3")} />
                    </ul>
                </div>

                {/* STEP 3 */}
                <div className="Container-OurWorkflow-content">
                    <img src={icon_production} alt="" className="icon_home_workflow" />
                    <h2>{t("OurWorkflow.Producing.Title")}</h2>

                    <ul className="checklist">
                        <ChecklistItem text={t("OurWorkflow.Producing.ContentLine1")} />
                        <ChecklistItem text={t("OurWorkflow.Producing.ContentLine2")} />
                        <ChecklistItem text={t("OurWorkflow.Producing.ContentLine3")} />
                    </ul>
                </div>

                {/* STEP 4 */}
                <div className="Container-OurWorkflow-content">
                    <img src={icon_delivery} alt="" className="icon_home_workflow" />
                    <h2>{t("OurWorkflow.DeliveringResult.Title")}</h2>

                    <ul className="checklist">
                        <ChecklistItem text={t("OurWorkflow.DeliveringResult.ContentLine1")} />
                        <ChecklistItem text={t("OurWorkflow.DeliveringResult.ContentLine2")} />
                        <ChecklistItem text={t("OurWorkflow.DeliveringResult.ContentLine3")} />
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default OurWorkflow;