import React from 'react';

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
import PatientEncounterContainer from './PatientEncounterContainer';
const Encounters = (props: any) => {
    return (
        <div style={{
            width: 1440,
            height: 856
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                width: '1440px',
                height: '56px',
                background: "#00065A 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 20px #0000000A",
                opacity: "1"
            }}>
                <img 
                    src={logoMedirekor}
                    style={{
                        position: "relative",
                        left: "-55px"
                    }}
                />
                <div style={{
                    position: "relative",
                    left: "-56px",
                    marginLeft: "76px",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '47px',
                    color: "#FFFFFF"
                }}>
                    <h3 style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>Home</h3>
                    <h3 style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>My Account</h3>
                    <h3 style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>My Encounters</h3>
                    <h3 style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>Support</h3>
                </div>
                <div style={{
                    position: "relative",
                    left: "100px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "31px"
                }}>
                    <div style={{
                        width: "160px",
                        height: "38px",
                    }}
                    >
                        <input 
                            id='home-search-patient'
                            style={{
                                width: "inherit",
                                height: "inherit",
                                textAlign: "center",
                                backgroundColor: "#8086DC",
                                borderRadius: "5px",
                                letterSpacing: "0px",
                                color: "#fafafa",
                                opacity: "1",
                                border: "0px",
                            }}
                            type="search"
                            placeholder="Search Patient"
                        />
                        <i className="fa-solid fa-magnifying-glass"/>
                    </div>
                    <div style={{
                        width: "166px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: "9px"
                    }}>
                        <img style={{
                            width: "30px",
                            height: "30px",
                            background: `transparent url(${imgUser}) 0% 0% no-repeat padding-box`,
                            borderRadius: "50%",
                            opacity: "1"
                        }}/>
                        <p style={{
                            width: "127px",
                            height: "17px",
                            color: "#FFFFFF",
                            textAlign: "left",
                            letterSpacing: "0.5px",
                            fontSize: "smaller",
                            opacity: "0.6"
                        }}>Dr. Rodriguez Nieto</p>
                    </div>
                </div>
            </div>
            <div style={{
                width: "1440px",
                height: "750px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `transparent url(${backgroundHome}) 0% 0% no-repeat padding-box`,
                opacity: "1"
            }}>
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
                            id="encounters-filters-box"
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
                            justifyContent: "space-evenly",
                            alignItems: "flex-start",
                            background: "#FFFFFF 0% 0% no-repeat padding-box",
                            boxShadow: "0px 2px 3px #0000000D",
                            borderRadius: "8px 8px 0px 0px",
                            opacity: "1",
                            overflowY: "scroll"
                        }}
                    >
                        <PatientEncounterContainer
                            index={0}
                            patientImg={imgPatient_1}
                            patientData={{
                                fullname: "Carlos Enrique Lopez",
                                birthdate: "10/12/1986 - 36 years old",
                                os: "O.S 30.256.203",
                                extra: lorem
                            }}
                            consultStatus="MAX_WAITING"
                        />
                        <PatientEncounterContainer
                            index={1}
                            patientImg={imgPatient_2}
                            patientData={{
                                fullname: "Rogelio Benitez",
                                birthdate: "10/12/1986 - 36 years old",
                                os: "O.S 30.256.203",
                                extra: lorem
                            }}
                            consultStatus="MID_WAITING"
                        />
                        <PatientEncounterContainer
                            index={2}
                            patientImg={imgPatientDefaultMinWaiting}
                            patientData={{
                                fullname: "Adolfo Rodriguez",
                                birthdate: "10/12/1986 - 36 years old",
                                os: "O.S 30.256.203",
                                extra: lorem
                            }}
                            consultStatus="MIN_WAITING"
                        />
                        <PatientEncounterContainer
                            index={3}
                            patientImg={imgPatientDefaultDischarged}
                            patientData={{
                                fullname: "Carlos Enrique Lopez",
                                birthdate: "10/12/1986 - 36 years old",
                                os: "O.S 30.256.203",
                                extra: lorem
                            }}
                            consultStatus="DISCHARGED"
                        />
                        <PatientEncounterContainer
                            index={4}
                            patientImg={imgPatientDefaultInternship}
                            patientData={{
                                fullname: "Carlos Enrique Lopez",
                                birthdate: "10/12/1986 - 36 years old",
                                os: "O.S 30.256.203",
                                extra: lorem
                            }}
                            consultStatus="INTERNSHIP"
                        />
                    </div>
                </div>
            </div>
            <div style={{
                width: '1440px',
                height: '56px',
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                background: "#00065A 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 20px #0000000A",
                opacity: "1"
            }}>
                <p style={{
                    width: "169px",
                    height: "17px",
                    textAlign: "left",
                    font: "normal normal 300 12px/17px Poppins",
                    letterSpacing: "0.34px",
                    color: "#FFFFFF",
                    opacity: "0.6"
                }}>MedSight © Copyright 2022</p>
            </div>
        </div>
    );
};

export default Encounters;