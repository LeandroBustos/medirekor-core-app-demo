import React from 'react';

import backgroundHome from '../assets/images/img_fondo_home_clinician.svg' 
import logoMedirekor from '../assets/images/logo_medirekor_2.svg'
import '../assets/styles/Home.css';
import imgUser from '../assets/images/img_user_dr-rodriguez.png'
import { TotalBox } from './TotalBox';
import CustomPieChart from './CustomPieChart';
import CustomBarChart from './CustomBarChart';
import PatientProgress from './PatientProgress';

const Home = (props: any) => {
    const data = [
        { name: 'Group A', value: 1000 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 100 },
    ];
    const COLORS = ['#5700FB', '#E6D543', '#50E85D', '#EA356B'];
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
                                <TotalBox id="today" title="Total today" content="4"/>
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
                                            <li>TRAUMA</li>
                                            <li>CARDIOLOGY</li>
                                            <li>DERMATOLOGY</li>
                                            <li>ONCOLOGY</li>
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
                                            <li>CARDIAC</li>
                                            <li>SKIN LESION</li>
                                            <li>ALLERGY</li>
                                            <li>COVID</li>
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
                            <CustomPieChart CenterTitle={
                                {
                                    content: '38',
                                    x: 18,
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
                            <CustomPieChart CenterTitle={
                                {
                                    content: '10',
                                    x: 18,
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
                            <CustomPieChart CenterTitle={
                                {
                                    content: '5',
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
                            <CustomPieChart CenterTitle={
                                {
                                    content: '5',
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
                            <CustomPieChart CenterTitle={
                                {
                                    content: '18',
                                    x: 18,
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
                                <PatientProgress 
                                    patientName='Carlos Enriquez Lopez' 
                                    admisionDate='31/10/2022 20:23'
                                    medicalConsult='TRAUMA'
                                    patientConsultStatus='MAX_WAITING'
                                />
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

export default Home;