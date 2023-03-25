import React from 'react';

import backgroundHome from '../assets/images/img_fondo_home_clinician.svg' 
import logoMedirekor from '../assets/images/logo_medirekor_2.svg'
import backArrow from '../assets/images/back_arrow.svg'
import imgUser from '../assets/images/img_user_dr-rodriguez.png'
import imgPatient_1 from '../assets/images/img_patient_encounters.png'
import '../assets/styles/Encounters.css'
import { CustomPoppinsBold, CustomPoppinsNormal, CustomPoppinsNormalLong } from './CustomParagraph';
import CustomButton from './CustomButton';
import { PatientDataBox } from './PatientData';
import { lorem2 } from '../constants/strings';
import VitalSign from './VitalSign';
import Etiquete from './Etiquete';
import PatientMedicalEtiquetes from './PatientMedicalEtiquetes';
const PatientChart = (props: any) => {
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
                        <div 
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
                        </div>
                        <div
                            id="patient-chart-navbar-box"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "6px"
                            }}
                        >
                            <CustomButton
                                content="Patient Chart"
                                active={true}
                                width="134px"
                                height="34px"
                            />
                            <CustomButton
                                content="Patient Encounters"
                                active={false}
                                width="168px"
                                height="34px"
                            />
                            <CustomButton
                                content="Lab Results"
                                active={false}
                                width="108px"
                                height="34px"
                            />
                            <CustomButton
                                content="Radiology Images"
                                active={false}
                                width="170px"
                                height="34px"
                            />
                            <CustomButton
                                content="Diagnoses"
                                active={false}
                                width="114px"
                                height="34px"
                            />
                            <CustomButton
                                content="Referrals"
                                active={false}
                                width="99px"
                                height="34px"
                            />
                            <CustomButton
                                content="Chronic Diseases"
                                active={false}
                                width="151px"
                                height="34px"
                            />
                            <CustomButton
                                content="Prescriptions"
                                active={false}
                                width="121px"
                                height="34px"
                            />
                        </div>
                    </div>
                    <div
                        id="patient-chart-body-content-box"
                        style={{
                            width: "100%",
                            height: "549px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px"
                        }}
                    >
                        <div
                            id="patient-chart-consult-data-box"
                            style={{
                                width: "282px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                                boxShadow: "0px 2px 3px #0000000D",
                                borderRadius: "8px",
                                opacity: "1",
                                gap: "41px"
                            }}
                        >
                            <PatientDataBox
                                index={0}
                                path="chart"
                                patientImg={imgPatient_1}
                                patientData={{
                                    fullname: "Carlos Enrique Lopez",
                                    birthdate: "10/12/1986 - 36 years old",
                                    os: "O.S 30.256.203",
                                }}
                                gapPhoto="9px"
                                width='233px'
                            />
                            <div
                                id="patient-chart-extra-data-box"
                                style={{
                                    height: "420px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    gap: "11px",
                                    borderTop: "2px solid #EFEEEE"
                                }}
                            >
                                <div
                                    id="patient-chart-notes-data-box"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "7px"
                                    }}
                                >
                                    <div
                                        id="patient-chart-note-1"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CustomPoppinsBold 
                                            content="Reason for visit"
                                            size="12px/18px"
                                        />
                                        <CustomPoppinsNormalLong
                                            content={lorem2}
                                            width="234px"
                                        />
                                    </div>
                                    <div
                                        id="patient-chart-note-2"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CustomPoppinsBold 
                                            content="Consultation Notes"
                                            size="12px/18px"
                                        />
                                        <CustomPoppinsNormalLong
                                            content={lorem2}
                                            width="234px"
                                        />
                                    </div>
                                </div>
                                <div
                                    id="patient-chart-vital-signs-data-box"
                                    style={{
                                        height: "220px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        gap: "12px"
                                    }}
                                >
                                    <CustomPoppinsBold
                                        content='Vital Signs'
                                    />
                                    <VitalSign
                                        type='HEIGHT'
                                        contentKey='Height'
                                        contentValue={`5'10"`}
                                    />
                                    <VitalSign
                                        type='WEIGHT'
                                        contentKey='Weight'
                                        contentValue="186 Lbs"
                                    />
                                    <VitalSign
                                        type='BODY_MASS'
                                        contentKey='Body Mass Index'
                                        contentValue="25"
                                    />
                                    <VitalSign
                                        type='TEMPERATURE'
                                        contentKey='Temperature'
                                        contentValue="38.5 °C"
                                    />
                                    <VitalSign
                                        type='CARDIAC'
                                        contentKey='Respiratory Rate'
                                        contentValue="14 Bpm"
                                    />
                                    <VitalSign
                                        type='CARDIAC'
                                        contentKey='Heart Rate'
                                        contentValue="68 Bpm"
                                    />
                                    <VitalSign
                                        type='BODY_FAT'
                                        contentKey='Body Fat Percentage'
                                        contentValue="25%"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            id="patient-chart-medical-history-container"
                            style={{
                                width: "816px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                                boxShadow: "0px 2px 3px #0000000D",
                                borderRadius: "8px",
                                opacity: "1",
                                gap: "24px"
                            }}
                        >
                            <div
                                id='patient-chart-medical-history-medic-data-box'
                                style={{
                                    width: "304px",
                                    height: "540px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "30px"
                                }}
                            >
                                <PatientMedicalEtiquetes
                                    id="allergies"
                                    color="#E5BF42"
                                    title="Allergies"
                                    content={["Rynatan", "Aspirin"]}
                                    width="100px"
                                    height="17px"
                                />
                                <PatientMedicalEtiquetes
                                    id="vaccines"
                                    color="#42CFE5"
                                    title="Vaccines"
                                    content={["Tetanus", "HPV", "Hep A", "Hep B", "Polio", "Hib", "COVID19"]}
                                    width="90px"
                                    height="17px"
                                />
                                <PatientMedicalEtiquetes
                                    id="active-medication"
                                    color="#DC43CD "
                                    title="Active Medication"
                                    content={["Symbicort", "Albuterol"]}
                                    width="109px"
                                    height="17px"
                                />
                                <PatientMedicalEtiquetes
                                    id="chronic-diseases"
                                    color="#EA356B  "
                                    title="Chronic Diseases"
                                    content={["Asthma"]}
                                    width="109px"
                                    height="17px"
                                />
                            </div>
                            <span
                                style={{
                                    border: "1px solid #EFEEEE",
                                    height: "100%"
                                }}
                            />
                            <div
                                id='patient-chart-medical-history-extra-data-container'
                                style={{
                                    width: "380px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "79px"
                                }}
                            >
                                <div
                                    id="patient-surgeries-box"
                                    style={{
                                        width:"348px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "13px"
                                    }}
                                >
                                    <CustomPoppinsBold
                                        content="Past Surgeries"
                                        size="18px/21px"
                                        height="45px"
                                        borderBottom="2px solid #EFEEEE"
                                        marginBottom="0px"
                                    />
                                    <div
                                        id="patient-surgery-0"
                                        style={{
                                            height: "45px",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "177px",
                                            borderBottom: "2px solid #EFEEEE",

                                        }}
                                    >
                                        <CustomPoppinsNormal
                                            content="Left Hand Surgery"
                                        />
                                        <CustomPoppinsNormal
                                            content="10/25/1998"
                                        />
                                    </div>
                                    <div
                                        id="patient-surgery-1"
                                        style={{
                                            height: "45px",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "177px",
                                            borderBottom: "2px solid #EFEEEE",

                                        }}
                                    >
                                        <CustomPoppinsNormal
                                            content="Left Hand Surgery"
                                        />
                                        <CustomPoppinsNormal
                                            content="10/25/1998"
                                        />
                                    </div>
                                    <div
                                        id="patient-surgery-2"
                                        style={{
                                            height: "45px",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "177px",
                                            borderBottom: "2px solid #EFEEEE",

                                        }}
                                    >
                                        <CustomPoppinsNormal
                                            content="Left Hand Surgery"
                                        />
                                        <CustomPoppinsNormal
                                            content="10/25/1998"
                                        />
                                    </div>
                                </div>
                                <div
                                    id="patient-insurance-box"
                                    style={{
                                        width:"348px",
                                        height: "223px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "13px"
                                    }}
                                >
                                    <CustomPoppinsBold
                                        content="Insurance"
                                        size="18px/21px"
                                        height="45px"
                                        borderBottom="2px solid #EFEEEE"
                                        marginBottom="0px"
                                    />
                                    <div
                                        id="patient-insurance-data-0"
                                        style={{
                                            height: "45px",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "177px",
                                            borderBottom: "2px solid #EFEEEE",

                                        }}
                                    >
                                        <CustomPoppinsNormal
                                            content="Insurance Provider"
                                        />
                                        <CustomPoppinsNormal
                                            content="SSS"
                                        />
                                    </div>
                                    <div
                                        id="patient-insurance-data-1"
                                        style={{
                                            height: "45px",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "177px",
                                            borderBottom: "2px solid #EFEEEE",
                                        }}
                                    >
                                        <CustomPoppinsNormal
                                            content="Group ID"
                                        />
                                        <CustomPoppinsNormal
                                            content="1234567"
                                        />
                                    </div>
                                    <div
                                        id="patient-insurance-data-2"
                                        style={{
                                            height: "45px",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "177px",
                                            borderBottom: "2px solid #EFEEEE",

                                        }}
                                    >
                                        <CustomPoppinsNormal
                                            content="Member ID"
                                        />
                                        <CustomPoppinsNormal
                                            content="0311254"
                                        />
                                    </div>
                                    <div
                                        id="patient-insurance-data-3"
                                        style={{
                                            height: "45px",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "177px",
                                            borderBottom: "2px solid #EFEEEE",

                                        }}
                                    >
                                        <CustomPoppinsNormal
                                            content="PCP"
                                        />
                                        <CustomPoppinsNormal
                                            content="N/A"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default PatientChart;