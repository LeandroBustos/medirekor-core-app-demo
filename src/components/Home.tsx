import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundHome from '../assets/images/img_fondo_home_clinician.svg' 
import logoMedirekor from '../assets/images/logo_medirekor_2.svg'
import '../assets/styles/Home.css';
import imgUser from '../assets/images/img_user_dr-rodriguez.png'
import { TotalBox } from './TotalBox';

const Home = (props: any) => {
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
                            opacity: "1"
                        }}/>
                        <p style={{
                            width: "127px",
                            height: "17px",
                            color: "#FFFFFF",
                            textAlign: "left",
                            letterSpacing: "0.5px",
                            fontSize: "smaller",
                            opacity: "1"
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
                                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 2px 3px #0000000D",
                                    borderRadius: "8px",
                                    opacity: "1"
                                }}
                            >
                                {"asd"}
                            </div>
                        </div>
                        <div 
                            id="piechart-data-container"
                            style={{
                                width: "800px",
                                height: "160px",
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                            }}
                        >
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
                    </div>
                </div>

            </div>
            <div style={{
                width: '1440px',
                height: '56px',
                background: "#00065A 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 20px #0000000A",
                opacity: "1"
            }}>
                //BOTTOM
            </div>
        </div>
    );
};

export default Home;