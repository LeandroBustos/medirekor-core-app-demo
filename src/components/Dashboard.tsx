import axios from "axios";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CustomBarChart from "./CustomBarChart";
import CustomPieChart from "./CustomPieChart";
import PatientProgress from "./PatientProgress";
import { TotalBox } from "./TotalBox";

const Dashboard = () => {
    const outletContext: any = useOutletContext()
    const [encounters, setEncounters] = useState<any[]|null>(null)
    useEffect(() => {
        axios.get(`http://localhost:3001/app/v1/encounters/${outletContext.id}`)
        .then(response => {
            setEncounters(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    const patientInProgress = encounters?.filter(encounter => encounter.waiting_time !== 'DISCHARGED')
    const medicalConsultations = encounters?.filter(encounter => encounter.consult === 'MEDICAL_CONSULTATION' && encounter.waiting_time !== 'DISCHARGED')
    const inTreatment = encounters?.filter(encounter => encounter.consult === 'IN_TREATMENT' && encounter.waiting_time !== 'DISCHARGED')
    const laboratory = encounters?.filter(encounter => (encounter.consult === 'VACCINE' || encounter.consult_derivation === 'LABORATORY') && encounter.waiting_time !== 'DISCHARGED')
    const radiology = encounters?.filter(encounter => encounter.consult_derivation === 'RADIOLOGY' && encounter.waiting_time !== 'DISCHARGED')

    const commonHashMap: any = {
        medicalConsults: {},
        emergencies: {}
    }
    encounters?.forEach(encounter => {
        commonHashMap.medicalConsults[encounter.consult_derivation] = true
        commonHashMap.emergencies[encounter.emergency] = true
    })

    const commonMedicalConsults: any = Object.keys(commonHashMap.medicalConsults)
    const commonEmergencies: any = Object.keys(commonHashMap.emergencies)

    return (
        <div 
        id="home-body-content-container"
        style={{
            display: "flex",
            flexDirection: "row",
        }}
    >
        <div 
            id="data-container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "26px"
            }}
        >
            <div 
                id="detailed-data-container"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "16px"
                }}
            >
                <div 
                    id="totals-container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px"
                    }}
                >
                    <TotalBox id="today" title="Total today" content={`${encounters?.length}`}/>
                    <TotalBox id="this-week" title="Total This Week" content="256"/>
                    <TotalBox id="this-month" title="Total This Month" content="458"/>
                    <TotalBox id="year-to-date" title="Total Year-to-Date" content="4,410"/>
                </div>
                <div 
                    id="stadistics-container" 
                    style={{
                        width: "445px",
                        height: "412px",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0px 2px 3px #0000000D",
                        borderRadius: "8px",
                        opacity: "1",
                        gap: "15px"
                    }}
                >
                    <div 
                        id='stadistics-graph-container'
                        style={{
                            width: "445px",
                            height: "259px",
                            background: "#FFFFFF 0% 0% no-repeat padding-box",
                            boxShadow: "0px 2px 3px #0000000D",
                            borderRadius: "8px",
                            opacity: "1"
                        }}
                    >
                        <div 
                            id="stadistics-graph-head-box"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0",
                                alignItems: "center"
                            }}
                        >
                            <p style={{
                                height: "0px",
                                width: "400px",
                                textAlign: "left",
                                font: "normal normal normal 12px/18px Poppins",
                                letterSpacing: "0.5px",
                                color: "#00065A",
                                opacity: "1",
                                fontSize: 'medium'
                            }}>Graph</p>
                            <div 
                                id='stadistics-graph-navbar-box'
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "53px",
                                    height: "38px",
                                    borderBottom: "2px solid rgb(0,0,0,0.1)"
                                }}
                            >
                                <nav 
                                    id='stadistics-graph-navbar'
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "18px"
                                    }}
                                >
                                    <p style={{
                                        textAlign: "left",
                                        font: "normal normal bold 12px/18px Poppins",
                                        letterSpacing: "0.5px",
                                        color: "#00065A",
                                        opacity: "1",
                                        fontSize: 'medium'
                                    }}>Encounters</p>
                                    <p style={{
                                        textAlign: "left",
                                        font: "normal normal normal 12px/18px Poppins",
                                        letterSpacing: "0px",
                                        color: "#B4B4B4",
                                        opacity: "1",
                                        fontSize: 'medium'
                                    }}>Overview</p>
                                </nav>
                                <div 
                                    id='stadistics-graph-period'
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '6px'
                                    }}
                                >
                                    <p style={{
                                        textAlign: "left",
                                        font: "normal normal normal 12px/18px Poppins",
                                        letterSpacing: "0px",
                                        color: "#B4B4B4",
                                        opacity: "1",
                                        fontSize: 'medium'
                                    }}>Show Period:</p>
                                    <p style={{
                                        textAlign: "left",
                                        font: "normal normal normal 12px/18px Poppins",
                                        letterSpacing: "0.5px",
                                        color: "#00065A",
                                        opacity: "1",
                                        textDecorationLine: 'underline',
                                        fontSize: 'medium'
                                    }}>Last 2 weeks</p>
                                </div>
                            </div>
                        </div>
                        <div 
                            id='stadistics-graph-body-box'
                            style={{
                                width: "440px",
                                height: "185px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                position: "relative",
                                left: "24px",
                                top: "-12px"
                            }}
                        >
                            <p style={{
                                textAlign: "left",
                                font: "normal normal normal 12px/18px Poppins",
                                letterSpacing: "0px",
                                color: "#B4B4B4",
                                opacity: "1",
                                fontSize: 'medium'
                            }}>Total Encounters</p>
                            <p style={{
                                width: "195px",
                                height: "33px",
                                marginTop: "0px",
                                color: "#00065A",
                                textAlign: "left",
                                font: "bold 24px / 20px Poppins",
                                letterSpacing: "0.48px",
                                opacity: "1",
                                fontSize: "large"
                            }}>625 ENCOUNTERS</p>
                            <CustomBarChart/>
                        </div>
                    </div>
                    <div 
                        id="commons-containers"
                        style={{
                            height: "136px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "15px"
                        }}
                    >
                        <div 
                            id="common-consults-box"
                            style={{
                                width: "215px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                                boxShadow: "0px 2px 3px #0000000D",
                                borderRadius: "8px",
                                opacity: "1",
                                alignContent: "center",
                                alignItems: "center",
                                gap: "7px"
                            }}
                        >
                            <p style={{
                                textAlign: "left",
                                font: "normal normal bold 12px/12px Poppins",
                                letterSpacing: "0px",
                                color: "#00065A",
                                opacity: "1",
                                overflowWrap: "break-word",
                                width: "150px",
                                height: "0px"
                            }}>
                                COMMON MEDICAL CONSULTS
                            </p>
                            <ol 
                                type='1'
                                style={{
                                    width: '81px',
                                    padding: "0px",
                                    position: "relative",
                                    font: "normal normal normal 12px/16px Poppins",
                                    fontSize: "smaller",
                                    letterSpacing: "0px",
                                    color: "#000000",
                                    opacity: 1,
                                    left: "-23px"
                                }}
                            >
                                <li>{commonMedicalConsults[0]}</li>
                                <li>{commonMedicalConsults[1]}</li>
                                <li>{commonMedicalConsults[2]}</li>
                                <li>{commonMedicalConsults[3]}</li>
                            </ol>
                        </div>
                        <div 
                            id="common-emergencies-box"
                            style={{
                                width: "215px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                                boxShadow: "0px 2px 3px #0000000D",
                                borderRadius: "8px",
                                opacity: "1",
                                alignContent: "center",
                                alignItems: "center",
                                gap: "7px"
                            }}
                        >
                            <p style={{
                                textAlign: "left",
                                font: "normal normal bold 12px/12px Poppins",
                                letterSpacing: "0px",
                                color: "#00065A",
                                opacity: "1",
                                overflowWrap: "break-word",
                                width: "150px",
                                height: "0px"
                            }}>
                                COMMON EMERGENCIES
                            </p>
                            <ol 
                                type='1'
                                style={{
                                    width: "81",
                                    padding: "0px",
                                    position: "relative",
                                    font: "normal normal normal 12px/16px Poppins",
                                    fontSize: "smaller",
                                    letterSpacing: "0px",
                                    color: "#000000",
                                    opacity: 1,
                                    left: "-23px"
                                }}
                            >
                                <li>{commonEmergencies[0]}</li>
                                <li>{commonEmergencies[1]}</li>
                                <li>{commonEmergencies[2]}</li>
                                <li>{commonEmergencies[3]}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                id="piechart-data-container"
                style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "800px",
                    height: "160px",
                }}
            >
                <CustomPieChart 
                data={[
                    {
                        name: "Group A",
                        value: patientInProgress?.filter(consult => consult.waiting_time === 'INTERNSHIP').length as number
                    },
                    {
                        name: "Group B",
                        value: patientInProgress?.filter(consult => consult.waiting_time === 'MID_WAITING').length as number
                    },
                    {
                        name: "Group C",
                        value: patientInProgress?.filter(consult => consult.waiting_time === 'MIN_WAITING').length as number
                    },
                    {
                        name: "Group D",
                        value: patientInProgress?.filter(consult => consult.waiting_time === 'MAX_WAITING').length as number
                    }
                ]}
                CenterTitle={
                    {
                        content: `${patientInProgress?.length as number}`,
                        x: patientInProgress?.length as number > 9 ? 18 : 8,
                        y: 3
                    }
                } CenterText={[
                    {
                        content: 'Patient in',
                        x: 27,
                        y: 15
                    },
                    {
                        content: 'Progress',
                        x: 25,
                        y: 25,
                    }
                ]}/>
                <CustomPieChart 
                data={[
                    {
                        name: "Group A",
                        value: medicalConsultations?.filter(consult => consult.waiting_time === 'INTERNSHIP').length as number
                    },
                    {
                        name: "Group B",
                        value: medicalConsultations?.filter(consult => consult.waiting_time === 'MID_WAITING').length as number
                    },
                    {
                        name: "Group C",
                        value: medicalConsultations?.filter(consult => consult.waiting_time === 'MIN_WAITING').length as number
                    },
                    {
                        name: "Group D",
                        value: medicalConsultations?.filter(consult => consult.waiting_time === 'MAX_WAITING').length as number
                    }
                ]}
                CenterTitle={
                    {
                        content: `${medicalConsultations?.length as number}`,
                        x: medicalConsultations?.length as number > 9 ? 18 : 8,
                        y: 3
                    }
                } CenterText={[
                    {
                        content: 'Medical',
                        x: 24,
                        y: 15
                    },
                    {
                        content: 'Consultation',
                        x: 29,
                        y: 25,
                    }
                ]}/>
                <CustomPieChart 
                data={[
                    {
                        name: "Group A",
                        value: laboratory?.filter(consult => consult.waiting_time === 'INTERNSHIP').length as number
                    },
                    {
                        name: "Group B",
                        value: laboratory?.filter(consult => consult.waiting_time === 'MID_WAITING').length as number
                    },
                    {
                        name: "Group C",
                        value: laboratory?.filter(consult => consult.waiting_time === 'MIN_WAITING').length as number
                    },
                    {
                        name: "Group D",
                        value: laboratory?.filter(consult => consult.waiting_time === 'MAX_WAITING').length as number
                    }
                ]}
                CenterTitle={
                    {
                        content: `${laboratory?.length as number}`,
                        x: 8,
                        y: 3
                    }
                } CenterText={[
                    {
                        content: 'Laboratory',
                        x: 27,
                        y: 15
                    }
                ]}/>
                <CustomPieChart 
                data={[
                    {
                        name: "Group A",
                        value: radiology?.filter(consult => consult.waiting_time === 'INTERNSHIP').length as number
                    },
                    {
                        name: "Group B",
                        value: radiology?.filter(consult => consult.waiting_time === 'MID_WAITING').length as number
                    },
                    {
                        name: "Group C",
                        value: radiology?.filter(consult => consult.waiting_time === 'MIN_WAITING').length as number
                    },
                    {
                        name: "Group D",
                        value: radiology?.filter(consult => consult.waiting_time === 'MAX_WAITING').length as number
                    }
                ]}
                CenterTitle={
                    {
                        content: `${radiology?.length as number}`,
                        x: 8,
                        y: 3
                    }
                } CenterText={[
                    {
                        content: 'Radiology',
                        x: 27,
                        y: 15
                    }
                ]}/>
                <CustomPieChart 
                data={[{name: "Group A", value:inTreatment?.length as number}]}
                CenterTitle={
                    {
                        content: `${encounters?.filter(encounter => encounter.consult === 'IN_TREATMENT').length as number}`,
                        x: inTreatment?.length as number > 9 ? 18 : 8,
                        y: 3
                    }
                } CenterText={[
                    {
                        content: 'in treatment',
                        x: 27,
                        y: 15
                    }
                ]}/>
            </div>
        </div>
        <div 
            id="patient-in-progress-container"
            style={{
                width: "350px",
                height: "579px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 2px 3px #0000000D",
                borderRadius: "8px",
                opacity: "1"
            }}
        >
            <div 
                id="patient-in-progress-head-box"
                style={{
                    height: "42px",
                    display: 'flex',
                    background: "#00065A 0% 0% no-repeat padding-box",
                    borderRadius: "8px 8px 0px 0px",
                    opacity: "1"
                }}
            >
                <p style={{
                    paddingLeft: "28px",
                    textAlign: "left",
                    font: "normal normal bold 14px/17px Poppins",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    opacity: "1",
                }}>Patient in Progress</p>
            </div>
            <div 
                id="patient-in-progress-body-box"
                style={{
                    height: "537px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    alignItems: "center"
                }}
            >
                <div 
                    id="patients-scrollable-box"
                    style={{
                        width: "90%",
                        height: "100%",
                        display: "flex",
                        gap: "31px",
                        overflowY: "scroll",
                        paddingTop: "18px",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    {encounters?.filter(encounter => encounter.waiting_time !== 'DISCHARGED').map(encounter => 
                        <PatientProgress 
                            patientName={`${encounter.name} ${encounter.last_name}`} 
                            admisionDate={encounter.consult_date}
                            medicalConsult={encounter.consult}
                            patientConsultStatus={encounter.waiting_time}
                        />
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard