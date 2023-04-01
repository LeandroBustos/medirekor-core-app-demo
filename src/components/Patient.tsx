import React, { useEffect, useState } from 'react';

import backArrow from '../assets/images/back_arrow.svg'

import '../assets/styles/Encounters.css'
import { CustomPoppinsBold } from './CustomParagraph';
import CustomButton from './CustomButton';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';

const Patient = () => {
    const [patient, setPatient] = useState<any|null>(null)
    const [selectedSection, setSelectedSection] = useState("CHART")

    const {id} = useParams()
    console.log("ID PARAMS", id)
    console.log("PATIENT", patient)

    useEffect(() => {
        axios.get(`http://localhost:3001/app/v1/patient/${id}`)
        .then(response => {
            console.log("ID PARAMS", id)
            console.log("PATIENT", response.data)
            setPatient(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [id])

    return (
        <>
        { patient &&
        <div 
            id="patient-chart-body-content-container"
            style={{
                width: "1110px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px"
            }}
        >
            <div
                id="patient-chart-body-head-box"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "24px"
                }}
            >
                <Link
                    to="/home/encounters" 
                    id="previous-page-box"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <img 
                        src={backArrow}
                        style={{
                            width: "34px",
                            height: "15px",
                            display: "flex",
                            flexDirection: "column",
                            background: `0% 0% no-repeat padding-box`,
                            filter: "invert(7%) sepia(27%) saturate(7506%) hue-rotate(239deg) brightness(97%) contrast(139%)",
                            transform: "scale(1.7)"
                        }}
                    />
                    <CustomPoppinsBold 
                        content='My Encounters'
                        size="16px/17px"
                    />
                </Link>
                <div
                    id="patient-chart-navbar-box"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "6px"
                    }}
                >
                    <Link
                        to={`/home/encounters/patient/${id}/chart`}
                    >
                        <CustomButton
                            className="patient-nav-button"
                            content="Patient Chart"
                            active={selectedSection === "CHART"}
                            width="134px"
                            height="34px"
                            onClick={() => setSelectedSection("CHART")}
                        />
                    </Link>
                    <Link
                        className="patient-nav-button"
                        to={`/home/encounters/patient/${id}/encounters`}
                    >
                        <CustomButton
                            className="patient-nav-button"
                            content="Patient Encounters"
                            active={selectedSection === "ENCOUNTERS"}
                            width="168px"
                            height="34px"
                            onClick={() => setSelectedSection("ENCOUNTERS")}
                        />
                    </Link>
                    <Link
                        to={`/home/encounters/patient/${id}/laboratory`}
                    >
                        <CustomButton
                            className="patient-nav-button"
                            content="Lab Results"
                            active={selectedSection === "LABORATORY"}
                            width="108px"
                            height="34px"
                            onClick={() => setSelectedSection("LABORATORY")}
                        />
                    </Link>
                    <Link
                        to={`/home/encounters/patient/${id}/radiology`}
                    >
                        <CustomButton
                            className="patient-nav-button"
                            content="Radiology Images"
                            active={selectedSection === "RADIOLOGY"}
                            width="170px"
                            height="34px"
                            onClick={() => setSelectedSection("RADIOLOGY")}
                        />
                    </Link>
                    <Link
                        to={`/home/encounters/patient/${id}/diagnoses`}
                    >                    
                    <CustomButton
                        className="patient-nav-button"
                        content="Diagnoses"
                        active={selectedSection === "DIAGNOSES"}
                        width="114px"
                        height="34px"
                        onClick={() => setSelectedSection("DIAGNOSES")}
                        />
                    </Link>
                    <Link
                        to={`/home/encounters/patient/${id}/referrals`}
                    >
                        <CustomButton
                            className="patient-nav-button"
                            content="Referrals"
                            active={selectedSection === "REFERRALS"}
                            width="99px"
                            height="34px"
                            onClick={() => setSelectedSection("REFERRALS")}
                        />
                    </Link>
                    <Link
                        to={`/home/encounters/patient/${id}/chronic-diseases`}
                    >
                        <CustomButton
                            className="patient-nav-button"
                            content="Chronic Diseases"
                            active={selectedSection === "CHRONIC_DISEASES"}
                            width="151px"
                            height="34px"
                            onClick={() => setSelectedSection("CHRONIC_DISEASES")}
                        />
                    </Link>
                    <Link
                        to={`/home/encounters/patient/${id}/prescriptions`}
                    >
                        <CustomButton
                            className="patient-nav-button"
                            content="Prescriptions"
                            active={selectedSection === "PRESCRIPTIONS"}
                            width="121px"
                            height="34px"
                            onClick={() => setSelectedSection("PRESCRIPTIONS")}
                        />
                    </Link>
                </div>
            </div>
           {patient && <Outlet context={{patient: patient}}/>}
        </div>
    }
    </>
    );
};

export default Patient;