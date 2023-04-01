import React, { useEffect, useState } from 'react';

import backgroundHome from '../assets/images/img_fondo_home_clinician.svg' 
import logoMedirekor from '../assets/images/logo_medirekor_2.svg'
import imgUser from '../assets/images/img_user_dr-rodriguez.png'
import imgPatient_1 from '../assets/images/img_patient_encounters.png'
import imgPatient_2 from '../assets/images/img_patient_encounters_2.png'
import imgPatientDefaultMinWaiting from '../assets/images/img_patient_encounters_default_min_waiting.png'
import imgPatientDefaultDischarged from '../assets/images/img_patient_encounters_default_discharged.png'
import imgPatientDefaultInternship from '../assets/images/img_patient_encounters_default_internship.png'
import '../assets/styles/Encounters.css'
import { lorem } from '../constants/strings';
import {PatientEncounterContainer} from './PatientData';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

const patientImages: any = {
    "MIN_WAITING": imgPatientDefaultMinWaiting,
    "DISCHARGED": imgPatientDefaultDischarged,
    "INTERNSHIP": imgPatientDefaultInternship
}
const Encounters = (props: any) => {
    const [encounters, setEncounters] = useState<any[]|null>(null)
    const outletContext: any = useOutletContext()
    useEffect(() => {
        axios.get(`http://localhost:3001/app/v1/encounters/${outletContext.id}`)
        .then(response => {
            setEncounters(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <div 
            id="my-encounters-body-content-container"
            style={{
                width: "1110px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                id="my-encounter-body-head-box"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "700px"
                }}
            >
                <p style={{
                    width: "156px",
                    height: "23px",
                    color: "#00065A",
                    textAlign: "left",
                    font: "normal normal bold 16px/17px Poppins",
                    letterSpacing: "0px",
                    opacity: "1"
                }}>
                    Patient Encounters
                </p>
                <div
                    id="encounters-navbar-box"
                    style={{
                        width: "278px",
                        height: "33px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "50px"
                    }}
                >
                    <button
                        style={{
                            width: "114px",
                            height: "33px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#5700FB  0% 0% no-repeat padding-box",
                            borderRadius: "6px",
                            borderWidth: "0px",
                            outline: "none",
                            textAlign: "left",
                            font: "normal normal bold 16px/17px Poppins",
                            letterSpacing: "0px",
                            color: "#FFFFFF",
                            opacity: "1"
                        }}
                    >
                        Date
                    </button>
                    <button
                        style={{
                            width: "114px",
                            height: "33px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#8086DC  0% 0% no-repeat padding-box",
                            borderRadius: "6px",
                            borderWidth: "0px",
                            outline: "none",
                            textAlign: "left",
                            font: "normal normal bold 16px/17px Poppins",
                            letterSpacing: "0px",
                            color: "#FFFFFF",
                            opacity: "1"
                        }}
                    >
                        Status
                    </button>
                </div>
            </div>
            <div
                id="my-encounters-body-content-box"
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 2px 3px #0000000D",
                    borderRadius: "8px 8px 0px 0px",
                    opacity: "1",
                    overflowY: "scroll"
                }}
            >
                {encounters?.map((encounter, index) => 
                    <PatientEncounterContainer
                        index={index}
                        path="encounters"
                        patientImg={patientImages.DISCHARGED}
                        patientData={{
                            id: encounter.id,
                            fullname: `${encounter.name} ${encounter.last_name}`,
                            birthdate: `${encounter.birthday}`,
                            os: `${encounter.os}`,
                            extra: lorem
                        }}
                        consultStatus={encounter.waiting_time}
                    />
                )}
            </div>
        </div>
    );
};

export default Encounters;